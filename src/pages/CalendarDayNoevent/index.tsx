import React from "react";

import { Text, Img, Heading, Button } from "../../components";
import Header from "../../components/Header";
import Sidebar11 from "../../components/Sidebar11";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function CalendarDayNoeventPage() {
  return (
    <div className="bg-white-A700 flex flex-row items-start pb-[74px] w-full">
      <Sidebar11 className="!sticky !w-[243px] bg-white-A700 h-screen overflow-auto top-[0]" />
      <div className="bg-indigo-50 h-[950px] w-px" />
      <div className="flex flex-col gap-6 items-center justify-start w-[84%]">
        <Header className="bg-white-A700 flex w-full" />
        <div className="flex flex-row justify-start px-6 w-full">
          <div className="flex flex-col gap-[33px] items-start justify-start w-full">
            <Text
              size="3xl"
              as="p"
              className="!font-poppins !text-blue_gray-900"
            >
              Calendar
            </Text>
            <div className="flex flex-row gap-5 items-center w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-xs w-[24%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <Text size="lg" as="p" className="!leading-[22px]">
                      Click in the calendar to create event
                    </Text>
                    <Button
                      color="deep_orange_300"
                      rightIcon={
                        <Img
                          src="images/img_plus_white_a700.svg"
                          alt="plus"
                          className="ml-[5px]"
                        />
                      }
                      className="font-semibold rounded-[24px] w-full"
                    >
                      Create new event
                    </Button>
                  </div>
                  <div className="flex flex-col gap-2.5 mt-8 pb-[33px] w-full">
                    <div className="flex flex-row gap-2 items-center justify-start pb-[3px] w-full">
                      <div className="bg-green-700 h-2 mb-1 mt-2 rounded-[50%] w-2" />
                      <Text as="p" className="!text-blue_gray-800">
                        New Event
                      </Text>
                    </div>
                    <div className="bg-indigo-50 h-px w-full" />
                    <div className="flex flex-row gap-2 items-center justify-start w-full">
                      <div className="bg-indigo-400 h-2 my-1.5 rounded-[50%] w-2" />
                      <Text as="p" className="!text-blue_gray-800">
                        My Event Only
                      </Text>
                    </div>
                    <div className="bg-indigo-50 h-px w-full" />
                    <div className="flex flex-row gap-2 items-center justify-start w-full">
                      <div className="bg-amber-300 h-2 my-1.5 rounded-[50%] w-2" />
                      <Text as="p" className="!text-blue_gray-800">
                        Meeting
                      </Text>
                    </div>
                    <div className="bg-indigo-50 h-px w-full" />
                    <div className="flex flex-row gap-2 items-center justify-start pb-[3px] w-full">
                      <div className="bg-red-600 h-2 mb-1 mt-2 rounded-[50%] w-2" />
                      <Text as="p" className="!text-blue_gray-800">
                        Error
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-9 items-start justify-start mt-[31px] w-full">
                    <Text size="lg" as="p" className="">
                      Team members
                    </Text>
                    <div className="flex flex-col gap-5 w-full">
                      <div className="flex flex-row gap-[37px] w-full">
                        <div className="flex flex-row gap-2 items-start justify-start py-0.5 w-[34%]">
                          <Img
                            src="images/img_.svg"
                            alt="seven"
                            className="h-[22px]"
                          />
                          <Text as="p" className="!text-blue_gray-900">
                            @Avo
                          </Text>
                        </div>
                        <Button
                          color="gray_100_04"
                          size="2xl"
                          shape="round"
                          className="font-medium min-w-[102px]"
                        >
                          Lead design
                        </Button>
                      </div>
                      <div className="flex flex-row gap-[25px] w-full">
                        <div className="flex flex-row gap-2 items-start justify-start py-0.5 w-2/5">
                          <Img
                            src="images/img_.svg"
                            alt="eight"
                            className="h-[22px]"
                          />
                          <Text as="p" className="!text-blue_gray-900">
                            @Nhun
                          </Text>
                        </div>
                        <Button
                          color="gray_100_04"
                          size="2xl"
                          shape="round"
                          className="font-medium min-w-[101px]"
                        >
                          Product design
                        </Button>
                      </div>
                      <div className="flex flex-row gap-[42px] w-full">
                        <div className="flex flex-row gap-2 items-start justify-start py-0.5 w-[32%]">
                          <Img
                            src="images/img_.svg"
                            alt="nine"
                            className="h-[22px]"
                          />
                          <Text as="p" className="!text-blue_gray-900">
                            @Riri
                          </Text>
                        </div>
                        <Button
                          color="gray_100_04"
                          size="2xl"
                          shape="round"
                          className="font-medium min-w-[101px]"
                        >
                          Product design
                        </Button>
                      </div>
                      <div className="flex flex-row gap-[35px] w-full">
                        <div className="flex flex-row gap-2 items-start justify-start py-0.5 w-[35%]">
                          <Img
                            src="images/img_.svg"
                            alt="ten"
                            className="h-[22px]"
                          />
                          <Text as="p" className="!text-blue_gray-900">
                            @Juki
                          </Text>
                        </div>
                        <Button
                          color="gray_100_04"
                          size="2xl"
                          shape="round"
                          className="font-medium min-w-[101px]"
                        >
                          Product design
                        </Button>
                      </div>
                      <div className="flex flex-row gap-[30px] w-full">
                        <div className="flex flex-row gap-2 items-start justify-start py-0.5 w-[38%]">
                          <Img
                            src="images/img_.svg"
                            alt="eleven"
                            className="h-[22px]"
                          />
                          <Text as="p" className="!text-blue_gray-900">
                            @Nobi
                          </Text>
                        </div>
                        <Button
                          color="gray_100_04"
                          size="2xl"
                          shape="round"
                          className="font-medium min-w-[101px]"
                        >
                          Product design
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    leftIcon={
                      <Img
                        src="images/img_plus.svg"
                        alt="plus"
                        className="mr-2"
                      />
                    }
                    className="mt-8 text-deep_orange-300 w-full"
                  >
                    Add member
                  </Button>
                </div>
              </div>
              <Tabs
                className="bg-white-A700 flex flex-col gap-[30px] items-center justify-start p-[26px] rounded shadow-xs w-3/4"
                selectedTabClassName="!text-white-A700 bg-blue_gray-900 rounded-[20px]"
                selectedTabPanelClassName="py-3 relative tab-panel--selected"
              >
                <div className="flex flex-row justify-between w-full">
                  <div className="flex flex-row gap-[35px] items-end w-[42%]">
                    <Heading
                      size="2xl"
                      as="h4"
                      className="!text-blue_gray-900 mb-0.5"
                    >
                      24 January 2022
                    </Heading>
                    <div className="flex flex-row gap-4 w-[30%]">
                      <Button size="6xl" className="rounded-[50%] w-10">
                        <Img src="images/img_arrowdown.svg" />
                      </Button>
                      <Button size="6xl" className="rounded-[50%] w-10">
                        <Img src="images/img_arrow_right_blue_gray_900.svg" />
                      </Button>
                    </div>
                  </div>
                  <TabList className="flex flex-row justify-between p-2.5 w-auto">
                    <Tab className="font-semibold ml-3.5 text-blue_gray-800 text-center text-sm">
                      Day
                    </Tab>
                    <Tab className="font-semibold text-blue_gray-800 text-center text-sm">
                      Week
                    </Tab>
                    <Tab className="font-semibold mr-[5px] text-center text-sm text-white-A700">
                      Month
                    </Tab>
                  </TabList>
                </div>
                {[...Array(3)].map((_, index) => (
                  <TabPanel
                    key={`tab-panel${index}`}
                    className="absolute items-center w-full"
                  >
                    <div className="flex flex-col items-center justify-start py-3 w-full">
                      <div className="flex flex-col gap-[78px] items-center justify-start mb-[264px] w-full">
                        <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                          <Heading
                            size="lg"
                            as="h6"
                            className="!font-semibold text-center"
                          >
                            Friday
                          </Heading>
                          <div className="bg-indigo-50 h-px w-full" />
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-start pb-[3px] w-[26%]">
                          <Img
                            src="images/img_searching_data_1.svg"
                            alt="searchingdata"
                            className="h-[200px] w-[200px]"
                          />
                          <Text as="p" className="!font-normal">
                            No Event. Create new
                          </Text>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
