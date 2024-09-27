import { CgNotes } from "react-icons/cg";
import Notice from "../Models/Notice";

const box = (
  noticeData,
  setNoticeData,
  attendace,
  setAttendance,
  salarySlip,
  setSalarySlip
) => [
  {
    container: (
      <div
        onClick={() => setNoticeData(!noticeData)}
        className="bg-green-50 px-6 py-4 space-y-3 rounded-xl"
      >
        <div className="flex justify-between ">
          <h1 className="font-bold text-green-400">Notice</h1>
          <CgNotes className="text-green-400" />
        </div>
        <div className="">
          <p className="w-[200px] text-xs">
            View important company announcements and updates.
          </p>
        </div>
        {noticeData && <Notice />}
      </div>
    ),
  },
  {
    container: (
      <div className="bg-[#FDF1E0]  px-6 py-4 space-y-3 rounded-xl">
        <div className="flex justify-between ">
          <h1 className="font-bold text-[#EE9211]">Apply for leave</h1>
          <CgNotes className="text-[#EE9211]" />
        </div>
        <div className="">
          <p className="w-[200px] text-xs">
            Submit leave requests and track approval status{" "}
          </p>
        </div>
        <button className="text-[#EE9211] font-bold">Leave Status</button>
      </div>
    ),
  },
  {
    container: (
      <div className="bg-[#FDF1E0] px-6 py-4 space-y-3 rounded-xl">
        <div
          onClick={() => setAttendance(true)}
          className="flex justify-between cursor-pointer"
        >
          <h1 className="font-bold text-[#EE9211]">Attendance</h1>
          <CgNotes className="text-[#EE9211]" />
        </div>
        <div className="">
          <p className="w-[200px] text-xs">
            Mark your daily attendance and view your attendance history{" "}
          </p>
        </div>
        <button className="text-[#EE9211] font-bold">
          View Attendance History
        </button>
      </div>
    ),
  },
  {
    container: (
      <div
        onClick={() => setSalarySlip(true)}
        className="bg-[#FFEBFB] cursor-pointer px-6 py-4 space-y-3 rounded-xl"
      >
        <div className="flex justify-between ">
          <h1 className="font-bold text-[#E32CBC]">Salary Slip</h1>
          <CgNotes className="text-[#E32CBC]" />
        </div>
        <div className="">
          <p className="w-[200px] text-xs">
            View and download your salary slips{" "}
          </p>
        </div>
      </div>
    ),
  },
  {
    container: (
      <div className="bg-[#FFEBEB] px-6 py-4 space-y-3 rounded-xl">
        <div className="flex justify-between ">
          <h1 className="font-bold text-[#E41E1E]">Calender</h1>
          <CgNotes className="text-[#E41E1E]" />
        </div>
        <div className="">
          <p className="w-[200px] text-xs">
            Check upcoming events, meetings, and important dates.
          </p>
        </div>
      </div>
    ),
  },
  {
    container: (
      <div className="bg-[#EFEDFF] px-6 py-4 space-y-3 rounded-xl">
        <div className="flex justify-between ">
          <h1 className="font-bold text-[#3229E1]">Holiday</h1>
          <CgNotes className="text-[#3229E1]" />
        </div>
        <div className="">
          <p className="w-[200px] text-xs">
            View the list of company holidays and download the holiday schedule{" "}
          </p>
        </div>
        <button className="text-[#3229E1]">Upcoming Holidays</button>
      </div>
    ),
  },
  {
    container: (
      <div className="bg-[#FFFBE5] px-6 py-4 space-y-3 rounded-xl">
        <div className="flex justify-between ">
          <h1 className="font-bold text-[#837425]">Expense</h1>
          <CgNotes className="text-[#837425]" />
        </div>
        <div className="">
          <p className="w-[200px] text-xs">
            Track and manage your expenses. Submit new claims and view recent
            transactions.{" "}
          </p>
        </div>
      </div>
    ),
  },
  {
    container: (
      <div className="bg-[#F3F3F3] overflow-y-auto px-6 py-4 space-y-3 col-span-2 rounded-xl">
        <div className="flex justify-between ">
          <h1 className="font-bold text-black">Latest Updates</h1>
        </div>
        <div className="">
          <p className=" text-xs border-b-black border-b-2 pb-1">
            Reminder: The project report for the XYZ client is due on August 25,
            2024. Please ensure all tasks are completed and submitted on time.
          </p>
          <p className=" text-xs border-b-black border-b-2 pb-1">
            You have been assigned a new task: 'Prepare the Q3 Sales
            Presentation.' The deadline for this task is August 30, 2024. Check
            the task management system for more details.
          </p>
          <p className=" text-xs border-b-black border-b-2 pb-1">
            Reminder: Please submit your timesheet for the current pay period by
            August 20, 2024. Log in to the timesheet portal to complete this
            task.
          </p>
          <p className=" text-xs border-b-black border-b-2 pb-1">
            Track and manage your expenses. Submit new claims and view recent
            transactions.{" "}
          </p>
          <p className=" text-xs border-b-black border-b-2 pb-1">
            Track and manage your expenses. Submit new claims and view recent
            transactions.{" "}
          </p>
        </div>
      </div>
    ),
  },
];
export { box };
