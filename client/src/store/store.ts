
import { configureStore } from '@reduxjs/toolkit';
import { reducer as dataReducer } from '../slices/dataSlice';

const store = configureStore({
    reducer: { dataReducer },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch