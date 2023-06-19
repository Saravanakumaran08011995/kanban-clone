import React, { useState } from "react";

export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={` lg:h-[1200px]  ${
        open ? "w-[251px]" : "w-[80px]"
      }  duration-300 bg-white pt-8 mx-auto lg:ml-5 relative p-5  `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-[26px] h-[20px] absolute cursor-pointer -right-3 ${open ? "top-[40px]": "top-[45px]"} border-filterBorderColor ${
          open && "rotate-180"
        } hidden lg:block`}
        onClick={() => setOpen(!open)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
        />
      </svg>
      <div className="flex gap-4 items-center ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            className={`cursor-pointer duration-500`}
          >
            <path
              opacity=".6"
              d="M14 16c0 1.77-.77 3.37-2 4.46A5.93 5.93 0 0 1 8 22c-3.31 0-6-2.69-6-6 0-2.76 1.88-5.1 4.42-5.79a6.019 6.019 0 0 0 4 3.58c.5.14 1.03.21 1.58.21s1.08-.07 1.58-.21c.27.68.42 1.43.42 2.21Z"
              fill="#5030E5"
            ></path>
            <path
              d="M18 8a5.993 5.993 0 0 1-4.42 5.79c-.5.14-1.03.21-1.58.21s-1.08-.07-1.58-.21A5.993 5.993 0 0 1 6 8c0-3.31 2.69-6 6-6s6 2.69 6 6Z"
              fill="#5030E5"
            ></path>
            <path
              opacity=".4"
              d="M22 16c0 3.31-2.69 6-6 6a5.93 5.93 0 0 1-4-1.54c1.23-1.09 2-2.69 2-4.46 0-.78-.15-1.53-.42-2.21 1.83-.5 3.31-1.84 4-3.58C20.12 10.9 22 13.24 22 16Z"
              fill="#5030E5"
            ></path>
          </svg>
        </div>
        <h1
          className={`font-semibold text-[20px] leading-[24px] text-optionColor origin-left duration-300 ${
            !open && "scale-0"
          }`}
        >
          Project M.
        </h1>
      </div>
      <div className="h-[30px]"></div>
      <div className="flex flex-row  md:flex-row  lg:flex-col">
      <div className="lg:flex lg:gap-x-4 lg:items-center mb-[20px] mr-1 lg:mr-0">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className=" mr-[10px] text-filterBorderColor cursor-pointer duration-500"
          >
            <path
              d="M5 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3H5C3 2 2 3 2 5v2c0 2 1 3 3 3ZM17 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM17 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3ZM5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2c0 2 1 3 3 3Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>

        <span
          className={`text-[16px] font-medium leading-[19px] text-filterBorderColor duration-200 origin-left ${
            open && "lg:block"
          } hidden`} 
        >
          Home
        </span>
      </div>
      <div className="lg:flex lg:gap-x-4 lg:items-center mb-[20px] mr-1 lg:mr-0">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className=" mr-[10px] text-filterBorderColor cursor-pointer duration-500"
          >
            <path
              d="M8.5 19H8c-4 0-6-1-6-6V8c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.53-.4-.8-.4Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M15.996 11h.01M11.995 11h.01M7.995 11h.008"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>

        <span
          className={`text-[16px] font-medium leading-[19px] text-filterBorderColor duration-200 origin-left ${
            open && "lg:block"
          } hidden`}
        >
          Messages
        </span>
      </div>

      <div className="lg:flex lg:gap-x-4 lg:items-center mb-[20px] mr-1 lg:mr-0">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className=" mr-[10px] text-filterBorderColor cursor-pointer duration-500"
          >
            <path
              d="M12.37 8.88h5.25M6.38 8.88l.75.75 2.25-2.25M12.37 15.88h5.25M6.38 15.88l.75.75 2.25-2.25"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>

        <span
          className={`text-[16px] font-medium leading-[19px] text-filterBorderColor duration-200 origin-left ${
            open && "lg:block"
          } hidden`}
        >
          Tasks
        </span>
      </div>

      <div className="lg:flex lg:gap-x-4 lg:items-center mb-[20px] mr-1 lg:mr-0">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className=" mr-[10px] text-filterBorderColor cursor-pointer duration-500"
          >
            <path
              d="M9.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C4.56 3.99 6.54 2 9 2a4.435 4.435 0 0 1 .16 8.87ZM16.41 4c1.94 0 3.5 1.57 3.5 3.5 0 1.89-1.5 3.43-3.37 3.5a1.13 1.13 0 0 0-.26 0M4.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0ZM18.34 20c.72-.15 1.4-.44 1.96-.87 1.56-1.17 1.56-3.1 0-4.27-.55-.42-1.22-.7-1.93-.86"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>

        <span
          className={`text-[16px] font-medium leading-[19px] text-filterBorderColor duration-200 origin-left ${
            open && "lg:block"
          } hidden`}
        >
          Members
        </span>
      </div>
      <div className="lg:flex lg:gap-x-4 lg:items-center mb-[20px] mr-1 lg:mr-0">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className=" mr-[10px] text-filterBorderColor cursor-pointer duration-500"
          >
            <path
              d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M2 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85-.52-.9-.21-2.07.7-2.59l1.73-.99c.79-.47 1.81-.19 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19c.47-.79 1.49-1.07 2.28-.6l1.73.99c.91.52 1.22 1.69.7 2.59-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76c0 1.04-.85 1.9-1.9 1.9-1.81 0-2.55 1.28-1.64 2.85.52.91.21 2.07-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19c-.47.79-1.49 1.07-2.28.6l-1.73-.99a1.899 1.899 0 0 1-.7-2.59c.91-1.57.17-2.85-1.64-2.85-1.05 0-1.9-.86-1.9-1.9Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>

        <span
          className={`text-[16px] font-medium leading-[19px] text-filterBorderColor duration-200 origin-left ${
            open && "lg:block"
          } hidden`}
        >
          Settings
        </span>
      </div>
      <hr
        className={`w-[224px] border border-solid border-hrColor mt-4  duration-500  ${
          open && "lg:block"
        } hidden`}
      />
      </div>
      <div className={`duration-500  ${
          !open && "hidden"
        }`}>
        <div className="flex items-center gap-[100px] mt-4 text-descFontColor">
          <span className="text-[12px]">MY PROJECTS</span>
          <svg
            class=" h-5 w-5 "
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="w-[13.33px] h-[13.33px]"
          >
            <path
              d="M8 12h8M12 16V8M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div>
          <div className="flex items-center w-[225px] h-[39px] bg-activeColor rounded-[6px] mt-4">
            <div className="w-[8px] h-[8px] bg-myProject1Color mx-2 rounded-full"></div>
            <span className="font-semibold text-[16px] text-optionColor leading-[19px]">
              Mobile App
            </span>
          </div>
          <div className="flex items-center w-[225px] h-[39px] rounded-[6px] mt-4">
            <div className="w-[8px] h-[8px] bg-onProgressColor mx-2 rounded-full"></div>
            <span className="font-medium text-[16px] text-descFontColor leading-[19px]">
              Website Redesign
            </span>
          </div>
          <div className="flex items-center w-[225px] h-[39px] rounded-[6px] mt-4">
            <div className="w-[8px] h-[8px] bg-myProject2Color mx-2 rounded-full"></div>
            <span className="font-medium text-[16px] text-descFontColor leading-[19px]">
              Design System
            </span>
          </div>
          <div className="flex items-center w-[225px] h-[39px] rounded-[6px] mt-4">
            <div className="w-[8px] h-[8px] bg-doneColor mx-2 rounded-full"></div>
            <span className="font-medium text-[16px] text-descFontColor leading-[19px]">
              Wireframes
            </span>
          </div>
        </div>

        <div className=" relative mt-20 rounded-2xl hidden md:block">
          <div className=" absolute inset-x-0 -top-12 flex items-center justify-center ">
            <div className=" bg-thoughtsColor flex h-16 w-16 items-center justify-center rounded-full  backdrop-blur-xl ">
              <div className="  rounded-full w-10 h-10 ">
                <div className=" absolute flex justify-center items-center backdrop-blur-md w-16 h-16 top-0 right-0 left-0 rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-thoughtsColor3"
                  >
                    <path
                    opacity={1}
                      d="M19.21 6.361c-1.04-2.1-3.05-3.65-5.38-4.16-2.44-.54-4.94.04-6.85 1.58a7.973 7.973 0 0 0-3.01 6.27c0 2.59 1.55 5.3 3.89 6.87v.83c-.01.28-.02.71.32 1.06.35.36.87.4 1.28.4h5.13c.54 0 .95-.15 1.23-.43.38-.39.37-.89.36-1.16v-.7c3.1-2.09 5.05-6.5 3.03-10.56Z"
                      fill="#FBCB18"
                    ></path>
                    <path
                      d="M15.26 21.998c-.06 0-.13-.01-.19-.03-2.01-.57-4.12-.57-6.13 0-.37.1-.76-.11-.86-.48a.69.69 0 0 1 .48-.86c2.26-.64 4.64-.64 6.9 0 .37.11.59.49.48.86-.1.31-.38.51-.68.51Z"
                      fill="#FBCB18"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-activeColor rounded-[16px] flex flex-col items-center justify-center space-y-5 px-10 lg:px-5 py-5 mb-20">
            <p className=" mt-3 font-medium text-black  text-[14px]">Thoughts Time</p>
            <p className=" text-center text-[12px] text-descFontColor ">
              We don't have any notice for you, till then you can share your
              thoughts with your peers.
            </p>
            <button className=" w-[166px] h-[40px] rounded bg-white px-6 lg:px-3 py-3 text-center text-[14px] font-medium text-black  ">
              Write a message
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};
