import React from "react";

export const Header = ({ text, count }) => {
  let circleColor = "";
  let lineColor = "";
  let background = "";

  if (text === "To Do") {
    circleColor = "bg-todoColor";
    lineColor = "border-todoColor";
    background = "bg-hrBgToDo";
  } else if (text === "On Progress") {
    circleColor = "bg-onProgressColor";
    lineColor = "border-onProgressColor";
  } else if (text === "Done") {
    circleColor = "bg-doneColor";
    lineColor = "border-hrDoneColor";
  }

  return (
    <>
      <div className={`flex items-center h-12 pl-4 m-2 `}>
        <div
          className={`w-[8px] h-[8px] mr-[8px]  rounded-full ${circleColor}`}
        ></div>
        <div className="flex items-center">
          <span className="mr-2 font-medium ">{text}</span>
          <span className="w-[20px] h-[20px] text-[12px] rounded-full bg-counterColor ml-1 flex items-center justify-center">
            {count}
          </span>
        </div>

        {text === "To Do" ? (
          <div className="ml-auto mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" w-[19.99px] h-[20px] text-todoColor bg-todoColor bg-opacity-25 rounded-md cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          </div>
        ) : null}
      </div>
      <hr
        className={`w-[314px] border-[3px] border-solid mb-4 mx-auto ${lineColor} ${background}`}
      />
    </>
  );
};
