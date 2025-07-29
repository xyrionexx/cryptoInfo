import Image from "../assets/adam-nowakowski-D4LDw5eXhgg-unsplash.jpg";
import { Icon } from "@iconify/react";
import "./login.css";

export default function Login() {
  return (
    <>
      <div className="pageLogin w-screen flex justify-between h-screen">
        <div className="lefhSide"></div>
        <div className="rightSide flex flex-col justify-center items-center ">
          <h2 className="text-4xl text-white font-bold text-center">
            CREATE AN ACCOUNT
          </h2>
          <p className=" text-white text-2xl mt-2 mb-25 text-center">
            Authentication required to interact with the AI system
          </p>
          <div className="logInGoogle py-2 px-4 mt-10">
            <button className="text-white gap-4 flex justify-center items-center">
              <Icon
                icon="devicon:google"
                className="iconLogin"
                width="35"
                height="35"
              />{" "}
              Login Menggunakan Google Account
            </button>
          </div>
          <div className="logInGithub py-2 px-4 mt-5">
            <button className="text-white gap-4 flex justify-center items-center">
              <Icon
                icon="mdi:github"
                className="iconLogin"
                width="35"
                height="35"
              />{" "}
              Login Menggunakan Google Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
