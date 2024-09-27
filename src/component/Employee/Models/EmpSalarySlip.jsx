import React, { useState } from "react";
import { Employee } from "../../Surgisol/Data/StatusOverview";
import { LuSquareEqual } from "react-icons/lu";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { box } from "../Data/EmpBoxes";
function EmpSalarySlip({ salarySlip, setSalarySlip }) {
  const people = [
    { id: 1, List: "Current Month" },
    { id: 2, List: "6 Month" },
    { id: 3, List: "1 Year" },
  ];

  const [selected, setSelected] = useState(null); // Use this to handle modal visibility

  const employee = Employee[1]; // Ensure Employee is correctly imported and defined

  // Date handling
  const currentDate = new Date();
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
  const formattedDate = `${
    months[currentDate.getMonth()]
  } ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  let hours = currentDate.getHours();
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Show '12' instead of '0'

  //   Download slip
  const [downloadSlip, setDownloadSlip] = useState(false);
  return salarySlip ? (
    <div className="fixed bg-black bg-opacity-30 backdrop-blur-sm inset-0 flex items-center justify-center z-50 ">
      <div className="bg-[#FFEBFB] overflow-y-auto h-[350px] w-[500px] hide-scrollbar rounded-2xl">
        {/* Header */}
        <div className="bg-Salary flex justify-between p-3 px-6">
          <h1 className="text-xl font-bold">View and Download Salary Slips</h1>
          <button
            onClick={() => setSalarySlip(false)} // Proper state handler to close modal
            className="text-xl hover:text-blue-500"
          >
            X
          </button>
        </div>

        {/* Employee Details */}
        <div className="py-5 space-y-4">
          <div className="flex space-x-4 items-center px-10">
            {employee?.profile} {/* Make sure employee object is defined */}
            <h1 className="flex flex-col text-sm">
              <span>{employee?.empName}</span>{" "}
              {/* Use optional chaining in case employee is undefined */}
              <span>
                {" "}
                <strong>Employee ID :</strong> {employee?.empid}
              </span>
              <span>
                {" "}
                <strong>Position :</strong> {employee?.Designation}
              </span>
            </h1>
          </div>
        </div>

        {/* Listbox and Date */}
        <div className="flex justify-between text-sm px-10 my-3">
          <div className="space-y-2">
            <span className="font-semibold">Current Date: {formattedDate}</span>
            <span>
              {" "}
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-2">
                  <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                      <span className="ml-3 block truncate">
                        {selected ? selected.List : "Select Period"}
                      </span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <ChevronUpDownIcon
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-400"
                      />
                    </span>
                  </ListboxButton>

                  <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {people.map((person) => (
                      <ListboxOption
                        key={person.id}
                        value={person}
                        className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
                      >
                        <div className="flex items-center">
                          <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                            {person.List}
                          </span>
                        </div>
                        {selected && selected.id === person.id && (
                          <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                            <CheckIcon aria-hidden="true" className="h-5 w-5" />
                          </span>
                        )}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </div>
              </Listbox>
            </span>
            <span className="flex items-center">
              <button className="text-xs bg-violet-400 p-1 rounded-lg px-2 border-[1px] border-[#1D002A]">
                Send by Email
              </button>
            </span>
          </div>
          <p className="cursor-pointer">
            <span className="font-semibold">Salary Slip Preview : </span>
            <LuSquareEqual className="h-10 w-10 font-normal" />
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex justify-center space-x-10 relative py-4">
          <button className="bg-[#A9C8F1] border-[1px] border-[#004096] py-2 px-6 rounded-xl">
            View Slip
          </button>
          <button
            onClick={() => setDownloadSlip(!downloadSlip)}
            className="bg-[#9BDBA9D6]  border-[1px] border-[#005212] py-2 px-5 rounded-xl"
          >
            Download Slip
          </button>

          {downloadSlip && (
            <div className="absolute inset-y-0 right-5  flex flex-col text-xs space-y-2">
              <button className="bg-[#FFCFCF] rounded-full p-1">PDF</button>
              <button className="bg-[#A6F7AEB8] rounded-full p-1">EXCEL</button>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : null;
}

export default EmpSalarySlip;
