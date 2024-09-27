import React from "react";

import EmpHello from "./EmpComponents/EmpHello";
import EmpBoxes from "./EmpComponents/EmpBoxes";
function EmpDashboard() {
  return (
    <>
      <div className="w-full h-screen py-20 bg-[#E5E4E0]">
        <div className=" ml-64 px-6 ">
          <div className="bg-white rounded-xl px-12 py-7 h-[640px]">
            {/* Welcome */}
            <EmpHello />
            {/* Boxes */}
            <EmpBoxes />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmpDashboard;
