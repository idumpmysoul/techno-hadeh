import React from 'react'
import { useNavigate } from 'react-router-dom'
import { VscDebugDisconnect } from "react-icons/vsc";
import Logo from '/public/cloudracks.png'

const NotFound = () => {
  return (
    <div className='flex w-screen h-screen align-middle items-center justify-start overflow-hidden z-30'>
        <VscDebugDisconnect className='fill-gray-100 absolute w-screen h-screen bottom-0 z-0'/>
        <div className='w-screen flex flex-col align-middle items-start z-20 -mt-[5%]'>
            <img src={Logo} className='max-h-[300px] max-w-[300px] ml-[2.5%]'></img>
            <h1 className='text-5xl leading-8 font-thin ml-[5%] -mt-[2%]'> PAGE NOT FOUND <br></br> <span className='text-xl text-white font-extrabold bg-gray-600'> ERROR-CODE-404 </span> </h1>
        </div>
        
        <div className='container w-screen h-screen bg-transparent absolute z-30'>

        </div>
    </div>
  )
}

export default NotFound