"use client"

import React, { useState } from 'react'
import { FiAlignLeft } from 'react-icons/fi';
import navLinks from './links';
import { IoMdClose } from "react-icons/io";




const Drawer = () => {

    const [showDrawer, setshowDrawer] = useState(false)

    
    return (
      <nav className=" flex items-center font-bold text-xl justify-center md:hidden">
        <FiAlignLeft
          className="absolute left-3 text-2xl rounded-lg cursor-pointer"
          onClick={() => {
            setshowDrawer(true);
          }}
        />
        Web Wizard
        {showDrawer && (
          <div className="fixed z-10 top-0 bottom-0 left-0 h-full w-full max-w-[400px] text-black bg-white backdrop:blur-md flex flex-col items-center justify-center duration-500 ease-in-out">
            <div className="absolute top-10">WebWizard</div>
            <IoMdClose className='absolute top-10 left-5 text-2xl font-bold cursor-pointer' onClick={() => {
                setshowDrawer(false);
            }}/>
            <ul className="flex flex-col gap-5 text-2xl">
              
              {navLinks.map((link) => {
                return (
                  <li key={link.id} className="cursor-pointer">
                    {link.title}
                  </li>
                );
              })}
            </ul>
            <div className="absolute bottom-5 text-center">
              Google Developer Student Club
              <br />
              RCOEM
            </div>
          </div>
        )}
      </nav>
    );
}

export default Drawer
