import React from "react";

import { Button, Text, Img, Heading, SelectBox } from "../../components";
import Header from "../../components/Header";
import Sidebar2 from "../../components/Sidebar2";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function EKYCScanIDCardPage() {
  return (
    <div className="bg-gray-100_05 flex flex-row items-start w-full">
      <Sidebar2 className="!sticky !w-[243px] bg-white-A700 h-screen overflow-auto top-[0]" />
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
            <div className="bg-white-A700 flex flex-col gap-10 items-center justify-center p-8 rounded shadow-xs w-full">
              <div className="flex flex-col gap-10 items-center justify-start mt-4 w-full">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <div className="flex flex-col gap-5 items-center justify-end w-full">
                    <Heading
                      size="2xl"
                      as="h4"
                      className="!text-blue_gray-900 text-center"
                    >
                      Scan ID Card
                    </Heading>
                    <Text size="lg" as="p" className="text-center">
                      Please ensure that the image that you uploaded is clear
                      and not blurred
                    </Text>
                  </div>
                  <SelectBox
                    name="group"
                    placeholder="Select type of Card"
                    options={dropDownOptions}
                    className="border border-indigo-50 border-solid font-medium w-full"
                  />
                </div>
                <div className="flex flex-row gap-[23px] w-full">
                  <div className="border-2 border-dashed border-indigo-50 flex flex-row justify-center p-[79px] rounded w-full">
                    <div className="flex flex-col gap-[53px] items-center justify-start w-2/5">
                      <Heading
                        size="lg"
                        as="h6"
                        className="!font-semibold text-center"
                      >
                        Front
                      </Heading>
                      <div className="flex flex-col gap-6 items-center justify-start w-full">
                        <Button
                          color="red_50_02"
                          size="9xl"
                          className="rounded-[50%] w-14"
                        >
                          <Img src="images/img_plus_deep_orange_300.svg" />
                        </Button>
                        <Text
                          size="lg"
                          as="p"
                          className="!leading-[22px] text-center"
                        >
                          Drag or click to upload image
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-dashed border-indigo-50 flex flex-row justify-center p-[79px] rounded w-full">
                    <div className="flex flex-col gap-[53px] items-center justify-start w-2/5">
                      <Heading
                        size="lg"
                        as="h6"
                        className="!font-semibold text-center"
                      >
                        Back
                      </Heading>
                      <div className="flex flex-col gap-6 items-center justify-start w-full">
                        <Button
                          color="red_50_02"
                          size="9xl"
                          className="rounded-[50%] w-14"
                        >
                          <Img src="images/img_plus_deep_orange_300.svg" />
                        </Button>
                        <Text
                          size="lg"
                          as="p"
                          className="!leading-[22px] text-center"
                        >
                          Drag or click to upload image
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                color="deep_orange_300"
                className="font-bold mb-4 min-w-[270px] rounded-[24px]"
              >
                Next Step
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
