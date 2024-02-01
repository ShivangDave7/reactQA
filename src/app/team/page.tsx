"use client";
import React from "react";

import { Text, Heading, Img, Button } from "../../components";
import CartSectionSubscribe from "../../components/CartSectionSubscribe";
import Footer from "../../components/Footer";

export default function TeamPage() {
  return (
    <div className="bg-gray-50 flex flex-col items-center justify-start w-full">
      <header className="bg-white-A700 flex items-center justify-center p-[35px] w-full">
        <div className="flex flex-row items-center justify-between max-w-[1290px] ml-10 w-full">
          <Img
            src="images/img_linkedin.svg"
            alt="linkedin"
            className="h-[30px]"
          />
          <ul className="flex flex-row gap-9 items-start justify-center">
            <li>
              <div className="flex flex-row items-center justify-between">
                <a href="/" target="_blank" rel="noreferrer" className="">
                  <Text as="p" className="tracking-[-0.50px]">
                    Home
                  </Text>
                </a>
                <Img
                  src="images/img_arrow_down.svg"
                  alt="arrow down"
                  className="h-6 w-6"
                />
              </div>
            </li>
            <li>
              <a href="#" className="">
                <Text as="p" className="tracking-[-0.50px]">
                  Shop
                </Text>
              </a>
            </li>
            <li>
              <a href="#" className="mt-[3px]">
                <Text as="p" className="tracking-[-0.50px]">
                  Blog
                </Text>
              </a>
            </li>
            <li>
              <a href="#" className="">
                <Text as="p" className="tracking-[-0.50px]">
                  About
                </Text>
              </a>
            </li>
            <li>
              <a href="#" className="">
                <Text as="p" className="tracking-[-0.50px]">
                  Contact
                </Text>
              </a>
            </li>
            <li>
              <a href="#" className="">
                <Text as="p" className="tracking-[-0.50px]">
                  Team
                </Text>
              </a>
            </li>
          </ul>
          <div className="flex flex-row gap-[30px] justify-between w-auto">
            <Img src="images/img_search.svg" alt="search" className="h-6 w-6" />
            <Img src="images/img_list.svg" alt="List" className="h-6 w-6" />
            <Img
              src="images/img_list_black_900.svg"
              alt="List"
              className="h-6 w-6"
            />
          </div>
        </div>
      </header>
      <div className="flex flex-row justify-start mt-[100px] px-[75px] w-full">
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-auto w-full">
          <div className="flex flex-col gap-3 items-center justify-start w-full">
            <Heading
              size="4xl"
              as="h1"
              className="text-center tracking-[-0.50px]"
            >
              Meet Our Team
            </Heading>
            <Text
              as="p"
              className="!text-gray-500 leading-[35px] text-center tracking-[-0.50px]"
            >
              We write various things related to furniture, from tips and what
              things <br />I need to pay attention to when choosing furniture
            </Text>
          </div>
          <div className="gap-5 grid grid-cols-3 justify-center min-h-[auto] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-7 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-[url(/images/img_group_13.png)] bg-cover bg-no-repeat flex flex-col h-[450px] items-center justify-end p-6 w-full">
                    <div className="flex flex-row justify-center mt-[352px] w-[55%]">
                      <Button
                        color="yellow_100"
                        size="6xl"
                        shape="circle"
                        className="w-[50px]"
                      >
                        <Img src="images/img_bxl_linkedin_1.svg" />
                      </Button>
                      <Button
                        color="gray_50_01"
                        size="6xl"
                        shape="circle"
                        className="ml-[25px] w-[50px]"
                      >
                        <Img src="images/img_bxl_facebook.svg" />
                      </Button>
                      <Button
                        color="gray_50_01"
                        size="6xl"
                        shape="circle"
                        className="ml-[25px] w-[50px]"
                      >
                        <Img src="images/img_bxl_twitter.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 items-center justify-start px-[118px] w-full">
                  <Heading
                    size="2xl"
                    as="h2"
                    className="text-center tracking-[-0.50px]"
                  >
                    Make Jhane
                  </Heading>
                  <Text
                    as="p"
                    className="!text-gray-500 text-center tracking-[-0.50px]"
                  >
                    Finance Manager
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_1487.png"
                  alt="Rectangle 1487"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                <Heading
                  size="2xl"
                  as="h2"
                  className="text-center tracking-[-0.50px]"
                >
                  Jinny Owen
                </Heading>
                <Text
                  as="p"
                  className="!text-gray-500 text-center tracking-[-0.50px]"
                >
                  Marketing Manager
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_1487_450x416.png"
                  alt="Rectangle 1487"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Heading
                  size="2xl"
                  as="h2"
                  className="text-center tracking-[-0.50px]"
                >
                  Mia Lobey
                </Heading>
                <Text
                  as="p"
                  className="!text-gray-500 mt-1 text-center tracking-[-0.50px]"
                >
                  Accountant
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-7 items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_1487_1.png"
                  alt="Rectangle 1487"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex flex-col gap-2.5 items-center justify-start px-[118px] w-full">
                <Heading
                  size="2xl"
                  as="h2"
                  className="text-center tracking-[-0.50px]"
                >
                  Make Jhane
                </Heading>
                <Text
                  as="p"
                  className="!text-gray-500 text-center tracking-[-0.50px]"
                >
                  Finance Manager
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_1487_2.png"
                  alt="Rectangle 1487"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                <Heading
                  size="2xl"
                  as="h2"
                  className="text-center tracking-[-0.50px]"
                >
                  Jinny Owen
                </Heading>
                <Text
                  as="p"
                  className="!text-gray-500 text-center tracking-[-0.50px]"
                >
                  Marketing Manager
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[30px] items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_1487_3.png"
                  alt="Rectangle 1487"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Heading
                  size="2xl"
                  as="h2"
                  className="text-center tracking-[-0.50px]"
                >
                  Mia Lobey
                </Heading>
                <Text
                  as="p"
                  className="!text-gray-500 mt-1 text-center tracking-[-0.50px]"
                >
                  Accountant
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start mt-[97px] px-[75px] w-full">
        <CartSectionSubscribe className="bg-gradient flex flex-row flex-wrap justify-start max-w-[1290px] mx-auto pl-[46px] py-[46px] w-full" />
      </div>
      <Footer className="bg-black-900 flex mt-[100px] p-12 w-full" />
    </div>
  );
}
