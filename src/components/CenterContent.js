import React from 'react'

const CenterContent = (props) => {
  return (
    <div className='lg:w-[805px] lg:h-[456px] '>
        <h1 className='font-Cinzel  lg:text-[88px]  md:text-[55x] sm:text-[45px] text-[32px] lg:text-left text-center'>{props.heading}</h1>
        <p className='font-Raleway lg:text-[32px] md:text-[26px] sm:text-[20px] text-[16px] lg:text-left text-center lg:px-0 px-5 mt-5' >{props.content}</p>
    </div>
  )
}

export default CenterContent