import React from 'react'
import { useNavigate } from 'react-router-dom'
import BgHome from '../assets/bg-home.jpg'
import Logo from '/public/cloudracks.png'

import employeeIcon from "../assets/employee.svg";
import axios from 'axios';


const Hero = () => {
  const navigate = useNavigate();

  /*
  const [values, setValues] = useState({
    username : '',
    password : ''
  })

  const handleSubmit = (event) => {
    event.preventDefault(),
    axios.post('http:')
  }*/

  return (
    <>
    <div className='flex flex-col w-screen h-screen max-sm:h-fit align-middle bg-[#F1F4F8] overflow-scroll scrollbar-thin'>
      <form /* onSubmit={handleSubmit}*/ className='m-auto flex items-center justify-center flex-col w-[60%] max-w-[1080px] max-sm:max-h-fit min-h-fit max-h-[400px] bg-white rounded-3xl backdrop-blur-lg'>
          <div className='flex justify-start w-full max-sm:px-[2.5%] px-[1.5%]'>
            <img src={Logo} className='max-w-[100px] object-cover translate-y-[20%]'></img>
          </div>
          <div className='w-full flex flex-row max-sm:flex-col '>
            <div className='flex-[40%] flex-col items-center px-[3%] py-[5%] max-sm:px-[7%]'>
              <h1 className='text-5xl font-normal tracking-tight'> CloudRacks</h1>
              <p className='mt-[3%] text-md font-normal'>Company Management System</p>
              <div className='flex mt-[15%]'>
                <h1 className='text-md'>New Company?</h1>
                <button className='h-fit ml-[2%] rounded-3xl w-fit bg-none focus:underline hover:underline' onClick={()=>navigate("../cmp-register")}> 
                  <p className='font-normal text-md text-[#355C7D]'> Register Here </p> 
                </button> 
              </div>
              
            </div>
            <div className='flex-[40%] flex-col py-[2%]'>
              <div id='company-id' className='px-[7%] mb-[3%]'>
                <label htmlFor='id' className='text-md' >
                  Company ID
                </label>
                <input type='text' name='username' autoComplete='off' placeholder='Your Company ID' 
                className='mt-[2%] w-full shadow-inner drop-shadow-md text-left rounded-lg 
                h-[50px] py-[5%] px-[5%] appearance-none focus:outline text-sm' 
                onChange={(e) => setValues({...values, id : e.target.value})}/>
              </div>
              <div className='px-[7%] mt-[3%] mb-[5%] flex justify-end gap-[5%]'>
                <button className='h-fit py-[1%] rounded-3xl w-fit bg-none focus:underline hover:underline'> 
                  <p className='font-normal text-md text-[#355C7D] '> Find My Company </p> 
                </button>
                <button className='h-fit py-[1%] rounded-3xl items-center flex justify-center w-[20%] bg-[#355C7D] focus:outline outline-gray-300' 
                onClick={()=>navigate("../login")}> 
                  <p className='font-normal text-white text-md '> Next </p> 
                </button>
              </div>
            </div>
          </div>
          
      </form>
    </div>
    </>
  
  )
}

export default Hero