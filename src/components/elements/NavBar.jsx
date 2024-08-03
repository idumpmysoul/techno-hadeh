import { Navigate, useNavigate } from "react-router-dom";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { RiAdminFill } from "react-icons/ri";
import { GiPowerButton } from "react-icons/gi";

import Logo from '/public/cloudracks.png'

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-screen h-[50px] flex py-[1%] outline-gray-200 outline px-[2%]]">
      <div className="flex flex-row w-screen items-center justify-center gap-[30%]">
        <div className="flex flex-row w-[33%] items-center">
          <img src={Logo} className="max-w-[100px]"></img>
          <p className="ml-[5%] text-lg leading-[100%] font-semibold mt-[2%] "> Company Name <br></br><span className="text-sm font-normal text-gray-300">on CloudRacks</span> </p>
        </div>
        <div className="flex w-[33%] text-center justify-center overflow-hidden">
          <button className="flex h-[50px] w-fit bg-white justify-center items-center px-[5%] group focus:drop-shadow-md focus:bg-blue-500 duration-300">
            <RiDashboardHorizontalFill className="h-[35px] w-[35px] fill-blue-500 group-focus:fill-white duration-300 delay-100"/>
            <h1 className="mt-[7%] ml-[5%] hidden group-focus:inline group-focus:text-white opacity-100 delay-300 text-xl duration-300"> Dashboard </h1>
          </button>
          <button className="flex h-[50px] w-fit bg-white justify-center items-center px-[5%] group focus:drop-shadow-md focus:bg-orange-400 duration-300">
            <RiAdminFill className="h-[35px] w-[35px] group-focus:scale-90 fill-orange-400 group-focus:fill-white duration-300 delay-100"/>
            <h1 className="mt-[10%] ml-[5%] hidden group-focus:inline text-white delay-300 text-xl"> Admins </h1>
          </button>
        </div>
        <div className="group flex w-[33%] justify-end z-0" onClick={()=>navigate("../hero")}>
          <GiPowerButton className="w-[35px] h-[35px] fill-black opacity-0 group-hover:opacity-100 absolute z-5 items-center mr-[3.25%] -mt-[0.3%] duration-300 ease-out group-hover:scale-90 group-hover:fill-red-400"/>
          <button className="z-10 px-[20%] group-hover:opacity-0 duration-300 ease-out"> Log Out </button>
        </div>
      </div>
    </div>
  );
}
