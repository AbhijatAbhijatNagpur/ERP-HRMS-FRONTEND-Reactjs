import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import AddEmployee from "../DashboardCompo/Model/AddEmployee";

function WelcomeCore() {
  const [addEmp, setAddEmp] = useState(false);
  return (
    <div className="flex bg-white rounded-2xl shadow-sm shadow-white mx-5 p-5 space-x-5">
      <h1 className="flex flex-col font-bold text-2xl">
        Employee Information System{" "}
        <span className="font-semibold text-xl">Hi, Welcome ABC!</span>
      </h1>{" "}
      <span
        onClick={() => setAddEmp(true)}
        className=" flex h-8 px-3 items-center rounded-md text-white font-bold hover:text-black cursor-pointer bg-[#709EB1]"
      >
        <CiCirclePlus className=" mx-1 font-bold text-xl" />
        Add Employee
      </span>
      {addEmp && <AddEmployee onClose={() => setAddEmp(false)} />}
    </div>
  );
}

export default WelcomeCore;
