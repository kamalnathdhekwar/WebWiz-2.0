import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import navlogo from '../../public/navlogo.svg'

function Header() {
  return (
    <div className='bg-black/50 text-white items-center flex p-5 justify-evenly'>
        <nav className="b flex  w-full justify-around">
          <div className='flex gap-9 text-xl'>
          <Link href="/">
          <p className='cursor-pointer'>Home</p>
          </Link>
          <Link href="/about">
            <p className='cursor-pointer'>About</p>
          </Link>
          <Link href="/contact-us">
            <p className='cursor-pointer'>Contact Us</p>
          </Link>
          <Link href="/support">
            <p className='cursor-pointer'>Support</p>
          </Link>
          </div>
          
          <div className='flex  justify-between  '>
            <button className='cursor-pointer bg-green-700 px-9 py-[6px] rounded-lg'>
            <Link href="/sign-up">
            <p className='cursor-pointer'>Sign Up</p>
           </Link>
            </button>

            <div>
            <Image src={navlogo} alt="logo" className='cursor-pointer'/>
            </div>

          </div>

          
        </nav>
    </div>
  )
}

export default Header