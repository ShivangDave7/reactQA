import React from "react";

import { CloseSVG } from "../../assets/images";
import { Text, Img, Heading, Button, Input } from "../../components";
import Sidebar1 from "../../components/Sidebar1";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function DashboardTwoPage() {
  const [searchBarValue8, setSearchBarValue8] = React.useState("");

  return (
    <div className="bg-white-A700 flex flex-row items-start w-full">
      <Sidebar1 className="!sticky !w-[243px] bg-white-A700 h-screen overflow-auto top-[0]" />
      <div className="bg-indigo-50 h-[1542px] w-px" />
      <div className="flex flex-col gap-[25px] items-center justify-start w-[84%]">
        <header className="bg-white-A700 flex w-full">
          <div className="flex flex-row items-center justify-center mx-auto py-2.5 w-[97%]">
            <Text size="lg" as="p" className="!font-medium !text-blue_gray-800">
              Welcomback, Team!
            </Text>
            <Input
              size="xs"
              name="searchbox"
              placeholder="Search..."
              value={searchBarValue8}
              onChange={(e: string) => setSearchBarValue8(e)}
              prefix={
                <Img
                  src="images/img_search.svg"
                  alt="search"
                  className="cursor-pointer mr-2"
                />
              }
              suffix={
                searchBarValue8?.length > 0 ? (
                  <CloseSVG
                    onClick={() => setSearchBarValue8("")}
                    fillColor="#36414fff"
                  />
                ) : null
              }
              className="border border-blue_gray-200 border-solid font-medium ml-[253px] w-[33%]"
            />
            <div className="flex flex-row gap-6 items-center justify-end ml-[22px] pl-[135px] w-[32%]">
              <Img
                src="images/img_shopping_bag.svg"
                alt="shoppingbag"
                className="h-6 w-6"
              />
              <Img
                src="images/img_icon_icon_line293.svg"
                alt="iconicon"
                className="h-6 w-6"
              />
              <div className="flex flex-row gap-[13px] items-center w-[59%]">
                <Text as="p" className="!font-normal !text-gray-500">
                  Hello, Sam
                </Text>
                <Img
                  src="images/img_sherlock_toy_face_low.png"
                  alt="sherlocktoy"
                  className="h-10 w-10"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start pl-6 w-full">
          <div className="flex flex-row gap-5 items-start w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-[74%]">
              <div className="flex flex-row items-center justify-between w-[99%]">
                <Text
                  size="3xl"
                  as="p"
                  className="!font-poppins !text-blue_gray-900 text-center"
                >
                  Overview
                </Text>
                <div className="flex flex-row gap-3">
                  <Button
                    color="white_A700"
                    size="7xl"
                    shape="round"
                    className="w-12"
                  >
                    <Img src="images/img_button_primary.svg" />
                  </Button>
                  <Button
                    color="deep_orange_300"
                    shape="round"
                    rightIcon={
                      <Img
                        src="images/img_plus_white_a700.svg"
                        alt="plus"
                        className="ml-[35px]"
                      />
                    }
                    className="font-medium min-w-[147px]"
                  >
                    Add task
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <div className="flex flex-row gap-5 w-full">
                  <div className="gap-5 grid grid-cols-2 min-h-[auto] w-[49%]">
                    <div className="bg-white-A700 flex flex-col gap-4 items-center justify-center p-6 rounded shadow-xs w-full">
                      <Button
                        color="gray_100_02"
                        size="7xl"
                        shape="round"
                        className="mt-2 w-12"
                      >
                        <Img src="images/img_icon_green_700.svg" />
                      </Button>
                      <div className="flex flex-col gap-2 items-center justify-end mb-2 p-0.5 w-full">
                        <Heading as="h6" className="text-center">
                          50+
                        </Heading>
                        <Text
                          size="lg"
                          as="p"
                          className="!text-blue_gray-800 text-center"
                        >
                          Available Tasks
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col gap-4 items-center justify-center p-6 rounded shadow-xs w-full">
                      <Button
                        color="yellow_50"
                        size="7xl"
                        shape="round"
                        className="mt-2 w-12"
                      >
                        <Img src="images/img_icon_amber_300.svg" />
                      </Button>
                      <div className="flex flex-col gap-2 items-center justify-end mb-2 p-0.5 w-full">
                        <Heading as="h6" className="text-center">
                          20
                        </Heading>
                        <Text
                          size="lg"
                          as="p"
                          className="!text-blue_gray-800 text-center"
                        >
                          Obsolete Tasks
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col gap-4 items-center justify-center p-6 rounded shadow-xs w-full">
                      <Button
                        color="gray_100_03"
                        size="7xl"
                        shape="round"
                        className="mt-2 w-12"
                      >
                        <Img src="images/img_icon_red_600.svg" />
                      </Button>
                      <div className="flex flex-col gap-2.5 items-center justify-end mb-2 w-full">
                        <Heading as="h6" className="h-[22px] text-center">
                          23
                        </Heading>
                        <Text
                          size="lg"
                          as="p"
                          className="!text-blue_gray-800 text-center"
                        >
                          In Progress
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col gap-4 items-center justify-center p-6 rounded shadow-xs w-full">
                      <Button
                        color="gray_50_02"
                        size="7xl"
                        shape="round"
                        className="mt-2 w-12"
                      >
                        <Img src="images/img_icon_indigo_400.svg" />
                      </Button>
                      <div className="flex flex-col gap-[9px] items-center justify-end mb-2 p-0.5 w-full">
                        <Heading as="h6" className="text-center">
                          35
                        </Heading>
                        <Text
                          size="lg"
                          as="p"
                          className="!text-blue_gray-800 text-center"
                        >
                          Done Tasks
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-7 items-center justify-start p-7 rounded shadow-xs w-[49%]">
                    <div className="flex flex-row gap-[99px] items-center w-[98%]">
                      <Heading as="h6" className="!text-blue_gray-900">
                        Statistics
                      </Heading>
                      <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-row gap-2.5 items-center justify-center p-2.5 rounded shadow-xs w-[49%]">
                        <Img
                          src="images/img_calendar.svg"
                          alt="calendar"
                          className="h-5 ml-1.5 w-5"
                        />
                        <Heading
                          size="md"
                          as="p"
                          className="mr-1.5 text-center"
                        >
                          13 Aug - 20 Aug
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-col gap-8 items-center justify-start w-[98%]">
                      <div className="flex flex-row gap-5 items-start w-full">
                        <div className="flex flex-col gap-[25px] items-start justify-start w-[7%]">
                          <Text size="md" as="p" className="text-right">
                            800
                          </Text>
                          <Text size="md" as="p" className="text-right">
                            600
                          </Text>
                          <Text size="md" as="p" className="text-right">
                            400
                          </Text>
                          <Text size="md" as="p" className="text-right">
                            200
                          </Text>
                          <Text size="md" as="p" className="text-right">
                            0
                          </Text>
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-start w-[88%]">
                          <Img
                            src="images/img_frame_gray_50.svg"
                            alt="frame"
                            className="h-44"
                          />
                          <div className="flex flex-row justify-between px-1 w-full">
                            <Text size="md" as="p" className="text-center">
                              Mon
                            </Text>
                            <Text size="md" as="p" className="text-center">
                              Tue
                            </Text>
                            <Text size="md" as="p" className="text-center">
                              Wed
                            </Text>
                            <Text size="md" as="p" className="text-center">
                              Thu
                            </Text>
                            <Text
                              size="md"
                              as="p"
                              className="h-[15px] text-center"
                            >
                              Fri
                            </Text>
                            <Text size="md" as="p" className="text-center">
                              Sat
                            </Text>
                            <Text size="md" as="p" className="text-center">
                              Sun
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-6 justify-start px-[102px] w-full">
                        <div className="flex flex-row gap-2 items-center justify-center w-[38%]">
                          <div className="bg-amber-300 h-1.5 my-[5px] rounded-[50%] w-1.5" />
                          <Text size="md" as="p" className="!font-medium">
                            Income
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-center w-[47%]">
                          <div className="bg-indigo-400 h-1.5 my-1 rounded-[50%] w-1.5" />
                          <Text size="md" as="p" className="!font-medium">
                            Expenses
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-5 w-full">
                  <div className="bg-white-A700 flex flex-col gap-[26px] items-center justify-end p-[31px] rounded shadow-xs w-[49%]">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Heading as="h6" className="!text-blue_gray-900">
                        Projects
                      </Heading>
                      <Img
                        src="images/img_more_horizontal.svg"
                        alt="morehorizontal"
                        className="h-8 w-8"
                      />
                    </div>
                    <div className="h-[190px] relative w-[190px]">
                      <div className="h-[190px] m-auto w-[190px]">
                        <CircularProgressbar
                          strokeWidth={1}
                          value={17}
                          styles={{
                            trail: {},
                            path: { strokeLinecap: "square" },
                          }}
                          className="border-[12px] border-green-700 border-solid h-[190px] m-auto w-[190px]"
                        />
                        <CircularProgressbar
                          strokeWidth={1}
                          value={24}
                          styles={{
                            trail: {},
                            path: {
                              strokeLinecap: "square",
                              transformOrigin: "center",
                              transform: "rotate(51deg)",
                            },
                          }}
                          className="absolute border-[12px] border-green-700 border-solid bottom-0 h-[190px] justify-center left-0 m-auto right-0 top-0 w-[190px]"
                        />
                      </div>
                      <div className="absolute bottom-0 flex flex-col gap-2 h-max items-center justify-end m-auto right-[31%] top-0 w-[34%]">
                        <Heading size="2xl" as="h4" className="">
                          230+
                        </Heading>
                        <Text size="lg" as="p" className="!text-blue_gray-800">
                          Projects
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-green-700 h-1.5 rounded-[50%] w-1.5" />
                        <div className="flex flex-col gap-[5px] items-center justify-start mt-1 px-[41px] w-full">
                          <Heading
                            size="lg"
                            as="h6"
                            className="!font-semibold !text-blue_gray-900 text-center"
                          >
                            100
                          </Heading>
                          <Text
                            size="md"
                            as="p"
                            className="!font-medium text-center"
                          >
                            High
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-indigo-400 h-1.5 rounded-[50%] w-1.5" />
                        <div className="flex flex-col items-center justify-start mt-1 px-11 w-full">
                          <Heading
                            size="lg"
                            as="h6"
                            className="!font-semibold !text-blue_gray-900 h-5 text-center"
                          >
                            30
                          </Heading>
                          <Text
                            size="md"
                            as="p"
                            className="!font-medium mt-[3px] text-center"
                          >
                            Low
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-amber-300 h-1.5 rounded-[50%] w-1.5" />
                        <div className="flex flex-col items-center justify-start mt-1 px-[33px] w-full">
                          <Heading
                            size="lg"
                            as="h6"
                            className="!font-semibold !text-blue_gray-900 text-center"
                          >
                            100
                          </Heading>
                          <Text
                            size="md"
                            as="p"
                            className="!font-medium mt-[3px] text-center"
                          >
                            Medium
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-8 items-center justify-start p-[23px] rounded shadow-xs w-[49%]">
                    <div className="flex flex-row gap-[54px] items-center w-[96%]">
                      <Heading as="h6" className="!text-blue_gray-900">
                        Active tasks
                      </Heading>
                      <div className="flex flex-row gap-[7px] w-[55%]">
                        <Button
                          color="blue_gray_900"
                          size="5xl"
                          shape="round"
                          className="font-semibold min-w-[60px]"
                        >
                          Day
                        </Button>
                        <Button
                          color="indigo_50"
                          size="5xl"
                          variant="outline"
                          shape="round"
                          className="font-semibold min-w-[60px]"
                        >
                          Week
                        </Button>
                        <Button
                          color="indigo_50"
                          size="5xl"
                          variant="outline"
                          shape="round"
                          className="font-semibold min-w-[60px]"
                        >
                          Month
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5 w-[96%]">
                      <div className="flex flex-row gap-5 items-center w-full">
                        <Img
                          src="images/img_square_blue_gray_200.svg"
                          alt="square"
                          className="h-6 w-6"
                        />
                        <div className="flex flex-col gap-2 items-start justify-start w-[88%]">
                          <Text size="md" as="p" className="!font-medium">
                            ACKERMAN_LHN
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-start w-full">
                            <div className="bg-red-600 h-4 my-4 w-1" />
                            <Text
                              as="p"
                              className="!text-2xl !text-blue_gray-900 w-[97%]"
                            >
                              Changelog Revamp #ver 1.0 Homescreen{" "}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-indigo-50 h-px w-px" />
                      <div className="flex flex-row gap-5 items-center w-full">
                        <Img
                          src="images/img_square_checkbox.svg"
                          alt="squarecheckbox"
                          className="h-6 w-6"
                        />
                        <div className="flex flex-col gap-2 items-start justify-start w-[88%]">
                          <Text size="md" as="p" className="!font-medium">
                            JOHNSON
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-start w-full">
                            <div className="bg-deep_orange-300 h-4 my-0.5 w-1" />
                            <Text as="p" className="!text-blue_gray-900">
                              Create user flow for Data Projects
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-indigo-50 h-px w-px" />
                      <div className="flex flex-row gap-5 items-center w-full">
                        <Img
                          src="images/img_square_blue_gray_200.svg"
                          alt="square"
                          className="h-6 w-6"
                        />
                        <div className="flex flex-col gap-2 items-start justify-start w-[88%]">
                          <Text size="md" as="p" className="!font-medium">
                            UTILLIA
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-start w-full">
                            <div className="bg-indigo-400 h-4 my-4 w-1" />
                            <Text
                              as="p"
                              className="!text-2xl !text-blue_gray-900 w-[97%]"
                            >
                              Gather to discuss about new project deriving from
                              Avocado
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-[29px] items-center justify-start p-[31px] rounded shadow-xs w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <div className="flex flex-row items-end justify-between w-full">
                      <Heading as="h6" className="!text-blue_gray-900 mb-0.5">
                        Posting Tasks
                      </Heading>
                      <Img
                        src="images/img_more_horizontal.svg"
                        alt="morehorizontalo"
                        className="h-8 w-8"
                      />
                    </div>
                    <Text size="lg" as="p" className="!text-blue_gray-900">
                      Crucial tasks/ Urgent tasks/ Normal tasks
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row justify-evenly w-full">
                        <Button
                          color="deep_orange_300"
                          className="font-semibold min-w-[113px] outline outline-[0.5px] outline-indigo-50"
                        >
                          Time
                        </Button>
                        <Button
                          color="indigo_50"
                          variant="outline"
                          className="!text-blue_gray-400 font-medium min-w-[113px] outline outline-[0.5px] outline-indigo-50"
                        >
                          Mon 10
                        </Button>
                        <Button
                          color="indigo_50"
                          variant="outline"
                          className="!text-blue_gray-400 font-medium min-w-[113px] outline outline-[0.5px] outline-indigo-50"
                        >
                          Tue 11
                        </Button>
                        <Button
                          color="indigo_50"
                          variant="outline"
                          className="!text-blue_gray-400 font-medium min-w-[113px] outline outline-[0.5px] outline-indigo-50"
                        >
                          Wed 12
                        </Button>
                        <Button
                          color="indigo_50"
                          variant="outline"
                          className="!text-blue_gray-400 font-medium min-w-[113px] outline outline-[0.5px] outline-indigo-50"
                        >
                          Thu 13
                        </Button>
                        <Button
                          color="indigo_50"
                          variant="outline"
                          className="!text-blue_gray-400 font-medium min-w-[113px] outline outline-[0.5px] outline-indigo-50"
                        >
                          Fri 14
                        </Button>
                        <Button
                          color="indigo_50"
                          variant="outline"
                          className="!text-blue_gray-400 font-medium min-w-[113px] outline outline-[0.5px] outline-indigo-50"
                        >
                          Sat 15
                        </Button>
                      </div>
                      <div className="h-[336px] relative w-full">
                        <div className="flex flex-row h-full justify-evenly m-auto w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row justify-evenly w-full">
                              <div className="flex flex-col gap-px w-full">
                                <div className="flex flex-row justify-evenly w-full">
                                  <Button
                                    color="indigo_50"
                                    variant="outline"
                                    className="!text-blue_gray-400 min-w-[113px] outline outline-[0.5px] outline-indigo-50"
                                  >
                                    09 am
                                  </Button>
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                </div>
                                <div className="flex flex-row justify-evenly w-full">
                                  <Button
                                    color="indigo_50"
                                    variant="outline"
                                    className="!text-blue_gray-400 min-w-[113px] outline outline-[0.5px] outline-indigo-50"
                                  >
                                    10 am
                                  </Button>
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                </div>
                                <div className="flex flex-row justify-evenly w-full">
                                  <Button
                                    color="indigo_50"
                                    variant="outline"
                                    className="!text-blue_gray-400 min-w-[113px] outline outline-[0.5px] outline-indigo-50"
                                  >
                                    11 am
                                  </Button>
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                </div>
                                <div className="flex flex-row justify-evenly w-full">
                                  <Button
                                    color="indigo_50"
                                    variant="outline"
                                    className="!text-blue_gray-400 min-w-[113px] outline outline-[0.5px] outline-indigo-50"
                                  >
                                    12 am
                                  </Button>
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                </div>
                                <div className="flex flex-row justify-evenly w-full">
                                  <Button
                                    color="indigo_50"
                                    variant="outline"
                                    className="!text-blue_gray-400 min-w-[113px] outline outline-[0.5px] outline-indigo-50"
                                  >
                                    01 am
                                  </Button>
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                  <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col gap-px w-full">
                              <div className="flex flex-row justify-evenly w-full">
                                <Button
                                  color="indigo_50"
                                  variant="outline"
                                  className="!text-blue_gray-400 min-w-[113px] outline outline-[0.5px] outline-indigo-50"
                                >
                                  02 am
                                </Button>
                                <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                              </div>
                              <div className="flex flex-row justify-evenly w-full">
                                <Button
                                  color="indigo_50"
                                  variant="outline"
                                  className="!text-blue_gray-400 min-w-[113px] outline outline-[0.5px] outline-indigo-50"
                                >
                                  03 am
                                </Button>
                                <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                                <div className="h-12 outline outline-[0.5px] outline-indigo-50 w-[15%]" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 flex flex-row h-max justify-start left-[18%] m-auto top-0 w-[45%]">
                          <div className="bg-green-700 h-[171px] mb-[122px] w-1" />
                          <div className="bg-white-A700 flex flex-col items-center justify-start mb-[122px] p-4 rounded-br rounded-tr shadow-xs w-2/5">
                            <div className="flex flex-col gap-[61px] items-start justify-start w-[93%]">
                              <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                                <Button
                                  color="deep_orange_300"
                                  size="md"
                                  shape="round"
                                  className="font-poppins font-semibold min-w-[94px]"
                                >
                                  #Data projects
                                </Button>
                                <Heading size="md" as="p" className="">
                                  Revamp UI, UX
                                </Heading>
                              </div>
                              <Img
                                src="images/img_frame_white_a700.png"
                                alt="frameone"
                                className="object-cover w-2/5"
                              />
                            </div>
                          </div>
                          <div className="bg-indigo-400 h-[171px] ml-[113px] mt-[122px] w-1" />
                          <div className="bg-white-A700 flex flex-col items-center justify-start mt-[122px] p-4 rounded-br rounded-tr shadow-xs w-[27%]">
                            <div className="flex flex-col gap-[61px] items-start justify-start w-[88%]">
                              <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                                <Button
                                  color="indigo_400"
                                  size="md"
                                  shape="round"
                                  className="font-poppins font-semibold min-w-[49px]"
                                >
                                  #2011
                                </Button>
                                <Heading size="md" as="p" className="">
                                  Meeting
                                </Heading>
                              </div>
                              <Img
                                src="images/img_frame_white_a700.png"
                                alt="frametwo"
                                className="object-cover w-[72%]"
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
            <div className="bg-white-A700 flex flex-col items-center justify-start mb-[93px] p-4 rounded shadow-xs w-[26%]">
              <div className="flex flex-col gap-[27px] items-center justify-start w-[90%]">
                <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text
                      size="2xl"
                      as="p"
                      className="!font-poppins !text-blue_gray-900"
                    >
                      Calendar
                    </Text>
                    <Img
                      src="images/img_more_horizontal.svg"
                      alt="morehorizontalt"
                      className="h-8 w-8"
                    />
                  </div>
                  <div className="flex flex-row justify-evenly outline outline-[0.5px] outline-gray-300 rounded w-full">
                    <div className="flex flex-row justify-start p-3 rounded w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-[98%]">
                          <Img
                            src="images/img_angle_right_b_solid.svg"
                            alt="anglerightb"
                            className="h-[17px] w-[17px]"
                          />
                          <Text
                            size="s"
                            as="p"
                            className="!font-plusjakartasans !text-[10.48px] !text-blue_gray-800 text-center"
                          >
                            June 2021
                          </Text>
                          <Img
                            src="images/img_arrow_right_gray_500_01.svg"
                            alt="arrowright"
                            className="h-[17px] w-[17px]"
                          />
                        </div>
                        <div className="flex flex-row justify-between mt-[5px] w-full">
                          <Text
                            size="xs"
                            as="p"
                            className="!font-plusjakartasans !text-[8.98px] ml-1 text-center"
                          >
                            Mon
                          </Text>
                          <Text
                            size="xs"
                            as="p"
                            className="!font-plusjakartasans !text-[8.98px] text-center"
                          >
                            Tue
                          </Text>
                          <Text
                            size="xs"
                            as="p"
                            className="!font-plusjakartasans !text-[8.98px] text-center"
                          >
                            Wed
                          </Text>
                          <Text
                            size="xs"
                            as="p"
                            className="!font-plusjakartasans !text-[8.98px] text-center"
                          >
                            Thu
                          </Text>
                          <Text
                            size="xs"
                            as="p"
                            className="!font-plusjakartasans !text-[8.98px] text-center"
                          >
                            Fri
                          </Text>
                          <Text
                            size="xs"
                            as="p"
                            className="!font-plusjakartasans !text-[8.98px] text-center"
                          >
                            Sat
                          </Text>
                          <Text
                            size="xs"
                            as="p"
                            className="!font-plusjakartasans !text-[8.98px] mr-1.5 text-center"
                          >
                            Sun
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-start mt-[5px] w-full">
                          <div className="flex flex-row justify-end w-[86%]">
                            <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-[30px]">
                              <Heading
                                size="xs"
                                as="p"
                                className="!font-plusjakartasans !text-[10.48px] text-center"
                              >
                                1
                              </Heading>
                            </div>
                            <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-[30px]">
                              <Heading
                                size="xs"
                                as="p"
                                className="!font-plusjakartasans !text-[10.48px] text-center"
                              >
                                2
                              </Heading>
                            </div>
                            <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-[30px]">
                              <Heading
                                size="xs"
                                as="p"
                                className="!font-plusjakartasans !text-[10.48px] text-center"
                              >
                                3
                              </Heading>
                            </div>
                            <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-[30px]">
                              <Heading
                                size="xs"
                                as="p"
                                className="!font-plusjakartasans !text-[10.48px] text-center"
                              >
                                4
                              </Heading>
                            </div>
                            <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-[30px]">
                              <Heading
                                size="xs"
                                as="p"
                                className="!font-plusjakartasans !text-[10.48px] text-center"
                              >
                                5
                              </Heading>
                            </div>
                            <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-[30px]">
                              <Heading
                                size="xs"
                                as="p"
                                className="!font-plusjakartasans !text-[10.48px] text-center"
                              >
                                6
                              </Heading>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="grid grid-cols-7 justify-center min-h-[auto] w-full">
                              <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-full">
                                <Heading
                                  size="xs"
                                  as="p"
                                  className="!font-plusjakartasans !text-[10.48px] text-center"
                                >
                                  7
                                </Heading>
                              </div>
                              <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-full">
                                <Heading
                                  size="xs"
                                  as="p"
                                  className="!font-plusjakartasans !text-[10.48px] text-center"
                                >
                                  8
                                </Heading>
                              </div>
                              <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-full">
                                <Heading
                                  size="xs"
                                  as="p"
                                  className="!font-plusjakartasans !text-[10.48px] text-center"
                                >
                                  9
                                </Heading>
                              </div>
                              <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-full">
                                <Heading
                                  size="xs"
                                  as="p"
                                  className="!font-plusjakartasans !text-[10.48px] text-center"
                                >
                                  10
                                </Heading>
                              </div>
                              <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-full">
                                <Heading
                                  size="xs"
                                  as="p"
                                  className="!font-plusjakartasans !text-[10.48px] text-center"
                                >
                                  11
                                </Heading>
                              </div>
                              <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-full">
                                <Heading
                                  size="xs"
                                  as="p"
                                  className="!font-plusjakartasans !text-[10.48px] text-center"
                                >
                                  12
                                </Heading>
                              </div>
                              <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-full">
                                <Heading
                                  size="xs"
                                  as="p"
                                  className="!font-plusjakartasans !text-[10.48px] text-center"
                                >
                                  13
                                </Heading>
                              </div>
                              <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-full">
                                <Heading
                                  size="xs"
                                  as="p"
                                  className="!font-plusjakartasans !text-[10.48px] text-center"
                                >
                                  14
                                </Heading>
                              </div>
                              <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-full">
                                <Heading
                                  size="xs"
                                  as="p"
                                  className="!font-plusjakartasans !text-[10.48px] text-center"
                                >
                                  15
                                </Heading>
                              </div>
                              <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-full">
                                <Heading
                                  size="xs"
                                  as="p"
                                  className="!font-plusjakartasans !text-[10.48px] text-center"
                                >
                                  16
                                </Heading>
                              </div>
                              <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-full">
                                <Heading
                                  size="xs"
                                  as="p"
                                  className="!font-plusjakartasans !text-[10.48px] text-center"
                                >
                                  17
                                </Heading>
                              </div>
                              <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-full">
                                <Heading
                                  size="xs"
                                  as="p"
                                  className="!font-plusjakartasans !text-[10.48px] text-center"
                                >
                                  18
                                </Heading>
                              </div>
                              <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-full">
                                <Heading
                                  size="xs"
                                  as="p"
                                  className="!font-plusjakartasans !text-[10.48px] text-center"
                                >
                                  19
                                </Heading>
                              </div>
                              <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-full">
                                <Heading
                                  size="xs"
                                  as="p"
                                  className="!font-plusjakartasans !text-[10.48px] h-3.5 text-center"
                                >
                                  20
                                </Heading>
                              </div>
                            </div>
                            <div className="flex flex-col gap-px w-full">
                              <div className="flex flex-row justify-evenly w-full">
                                <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-[30px]">
                                  <Heading
                                    size="xs"
                                    as="p"
                                    className="!font-plusjakartasans !text-[10.48px] text-center"
                                  >
                                    21
                                  </Heading>
                                </div>
                                <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-[30px]">
                                  <Heading
                                    size="xs"
                                    as="p"
                                    className="!font-plusjakartasans !text-[10.48px] h-3.5 text-center"
                                  >
                                    22
                                  </Heading>
                                </div>
                                <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-[30px]">
                                  <Heading
                                    size="xs"
                                    as="p"
                                    className="!font-plusjakartasans !text-[10.48px] h-3.5 text-center"
                                  >
                                    23
                                  </Heading>
                                </div>
                                <Button
                                  color="deep_orange_300"
                                  size="2xl"
                                  shape="round"
                                  className="!rounded-sm !text-blue_gray-900 font-plusjakartasans font-semibold min-w-[30px]"
                                >
                                  24
                                </Button>
                                <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-[30px]">
                                  <Heading
                                    size="xs"
                                    as="p"
                                    className="!font-plusjakartasans !text-[10.48px] h-3.5 text-center"
                                  >
                                    25
                                  </Heading>
                                </div>
                                <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-[30px]">
                                  <Heading
                                    size="xs"
                                    as="p"
                                    className="!font-plusjakartasans !text-[10.48px] h-3.5 text-center"
                                  >
                                    26
                                  </Heading>
                                </div>
                                <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-[30px]">
                                  <Heading
                                    size="xs"
                                    as="p"
                                    className="!font-plusjakartasans !text-[10.48px] h-3.5 text-center"
                                  >
                                    27
                                  </Heading>
                                </div>
                              </div>
                              <div className="flex flex-row justify-evenly w-full">
                                <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-[30px]">
                                  <Heading
                                    size="xs"
                                    as="p"
                                    className="!font-plusjakartasans !text-[10.48px] h-3.5 text-center"
                                  >
                                    28
                                  </Heading>
                                </div>
                                <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-[30px]">
                                  <Heading
                                    size="xs"
                                    as="p"
                                    className="!font-plusjakartasans !text-[10.48px] h-3.5 text-center"
                                  >
                                    29
                                  </Heading>
                                </div>
                                <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-[30px]">
                                  <Heading
                                    size="xs"
                                    as="p"
                                    className="!font-plusjakartasans !text-[10.48px] h-3.5 text-center"
                                  >
                                    30
                                  </Heading>
                                </div>
                                <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-[30px]">
                                  <Heading
                                    size="xs"
                                    as="p"
                                    className="!font-plusjakartasans !text-[10.48px] text-center"
                                  >
                                    31
                                  </Heading>
                                </div>
                                <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-[30px]">
                                  <Heading
                                    size="xs"
                                    as="p"
                                    className="!font-plusjakartasans !text-[10.48px] !text-blue_gray-200 text-center"
                                  >
                                    1
                                  </Heading>
                                </div>
                                <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-[30px]">
                                  <Heading
                                    size="xs"
                                    as="p"
                                    className="!font-plusjakartasans !text-[10.48px] !text-blue_gray-200 text-center"
                                  >
                                    2
                                  </Heading>
                                </div>
                                <div className="flex flex-col h-[30px] items-center justify-end p-[7px] rounded-sm w-[30px]">
                                  <Heading
                                    size="xs"
                                    as="p"
                                    className="!font-plusjakartasans !text-[10.48px] !text-blue_gray-200 text-center"
                                  >
                                    3
                                  </Heading>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-8 items-center justify-start w-full">
                  <div className="flex flex-row gap-[53px] items-start w-full">
                    <Text
                      size="2xl"
                      as="p"
                      className="!font-poppins !text-blue_gray-900 text-center"
                    >
                      Recent activities
                    </Text>
                    <Img
                      src="images/img_more_horizontal.svg"
                      alt="morehorizontalt_One"
                      className="h-8 w-8"
                    />
                  </div>
                  <div className="flex flex-col gap-[33px] w-full">
                    <div className="flex flex-col gap-[25px] items-start justify-start pt-[3px] w-full">
                      <Text size="lg" as="p" className="!font-medium">
                        Feb 24, 2022
                      </Text>
                      <div className="h-[407px] relative w-full">
                        <div className="absolute bg-indigo-50 h-px left-0 m-auto right-0 top-[23%] w-full" />
                        <div className="bg-indigo-50 h-px m-auto w-full" />
                        <div className="absolute bottom-0 flex flex-col gap-5 justify-center left-0 m-auto right-0 top-0 w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <Text size="md" as="p" className="!font-medium">
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <div className="bg-red-600 h-[47px] w-1" />
                              <Text
                                as="p"
                                className="!text-2xl !text-blue_gray-900 w-[95%]"
                              >
                                Changelog Revamp Homescreen{" "}
                              </Text>
                            </div>
                          </div>
                          <div className="bg-indigo-50 h-px w-full" />
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <Text size="md" as="p" className="!font-medium">
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-2 items-center justify-start w-full">
                              <div className="bg-indigo-400 h-[47px] w-1" />
                              <Text
                                as="p"
                                className="!text-2xl !text-blue_gray-900 w-[95%]"
                              >
                                Create user flow for Data Projects
                              </Text>
                            </div>
                          </div>
                          <div className="bg-indigo-50 h-px w-full" />
                          <div className="flex flex-col items-center justify-start pb-[21px] w-full">
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <Text size="md" as="p" className="!font-medium">
                                8:00 AM -9:00 AM
                              </Text>
                              <div className="flex flex-row gap-2 items-center justify-start w-full">
                                <div className="bg-green-700 h-[47px] w-1" />
                                <Text
                                  as="p"
                                  className="!text-2xl !text-blue_gray-900 w-[95%]"
                                >
                                  Gather to discuss about new project deriving
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-indigo-50 h-px w-full" />
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <Text size="md" as="p" className="!font-medium">
                              8:00 AM -9:00 AM
                            </Text>
                            <div className="flex flex-row gap-2 items-start justify-start w-full">
                              <div className="bg-indigo-400 h-[47px] w-1" />
                              <Text as="p" className="!text-blue_gray-900">
                                Urgent meeting with CEO
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[25px] items-start justify-start pt-[3px] w-full">
                      <Text size="lg" as="p" className="!font-medium">
                        Feb 24, 2022
                      </Text>
                      <div className="flex flex-col gap-2.5 w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text size="md" as="p" className="!font-medium">
                            8:00 AM -9:00 AM
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-start w-full">
                            <div className="bg-red-600 h-[47px] w-1" />
                            <Text
                              as="p"
                              className="!text-2xl !text-blue_gray-900 w-[95%]"
                            >
                              Changelog Revamp Homescreen{" "}
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-50 h-px w-full" />
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text size="md" as="p" className="!font-medium">
                            8:00 AM -9:00 AM
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-start w-full">
                            <div className="bg-indigo-400 h-[47px] w-1" />
                            <Text
                              as="p"
                              className="!text-2xl !text-blue_gray-900 w-[95%]"
                            >
                              Create user flow for Data Projects
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-50 h-px w-full" />
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text size="md" as="p" className="!font-medium">
                            8:00 AM -9:00 AM
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-start w-full">
                            <div className="bg-green-700 h-[47px] w-1" />
                            <Text
                              as="p"
                              className="!text-2xl !text-blue_gray-900 w-[95%]"
                            >
                              Gather to discuss about new project deriving
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-50 h-px w-full" />
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text size="md" as="p" className="!font-medium">
                            8:00 AM -9:00 AM
                          </Text>
                          <div className="flex flex-row gap-2 items-start justify-start w-full">
                            <div className="bg-indigo-400 h-[47px] w-1" />
                            <Text as="p" className="!text-blue_gray-900">
                              Urgent meeting with CEO
                            </Text>
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
      </div>
    </div>
  );
}
