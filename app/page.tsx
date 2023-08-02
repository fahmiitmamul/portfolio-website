import React from "react";
import { ConfigProvider } from "antd";
import theme from "../theme/themeConfig";

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <div className="App">
      <div className="flex justify-center items-center w-full h-[70px] bg-transparent fixed">
        <nav>
          <ul className="flex gap-10">
            <li className="text-lg font-bold cursor-pointer hover:text-[#30E3CA]">
              Home
            </li>
            <li className="text-lg font-bold cursor-pointer hover:text-[#30E3CA]">
              About
            </li>
            <li className="text-lg font-bold cursor-pointer hover:text-[#30E3CA]">
              Skills
            </li>
            <li className="text-lg font-bold cursor-pointer hover:text-[#30E3CA]">
              Projects
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex w-full h-[800px] body pt-[70px]">
        <div className="text-4xl"></div>
      </div>
    </div>
  </ConfigProvider>
);

export default HomePage;
