import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '/public/cloudracks.png'

import axios from 'axios';


const LoginPage = () => {
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
    <div className='flex flex-col h-screen max-sm:h-fit align-middle bg-[#F1F4F8] overflow-scroll scrollbar-thin'>
      <form /* onSubmit={handleSubmit}*/ className='m-auto flex items-center justify-center flex-col w-[60%] max-w-[1080px] max-sm:max-h-fit min-h-fit max-h-[400px] bg-white rounded-3xl backdrop-blur-lg py-[10%]'>
          <div className='flex justify-start w-full max-sm:px-[2.5%] px-[1.5%]'>
            <img src={Logo} className='max-w-[100px] object-cover translate-y-[20%]'></img>
          </div>
          <div className='w-full flex flex-row max-sm:flex-col '>
            <div className='flex-[40%] flex-col items-center px-[3%] py-[2%] max-sm:px-[7%]'>
              <h1 className='text-5xl font-normal tracking-tight'> Login</h1>
              <p className='mt-[3%] text-md font-normal'>Continue to COMPANY_NAME database</p>
              <h1 className='text-md mt-[30%]'>Not your company?</h1>
              <button className='h-fit py-[1%] rounded-3xl w-fit bg-none focus:underline hover:underline' onClick={()=>navigate("../hero")}> 
                <p className='font-normal text-md text-[#355C7D]'> Back to main </p> 
              </button>
            </div>
            <div className='flex-[40%] flex-col py-[2%]'>
              <div id='adm-username' className='px-[7%] mb-[3%]'>
                <label htmlFor='username' className='text-md' >
                  Username
                </label>
                <input type='text' name='username' autoComplete='off' placeholder='Enter Username' 
                className='mt-[2%] w-full shadow-inner drop-shadow-md text-left rounded-lg 
                h-[50px] py-[5%] px-[5%] appearance-none focus:outline text-sm' 
                onChange={(e) => setValues({...values, email : e.target.value})}/>
              </div>
              <div id='password' className='px-[7%]'>
                <label htmlFor='password' className='text-md' >
                  Password
                </label>
                <input type='password' name='password' autoComplete='off' placeholder='Enter Password' className='mt-[2%] w-full shadow-inner drop-shadow-md text-left rounded-lg 
                h-[50px] py-[5%] px-[5%] appearance-none focus:outline text-sm'
                onChange={(e) => setValues({...values, email : e.target.value})}/>
                <p className='py-[3%] text-right cursor-pointer hover:underline hover:text-blue-500 active:text-blue-900 text-sm' onClick={()=>navigate("/")}>Forgot Password?</p>
              </div>
              <div className='px-[7%] mt-[3%] mb-[5%] flex justify-end gap-[5%]'>
                
                <button className='h-fit py-[1%] rounded-3xl w-fit bg-none focus:underline hover:underline' onClick={()=>navigate("../adm-register")}> 
                  <p className='font-normal text-md text-[#355C7D] '> Sign Up </p> 
                </button>
                <button className='h-fit py-[1%] rounded-3xl items-center flex justify-center w-[20%] bg-[#355C7D] focus:outline outline-gray-300' 
                onClick={()=>navigate("../dashboard")}> 
                  <p className='font-normal text-white text-md '>Sign In</p> 
                </button>
              </div>
            </div>
          </div>
      </form>
    </div>
    </>
  
  )
}

export default LoginPage