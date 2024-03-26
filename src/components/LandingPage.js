import React from 'react'
import Link from 'next/link'

function LandingPage() {
  return (
    <div className="">
        <div className="flex flex-col justify-between items-center gap-8">
            <div className="">
             <p className=" text-white lg:text-[160px] md:text-[120px]  sm:text-[90px] text-[60px] font-bold">Lorem Ipsum</p>
            </div>

            <div className="lg:text-black md:font-extrabold md:w-[580px] w-[400px] text-slate-100 font-bold">
             <p className="text-center lg:text-[20px] text-[16px] ">Lörem ipsum mer ultrask hyposk, miska än tranerade. Diling monohönera pora bebinera, pack. Prelig ode, monogt serar. Hoholedes  </p>
            </div>

            <div className="">
            <Link href="/sign-up">
            <button className='cursor-pointer bg-slate-900 lg:px-20 lg:py-[8px]  rounded-md px-6 py-1'>
            <p className='cursor-pointer text-white lg:text-[24px] text-[18px]'>Login</p>
            </button>
          </Link>
            </div>

        </div>
    </div>
  )
}

export default LandingPage