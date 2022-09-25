import { useAppSelector, useAppDispatch } from '../hooks/hook'
import { Loader } from './Loader'
import { Error } from './Error'
import { setSortedField, setSortedValue } from '../slices/dataSlice'
import { DESC, ASC } from '../consts'

const Table = () => {

    const { data, loading, fields } = useAppSelector(state => state.dataReducer)
    const dispatch = useAppDispatch()

    const setSorted = (field: string, value: string) => {
        dispatch(setSortedField(field))
        dispatch(setSortedValue(value))
    }

    return (
        <>
            <table className='table-fixed w-5/6 rounded-2xl overflow-hidden'>
                <thead className='bg-indigo-400 h-14 text-white'>
                    <tr className=''>
                        {fields && fields.map((field, i) =>
                            <th
                                key={field.name}
                                className='text-left pl-5'
                            >
                                {field.name}
                                {/* {сортировка задается для всех столбцов, кроме даты (под 0 индексом)} */}
                                {i === 1 && <>
                                    <span
                                        className="icon icon-sort-alpha-asc ml-2 cursor-pointer"
                                        onClick={() => setSorted(field.value, ASC)}
                                    ></span>
                                    <span
                                        className="icon icon-sort-alpha-desc ml-1 cursor-pointer"
                                        onClick={() => setSorted(field.value, DESC)}
                                    ></span>
                                </>}
                                {(i === 2 || i === 3) && <>
                                    <span
                                        className="icon icon-arrow-up ml-2 cursor-pointer"
                                        onClick={() => setSorted(field.value, ASC)}
                                    ></span>
                                    <span
                                        className="icon icon-arrow-down ml-1 cursor-pointer"
                                        onClick={() => setSorted(field.value, DESC)}
                                    ></span>
                                </>
                                }
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {loading === 'idle' && data && data.map(item =>
                        <tr
                            key={item.id}
                            className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 h-14 min-h-min'>
                            {
                                //под 0 индексом находится id строки
                                Object.values(item).map((td, i) => i !== 0 &&
                                    <td key={i} className='text-left pl-5'>{td}</td>
                                )}
                        </tr>)
                    }
                </tbody>
            </table>
            {loading === 'loading' && <Loader />}
            {loading === 'error' && <Error />}
        </>
    )
}

export default Table