import React from 'react'

const CenterContent = (props) => {
  return (
    <div className='w-[805px] h-[456px]'>
        <h1 className='font-Cinzel text-[88px]'>{props.heading}</h1>
        <p className='font-Raleway text-[32px]' >{props.content}</p>
    </div>
  )
}

export default CenterContent