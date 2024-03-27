import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import { FiAlignLeft } from "react-icons/fi";
import Drawer from './Drawer';
import links from './links';

import img2dis from '../../../public/GDSCLogo.svg'

function Header() {
  return (
    <div className="relative bg-black/50 text-white items-center flex p-5 justify-evenly ">
      <nav className="max-md:hidden flex  w-full justify-around items-center">
        <Image src={img2dis}  className='w-[85px] h-[41px]' alt="" />
        <div className="flex w-1/2 justify-between items-center text-xl">
            <Link href="/">
            <p className="cursor-pointer">Home</p>
            </Link>
            <Link href="/">
            <p className="cursor-pointer">About</p>
            </Link>
            <Link href="/">
            <p className="cursor-pointer">Contact</p>
            </Link>
            <Link href="/">
            <p className="cursor-pointer">Support</p>
            </Link>
        </div>

        <div className="flex  justify-between  gap-5">
          <button className="cursor-pointer bg-green-500/70 px-9 py-[4px] rounded-lg btn-hover-animate">
            <Link href="/sign-up">Sign Up</Link>
          </button>

          <div>
            <Image src={"/navlogo.svg"} alt="logo" width={48} height={48} className="cursor-pointer" />
          </div>
        </div>
      </nav>

    {/* Navigation drawer */}
      <Drawer />
      
    </div>
  );
}

export default Header