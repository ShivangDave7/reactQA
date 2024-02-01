import React from "react";

import { Button, Text, Heading, Img } from "../../components";
import Header from "../../components/Header";
import Sidebar4 from "../../components/Sidebar4";

export default function CheckoutSuccessfulPage() {
  return (
    <div className="bg-gray-100_05 flex flex-row items-start w-full">
      <Sidebar4 className="!sticky !w-[243px] bg-white-A700 h-screen overflow-auto top-[0]" />
      <div className="bg-indigo-50 h-[950px] w-px" />
      <div className="flex flex-col gap-8 items-center justify-start w-[84%]">
        <Header className="bg-white-A700 flex w-full" />
        <div className="flex flex-row justify-start px-6 w-full">
          <div className="flex flex-col gap-8 items-center justify-start w-full">
            <div className="flex flex-row items-end justify-between w-full">
              <Text
                size="3xl"
                as="p"
                className="!font-poppins !text-blue_gray-900"
              >
                Checkout
              </Text>
              <Text as="p" className="!font-normal mb-[3px] text-right">
                Shop Central/ Product detail/ Checkout
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-row justify-center p-[179px] rounded shadow-xs w-full">
              <div className="flex flex-col gap-[65px] items-center justify-start w-[86%]">
                <Img
                  src="images/img_group_18037.svg"
                  alt="group18037"
                  className="h-52"
                />
                <div className="flex flex-col gap-8 items-center justify-start w-full">
                  <div className="flex flex-col gap-1.5 items-center justify-start pt-[3px] w-full">
                    <Heading
                      size="2xl"
                      as="h4"
                      className="!text-blue_gray-900 text-center"
                    >
                      Congratulate! Order successfully
                    </Heading>
                    <Text
                      size="lg"
                      as="p"
                      className="!leading-[22px] !text-blue_gray-900 text-center"
                    >
                      Your order receipt has been sent to your mail:
                      user@gmail.com. <br />
                      Please check your mail
                    </Text>
                  </div>
                  <Button
                    color="deep_orange_300"
                    className="font-bold min-w-[207px] rounded-[24px]"
                  >
                    Review product
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
