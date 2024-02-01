import React from "react";

import { Button, Text, Heading, Img } from "../../components";
import Header from "../../components/Header";
import Sidebar3 from "../../components/Sidebar3";

export default function EKYCSuccessfulPage() {
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
            <div className="bg-white-A700 flex flex-col gap-[58px] items-center justify-start p-[114px] rounded shadow-xs w-full">
              <Img
                src="images/img_thumbs_up_1.svg"
                alt="thumbsupone"
                className="h-[342px] w-[342px]"
              />
              <div className="flex flex-col gap-3 items-center justify-start w-[74%]">
                <Heading
                  size="2xl"
                  as="h4"
                  className="!text-blue_gray-900 text-center"
                >
                  Yeahhh! Your account has been verified
                </Heading>
                <Text
                  size="lg"
                  as="p"
                  className="!text-blue_gray-900 text-center"
                >
                  Thank for your patient. Your account has been protected
                </Text>
              </div>
              <Button
                color="deep_orange_300"
                className="font-bold min-w-[270px] rounded-[24px]"
              >
                Finish process
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
