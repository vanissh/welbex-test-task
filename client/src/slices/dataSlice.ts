import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";
import { Data, DataState, Props } from '../intefaces/dataInterfaces';

const initialState: DataState = {
    data: [],
    loading: 'idle',
    page: 1,
    limit: 5,
    total: 1,
    fields: [
        {
            name: 'Дата',
            value: 'date',
            label: 'string'
        },
        {
            name: 'Название',
            value: 'name',
            label: 'string'
        },
        {
            name: 'Количество',
            value: 'amount',
            label: 'number'
        },
        {
            name: 'Расстояние',
            value: 'distance',
            label: 'number'
        }
    ],
    params: [
        {
            name: 'Содержит',
            value: 'LIKE',
            label: 'string'
        },
        {
            name: 'Больше',
            value: '>',
            label: 'number'
        },
        {
            name: 'Меньше',
            value: '<',
            label: 'number'
        },
        {
            name: 'Равно',
            value: '=',
            label: 'number'
        }
    ],
    column: '',
    condition: '',
    value: '',
    label: '',
    sortedField: '',
    sortedValue: ''
}

export const fetchData = createAsyncThunk(
    'data/fetchData',
    //передача параметров для фильтрации на сервере
    async ({ url, column, condition, value, sortedField, sortedValue, page = 1, limit = 5 }: Props) => {
        const { data } = await axios.get(url, {
            params: { column, condition, value, sortedField, sortedValue, limit, page }
        });
        return data
    }
)

//получаем общее число строк
export const fetchTotal = createAsyncThunk(
    'data/fetchTotal',
    //передача параметров для фильтрации на сервере
    async (url: string) => {
        const { data } = await axios.get(url);
        return data
    }
)

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setColumn: (state, action) => { state.column = action.payload },
        setCondition: (state, action) => { state.condition = action.payload },
        setValue: (state, action) => { state.value = action.payload },
        setLabel: (state, action) => { state.label = action.payload },
        setPage: (state, action) => { state.page = action.payload },
        setSortedField: (state, action) => { state.sortedField = action.payload },
        setSortedValue: (state, action) => { state.sortedValue = action.payload }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, state => { state.loading = 'loading' })
            .addCase(fetchData.fulfilled, (state, action: PayloadAction<Data[]>) => {
                state.loading = 'idle'
                state.data = action.payload
            })
            .addCase(fetchTotal.fulfilled, (state, action: PayloadAction<number>) => {
                state.total = Math.ceil(+action.payload / state.limit)
            })
            .addCase(fetchData.rejected, state => {
                state.loading = 'error'
            })
            .addDefaultCase(() => { })
    }
})

const { actions, reducer } = dataSlice

export { reducer }

export const { setColumn, setCondition, setValue, setLabel, setPage, setSortedField, setSortedValue } = actions