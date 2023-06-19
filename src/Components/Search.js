import React from "react";
import profileLogo from "./Assets/image 1.png"

export const Search = () => {
  return (
    <div className="flex flex-col items-center lg:flex lg:items-center lg:flex-row lg:justify-between">
      <div className="flex items-center ml-auto  lg:flex  lg:items-center lg:justify-center lg:ml-0">
        <div className="relative ">
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-[250px] md:w-[600px] lg:w-[417px] lg:h-[44px] py-2 pl-10 pr-4 rounded-[6px] bg-container text-[14px] font-normal"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400 h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <button className="ml-2 py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none">
          Search
        </button>
      </div>
      <div className="flex items-center mt-5 lg:mt-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[18px] h-[18.5px]  text-descFontColor cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
          />
        </svg>
        <div className="flex items-center ml-5 lg:flex-row fold:flex fold:flex-col foldundo:flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[20px] h-[19.13px] text-descFontColor cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
          <div className="relative ml-5 mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-descFontColor cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
            <div className="bg-highPriorityFontColor w-[6px] h-[6px] rounded-full absolute left-4 bottom-4"></div>
          </div>
        </div>
        <div className="flex flex-col fold:flex fold:flex-col">
            <span className="text-[13px] lg:text-[16px] font-normal text-optionColor leading-[16px] ml-[60px]">Anima Agarwal</span>
            <span className="text-[11px] text-right lg:text-[14px] text-descFontColor">U.P, India</span>
        </div>
        <div className="flex items-center ml-4">
          <img
            src={profileLogo}
            alt="Profile 1"
            className="w-[46px] h-[46px] rounded-full border-[1px] border-white mr-4 cursor-pointer"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 ml-[-14px] mt-[4px] text-arrowDownColor cursor-pointer "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
