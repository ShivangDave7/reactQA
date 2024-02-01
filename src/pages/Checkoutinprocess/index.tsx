import React from "react";

import { Text, Heading, Img } from "../../components";
import Header from "../../components/Header";
import Sidebar4 from "../../components/Sidebar4";

export default function CheckoutinprocessPage() {
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
            <div className="bg-white-A700 flex flex-col gap-4 items-center justify-start p-56 rounded shadow-xs w-full">
              <Img
                src="images/img_credit_card_pay.svg"
                alt="creditcardpay"
                className="h-[270px] w-[270px]"
              />
              <div className="flex flex-col gap-3 items-center justify-end w-[97%]">
                <Heading
                  size="2xl"
                  as="h4"
                  className="!text-blue_gray-900 text-center"
                >
                  In Process...
                </Heading>
                <Text
                  size="lg"
                  as="p"
                  className="!text-blue_gray-900 text-center"
                >
                  Please wait a minute, your order is processing
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
