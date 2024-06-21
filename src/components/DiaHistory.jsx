import React from 'react'

import respirate from "../assets/icon/respiratory.svg"
import temp from "../assets/icon/temperature.svg"
import heart from "../assets/icon/HeartBPM.svg"
import ArrowDown from "../assets/icon/ArrowDown.svg"
import Graph from './Graph'

export default function DiaHistory({ data }) {
    return (
        <section className='bg-white rounded-2xl px-5'>
            <h1 className='py-6 font-manrope font-800 text-2xl'>Diagnosis History</h1>
            <figure>
                <Graph data={data} />
            </figure>
            <div className='flex py-5 gap-5'>
                <div className='flex flex-col bg-[#E0F3FA] w-full items-start justify-center pl-4 py-4 rounded-xl'>
                    <img src={respirate} width={90} alt="icon" />
                    <p className='mt-4 font-manrope font-600 text-base'>Respiratory Rate</p>
                    <h1 className='font-manrope font-800 text-3xl'>20 bpm</h1>
                    <p className='mt-4 text-sm'>Normal</p>
                </div>
                <div className='flex flex-col bg-[#FFE6E9] w-full items-start justify-center pl-4 py-4 rounded-xl'>
                    <img src={temp} width={90} alt="icon" />
                    <p className='mt-4 font-manrope font-600 text-base'>Temperature</p>
                    <h1 className='font-manrope font-800 text-3xl'>98.6°F</h1>
                    <p className='mt-4 text-sm'>Normal</p>
                </div>
                <div className='flex flex-col bg-[#FFE6F1] w-full items-start justify-center pl-4 py-4 rounded-xl'>
                    <img src={heart} width={90} alt="icon" />
                    <p className='mt-4 font-manrope font-600 text-base'>Heart Rate</p>
                    <h1 className='font-manrope font-800 text-3xl'>78 bpm</h1>
                    <p className='flex mt-4 text-sm gap-2'><img src={ArrowDown} alt='icon' />Lower than Average</p>
                </div>
            </div>
        </section>
    )
}
