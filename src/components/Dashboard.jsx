import { useState } from "react";

import NavBar from "./elements/NavBar";

import employeeIcon from "../assets/employee.svg";

export default function Dashboard() {
  const [name, setName] = useState("");
  
  return (
    <div className="bg-[#F1F4F8] h-screen w-screen flex flex-col">
      <NavBar />
      <div></div>
    </div>
  );
}
