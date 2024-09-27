import React, { useState } from "react";
import { box } from "../Data/EmpBoxes";
import AttendanceMark from "../Models/AttendanceMark";
import EmpSalarySlip from "../Models/EmpSalarySlip";

function EmpBoxes() {
  const [noticeData, setNoticeData] = useState(false);
  const [attendace, setAttendance] = useState(false);
  const [salarySlip, setSalarySlip] = useState(false);
  return (
    <>
      <div class="grid grid-cols-3 gap-x-6 gap-y-5 mt-5 h-[400px]">
        {box(
          noticeData,
          setNoticeData,
          attendace,
          setAttendance,
          salarySlip,
          setSalarySlip
        ).map(({ container }, index) => (
          <React.Fragment key={index}>{container}</React.Fragment>
        ))}
      </div>
      {/* Attendance mark model */}
      {attendace && (
        <AttendanceMark attendace={attendace} setAttendance={setAttendance} />
      )}
      {salarySlip && (
        <EmpSalarySlip salarySlip={salarySlip} setSalarySlip={setSalarySlip} />
      )}
    </>
  );
}

export default EmpBoxes;
