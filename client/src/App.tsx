import { useEffect } from 'react';
import Filter from './components/Filter';
import Table from './components/Table';
import { Pagination } from './components/Pagination';
import { useAppDispatch, useAppSelector } from './hooks/hook'
import { fetchData, fetchTotal } from './slices/dataSlice'
import { dataUrl, countUrl } from './consts/index'

function App() {

  const dispatch = useAppDispatch()
  const { sortedField, sortedValue, column, condition, value, page, limit } = useAppSelector(state => state.dataReducer)

  //получение данных с сервера при первом рендере
  useEffect(() => {
    dispatch(fetchData({ url: dataUrl }))
    dispatch(fetchTotal(countUrl))
  }, [])

  //запрос к базе данных при изменении параметров
  useEffect(() => {
    if ((column && condition && value) || (sortedField && sortedValue) || (!column && !condition && !value)) {
      dispatch(fetchData({ url: dataUrl, column, condition, value, sortedField, sortedValue, page, limit }))
    }
  }, [column, condition, value, page, sortedField, sortedValue])

  return (
    <div className='m-8'>
      <Filter />
      <Table />
      <Pagination />
    </div>
  );
}

export default App;
