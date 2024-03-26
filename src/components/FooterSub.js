import React from 'react'

function FooterSub({title,first ,second,third,forth}) {
  return (

    <div className='justify-center  '>

        <div className=''>
          <p1 className='lg:text-[32px] text-[18px] md:text-[28px]'>{title}</p1>
        </div>
        
        <div className='flex flex-col lg:text-[24px] md:text-[20px] text-[16px] font-extralight '>

        <p1 className=''>{first}</p1>
        <p1 className=''>{second}</p1>
        <p1 className=''>{third}</p1>
        <p1 className=''>{forth}</p1>

        </div>

    </div>
  )
}

export default FooterSub