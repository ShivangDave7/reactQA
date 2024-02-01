import React from "react";

import { Text, Heading, Img, Button, SelectBox } from "../../components";
import Header from "../../components/Header";
import Sidebar1 from "../../components/Sidebar1";
import { OptionProps } from "react-select";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DashboardOnePage() {
  return (
    <div className="bg-gray-50 flex flex-row items-start w-full">
      <Sidebar1 className="!sticky !w-[243px] bg-white-A700 h-screen overflow-auto top-[0]" />
      <div className="bg-indigo-50 h-[1175px] w-px" />
      <div className="flex flex-col gap-5 items-center justify-start w-[84%]">
        <Header className="bg-white-A700 flex w-full" />
        <div className="flex flex-row justify-start px-6 w-full">
          <div className="flex flex-col gap-5 items-center justify-start w-full">
            <div className="flex flex-row items-center justify-between w-full">
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
                  className="w-1/4"
                >
                  <Img src="images/img_button_primary.svg" />
                </Button>
                <SelectBox
                  size="xs"
                  indicator={
                    <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                  }
                  name="dropdown"
                  placeholder="Last week"
                  options={dropDownOptions}
                  className="font-medium w-[70%]"
                />
              </div>
            </div>
            <div className="flex flex-row gap-5 w-full">
              <div className="bg-white-A700 flex flex-row gap-5 items-center justify-start p-[22px] rounded shadow-xs w-full">
                <Img
                  src="images/img_group_green_700.svg"
                  alt="group"
                  className="h-[26px] ml-4"
                />
                <div className="flex flex-col items-center justify-start w-[63%]">
                  <div className="flex flex-row gap-[26px] items-center py-0.5 w-full">
                    <Heading size="3xl" as="h3" className="">
                      $10.000
                    </Heading>
                    <Button
                      color="green_700_19"
                      size="sm"
                      shape="round"
                      leftIcon={
                        <Img
                          src="images/img_line_green_700.svg"
                          alt="line "
                          className="mr-1"
                        />
                      }
                      className="font-semibold min-w-[62px] my-1.5"
                    >
                      0.2%
                    </Button>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start mt-1 py-0.5 w-full">
                    <div className="bg-indigo-400_01 h-1.5 my-[5px] rounded-[50%] w-1.5" />
                    <Text size="lg" as="p" className="">
                      Total income
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-row gap-5 items-center justify-center p-[22px] rounded shadow-xs w-full">
                <Img
                  src="images/img_group_red_600.svg"
                  alt="group"
                  className="h-[26px] ml-4"
                />
                <div className="flex flex-col items-center justify-start mr-[15px] w-[63%]">
                  <div className="flex flex-row gap-[26px] items-center py-0.5 w-full">
                    <Heading size="3xl" as="h3" className="">
                      $10.000
                    </Heading>
                    <Button
                      color="red_600_19"
                      size="sm"
                      shape="round"
                      leftIcon={
                        <Img
                          src="images/img_line_red_600.svg"
                          alt="line "
                          className="mr-1"
                        />
                      }
                      className="font-semibold min-w-[62px] my-1.5"
                    >
                      0.2%
                    </Button>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start mt-1 w-full">
                    <div className="bg-indigo-400_01 h-1.5 my-1.5 rounded-[50%] w-1.5" />
                    <Text size="lg" as="p" className="">
                      Total Expenses
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-row gap-5 items-center justify-center p-[22px] rounded shadow-xs w-full">
                <Img
                  src="images/img_group_green_700.svg"
                  alt="group"
                  className="h-[26px] ml-4"
                />
                <div className="flex flex-col items-center justify-start mr-4 w-[63%]">
                  <div className="flex flex-row gap-[26px] items-center py-0.5 w-full">
                    <Heading size="3xl" as="h3" className="">
                      $10.000
                    </Heading>
                    <Button
                      color="green_700_19"
                      size="sm"
                      shape="round"
                      leftIcon={
                        <Img
                          src="images/img_line_green_700.svg"
                          alt="line "
                          className="mr-1"
                        />
                      }
                      className="font-semibold min-w-[62px] my-1.5"
                    >
                      0.2%
                    </Button>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start mt-1 py-0.5 w-full">
                    <div className="bg-indigo-400_01 h-1.5 my-[5px] rounded-[50%] w-1.5" />
                    <Text size="lg" as="p" className="">
                      Total Revenue
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-5 w-full">
              <div className="bg-white-A700 flex flex-col gap-[31px] items-center justify-start p-[26px] rounded shadow-xs w-[67%]">
                <div className="flex flex-row items-center justify-between w-[99%]">
                  <Heading as="h6" className="!text-blue_gray-900">
                    Statistics
                  </Heading>
                  <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-row gap-2.5 items-center justify-center p-2.5 rounded shadow-xs">
                    <Img
                      src="images/img_calendar.svg"
                      alt="calendar"
                      className="h-5 ml-1.5 w-5"
                    />
                    <Heading size="md" as="p" className="mr-1.5 text-center">
                      13 Aug - 20 Aug
                    </Heading>
                  </div>
                </div>
                <div className="flex flex-row gap-[45px] items-start w-[99%]">
                  <div className="flex flex-col gap-4 items-center justify-start w-[11%]">
                    <div className="flex flex-row gap-2 items-center justify-start w-full">
                      <div className="bg-indigo-400 h-1.5 my-[5px] rounded-[50%] w-1.5" />
                      <Text size="md" as="p" className="!font-medium">
                        Income
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start w-full">
                      <div className="bg-amber-300 h-1.5 my-1 rounded-[50%] w-1.5" />
                      <Text size="md" as="p" className="!font-medium">
                        Expenses
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[23px] items-start w-[84%]">
                    <div className="flex flex-col items-end justify-start w-[6%]">
                      <Text size="md" as="p" className="text-right">
                        1,400
                      </Text>
                      <Text size="md" as="p" className="mt-[17px] text-right">
                        1,200
                      </Text>
                      <Text size="md" as="p" className="mt-[17px] text-right">
                        1,000
                      </Text>
                      <Text size="md" as="p" className="mt-[15px] text-right">
                        800
                      </Text>
                      <Text size="md" as="p" className="mt-[17px] text-right">
                        600
                      </Text>
                      <Text size="md" as="p" className="mt-[17px] text-right">
                        400
                      </Text>
                      <Text size="md" as="p" className="mt-[17px] text-right">
                        200
                      </Text>
                      <Text size="md" as="p" className="mt-[17px] text-right">
                        0
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[21px] items-center justify-start mt-[9px] w-[91%]">
                      <div className="h-[226px] relative w-full">
                        <Img
                          src="images/img_frame_blue_gray_900.svg"
                          alt="frame"
                          className="absolute bottom-0 h-[225px] justify-center left-0 m-auto right-0 top-0"
                        />
                        <div className="absolute bottom-[0%] flex flex-row items-end justify-between left-0 m-auto right-0 w-[86%]">
                          <Img
                            src="images/img_frame.svg"
                            alt="frameone"
                            className="h-[77px]"
                          />
                          <div className="flex h-[206px] justify-end relative w-[37%]">
                            <Img
                              src="images/img_frame.svg"
                              alt="frametwo"
                              className="absolute bottom-[0%] h-[49px] left-[0%] m-auto"
                            />
                            <Img
                              src="images/img_frame.svg"
                              alt="framethree"
                              className="h-[58px] m-auto"
                            />
                            <div className="absolute bottom-0 h-[206px] justify-center left-0 m-auto right-0 top-0 w-full">
                              <Img
                                src="images/img_frame_indigo_400_206x18.svg"
                                alt="framefour"
                                className="absolute bottom-0 h-[206px] m-auto right-[0%] top-0"
                              />
                              <div className="absolute bg-[url(/public/images/img_group_white_a700_84x153.svg)] bg-cover bg-no-repeat bottom-0 flex-col h-[84px] left-[0%] m-auto p-[7px] shadow-md top-0 w-[95%]">
                                <div className="absolute flex flex-row gap-[7px] items-center justify-start mt-2 w-[31%]">
                                  <Img
                                    src="images/img_oval.svg"
                                    alt="ovaltwo"
                                    className="h-1.5 w-1.5"
                                  />
                                  <Heading
                                    size="s"
                                    as="p"
                                    className="!font-poppins !font-semibold !text-blue_gray-900"
                                  >
                                    200.0
                                  </Heading>
                                </div>
                                <div className="absolute flex flex-row justify-start mt-[9px] w-[74%]">
                                  <div className="flex flex-col gap-3 justify-start w-full">
                                    <div className="flex flex-row gap-[7px] items-start justify-end ml-[65px] w-[42%]">
                                      <Img
                                        src="images/img_oval_amber_300.svg"
                                        alt="ovalthree"
                                        className="h-1.5 mt-1 w-1.5"
                                      />
                                      <Heading
                                        size="s"
                                        as="p"
                                        className="!font-poppins !font-semibold !text-blue_gray-900"
                                      >
                                        2,000
                                      </Heading>
                                    </div>
                                    <Text
                                      size="s"
                                      as="p"
                                      className="!font-poppins mr-5"
                                    >
                                      21 September, 2021
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-end justify-between mt-[107px] w-auto">
                            <Img
                              src="images/img_frame.svg"
                              alt="framefive"
                              className="h-[91px]"
                            />
                            <Img
                              src="images/img_frame.svg"
                              alt="framesix"
                              className="h-[99px]"
                            />
                            <Img
                              src="images/img_frame.svg"
                              alt="frameseven"
                              className="h-[77px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between px-9 w-full">
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
                        <Text size="md" as="p" className="h-[15px] text-center">
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
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[33%]">
                <div className="bg-deep_orange-300 flex flex-row justify-center p-[5px] rounded-tl rounded-tr shadow-xs w-full">
                  <Img
                    src="images/img_message_notification.png"
                    alt="messageone"
                    className="object-cover w-[200px]"
                  />
                </div>
                <div className="bg-white-A700 flex flex-row justify-start p-[17px] rounded-bl rounded-br w-full">
                  <div className="flex flex-col gap-5 items-center justify-start ml-1.5 w-[96%]">
                    <div className="flex flex-col gap-2 items-start justify-start pt-[3px] w-full">
                      <Heading as="h6" className="">
                        Subcrible us
                      </Heading>
                      <Text as="p" className="!font-normal !text-2xl">
                        To make friend with others in our community
                      </Text>
                    </div>
                    <div className="flex flex-row gap-4 w-full">
                      <Button
                        color="deep_orange_300"
                        className="font-semibold min-w-[153px] rounded-[24px]"
                      >
                        Subcrible now
                      </Button>
                      <Button className="font-semibold min-w-[153px] rounded-[24px]">
                        skip
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-5 items-center w-full">
              <div className="bg-white-A700 flex flex-col gap-7 items-center justify-start p-8 w-[67%]">
                <div className="flex flex-row items-end justify-between w-full">
                  <Heading as="h6" className="!text-blue_gray-900 mb-0.5">
                    My card
                  </Heading>
                  <Img
                    src="images/img_more_horizontal.svg"
                    alt="morehorizontal"
                    className="h-8 w-8"
                  />
                </div>
                <div className="flex flex-row gap-[51px] items-center w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-[47%]">
                    <SelectBox
                      color="indigo_50"
                      size="xs"
                      variant="outline"
                      indicator={
                        <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                      }
                      getOptionLabel={(e: OptionProps) => (
                        <>
                          <div className="flex items-center">
                            <Img
                              src="images/img_visa_1.svg"
                              alt="visa 1"
                              className="mr-[7px]"
                            />
                            <span>{e.label}</span>
                          </div>
                        </>
                      )}
                      name="language"
                      placeholder="1234 **** 4567 8901 "
                      options={dropDownOptions}
                      className="font-medium w-full"
                    />
                    <div className="bg-indigo-400 flex flex-col gap-[110px] justify-start p-5 rounded w-full">
                      <Img
                        src="images/img_group_white_a700.svg"
                        alt="group"
                        className="h-3 ml-[238px]"
                      />
                      <Text as="p" className="!text-white-A700 mr-[120px]">
                        1234 **** 4567 8901{" "}
                      </Text>
                    </div>
                    <Button
                      color="white_A700"
                      shape="round"
                      rightIcon={
                        <Img
                          src="images/img_plus_deep_orange_300.svg"
                          alt="plus"
                          className="ml-[13px]"
                        />
                      }
                      className="font-semibold w-full"
                    >
                      Add new card
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[47%]">
                    <div className="flex flex-row justify-between w-full">
                      <Text as="p" className="!font-normal text-center">
                        Card Type
                      </Text>
                      <Text as="p" className="!text-blue_gray-800">
                        Visa
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between mt-4 w-full">
                      <Text as="p" className="!font-normal text-center">
                        Card holder
                      </Text>
                      <Text as="p" className="!text-blue_gray-800">
                        Utillia
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[61px] justify-start mt-4 w-full">
                      <Text as="p" className="!font-normal text-center">
                        Card number
                      </Text>
                      <Text as="p" className="!text-blue_gray-800">
                        1234 **** 4567 8901{" "}
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between mt-4 w-full">
                      <Text as="p" className="!font-normal text-center">
                        Expired
                      </Text>
                      <Text as="p" className="!text-blue_gray-800">
                        21/09
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between mt-[15px] w-full">
                      <Text as="p" className="!font-normal text-center">
                        CVV
                      </Text>
                      <Text as="p" className="!text-blue_gray-800">
                        ***
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between mt-4 w-full">
                      <Text as="p" className="!font-normal text-center">
                        Total balance
                      </Text>
                      <Text as="p" className="!text-blue_gray-800">
                        $0.0
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-[34px] items-start justify-start mb-4 p-4 rounded shadow-xs w-[33%]">
                <Heading as="h6" className="!text-blue_gray-900 mt-[19px]">
                  Transactions
                </Heading>
                <div className="flex flex-row gap-[31px] mb-4 w-full">
                  <div className="flex flex-col gap-[7.5px] w-[90%]">
                    <div className="flex flex-col items-center justify-start pb-[17px] w-full">
                      <div className="flex flex-row gap-[57px] items-center w-full">
                        <div className="flex flex-row gap-4 items-center w-[65%]">
                          <Img
                            src="images/img_robototoyfacefinal_2.png"
                            alt="robototoyfacefi"
                            className="h-[46px] w-[46px]"
                          />
                          <div className="flex flex-col gap-2 items-start justify-end py-0.5 w-[69%]">
                            <Heading
                              size="lg"
                              as="h6"
                              className="!font-semibold"
                            >
                              Ackerman
                            </Heading>
                            <Text size="lg" as="p" className="">
                              7:00 • 21/10/2021
                            </Text>
                          </div>
                        </div>
                        <Text as="p" className="!text-blue_gray-900">
                          -$12.0
                        </Text>
                      </div>
                    </div>
                    <div className="bg-indigo-50 h-px w-px" />
                    <div className="flex flex-row gap-[43px] items-center w-full">
                      <div className="flex flex-row gap-4 items-center w-[65%]">
                        <Img
                          src="images/img_punktoyface_1.png"
                          alt="punktoyfaceone"
                          className="h-[46px] w-[46px]"
                        />
                        <div className="flex flex-col gap-2 items-start justify-end py-0.5 w-[69%]">
                          <Heading size="lg" as="h6" className="!font-semibold">
                            Blanker{" "}
                          </Heading>
                          <Text size="lg" as="p" className="">
                            7:00 • 21/10/2021
                          </Text>
                        </div>
                      </div>
                      <Text as="p" className="!text-blue_gray-900">
                        +$100.0
                      </Text>
                    </div>
                    <div className="bg-indigo-50 h-px w-px" />
                    <div className="flex flex-row gap-[57px] items-center w-full">
                      <div className="flex flex-row gap-4 items-center w-[65%]">
                        <Img
                          src="images/img_vangoghbyamrit_1.png"
                          alt="vangoghbyamrit"
                          className="h-[46px] w-[46px]"
                        />
                        <div className="flex flex-col gap-2 items-start justify-start w-[69%]">
                          <Heading size="lg" as="h6" className="!font-semibold">
                            Lee Ri
                          </Heading>
                          <Text size="lg" as="p" className="">
                            7:00 • 21/10/2021
                          </Text>
                        </div>
                      </div>
                      <Text as="p" className="!text-blue_gray-900">
                        -$12.0
                      </Text>
                    </div>
                    <div className="bg-indigo-50 h-px w-px" />
                    <div className="flex flex-col items-center justify-end pt-4 w-full">
                      <div className="flex flex-row gap-14 items-center w-full">
                        <div className="flex flex-row gap-4 items-center w-[66%]">
                          <Img
                            src="images/img_rare_pepe_nakamoto_toy_face.png"
                            alt="rarepepe"
                            className="h-[46px] w-[46px]"
                          />
                          <div className="flex flex-col gap-2 items-start justify-end py-0.5 w-[69%]">
                            <Heading
                              size="lg"
                              as="h6"
                              className="!font-semibold"
                            >
                              Jackson
                            </Heading>
                            <Text size="lg" as="p" className="">
                              7:00 • 21/10/2021
                            </Text>
                          </div>
                        </div>
                        <Text as="p" className="!text-blue_gray-900">
                          -$10.0
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 flex flex-col items-center justify-start pb-[162px] rounded-[50%] w-[2%]">
                    <div className="bg-deep_orange-300 h-[134px] w-1" />
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
