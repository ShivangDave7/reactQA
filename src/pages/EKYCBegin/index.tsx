import React from "react";

import { Button, Text, Heading, Img } from "../../components";
import Header from "../../components/Header";
import Sidebar3 from "../../components/Sidebar3";

export default function EKYCBeginPage() {
  return (
    <div className="bg-gray-100_05 flex flex-row items-start w-full">
      <Sidebar3 className="!sticky !w-[243px] bg-white-A700 h-screen overflow-auto top-[0]" />
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
                eKYC
              </Text>
              <Text as="p" className="!font-normal mb-[5px] text-right">
                Setting/ eKYC
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-row justify-center p-[124px] rounded shadow-xs w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-[30%]">
                <Img
                  src="images/img_pay_with_credit_card.svg"
                  alt="paywithcredit"
                  className="h-56 w-56"
                />
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-start pt-[3px] w-full">
                    <Heading
                      as="h6"
                      className="!text-blue_gray-900 text-center"
                    >
                      eKYC Verification
                    </Heading>
                    <Text
                      size="lg"
                      as="p"
                      className="!leading-[22px] !text-blue_gray-900 text-center"
                    >
                      Your information has been verified to ensure your payment
                      safely
                    </Text>
                  </div>
                  <Button
                    color="deep_orange_300"
                    className="font-bold rounded-[24px] w-full"
                  >
                    Verify now
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
