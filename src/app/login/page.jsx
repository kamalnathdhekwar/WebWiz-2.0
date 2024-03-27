import React from 'react'

const page = () => {
  return (
    <div className='h-[80vh] place-items-center grid'>
        <div className='backdrop-blur-md bg-white/10 w-[400px] rounded-lg py-10'>
            <h2 className='text-center text-5xl text-white'>
                Login
            </h2>
            <div className='flex flex-col gap-5 px-5 py-10'>
                <div className="form-group">
                    <input type="text" className=' bg-transparent text-white placeholder:text-white border-b-2 rounded-lg w-full py-3 px-2 focus:outline-none' placeholder='Enter email'/>
                </div>
                    <div className="form-group">
                        <input type="text" className=' bg-transparent text-white placeholder:text-white border-b-2 rounded-lg  w-full py-3 px-2 focus:outline-none' placeholder='Enter email'/>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className='px-8 font-semibold py-3 bg-green-500 rounded-full text-white'>
                            Login
                        </button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default page