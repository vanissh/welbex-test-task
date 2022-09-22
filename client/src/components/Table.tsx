import { useState, useEffect } from 'react'
import { fields } from '../data'

const Table = () => {


    return (
        <table className='table-fixed w-5/6 rounded-2xl overflow-hidden'>
            <thead className='bg-indigo-400 h-14 text-white'>
                <tr className=''>
                    {fields && fields.map(field => <th key={field} className='text-left pl-5'>{field}</th>)}
                </tr>
            </thead>
            <tbody>
                <tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 h-14 min-h-min'>
                    <td className='text-left pl-5'>The Sliding Mr. Bones</td>
                    <td className='text-left pl-5'>The Sliding Mr. Bones</td>
                    <td className='text-left pl-5'>Malcolm Lockyer</td>
                    <td className='text-left pl-5'>1961</td>
                </tr>
                <tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 h-14 min-h-min'>
                    <td className='text-left pl-5'>The Sliding Mr. Bones</td>
                    <td className='text-left pl-5'>The Sliding Mr. Bones</td>
                    <td className='text-left pl-5'>Malcolm Lockyer</td>
                    <td className='text-left pl-5'>1961</td>
                </tr>
                <tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 h-14 min-h-min'>
                    <td className='text-left pl-5'>The Sliding Mr. Bones</td>
                    <td className='text-left pl-5'>The Sliding Mr. Bones</td>
                    <td className='text-left pl-5'>Malcolm Lockyer</td>
                    <td className='text-left pl-5'>1961</td>
                </tr>
                <tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 h-14 min-h-min'>
                    <td className='text-left pl-5'>The Sliding Mr. Bones</td>
                    <td className='text-left pl-5'>The Sliding Mr. Bones</td>
                    <td className='text-left pl-5'>Malcolm Lockyer</td>
                    <td className='text-left pl-5'>1961</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table