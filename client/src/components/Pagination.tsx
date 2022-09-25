import { useAppSelector, useAppDispatch } from '../hooks/hook'
import { setPage } from '../slices/dataSlice'

export const Pagination = () => {

    const { total, page } = useAppSelector(state => state.dataReducer)
    const dispatch = useAppDispatch()

    return (
        <nav>
            <ul className="inline-flex m-10">
                {total && pages(total, dispatch, setPage, page)}
            </ul>
        </nav>
    )
}

const pages = (total: number = 1, dispatch: Function, setPage: Function, page: number) => {
    const arr = [...Array(total)].map((_, index) => index + 1)

    return arr.map(item =>
        <li key={item}
            className={'py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer mr-1' + (item === page ? ' bg-gray-100' : '')}
            onClick={() => dispatch(setPage(item))}
        >
            {item}
        </li>
    )
}