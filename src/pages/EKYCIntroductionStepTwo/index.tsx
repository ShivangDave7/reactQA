import React from "react";

import { Img, Heading, Text, Button } from "../../components";
import Header from "../../components/Header";
import Sidebar3 from "../../components/Sidebar3";

export default function EKYCIntroductionStepTwoPage() {
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
            <div className="bg-white-A700 flex flex-row justify-center p-20 rounded shadow-xs w-full">
              <div className="flex flex-col gap-[59px] items-center justify-start w-[46%]">
                <Heading
                  size="2xl"
                  as="h4"
                  className="!text-blue_gray-900 text-center"
                >
                  Introduction
                </Heading>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-5 w-full">
                    <div className="bg-white-A700 hover:border hover:border-indigo-50 hover:border-solid cursor-pointer flex flex-row justify-start p-[25px] rounded hover:shadow-bs1 shadow-md w-full">
                      <div className="flex flex-row gap-6 items-center justify-start ml-[7px] w-[97%]">
                        <div className="flex flex-row gap-5 items-center w-[88%]">
                          <Img
                            src="images/img_05_feature_other_blue_gray_800.svg"
                            alt="05feature"
                            className="h-7 w-7"
                          />
                          <div className="flex flex-col gap-[9px] items-start justify-end w-[86%]">
                            <Text
                              size="lg"
                              as="p"
                              className="!text-blue_gray-800"
                            >
                              Bước 1:
                            </Text>
                            <Heading size="lg" as="h6" className="">
                              Scan ID Card
                            </Heading>
                          </div>
                        </div>
                        <Img
                          src="images/img_check_circle.svg"
                          alt="checkcircle"
                          className="h-6 w-6"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 hover:border hover:border-indigo-50 hover:border-solid cursor-pointer flex flex-row justify-start p-[25px] rounded hover:shadow-bs1 shadow-md w-full">
                      <div className="flex flex-row gap-6 items-center justify-start ml-[7px] w-[97%]">
                        <div className="flex flex-row gap-5 items-center w-[88%]">
                          <Img
                            src="images/img_01_navigation_deep_orange_300.svg"
                            alt="01navigation"
                            className="h-7 w-7"
                          />
                          <div className="flex flex-col gap-[9px] items-start justify-end w-[86%]">
                            <Text
                              size="lg"
                              as="p"
                              className="!text-blue_gray-800"
                            >
                              Bước 1:
                            </Text>
                            <Heading size="lg" as="h6" className="">
                              Scan Face
                            </Heading>
                          </div>
                        </div>
                        <Img
                          src="images/img_arrow_right_blue_gray_900_24x24.svg"
                          alt="arrowright"
                          className="h-6 w-6"
                        />
                      </div>
                    </div>
                    <div className="hover:border border hover:border-indigo-50 border-indigo-50 hover:border-solid border-solid cursor-pointer flex flex-row justify-start p-[25px] rounded hover:shadow-bs1 shadow-md w-full">
                      <div className="flex flex-row gap-6 items-center justify-start ml-[7px] w-[97%]">
                        <div className="flex flex-row gap-5 items-center w-[88%]">
                          <div className="h-[30px] relative w-[9%]">
                            <Img
                              src="images/img_02_essential.svg"
                              alt="02essential"
                              className="absolute h-7 left-[0%] m-auto top-[0%]"
                            />
                            <Button
                              size="xs"
                              leftIcon={
                                <Img
                                  src="images/.png"
                                  alt="stroke"
                                  className="h-[13px] w-[13px]"
                                >
                                  <div />
                                </Img>
                              }
                              className="absolute bottom-[-2%] m-auto min-w-[16px] right-[0%]"
                            />
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-end py-0.5 w-[86%]">
                            <Text size="lg" as="p" className="">
                              Bước 3:
                            </Text>
                            <Heading size="lg" as="h6" className="">
                              Confirm Information
                            </Heading>
                          </div>
                        </div>
                        <Img
                          src="images/img_lock.svg"
                          alt="lock"
                          className="h-6 w-6"
                        />
                      </div>
                    </div>
                    <div className="hover:border border hover:border-indigo-50 border-indigo-50 hover:border-solid border-solid cursor-pointer flex flex-row justify-start p-[25px] rounded hover:shadow-bs1 shadow-md w-full">
                      <div className="flex flex-row gap-6 items-center justify-start ml-[7px] w-[97%]">
                        <div className="flex flex-row gap-5 items-center w-[88%]">
                          <Img
                            src="images/img_02_essential_blue_gray_400_28x28.svg"
                            alt="02essential"
                            className="h-7 w-7"
                          />
                          <div className="flex flex-col gap-2.5 items-start justify-start w-[86%]">
                            <Text size="lg" as="p" className="">
                              Bước 3:
                            </Text>
                            <Heading size="lg" as="h6" className="">
                              Signature
                            </Heading>
                          </div>
                        </div>
                        <Img
                          src="images/img_lock.svg"
                          alt="lock"
                          className="h-6 w-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
