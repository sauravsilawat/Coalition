import React from 'react'

import search from "../assets/icon/search.svg"
import morehor from "../assets/icon/more_horiz.svg"

export default function PatientList({ data }) {
  return (
    <aside className='bg-white w-[25%] h-full pb-5 rounded-2xl'>
      <div className='flex justify-between px-5 py-6'>
        <h1 className=' font-manrope font-800 text-2xl'>Patients</h1>
        <img src={search} width={18} height={18} alt="icon" />
      </div>
      <div className='h-[930px] overflow-y-scroll visible-scrollbar mr-2'>
        {
          data && data.map((item) => (
            <div key={item.name} className={`flex justify-between px-5 my-1 items-center mr-2 ${item.name==="Jessica Taylor" ? "bg-[#D8FCF7]" : ""}`}>

              <div className='flex items-center gap-4 my-3'>
                <img src={item.profile_picture} width={50} height={50} alt="profile" />
                <div className='flex flex-col'>
                  <h1 className=' font-manrope font-800 text-sm'>{item.name}</h1>
                  <p className='font-monrope text-sm text-[#707070]'>{item.gender}, {item.age}</p>
                </div>
              </div>

              <img src={morehor} width={18} height={18} alt="icon" />
            </div>
          ))
        }
      </div>
    </aside>
  )
}
