import React from "react";
import { ViewBoardBoxes } from "../Data/ViewBoardsBoxes";

function ViewBoard() {
  return (
    <>
      <div className="grid grid-cols-4">
        {ViewBoardBoxes.map(({ Title, Percentage, Total, bottomTitle }) => (
          <ul className="bg-white p-4 mx-2 space-y-1 shadow-lg rounded-xl min-h-[150px]">
            <li className="flex font-bold justify-between">
              {Title} <span>{Percentage}</span>
            </li>
            <li className="font-bold text-xl">{Total}</li>
            <li className="text-gray-400">{bottomTitle}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default ViewBoard;
