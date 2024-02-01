"use client";
import React from "react";

import { Button, Heading, Text, Input, Img } from "../../components";
import CartSectionSubscribe from "../../components/CartSectionSubscribe";
import Footer from "../../components/Footer";

export default function CartPage() {
  return (
    <div className="bg-gray-50 flex flex-col gap-[100px] items-center justify-start w-full">
      <div className="flex flex-col items-center justify-start w-full">
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
              <Img
                src="images/img_search.svg"
                alt="search"
                className="h-6 w-6"
              />
              <Img src="images/img_list.svg" alt="List" className="h-6 w-6" />
              <Img
                src="images/img_list_black_900.svg"
                alt="List"
                className="h-6 w-6"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-row justify-start pt-[75px] px-[75px] w-full">
          <div className="flex flex-col gap-[49px] items-center justify-start w-full">
            <Heading
              size="4xl"
              as="h1"
              className="text-center tracking-[-0.50px]"
            >
              Your Cart
            </Heading>
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row justify-evenly max-w-[813px] mx-auto w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col gap-[30px] w-[54%]">
                    <div className="flex flex-row gap-5 items-center justify-start w-full">
                      <Img
                        src="images/img_rectangle_1480.png"
                        alt="Rectangle 1480"
                        className="object-cover w-[120px]"
                      />
                      <div className="flex flex-col gap-[15px] items-start justify-start w-[68%]">
                        <Heading
                          as="h5"
                          className="!font-bold !leading-[35px] tracking-[-0.50px]"
                        >
                          Complete set of sofa, pillows and bed sheets
                        </Heading>
                        <Heading
                          as="h5"
                          className="!font-bold !font-poppins !text-blue_gray-900_01 tracking-[-0.50px]"
                        >
                          $ 75.00
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-row gap-5 items-center justify-start w-full">
                      <Img
                        src="images/img_rectangle_1480.png"
                        alt="Rectangle 1480"
                        className="object-cover w-[120px]"
                      />
                      <div className="flex flex-col gap-[15px] items-start justify-start w-[68%]">
                        <Heading
                          as="h5"
                          className="!font-bold tracking-[-0.50px]"
                        >
                          Teak wood chair
                        </Heading>
                        <Heading
                          as="h5"
                          className="!font-bold !font-poppins !text-blue_gray-900_01 tracking-[-0.50px]"
                        >
                          $ 24.00
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[100px] w-[41%]">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="border border-black-900 border-solid flex flex-row justify-start p-[5px] w-[36%]">
                        <div className="flex flex-row items-center justify-between ml-2.5 py-[5px] w-[82%]">
                          <Img
                            src="images/img_bx_minus_circle.svg"
                            alt="bx minus circle"
                            className="h-6 w-6"
                          />
                          <Text as="p" className="tracking-[-0.50px]">
                            1
                          </Text>
                          <Img
                            src="images/img_bx_plus_circle_1.svg"
                            alt="bx plus circle 1"
                            className="h-6 w-6"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-[49px] items-center justify-between w-auto">
                        <Heading
                          size="md"
                          as="h6"
                          className="tracking-[-0.50px]"
                        >
                          $ 75.00
                        </Heading>
                        <Button
                          color="gray_50_01"
                          size="6xl"
                          className="w-[50px]"
                        >
                          <Img src="images/img_frame_48096032.svg" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="border border-black-900 border-solid flex flex-row justify-start p-[5px] w-[36%]">
                        <div className="flex flex-row items-center justify-between ml-2.5 py-[5px] w-[82%]">
                          <Img
                            src="images/img_bx_minus_circle.svg"
                            alt="bx minus circle"
                            className="h-6 w-6"
                          />
                          <Text as="p" className="tracking-[-0.50px]">
                            1
                          </Text>
                          <Img
                            src="images/img_bx_plus_circle_1.svg"
                            alt="bx plus circle 1"
                            className="h-6 w-6"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-[49px] items-center justify-between w-auto">
                        <Heading
                          size="md"
                          as="h6"
                          className="tracking-[-0.50px]"
                        >
                          $ 75.00
                        </Heading>
                        <Button
                          color="gray_50_01"
                          size="6xl"
                          className="w-[50px]"
                        >
                          <Img src="images/img_frame_48096032.svg" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50_01 flex flex-row justify-start p-[27px] w-[33%]">
                <div className="flex flex-col items-start justify-start max-w-[362px] mx-auto my-1 pt-[5px] w-full">
                  <Heading as="h5" className="!font-bold tracking-[-0.50px]">
                    Cart Total
                  </Heading>
                  <div className="flex flex-col gap-5 items-center justify-start mt-8 w-full">
                    <div className="flex flex-row items-center justify-between py-0.5 w-full">
                      <Text
                        size="xl"
                        as="p"
                        className="!font-raleway !text-gray-500 tracking-[-0.50px]"
                      >
                        Subtotal
                      </Text>
                      <Heading
                        as="h5"
                        className="!font-poppins tracking-[-0.50px]"
                      >
                        $ 99.00
                      </Heading>
                    </div>
                    <div className="flex flex-row items-center justify-evenly w-full">
                      <Input
                        color="white_A700"
                        size="xs"
                        variant="fill"
                        name="Frame 48096036"
                        placeholder="Your Voucher"
                        className="w-[73%]"
                      />
                      <Button
                        size="4xl"
                        className="!text-yellow-100 font-semibold min-w-[98px] tracking-[-0.50px]"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                  <div className="bg-black-900 h-px mt-[27px] w-full" />
                  <div className="flex flex-row items-center justify-between mt-[26px] py-0.5 w-full">
                    <Text
                      size="xl"
                      as="p"
                      className="!font-raleway !text-gray-500 tracking-[-0.50px]"
                    >
                      Total
                    </Text>
                    <Heading
                      as="h5"
                      className="!font-poppins tracking-[-0.50px]"
                    >
                      $ 99.00
                    </Heading>
                  </div>
                  <Button
                    size="7xl"
                    className="!text-yellow-100 font-semibold mt-[27px] tracking-[-0.50px] w-full"
                  >
                    Checkout Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start px-[75px] w-full">
        <CartSectionSubscribe className="bg-gradient flex flex-row flex-wrap justify-start max-w-[1290px] mx-auto pl-[46px] py-[46px] w-full" />
      </div>
      <Footer className="bg-black-900 flex p-12 w-full" />
    </div>
  );
}
