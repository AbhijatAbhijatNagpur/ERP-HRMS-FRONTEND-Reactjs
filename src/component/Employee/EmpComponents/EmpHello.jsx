import React from "react";
import blueImg from "../img/BluePerson.png";
import yelloImg from "../img/YelloPerson.png";
function EmpHello() {
  return (
    <>
      {" "}
      <div className="bg-[#E8E8FF] rounded-xl items-center flex justify-between">
        <div className="px-8">
          <h1 className="flex font-bold text-[#01008A] text-3xl flex-col">
            Hello Arpita 👋
            <span className="text-xl font-semibold">
              You can manage your things from here
            </span>
          </h1>
        </div>

        <div className="flex items-center p-2">
          <img src={yelloImg} alt="" className="h-[100px]" />
          <h1 className="text-6xl text-[#7676DC] font-bold">Welcome</h1>
          <img src={blueImg} alt="" className="h-[100px]" />
        </div>
      </div>
    </>
  );
}

export default EmpHello;
