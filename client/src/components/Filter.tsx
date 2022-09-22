import { params, fields } from '../data'
import { useState } from 'react'

const Filter = () => {

    const [column, setColumn] = useState<string>('')
    const [condition, setCondition] = useState<string>('')
    const [value, setValue] = useState<string>('')

    return (
        <section className='mb-5'>
            <select
                value={column}
                onChange={e => setColumn(e.target.value)}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 inline-block w-1/5 p-2.5 mr-3'
            >
                <option hidden>Выбрать колонку</option>
                {fields && fields.map((field, i) => i !== 0 && <option key={i} value={field}>{field}</option>)}
            </select>
            <select
                value={condition}
                onChange={e => setCondition(e.target.value)}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 inline-block w-1/5 p-2.5 mr-3'
            >
                <option hidden>Выбрать условие</option>
                {params && params.map((param, i) => <option key={i} value={param}>{param}</option>)}
            </select>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder='Введите значение для фильтрации'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline-block w-full p-2.5 w-1/4'
            />
        </section>
    )
}

export default Filter