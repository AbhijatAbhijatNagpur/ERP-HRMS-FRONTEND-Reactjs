import React from "react";
import { NoticeData } from "../Data/NoticeData";
function Notice() {
  return (
    <>
      {" "}
      <div className="absolute w-64 bg-[#E9EBF7] overflow-y-auto hide-scrollbar z-50 left-0 h-[500px] top-48 px-2">
        <div className="justify-center flex p-5">
          <h1 className="text-[#135078] text-3xl font-semibold">Notice</h1>
        </div>
        {NoticeData.map(({ data }, index) => (
          <ul>
            <li
              className="bg-[#A9B5FF99] px-2 py-2 font-sm text-xs m-2 rounded-lg"
              key={index}
            >
              {data}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Notice;
