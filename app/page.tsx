"use client";
import React, { useEffect } from "react";
import { ConfigProvider } from "antd";
import theme from "../theme/themeConfig";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import Profile from "../public/fahmi.jpg";
import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Homepage(): JSX.Element {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <div className="flex justify-between items-center w-full h-[70px] bg-white px-10 text-[#383838]">
          <div>
            <p className="font-bold text-2xl uppercase tracking-widest">
              portfolio
            </p>
          </div>
          <nav className="flex justify-center items-center gap-10">
            <ul className="flex gap-10">
              <li className="text-lg font-bold cursor-pointer hover:text-orange-300">
                About
              </li>
              <li className="text-lg font-bold cursor-pointer hover:text-orange-300">
                Skills
              </li>
              <li className="text-lg font-bold cursor-pointer hover:text-orange-300">
                Projects
              </li>
            </ul>
            <div className="flex justify-center items-center gap-5">
              <AiOutlineInstagram size={25} />
              <BsLinkedin size={20} />
              <FaGithub size={25} />
            </div>
          </nav>
        </div>
        <div className="flex w-full h-screen bg-gradient-to-tr from-blue-300 via-white to-orange-300">
          <div
            data-aos="fade-right"
            className="flex-1 flex flex-col text-[#383838] justify-center items-center"
          >
            <div className="flex flex-col max-w-xl text-5xl font-black">
              <div>Hi 👋,</div>
              <div>I&apos;m Itmamul Fahmi</div>
              <div className="text-xl">
                Software Engineer | Fullstack Web Developer{" "}
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="flex-1 flex justify-center items-center"
          >
            <Image
              alt="fahmi"
              src={Profile}
              className="w-64 shadow-2xl rounded-lg"
            />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}
