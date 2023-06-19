import React from "react";
import { useDrag } from "react-dnd";


const Task = ({ task }) => {
  let bgColor = "";
  let fontColor = "";

  if (task.priority === "low") {
    bgColor = "bg-lowPriorityBgColor";
    fontColor = "text-lowPriorityFontColor";
  } else if (task.priority === "high") {
    bgColor = "bg-highPriorityBgColor";
    fontColor = "text-highPriorityFontColor";
  } else if (task.priority === "completed") {
    bgColor = "bg-completedBgColor";
    fontColor = "text-completedFontColor";
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className="pb-2">
    <div
      ref={drag}
      className={`bg-white w-[314px] h-auto rounded-[16px] mx-auto mb-3  cursor-grab ${
        isDragging ? "shadow-lg" : ""
      }`}
    >
      <div className="ml-[20px]">
        <div className="flex items-center">
          <p
            className={`${bgColor} ${fontColor} mt-[20px]  inline-block px-2 py-1 text-[12px] rounded-md`}
          >
            {task.priority}
          </p>

          <div className="ml-auto mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-[20px] text-optionColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-[18px] font-semibold mt-[10px] text-headingFontColor ">
          {task.taskName}
        </h1>
        <p className="text-[12px] font-normal mt-1 text-descFontColor">
          {task.desc}
        </p>
        <div>
          {task.img ? (
            <img
              className="w-[281px] h-[110px] rounded-md"
              src={task.img}
              alt="task-img"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div></div>
          )}
        </div>
        <div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg"
              alt="Profile 1"
              className="absolute w-[24px] h-[24px] rounded-full border-[1px] border-white border-b left-[2px] top-[-5px] z-10"
            />

            <img
              src="https://images.pexels.com/photos/7120871/pexels-photo-7120871.jpeg"
              alt="profile-2"
              className="absolute w-[24px] h-[24px] rounded-full border-[1px] border-white border-b left-[20px] top-[-5px] z-20"
            />
            <img
              src="https://images.pexels.com/photos/7533347/pexels-photo-7533347.jpeg"
              alt="profile-3"
              className="absolute w-[24px] h-[24px] rounded-full border-[1px] border-white border-b left-[40px] top-[-5px] z-30"
            />
          </div>
          <div className="flex justify-end mt-[20px] pb-5">
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[14.33px] h-[14.37px] text-descFontColor mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
              <p className="text-[12px] text-descFontColor mr-2">
                {task.comments} comments
              </p>
              <div className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[13.33px] h-[13.33px] mr-1 text-descFontColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 13.5H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </svg>
                <p className="text-[12px] text-descFontColor mr-2">
                  {task.files} files
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Task;
