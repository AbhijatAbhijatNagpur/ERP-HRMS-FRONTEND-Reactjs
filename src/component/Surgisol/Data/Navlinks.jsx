import Dashboard from "../Icon/Dashboard icon.svg";
import CoreHR from "../../Surgisol/Icon/CoreHR icon.svg";
import Attendance from "../../Surgisol/Icon/Attendance icon.svg";
import Expense from "../../Surgisol/Icon/Expense icon.svg";
import Onboarding from "../../Surgisol/Icon/Onboarding icon.svg";
import Payroll from "../../Surgisol/Icon/Payroll icon.svg";
import ArrowDownIcon from "../../Surgisol/Icon/ArrowDown icon.svg";
import { Link, NavLink } from "react-router-dom";

const Sidelinks = [
  {
    Title: (
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `block w-full text-sm p-2 pl-1 duration-200 border-b border-gray-100 rounded-xl text-base-0  ${
            isActive ? "bg-blue-400" : "bg-[#CAD2FF]"
          }`
        }
      >
        <li className={"flex justify-between items-center"}>
          <div className="flex ">
            <img src={Dashboard} alt="" className="mx-2" />
            Dashboard
          </div>
          <div>
            <img src={ArrowDownIcon} alt="" />
          </div>
        </li>
      </NavLink>
    ),
  },
  {
    Title: (
      <NavLink
        to="/corehr"
        className={({ isActive }) =>
          `block w-full text-sm p-2 pl-1 duration-200 border-b border-gray-100 rounded-xl text-base-0  ${
            isActive ? "bg-blue-400" : "bg-[#CAD2FF]"
          }`
        }
      >
        <li className={"flex justify-between items-center"}>
          <div className="flex flex-col ">
            <div className="flex">
              <img src={CoreHR} alt="" className="mx-2" />
              Core HR
            </div>
            <span className="text-xs flex mx-2 text-center">
              (Employee information System)
            </span>
          </div>
          <div>
            <img src={ArrowDownIcon} alt="" />
          </div>
        </li>
      </NavLink>
    ),
  },
  {
    Title: (
      <NavLink
        to="/payroll"
        className={({ isActive }) =>
          `block w-full p-2 pl-1 text-sm duration-200 border-b border-gray-100 rounded-xl text-base-0  ${
            isActive ? "bg-blue-400" : "bg-[#CAD2FF]"
          }`
        }
      >
        <li className={"flex justify-between items-center"}>
          <div className="flex ">
            <img src={Payroll} alt="" className="mx-2" />
            Payroll Management
          </div>
          <div>
            <img src={ArrowDownIcon} alt="" />
          </div>
        </li>
      </NavLink>
    ),
  },
  {
    Title: (
      <NavLink
        to="/attendance"
        className={({ isActive }) =>
          `block w-full p-2 pl-1 duration-200 border-b border-gray-100 rounded-xl text-sm  ${
            isActive ? "bg-blue-400" : "bg-[#CAD2FF]"
          }`
        }
      >
        <li className={"flex justify-between items-center"}>
          <div className="flex ">
            <img src={Attendance} alt="" className="mx-2" />
            Attendance Management
          </div>
          <div>
            <img src={ArrowDownIcon} alt="" />
          </div>
        </li>
      </NavLink>
    ),
  },
  {
    Title: (
      <NavLink
        to="/onboarding"
        className={({ isActive }) =>
          `block w-full p-2 pl-1 duration-200 border-b border-gray-100 text-sm rounded-xl text-base-0  ${
            isActive ? "bg-blue-400" : "bg-[#CAD2FF]"
          }`
        }
      >
        <li className={"flex justify-between items-center"}>
          <div className="flex ">
            <img src={Onboarding} alt="" className="mx-2" />
            Onboarding Process
          </div>
          <div>
            <img src={ArrowDownIcon} alt="" />
          </div>
        </li>
      </NavLink>
    ),
  },
  {
    Title: (
      <NavLink
        to="/expense"
        className={({ isActive }) =>
          `block w-full p-2 pl-1 duration-200 text-sm border-b border-gray-100 rounded-xl text-base-0  ${
            isActive ? "bg-blue-400" : "bg-[#CAD2FF]"
          }`
        }
      >
        <li className={"flex justify-between items-center"}>
          <div className="flex ">
            <img src={Expense} alt="" className="mx-2" />
            Expense Sheet
          </div>
          <div>
            <img src={ArrowDownIcon} alt="" />
          </div>
        </li>
      </NavLink>
    ),
  },
];

const EmpSideLinks = [
  {
    Title: (
      <NavLink
        to="/empdashboard"
        className={({ isActive }) =>
          `block w-full text-sm p-2 pl-1 duration-200 border-b border-gray-100 rounded-xl text-base-0  ${
            isActive ? "bg-blue-400" : "bg-[#CAD2FF]"
          }`
        }
      >
        <li className={"flex justify-between items-center"}>
          <div className="flex ">
            <img src={Dashboard} alt="" className="mx-2" />
            Dashboard
          </div>
        </li>
      </NavLink>
    ),
  },
  {
    Title: (
      <NavLink
        to="/corehr"
        className={({ isActive }) =>
          `block w-full text-sm p-2 pl-1 duration-200 border-b border-gray-100 rounded-xl text-base-0  ${
            isActive ? "bg-blue-400" : "bg-[#CAD2FF]"
          }`
        }
      >
        <li className={"flex justify-between items-center"}>
          <div className="flex flex-col ">
            <div className="flex">
              <img src={CoreHR} alt="" className="mx-2" />
              Educational Overview
            </div>
          </div>
        </li>
      </NavLink>
    ),
  },
  {
    Title: (
      <NavLink
        to="/payroll"
        className={({ isActive }) =>
          `block w-full p-2 pl-1 text-sm duration-200 border-b border-gray-100 rounded-xl text-base-0  ${
            isActive ? "bg-blue-400" : "bg-[#CAD2FF]"
          }`
        }
      >
        <li className={"flex justify-between items-center"}>
          <div className="flex ">
            <img src={Payroll} alt="" className="mx-2" />
            Required Document
          </div>
        </li>
      </NavLink>
    ),
  },
  {
    Title: (
      <div>
        <NavLink
          to="/attendance"
          className={({ isActive }) =>
            `block w-full p-2 pl-1 duration-200 border-b border-gray-100 rounded-xl text-sm  ${
              isActive ? "bg-blue-400" : "bg-[#CAD2FF]"
            }`
          }
        >
          <li className={"flex justify-between items-center"}>
            <div className="flex ">
              <img src={Attendance} alt="" className="mx-2" />
              Training
            </div>
          </li>
        </NavLink>
        <ul className="flex flex-col items-center justify-center px-3">
          <li className="bg-[#CAD2FF] w-full px-5 py-1 text-sm font-semibold text-gray-600  border-[1px] border-violet-300 rounded-lg">
            <Link className="">Admin</Link>
          </li>
          <li className="bg-[#CAD2FF] w-full px-5 py-1 text-sm font-semibold text-gray-600 border-[1px] border-violet-300 rounded-lg">
            <Link className="">HR</Link>
          </li>
          <li className="bg-[#CAD2FF] w-full px-5 py-1 text-sm font-semibold text-gray-600  border-[1px] border-violet-300 rounded-lg">
            <Link className="">Sales</Link>
          </li>
          <li className="bg-[#CAD2FF] w-full px-5 py-1  text-sm font-semibold text-gray-600 border-[1px] border-violet-300 rounded-lg">
            <Link className="">Screening</Link>
          </li>
        </ul>
      </div>
    ),
  },
];

export { Sidelinks, EmpSideLinks };
