"use client";
import React from "react";

import { Button, TextArea, Heading, Input, Img, Text } from "../../components";
import CartSectionSubscribe from "../../components/CartSectionSubscribe";
import Footer1 from "../../components/Footer1";
import Header1 from "../../components/Header1";

export default function ContactusPage() {
  return (
    <div className="bg-gray-50 flex flex-col items-center justify-start w-full">
      <div className="flex flex-col gap-[75px] items-center justify-start w-full">
        <Header1 className="bg-white-A700 flex p-[35px] w-full" />
        <div className="flex flex-row justify-start px-[75px] w-full">
          <div className="flex flex-row justify-start max-w-[1291px] mx-auto w-full">
            <div className="flex flex-row justify-evenly w-full">
              <div className="bg-[url(/images/img_group_47.png)] bg-cover bg-no-repeat flex flex-row h-[450px] items-center justify-start p-[70px] w-full">
                <div className="flex flex-col gap-[30px] items-start justify-start w-[41%]">
                  <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                    <Heading
                      size="md"
                      as="h6"
                      className="!text-yellow-100 tracking-[-0.50px]"
                    >
                      Best Room Decor Items
                    </Heading>
                    <Heading
                      size="3xl"
                      as="h1"
                      className="!text-white-A700 text-6xl tracking-[-0.50px]"
                    >
                      Our goods have the best quality and materials in the world
                    </Heading>
                  </div>
                  <Button
                    color="yellow_100"
                    size="8xl"
                    className="font-bold font-poppins min-w-[170px] tracking-[-0.50px]"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start mt-[99px] px-[75px] w-full">
        <div className="flex flex-row items-center justify-between max-w-[1291px] mx-auto w-full">
          <div className="flex flex-row justify-evenly w-[48%]">
            <div className="flex flex-col gap-[41px] items-start justify-start w-full">
              <Heading size="2xl" as="h2" className="tracking-[-0.50px]">
                Frequently asked questions
              </Heading>
              <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                <div className="flex flex-col gap-[29px] w-full">
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text size="2xl" as="p" className="!font-raleway">
                        How to buy a product?
                      </Text>
                      <Img
                        src="images/img_icon_plus.svg"
                        alt="Icon   Plus"
                        className="h-6 w-6"
                      />
                    </div>
                    <div className="bg-black-900_19 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text size="2xl" as="p" className="!font-raleway">
                        How can I make refund from your website?
                      </Text>
                      <Img
                        src="images/img_icon_plus.svg"
                        alt="Icon   Plus"
                        className="h-6 w-6"
                      />
                    </div>
                    <div className="bg-black-900_19 h-px w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                      <Text
                        size="2xl"
                        as="p"
                        className="!font-raleway !text-blue_gray-900_01"
                      >
                        How to buy a product?
                      </Text>
                      <Img
                        src="images/img_icon_minus.svg"
                        alt="Icon   Minus"
                        className="h-6 w-6"
                      />
                    </div>
                    <Text
                      size="s"
                      as="p"
                      className="!text-gray-500 leading-[35px] tracking-[-0.50px]"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Id a enim, consectetur cursus. At mattis nulla in pretium.
                      Condimentum sagittis mauris augue maecenas fusce commodo
                      neque purus et. Integer eu amet at pretium id ultrices
                      faucibus. In vestibulum pretium, potenti molestie.
                    </Text>
                  </div>
                  <div className="bg-black-900_19 h-px w-full" />
                </div>
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text size="2xl" as="p" className="!font-raleway">
                      Why can’t I select next day delivery?
                    </Text>
                    <Img
                      src="images/img_icon_plus.svg"
                      alt="Icon   Plus"
                      className="h-6 w-6"
                    />
                  </div>
                  <div className="bg-black-900_19 h-px w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[23px] items-start justify-start w-[48%]">
            <a href="#" className="">
              <Heading size="xl" as="h4" className="tracking-[-0.50px]">
                Contact Us
              </Heading>
            </a>
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <div className="flex flex-col gap-[31px] items-center justify-start w-full">
                <div className="flex flex-row gap-4 justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-[49%]">
                    <Heading size="md" as="h6" className="tracking-[-0.50px]">
                      Your Name
                    </Heading>
                    <Input
                      name="Frame 48096015"
                      placeholder="Write your name here...."
                      className="w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-[49%]">
                    <Heading size="md" as="h6" className="tracking-[-0.50px]">
                      Your Email
                    </Heading>
                    <Input
                      name="Frame 48096015"
                      placeholder="Write your email here...."
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Heading size="md" as="h6" className="tracking-[-0.50px]">
                    Your Comment
                  </Heading>
                  <TextArea
                    name="Frame 48096017"
                    placeholder="Write your review here...."
                    className="text-gray-500 tracking-[-0.50px] w-full"
                  />
                </div>
              </div>
              <Button
                size="7xl"
                className="border-2 border-blue_gray-900_01 border-solid font-medium font-poppins min-w-[140px] tracking-[-0.50px]"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start mt-[100px] px-[75px] w-full">
        <CartSectionSubscribe className="bg-gradient flex flex-row flex-wrap justify-start max-w-[1291px] mx-auto pl-[46px] py-[46px] w-full" />
      </div>
      <Footer1 className="bg-black-900 flex mt-[100px] p-12 w-full" />
    </div>
  );
}
