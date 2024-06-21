import React from 'react'

export default function DiaList({ data }) {
    return (
        <section className='bg-white px-5 pb-5 rounded-2xl'>
            <h1 className='py-8 font-manrope font-800 text-2xl'>Diagonstic List</h1>
            <div className='h-[230px] overflow-y-scroll visible-scrollbar mr-1'>
                <table className='w-full font-manrope font-400 text-sm'>
                    <thead className='bg-[#F6F7F8] h-10'>
                        <tr>
                            <th className="text-left pl-5 pr-10 first:rounded-l-full last:rounded-r-full">Problem/Diagnosis</th>
                            <th className='text-left pr-10'>Description</th>
                            <th className="last:rounded-r-full text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="spacer-row">
                            <td colSpan="3" className="h-4"></td>
                        </tr>
                        {data.diagnostic_list.length > 0 && data.diagnostic_list.map((item) => (
                            <tr key={item.name} className='border-b border-[#F6F7F8]'>
                                <td className='pl-5 py-5'>{item.name}</td>
                                <td className="m-w-[80px]">{item.description}</td>
                                <td className='w-28'>{item.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
