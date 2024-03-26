import React from 'react'
import Link from 'next/link'
import FooterSub from './FooterSub'
import Image from 'next/image'
import linkedin from '../../public/linkedin.svg'
import facebook from '../../public/facebook.svg'
import github from '../../public/github.svg'
import twitter from '../../public/twitter.svg'
import instagram from '../../public/instagram.svg'

function Footer() {
  return (

    <div className='absolute bottom-0 left-0 right-0 py-10 text-white'>

        <div className='  md:flex-row  lg:px-[81px]  px-[20px]  justify-around flex flex-col'>

          <div className="flex flex-col gap-6 lg:w-[604px] w-full  lg:text-left  text-justify   ">

           <div className='lg:text-[32px] text-[18px] md:text-[28px]'>
              <p>Need Help ?</p>
            </div>

            <div className='lg:text-[24px] md:text-[20px] text-[16px] font-extralight'>

             <p>
             Lörem ipsum mer ultrask hyposk, miska än tranerade. Diling monohönera pora bebinera, pack. Dinat teling. Berån pott. Benade pres yn. 
Sor kvasikilig i trav. Lan kvasilögisk.
             </p>

            </div>
            <div className="flex gap-6 items-center ">
            

             <a href=""><Image src={linkedin} alt="" className="lg:w-[34px] md:w-[28px]  w-[20px] "/></a>
             <a href=""><Image src={facebook} alt="" className="lg:w-[44px] md:w-[28px]  w-[24px]" /></a>
             <a href=""><Image src={github} alt="" className="lg:w-[39px] md:w-[28px]  w-[21px]" /></a>
             <a href=""><Image src={instagram}alt="" className="lg:w-[44px] md:w-[28px]  w-[26px]" /></a>
             <a href=""><Image src={twitter}alt="" className="lg:w-[44px] md:w-[28px]  w-[26px]" /></a>
             
            </div>

          </div>

          <div className='flex lg:gap-[84px] md:gap-[50px] gap-[30px] md:mt-0 mt-5'>

                <FooterSub title="About" first="Our Staff" second="Timeline" third="Spell Books" forth="Brand kit" />

                <FooterSub title="Services" first="One" second="Two" third="Three" />

                <FooterSub title="Other" first="One" second="Two" />

          </div>

        </div>

    </div>
  )
}

export default Footer