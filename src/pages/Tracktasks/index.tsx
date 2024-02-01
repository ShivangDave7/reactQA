import React from "react";

import { Button, Text, Img, Heading } from "../../components";
import Header from "../../components/Header";
import Sidebar2 from "../../components/Sidebar2";

export default function TracktasksPage() {
  return (
    <div className="bg-white-A700_01 flex flex-row w-full">
      <div className="flex flex-row items-start justify-start w-full">
        <Sidebar2 className="!sticky !w-[243px] bg-white-A700 h-screen overflow-auto top-[0]" />
        <div className="bg-indigo-50 h-[950px] w-px" />
        <div className="flex flex-col gap-[25px] items-center justify-start w-[84%]">
          <Header className="bg-white-A700 flex w-full" />
          <div className="flex flex-row justify-start px-6 w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="flex flex-row items-start justify-between pt-[3px] w-full">
                <Text
                  size="3xl"
                  as="p"
                  className="!font-poppins !text-blue_gray-900"
                >
                  Product design
                </Text>
                <Text as="p" className="!font-normal !font-poppins text-right">
                  File management/ Product design
                </Text>
              </div>
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="bg-white-A700 flex flex-row justify-evenly py-6 rounded shadow-xs w-full">
                  <div className="flex flex-col gap-[31px] items-center justify-start px-8 w-full">
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row gap-4">
                          <Img
                            src="images/img_carret_up.svg"
                            alt="carretup"
                            className="h-6 w-6"
                          />
                          <div className="flex flex-row gap-3 justify-start w-4/5">
                            <Img
                              src="images/img_line_indigo_400.svg"
                              alt="lineone"
                              className="h-6 w-6"
                            />
                            <Text
                              as="p"
                              className="!font-normal !font-poppins !text-blue_gray-900 text-center"
                            >
                              In process (10)
                            </Text>
                          </div>
                        </div>
                        <Button
                          size="5xl"
                          className="font-semibold min-w-[98px] rounded-[20px]"
                        >
                          Edit{" "}
                        </Button>
                      </div>
                      <div className="bg-indigo-50 h-px w-full" />
                    </div>
                    <div className="flex flex-row gap-[10.5px] w-full">
                      <div className="border-2 border-dashed border-indigo-50 cursor-pointer flex flex-col gap-[39px] items-center justify-center p-[55px] rounded hover:shadow-xs w-full">
                        <Button
                          color="red_50_02"
                          size="9xl"
                          className="mt-[17px] rounded-[50%] w-14"
                        >
                          <Img src="images/img_plus_deep_orange_300.svg" />
                        </Button>
                        <div className="flex flex-col gap-2 items-center justify-start mb-[17px] w-full">
                          <Heading
                            size="lg"
                            as="h6"
                            className="!font-poppins text-center"
                          >
                            Add file
                          </Heading>
                          <Text
                            size="lg"
                            as="p"
                            className="!font-poppins !leading-[22px] !text-blue_gray-800 text-center"
                          >
                            Add file to manage your vital task
                          </Text>
                        </div>
                      </div>
                      <div className="bg-indigo-400 h-[5px] w-[5px]" />
                      <div className="bg-white-A700 border-2 border-dashed border-indigo-50 cursor-pointer flex flex-col gap-6 items-center justify-center p-[31px] rounded hover:shadow-xs shadow-xs w-full">
                        <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                          <Heading
                            as="h6"
                            className="!font-poppins !text-blue_gray-900"
                          >
                            LD presentation file
                          </Heading>
                          <Text
                            size="lg"
                            as="p"
                            className="!font-poppins !leading-[22px] !text-blue_gray-800"
                          >
                            Introduction about LD
                            <br />
                            Project in detail
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start pb-[23px] pr-[23px] w-full">
                          <Text
                            as="p"
                            className="!font-normal !font-poppins !text-blue_gray-900"
                          >
                            Process (80%)
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                          <Text
                            as="p"
                            className="!font-normal !font-poppins !text-blue_gray-900"
                          >
                            Members
                          </Text>
                          <div className="flex flex-row justify-between w-full">
                            <Img
                              src="images/img_frame_white_a700.png"
                              alt="frame"
                              className="h-8 object-cover"
                            />
                            <Button size="4xl" className="rounded-[50%] w-8">
                              <Img src="images/img_button_primary_blue_gray_900.svg" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-indigo-400 h-[5px] w-[5px]" />
                      <div className="bg-white-A700 border-2 border-dashed border-indigo-50 cursor-pointer flex flex-col gap-6 items-center justify-center p-[31px] rounded hover:shadow-xs shadow-xs w-full">
                        <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                          <Heading
                            as="h6"
                            className="!font-poppins !text-blue_gray-900"
                          >
                            Urgent Tasks
                          </Heading>
                          <Text
                            size="lg"
                            as="p"
                            className="!font-poppins !leading-[22px] !text-blue_gray-800"
                          >
                            Introduction about LD
                            <br />
                            Project in detail
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start pb-[23px] pr-[23px] w-full">
                          <Text
                            as="p"
                            className="!font-normal !font-poppins !text-blue_gray-900"
                          >
                            Process (10%)
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                          <Text
                            as="p"
                            className="!font-normal !font-poppins !text-blue_gray-900"
                          >
                            Members
                          </Text>
                          <div className="flex flex-row justify-between w-full">
                            <Img
                              src="images/img_frame_white_a700.png"
                              alt="frame"
                              className="h-8 object-cover"
                            />
                            <Button size="4xl" className="rounded-[50%] w-8">
                              <Img src="images/img_button_primary_blue_gray_900.svg" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="bg-indigo-400 h-[5px] w-[5px]" />
                      <div className="bg-white-A700 border-2 border-dashed border-indigo-50 cursor-pointer flex flex-col items-center justify-center p-[31px] rounded hover:shadow-xs shadow-xs w-full">
                        <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                          <Heading
                            as="h6"
                            className="!font-poppins !text-blue_gray-900"
                          >
                            Plan for 2022
                          </Heading>
                          <Text
                            size="lg"
                            as="p"
                            className="!font-poppins !leading-[22px] !text-blue_gray-800"
                          >
                            Introduction about LD
                            <br />
                            Project in detail
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start mt-6 pb-[23px] pr-[23px] w-full">
                          <Text
                            as="p"
                            className="!font-normal !font-poppins !text-blue_gray-900"
                          >
                            Process (0%)
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[15px] items-start justify-start mt-6 w-full">
                          <Text
                            as="p"
                            className="!font-normal !font-poppins !text-blue_gray-900"
                          >
                            Members
                          </Text>
                          <div className="flex flex-row justify-between w-full">
                            <Img
                              src="images/img_group_32x32.png"
                              alt="group"
                              className="object-cover w-8"
                            />
                            <Button size="4xl" className="rounded-[50%] w-8">
                              <Img src="images/img_button_primary_blue_gray_900.svg" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 w-full">
                  <div className="bg-white-A700 flex flex-row gap-[813px] items-center p-6 rounded shadow-xs w-full">
                    <div className="flex flex-row gap-4 justify-center ml-2 w-[16%]">
                      <Img
                        src="images/img_carret_down.svg"
                        alt="carretdown"
                        className="h-6 w-6"
                      />
                      <div className="flex flex-row gap-3 justify-start w-[78%]">
                        <Img
                          src="images/img_line_indigo_400.svg"
                          alt="line"
                          className="h-6 w-6"
                        />
                        <Text
                          as="p"
                          className="!font-normal !font-poppins !text-blue_gray-900 text-center"
                        >
                          In review (0)
                        </Text>
                      </div>
                    </div>
                    <Button
                      size="5xl"
                      className="font-semibold min-w-[98px] mr-2 rounded-[20px]"
                    >
                      Edit{" "}
                    </Button>
                  </div>
                  <div className="bg-white-A700 flex flex-row gap-[818px] items-center p-6 rounded shadow-xs w-full">
                    <div className="flex flex-row gap-4 justify-center ml-2 w-[16%]">
                      <Img
                        src="images/img_carret_down.svg"
                        alt="carretdown"
                        className="h-6 w-6"
                      />
                      <div className="flex flex-row gap-3 justify-start w-[77%]">
                        <Img
                          src="images/img_line_indigo_400.svg"
                          alt="line"
                          className="h-6 w-6"
                        />
                        <Text
                          as="p"
                          className="!font-normal !font-poppins !text-blue_gray-900 text-center"
                        >
                          Finished (0)
                        </Text>
                      </div>
                    </div>
                    <Button
                      size="5xl"
                      className="font-semibold min-w-[98px] mr-2 rounded-[20px]"
                    >
                      Edit{" "}
                    </Button>
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
