import React from 'react'

import patient from "../assets/photos/Patient.png"
import download from "../assets/icon/download.svg"
import calendar from '../assets/icon/BirthIcon.svg'
import female from '../assets/icon/FemaleIcon.svg'
import phone from '../assets/icon/PhoneIcon.svg'
import insurance from '../assets/icon/InsuranceIcon.svg'

export default function PatientDetail({ data }) {
    return (
        <aside className='w-[25%] flex flex-col gap-8' >

            <section className='bg-white rounded-2xl mt-[-12px]'>
                <div className='flex flex-col justify-center items-center pt-8 pb-4'>
                    <img src={patient} width={200} alt="patient" />
                    <h1 className=' text-2xl font-manrope font-800 py-5'>{data[3].name}</h1>
                </div>
                <ul className='flex flex-col gap-6 ml-5 font-manrope text-sm'>
                    <li className='flex gap-4 items-center'>
                        <img src={calendar} alt="icon" />
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-600'>Date Of Birth</h1>
                            <h1 className='font-800'>{data[3].date_of_birth}</h1>
                        </div>
                    </li>
                    <li className='flex gap-4 items-center'>
                        <img src={female} alt="icon" />
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-600'>Gender</h1>
                            <h1 className='font-800'>{data[3].gender}</h1>
                        </div>
                    </li>
                    <li className='flex gap-4 items-center'>
                        <img src={phone} alt="icon" />
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-600'>Contact Info.</h1>
                            <h1 className='font-800'>{data[3].phone_number}</h1>
                        </div>
                    </li>
                    <li className='flex gap-4 items-center'>
                        <img src={phone} alt="icon" />
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-600'>Emergency Contacts</h1>
                            <h1 className='font-800'>{data[3].emergency_contact}</h1>
                        </div>
                    </li>
                    <li className='flex gap-4 items-center'>
                        <img src={insurance} alt="icon" />
                        <div className='flex flex-col gap-1'>
                            <h1 className='font-600'>Insurance Provider</h1>
                            <h1 className='font-800'>{data[3].insurance_type}</h1>
                        </div>
                    </li>
                </ul>

                <div className='flex justify-center items-center my-8'>
                    <button className='bg-[#01F0D0] py-2 px-6 rounded-full text-sm font-manrope font-800'>Show All Information</button>
                </div>
            </section>

            <section className='bg-white px-5 py-6 rounded-2xl'>
                <h1 className='font-manrope font-800 mb-2 text-2xl'>Lab Results</h1>
                <div className='h-[190px] overflow-y-scroll visible-scrollbar mr-1'>
                    {data[3].lab_results.map((item) => (
                        <ul className={`flex py-2 mt-3 mr-2 px-4 justify-between text-sm font-manrope ${item==="CT Scans" ? "bg-[#F6F7F8]" : ""} `}>
                            <li>{item}</li>
                            <img src={download} alt="icon" />
                        </ul>
                    ))}
                </div>
            </section>
        </aside>
    )
}
