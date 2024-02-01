import React from "react";

import { Img, Heading } from "./..";
import { Menu, Sidebar, useProSidebar } from "react-pro-sidebar";

interface Props {
  className?: string;
}

export default function Sidebar3({ ...props }: Props) {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <Sidebar
      {...props}
      onClick={() => {
        collapseSidebar(!collapsed);
      }}
    >
      {!collapsed ? (
        <Img
          src="images/img_logo.svg"
          alt="logo"
          className="h-7 mt-9 mx-auto"
        />
      ) : null}
      <Menu
        menuItemStyles={{
          button: {
            padding: " ",
            margin: " ",
          },
        }}
        className="flex flex-col items-center justify-start mb-[523px] mt-9 px-8 w-full"
      >
        <div className="flex flex-col gap-[34.00px] items-start justify-start w-full">
          <div className="flex flex-row gap-4 items-start justify-start w-[52%]">
            <Img
              src="images/img_icon_blue_gray_400.svg"
              alt="icon"
              className="h-5 w-5"
            />
            <div className="font-medium text-blue_gray-400 text-left text-sm w-4/5">
              Dashboard
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-[52%]">
            <Img
              src="images/img_icon_blue_gray_400_20x20.svg"
              alt="icon_One"
              className="h-5 w-5"
            />
            <div className="font-medium text-blue_gray-400 text-left text-sm w-[73%]">
              Customer
            </div>
          </div>
          <div className="flex flex-row items-start justify-start w-[52%]">
            <Img
              src="images/img_icon_20x20.svg"
              alt="icon_Two"
              className="h-5 w-5"
            />
            <div className="font-medium ml-4 mt-1 text-blue_gray-400 text-left text-sm w-[66%]">
              Message
            </div>
            <div className="bg-red-600 h-6 ml-14 rounded-[50%] w-6">
              <Heading
                size="s"
                as="p"
                className="!text-white-A700 mx-auto my-1 text-center"
              >
                3
              </Heading>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-[52%]">
            <Img
              src="images/img_icon_1.svg"
              alt="icon_Three"
              className="h-5 w-5"
            />
            <div className="font-medium text-blue_gray-400 text-left text-sm w-[26%]">
              File
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-[52%]">
            <Img
              src="images/img_icon_2.svg"
              alt="icon_Four"
              className="h-5 w-5"
            />
            <div className="font-medium text-blue_gray-400 text-left text-sm w-[68%]">
              Calender
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start pr-[21px] w-[52%]">
            <Img
              src="images/img_icon_4.svg"
              alt="icon_Five"
              className="h-5 w-5"
            />
            <div className="font-medium mt-[3px] text-blue_gray-400 text-left text-sm w-[49%]">
              Shop
            </div>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-[52%]">
            <Img
              src="images/img_icon_3.svg"
              alt="icon_Six"
              className="h-5 w-5"
            />
            <div className="font-medium text-blue_gray-400 text-left text-sm w-[32%]">
              Cart
            </div>
          </div>
          <div className="flex flex-row gap-[17px] items-start justify-start w-[52%]">
            <div className="h-[18px] w-[18px]" />
            <div className="font-medium text-blue_gray-400 text-left text-sm w-[61%]">
              Settings
            </div>
          </div>
        </div>
      </Menu>
    </Sidebar>
  );
}
