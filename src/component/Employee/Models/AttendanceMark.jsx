import React, { useState } from "react";
import { Employee } from "../../Surgisol/Data/StatusOverview";
import { box } from "../Data/EmpBoxes";
function AttendanceMark({ setAttendance, attendace }) {
  const employee = Employee[1];

  //   Dates
  const currentDate = new Date();

  // Array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the month name, day, and year
  const monthName = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  // Format the date
  const formattedDate = `${monthName} ${day}, ${year}`;

  // Get hours, minutes
  let hours = currentDate.getHours();
  const minutes = String(currentDate.getMinutes()).padStart(2, "0"); // Format minutes

  // Determine AM/PM
  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12; // Convert to 12-hour format
  hours = hours ? String(hours).padStart(2, "0") : "12"; // Show '12' instead of '0'

  // Format the date and time
  const formattedTime = `${hours}:${minutes} ${amPm}`;

  // hooks
  return attendace ? (
    <div className="fixed bg-black bg-opacity-30 backdrop-blur-sm inset-0 flex items-center justify-center z-50 ">
      <div className="bg-white overflow-y-auto h-[300px] w-[500px] hide-scrollbar rounded-2xl">
        <div className="bg-events flex justify-between p-5 px-6">
          <h1 className="text-xl font-bold">Mark Your Attendance</h1>

          <button
            onClick={() => setAttendance(false)}
            className="text-xl hover:text-blue-500"
          >
            X
          </button>
        </div>

        {/* Input */}
        <div className="py-5 space-y-4">
          <div className="flex space-x-4 items-center justify-center">
            {employee.profile}
            <h1 className="flex flex-col text-sm">
              <span>{employee.empName}</span>
              <span>
                {" "}
                <strong>Employee ID : </strong>
                {employee.empid}
              </span>
              <span>
                {" "}
                <strong>Position :</strong> {employee.Designation}
              </span>
            </h1>
          </div>
        </div>
        <div className="flex justify-between text-sm px-10 my-3">
          <p>
            <span className="font-semibold">Current Date: </span>
            {formattedDate}
          </p>
          <p>
            <span className="font-semibold">Current Time: </span>
            {formattedTime}
          </p>
        </div>
        <div className="flex justify-center space-x-10 py-5">
          <button className="bg-[#72B168B2] border-[1px] border-[#138911] px-5 py-1 rounded-xl">
            Present
          </button>
          <button className="bg-[#D94E4E5C]  border-[1px] border-[#7E3D42] px-5 py-1 rounded-xl">
            On Leave
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default AttendanceMark;
