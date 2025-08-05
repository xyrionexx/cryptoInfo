"use client";
import { Icon } from "@iconify/react";
import "./siderbar.css";
import React, { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div
        className={`sideBar h-screen w-16 justify-between flex flex-col  transition-all duration-700 z-50 ${
          isOpen ? "mobile w-52" : "w-16"
        }`}
      >
        <div className="titleSideBar flex mt-3 flex-col duration-700">
          <button onClick={toggleSidebar} className="icon duration-700">
            <i>
              <Icon
                className="text-white"
                icon="codicon:menu"
                width="24"
                height="24"
              />
            </i>
            {isOpen ? false : true}
          </button>

          <div
            className={`mainCourseContent flex flex-col mt-5 ${
              isOpen ? " mainCourseMobile transition-all  " : false
            }`}
            style={{ gap: "10px" }}
          >
            <button
              className={`icon relative  transition-all delay-150 duration-300 ${
                isOpen ? " items-center relative gap-2  " : false
              }`}
            >
              <Icon
                icon="material-symbols:home-rounded"
                width="24"
                height="24"
                style={{ color: "#f8f8f8" }}
              />
              <p
                className={` absolute left-8 top-1 text-white transition-all  ${
                  isOpen
                    ? " opacity-100 translate-x-0 duration-700 delay-150 "
                    : "opacity-0 scale-95 pointer-events-none duration-150 delay-75"
                }`}
              >
                Homepage
              </p>
            </button>
            <button
              className={`icon relative  transition-all delay-150 duration-300 ${
                isOpen ? " items-center relative gap-2 " : false
              }`}
            >
              <Icon
                icon="mdi:user"
                width="24"
                height="24"
                style={{ color: "#f8f8f8" }}
              />
              <p
                className={` absolute left-8 top-1 text-white transition-all  ${
                  isOpen
                    ? " opacity-100 translate-x-0 duration-700 delay-150 "
                    : "opacity-0 scale-95 pointer-events-none duration-150 delay-75"
                }`}
              >
                Portofolio
              </p>
            </button>
            <button
              className={`icon relative  transition-all delay-150 duration-300 ${
                isOpen ? " items-center relative gap-2 " : false
              }`}
            >
              <Icon
                icon="mingcute:ai-line"
                width="24"
                height="24"
                style={{ color: "#f8f8f8" }}
              />
              <p
                className={` absolute left-8 top-1 text-white transition-all  ${
                  isOpen
                    ? " opacity-100 translate-x-0 duration-700 delay-150 "
                    : "opacity-0 scale-95 pointer-events-none duration-150 delay-75"
                }`}
              >
                Artificial
              </p>
            </button>
          </div>
        </div>

        <div className={`logOut mb-5 ${isOpen ? " mobileLogOut" : false}`}>
          <button
            className={`icon relative  transition-all delay-150 duration-300 ${
              isOpen ? " items-center relative gap-2  " : false
            }`}
          >
            <Icon
              icon="material-symbols:logout-rounded"
              width="24"
              height="24"
              style={{ color: "#f8f8f8" }}
            />
            <p
              className={` absolute left-8 top-1 text-white transition-all  ${
                isOpen
                  ? " opacity-100 translate-x-0 duration-700 delay-150 "
                  : "opacity-0 scale-95 pointer-events-none duration-150 delay-75"
              }`}
            >
              LogOut
            </p>
          </button>
        </div>
      </div>
    </>
  );
}
