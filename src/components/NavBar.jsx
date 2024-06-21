import React, { useState } from 'react'

import logo from "../assets/icon/logo.svg"
import home from "../assets/icon/home.svg"
import chat from "../assets/icon/chat.svg"
import cal from "../assets/icon/calendar.svg"
import cc from "../assets/icon/credit_card.svg"
import patient from "../assets/icon/patients.svg"
import setting from "../assets/icon/setting.svg"
import Vdots from "../assets/icon/more_vert.svg"
import drpic from "../assets/photos/dr_jose.png"

export default function NavBar() {
  const [navb, setNavb] = useState(2);

  const handleNavClick = (e, index) => {
    e.preventDefault();
    setNavb(index);
  };

  return (
    <header className='p-8'>
      <nav className='bg-white py-3 px-8 rounded-full flex items-center justify-between'>
        <img src={logo} width={210} alt="logo" />
        <ul className="flex items-center list-none gap-8">
          <li>
            <a onClick={(e) => handleNavClick(e, 1)} className={`flex gap-2 font-manrope font-800 text-sm ${navb === 1 ? " bg-[#01F0D0] rounded-full px-4 py-[10px]" : ""}`} href="#home">
              <img src={home} width={16} alt="icon" />Overview
            </a>
          </li>
          <li>
            <a onClick={(e) => handleNavClick(e, 2)} className={`flex gap-2 font-manrope font-800 text-sm ${navb === 2 ? " bg-[#01F0D0] rounded-full px-4 py-[10px]" : ""}`} href="#patients">
              <img src={patient} width={23} alt="icon" />Patients
            </a>
          </li>
          <li>
            <a onClick={(e) => handleNavClick(e, 3)} className={`flex gap-2 font-manrope font-800 text-sm ${navb === 3 ? " bg-[#01F0D0] rounded-full px-4 py-[10px]" : ""}`} href="#schedule">
              <img src={cal} width={15} alt="icon" />Schedule
            </a>
          </li>
          <li>
            <a onClick={(e) => handleNavClick(e, 4)} className={`flex gap-2 font-manrope font-800 text-sm ${navb === 4 ? " bg-[#01F0D0] rounded-full px-4 py-[10px]" : ""}`} href="#message">
              <img src={chat} width={18} alt="icon" />Message
            </a>
          </li>
          <li>
            <a onClick={(e) => handleNavClick(e, 5)} className={`flex gap-2 font-manrope font-800 text-sm ${navb === 5 ? " bg-[#01F0D0] rounded-full px-4 py-[10px]" : ""}`} href="#transaction">
              <img src={cc} width={20} alt="icon" />Transaction
            </a>
          </li>
        </ul>

        <div className='flex gap-2'>
          <img src={drpic} className='w-[40px] h-[40px]' alt="pic" />
          <div>
            <h2 className='font-manrope font-800 text-sm'>Dr. Jose Simmons</h2>
            <h2 className='font-manrope font-400 text-[#707070] text-sm'>General Practitioner</h2>
          </div>
          <figure className='bg-[#EDEDED] w-[1px]'></figure>
          <img src={setting} width={20} height={20} alt="icon" />
          <img src={Vdots} width={4} height={4} alt="icon" />
        </div>
      </nav>
    </header>
  )
}
