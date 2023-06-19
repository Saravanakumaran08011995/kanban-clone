import React, { useEffect, useState } from "react";
import Section from "./Section";
import { Search } from "./Search";
import Ellipse1 from "./Assets/Ellipse 1.png";
import Ellipse2 from "./Assets/Ellipse 2.png";
import Ellipse3 from "./Assets/Ellipse 3.png";
import Ellipse4 from "./Assets/Ellipse 4.png";

const ListTask = ({ tasks, setTasks }) => {
  const [todo, setTodo] = useState([]);
  const [onProgress, setOnProgress] = useState([]);
  const [done, setDone] = useState([]);

  useEffect(() => {
    const fTodo = tasks.filter((task) => task.status === "todo");
    const fOnProgress = tasks.filter((task) => task.status === "onprogress");
    const fDone = tasks.filter((task) => task.status === "done");

    setTodo(fTodo);
    setOnProgress(fOnProgress);
    setDone(fDone);
  }, [tasks]);

  return (
    <div>
      <div className="mt-5 relative">
        <Search />
        <hr className=" w-[100%] text-hrColor border-t border-gray-300 my-4"/>
      </div>
      


      <div className="px-10  lg:px-0 lg:flex lg:items-center lg:gap-x-[475px] lg:flex-row fold:flex  flex-col items-center">
        <div className="flex items-center">
          <h1 className="text-optionColor font-semibold text-[25px] mb-2 lg:mb-0 lg:text-[46px]  mr-4 ">
            Mobile App
          </h1>
          <div className=" text-todoColor bg-todoColor rounded-md bg-opacity-10 mr-4 p-[4px]">
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                d="M9.13749 1.80001L2.64998 8.28751C2.39998 8.53751 2.16249 9.02501 2.11249 9.37501L1.76249 11.85C1.63749 12.75 2.26249 13.375 3.16249 13.25L5.63746 12.9C5.98746 12.85 6.475 12.6125 6.725 12.3625L13.2125 5.87501C14.325 4.76251 14.8625 3.46251 13.2125 1.81251C11.5625 0.150005 10.2625 0.675007 9.13749 1.80001Z"
                stroke="#5030E5"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div className=" text-todoColor bg-todoColor rounded-lg bg-opacity-5 mr-4 p-[4px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="cursor-pointer"
            >
              <path
                d="M16.498 18.25h-1.51c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.51c2.62 0 4.75-2.13 4.75-4.75s-2.13-4.75-4.75-4.75h-1.5a.749.749 0 1 1 0-1.5h1.5c3.45 0 6.25 2.8 6.25 6.25s-2.8 6.25-6.25 6.25ZM9 18.25H7.5c-3.45 0-6.25-2.8-6.25-6.25s2.8-6.25 6.25-6.25H9c.41 0 .75.34.75.75s-.34.75-.75.75H7.5c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75H9c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                fill="#5030E5"
              ></path>
              <path
                d="M16 12.75H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                fill="#5030E5"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex items-center lg:flex-row fold:flex  fold:flex-col  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" text-todoColor bg-todoColor bg-opacity-10 rounded-md w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          <span className="text-todoColor font-medium mx-3 ">Invite</span>
          <div className="pb-10">
            <div className="relative w-[100px]">
            <img
              src={Ellipse1}
              alt="Profile 1"
              className="absolute w-[38px] h-[38px] rounded-full border-[1px] border-white border-b z-10 ml-4 "
            />

            <img
              src={Ellipse2}
              alt="profile-2"
              className="absolute w-[38px] h-[38px] rounded-full border-[1px] border-white border-b right-[15px]  z-20"
            />
            <img
              src={Ellipse3}
              alt="profile-3"
              className="absolute w-[38px] h-[38px] rounded-full border-[1px] border-white border-b -right-[15px] z-30"
            />
            <img
              src={Ellipse4}
              alt="profile-3"
              className="absolute  w-[38px] h-[38px] rounded-full border-[1px] border-white border-b -right-[45px] z-40"
            />
            <div className="absolute flex items-center justify-center  font-medium text-profileNumberColor bg-profileNumberBgColor text-[15px] w-[38px] h-[38px] rounded-full border-[1px] border-white border-b -right-[75px]  z-50 ">
              +2
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 px-10 lg:px-0 mx-10 lg:mx-0">
        <div className="lg:flex lg:items-center lg:gap-[38rem]">
          <div className="lg:flex lg:items-center ">
            <div className="flex items-center mr-4 w-[124px] h-[40px] mb-2 lg:mb-0  border-[1px] border-filterBorderColor rounded-[6px] filter-shadow cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                />
              </svg>
              <span className="mr-2">Filter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="flex items-center w-[124px] h-[40px] mb-2 lg:mb-0 border-[1px] border-filterBorderColor rounded-[6px] filter-shadow cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>

              <span className="mr-2">Today</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center w-[97px] h-[40px] mr-4 border-[1px] border-filterBorderColor rounded-[6px] filter-shadow cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>

              <span className="mr-2">Share</span>
            </div>
            <div className="border-l-2 border-filterBorderColor h-[28px] mr-4 "></div>
            <div className="flex items-center justify-center w-[40px] h-[40px] bg-todoColor rounded-[6px] cursor-pointer ">
              <div className="flex flex-col">
                <span className="w-[15px] h-[6px] bg-white mb-1"></span>
                <span className="w-[15px] h-[6px] bg-white"></span>
              </div>
            </div>
            <div className="ml-4 cursor-pointer">
              <div className="flex gap-1 mb-1">
                <div className="w-[5px] h-[5px] border-[1.5px] border-solid border-arrowColor rounded-full"></div>
                <div className="w-[5px] h-[5px] border-[1.5px] border-solid border-arrowColor rounded-full"></div>
              </div>
              <div className="flex gap-1">
                <div className="w-[5px] h-[5px] border-[1.5px] border-solid border-arrowColor rounded-full"></div>
                <div className="w-[5px] h-[5px] border-[1.5px] border-solid border-arrowColor rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-4 lg:mx-0 lg:flex lg:gap-4 md:grid md:grid-cols-2 md:gap-y-4">
        <Section
          priority={tasks.priority}
          status="todo"
          tasks={tasks}
          setTasks={setTasks}
          tasksToMap={todo}
        />
        <Section
          priority={tasks.priority}
          status="onprogress"
          tasks={tasks}
          setTasks={setTasks}
          tasksToMap={onProgress}
        />
        <Section
          priority={tasks.priority}
          status="done"
          tasks={tasks}
          setTasks={setTasks}
          tasksToMap={done}
        />
      </div>
    </div>
  );
};

export default ListTask;
