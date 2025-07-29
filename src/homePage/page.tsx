import { Icon } from "@iconify/react";
import "./home.css";

export default function Homepage() {
  return (
    <>
      <div className="mainHome w-screen h-screen flex flex-col ">
        <div className="overlay h-screen w-screen"></div>
        <div className="nav flex h-20 items-center justify-between z-10">
          <h2 className="text-white logo ml-16 text-4xl">
            crypto<span>Info</span>
          </h2>
          <button className="signUp mr-18">Sign Up</button>
        </div>
        <div className="contentHome gap-2 flex w-screen h-screen flex-col  justify-center items-center z-10">
          <h2 className=" text-white logo text-6xl">
            Welcome To crypto<span>Info</span>
          </h2>
          <p className="desckContent  text-center">
            Make the best trading decisions with our real - time data
          </p>
          <div className="buttonDetailWeb flex gap-16 mt-2">
            <button className="buttonLestStarted">Lets get Started</button>
            <button className="buttonMoreDetail text-white flex justify-center items-center gap-1">
              More Detail
              <Icon
                icon="ep:right"
                className="iconRow"
                width="20"
                height="20"
                style={{ color: "#f8f8f8" }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
