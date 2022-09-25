import { useAppSelector, useAppDispatch } from '../hooks/hook'
import { setColumn, setCondition, setValue, setLabel } from '../slices/dataSlice'

const Filter = () => {

    const { column, condition, value, fields, params, label } = useAppSelector(state => state.dataReducer)
    const dispatch = useAppDispatch()

    //сброс значений для избежания лишних запросов к бд
    const reset = () => {
        dispatch(setLabel(''))
        dispatch(setCondition(''))
    }

    //сброс значения селектора с условием, если его тип отличается от значения селектора с колонкой(валидация)
    const setLabelHandler = (newLabel: string) => {
        if (label !== newLabel) {
            dispatch(setCondition(''))
        }
        dispatch(setLabel(newLabel))
    }

    return (
        <section className='mb-5'>
            <select
                value={column}
                onChange={e => dispatch(setColumn(e.target.value))}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-indigo-500 focus:border-indigo-500 inline-block w-1/5 p-2.5 mr-3'
            >
                <option value='' onClick={reset}>Выбрать колонку</option>
                {fields.map((field, i) =>
                    <option key={i}
                        value={field.value}
                        onClick={() => setLabelHandler(field.label)}
                    >
                        {field.name}
                    </option>
                )}
            </select>
            <select
                value={condition}
                disabled={!!!label}
                onChange={e => dispatch(setCondition(e.target.value))}
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 
                    focus:border-indigo-500 inline-block w-1/5 p-2.5 mr-3 ${!label && 'text-gray-400'}`}
            >
                <option value='' onClick={reset}>Выбрать условие</option>
                {params.map((param, i) => (label ? param.label === label : 1) &&
                    <option key={i}
                        value={param.value}
                    >
                        {param.name}
                    </option>
                )}
            </select>
            <input
                type="text"
                value={value}
                onChange={e => dispatch(setValue(e.target.value))}
                placeholder='Введите значение для фильтрации'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 inline-block w-full p-2.5 w-1/4'
            />
        </section>
    )
}

export default Filter