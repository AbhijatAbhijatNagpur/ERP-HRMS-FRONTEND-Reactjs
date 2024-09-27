import React from "react";
import SurgisolLogo from "../Surgisol/Img/Surgisol Logo.png";
import { EmpSideLinks } from "../Surgisol/Data/Navlinks";
import WingImg from "../Surgisol/Img/wingSurgisol.png";
import { Link } from "react-router-dom";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

function EmpSideBar({ SidebarClose }) {
  return (
    <>
      <div className="w-64 bg-[#E9EBF7] fixed z-40 h-full py-2 px-4">
        <img src={SurgisolLogo} alt="" />
        {/* sidebar's NavLinks */}
        <div>
          <ul className="mt-4 font-semibold space-y-3">
            {EmpSideLinks.map(({ Title }) => (
              <>{Title}</>
            ))}
          </ul>
        </div>

        {/* Wing logout button */}

        <div className="mt-16 w-full relative  ">
          <div className="w-full absolute flex flex-col px-6 space-y-2 py-12 ">
            <Link className="text-gray-400  font-semibold">
              <InfoOutlinedIcon className="mx-2" />
              Help Center
            </Link>
            <Link className="text-gray-400 font-semibold">
              <SmsOutlinedIcon className="mx-2" />
              Contact
            </Link>
            <Link className="text-gray-400 font-semibold">
              <LogoutOutlinedIcon className="mx-2" />
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmpSideBar;
