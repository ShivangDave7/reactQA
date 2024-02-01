"use client";
import React from "react";

import { Button, Heading, Img, Text } from "../../components";
import CartSectionSubscribe from "../../components/CartSectionSubscribe";
import Footer from "../../components/Footer";
import Qaw from "../../components/Qaw";
import Qwd from "../../components/Qwd";

export default function WishlistPage() {
  return (
    <div className="bg-gray-50 flex flex-col gap-[100px] items-center justify-start w-full">
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
      <div className="flex flex-row justify-start px-[75px] w-full">
        <div className="flex flex-col gap-[49px] items-center justify-start max-w-[1290px] mx-auto w-full">
          <Heading
            size="4xl"
            as="h1"
            className="text-center tracking-[-0.50px]"
          >
            Wishlist
          </Heading>
          <div className="flex flex-col gap-[30px] w-full">
            <Qaw className="flex flex-row justify-between w-full" />
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-col gap-px">
                <Qwd className="flex flex-row justify-between w-full" />
              </div>
              <Heading size="md" as="h6" className="tracking-[-0.50px]">
                $ 24.00
              </Heading>
              <Heading
                size="md"
                as="h6"
                className="!text-deep_orange-A400 tracking-[-0.50px]"
              >
                Out Stock
              </Heading>
              <Button
                color="blue_gray_100"
                size="7xl"
                className="font-semibold min-w-[146px] my-[35px] tracking-[-0.50px]"
              >
                Add to Cart
              </Button>
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
