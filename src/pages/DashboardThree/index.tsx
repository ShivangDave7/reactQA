import React from "react";

import { CloseSVG } from "../../assets/images";
import { Text, Img, Heading, Button, SelectBox, Input } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const tableData = [
  {
    header: "1",
    headerone: "Ackerman",
    headertwo: "12.02.2022",
    headerthree: "$20.0",
    headerfour: "#21033",
    headerfive: "Visa Card",
    headersix: "images/img_more_horizontal.svg",
  },
  {
    header: "2",
    headerone: "Utillia",
    headertwo: "12.02.2022",
    headerthree: "$32.0",
    headerfour: "#21033",
    headerfive: "Visa Card",
    headersix: "images/img_more_horizontal.svg",
  },
  {
    header: "3",
    headerone: "Benjamin",
    headertwo: "12.02.2022",
    headerthree: "$16.0",
    headerfour: "#21033",
    headerfive: "MasterCard",
    headersix: "images/img_more_horizontal.svg",
  },
];

type TableRowType = {
  header: string;
  headerone: string;
  headertwo: string;
  headerthree: string;
  headerfour: string;
  headerfive: string;
  headersix: string;
};

export default function DashboardThreePage() {
  const [searchBarValue9, setSearchBarValue9] = React.useState("");
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper<TableRowType>();
    return [
      tableColumnHelper.accessor("header", {
        cell: (info) => (
          <Button size="11xl" className="font-medium min-w-[56px]">
            {info?.getValue()}
          </Button>
        ),
        header: (info) => (
          <Text as="p" className="!font-normal ml-1.5">
            No
          </Text>
        ),
        meta: { width: "22px" },
      }),
      tableColumnHelper.accessor("headerone", {
        cell: (info) => (
          <div className="flex flex-row gap-3 items-center justify-end">
            <Img
              src="images/img_robototoyfacefinal_2_24x24.png"
              alt="robototoyfacefi"
              className="h-6 my-1.5 w-6"
            />
            <Text as="p" className="!text-blue_gray-800">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="!font-normal ml-[51px]">
            Customer
          </Text>
        ),
        meta: { width: "74px" },
      }),
      tableColumnHelper.accessor("headertwo", {
        cell: (info) => (
          <Button size="11xl" className="font-medium min-w-[142px]">
            {info?.getValue()}
          </Button>
        ),
        header: (info) => (
          <Text as="p" className="!font-normal ml-[87px]">
            Date
          </Text>
        ),
        meta: { width: "36px" },
      }),
      tableColumnHelper.accessor("headerthree", {
        cell: (info) => (
          <Button size="11xl" className="font-medium min-w-[142px]">
            {info?.getValue()}
          </Button>
        ),
        header: (info) => (
          <Text as="p" className="!font-normal ml-[95px]">
            Amount
          </Text>
        ),
        meta: { width: "59px" },
      }),
      tableColumnHelper.accessor("headerfour", {
        cell: (info) => (
          <Button size="11xl" className="font-medium min-w-[142px]">
            {info?.getValue()}
          </Button>
        ),
        header: (info) => (
          <Text as="p" className="!font-normal ml-[76px]">
            Order No.
          </Text>
        ),
        meta: { width: "74px" },
      }),
      tableColumnHelper.accessor("headerfive", {
        cell: (info) => (
          <Button size="11xl" className="font-medium min-w-[142px]">
            {info?.getValue()}
          </Button>
        ),
        header: (info) => (
          <Text as="p" className="!font-normal ml-[53px] mt-[3px]">
            Payment type
          </Text>
        ),
        meta: { width: "105px" },
      }),
      tableColumnHelper.accessor("headersix", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <Img
              src={info?.getValue() as string}
              alt="morevertical"
              className="h-6 w-6"
            />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="!font-normal ml-[65px]">
            Action
          </Text>
        ),
        meta: { width: "49px" },
      }),
    ];
  }, []);

  return (
    <div className="bg-white-A700 flex flex-row items-start w-full">
      <Sidebar className="!sticky !w-[86px] bg-white-A700 h-screen overflow-auto top-[0]">
        <Menu
          menuItemStyles={{
            button: {
              padding: " ",
              height: "28px !important",
              margin: " ",
            },
          }}
          className="flex flex-col items-center justify-start mt-9 px-[31px] w-full"
        >
          <div className="flex flex-col items-center justify-start w-full">
            <MenuItem />
          </div>
        </Menu>
        <div className="flex flex-col gap-[34px] items-center justify-start mb-[965px] mt-9 mx-auto w-[24%]">
          <Img
            src="images/img_icon_deep_orange_300_20x20.svg"
            alt="icon"
            className="h-5 w-5"
          />
          <Img
            src="images/img_icon_blue_gray_400_20x20.svg"
            alt="iconone"
            className="h-5 w-5"
          />
          <Img
            src="images/img_icon_20x20.svg"
            alt="icontwo"
            className="h-5 w-5"
          />
          <Img
            src="images/img_icon_1.svg"
            alt="iconthree"
            className="h-5 w-5"
          />
          <Img src="images/img_icon_2.svg" alt="iconfour" className="h-5 w-5" />
          <Img src="images/img_icon_4.svg" alt="iconfive" className="h-5 w-5" />
          <Img src="images/img_icon_3.svg" alt="iconsix" className="h-5 w-5" />
          <div className="bg-white-A700 flex flex-col h-5 items-center justify-start w-5">
            <div className="bg-blue_gray-400 h-[18px] rounded-[50%] w-[18px]" />
          </div>
        </div>
      </Sidebar>
      <div className="bg-indigo-50 h-[1463px] w-px" />
      <div className="flex flex-col gap-[25px] items-center justify-start w-[95%]">
        <header className="bg-white-A700 flex w-full">
          <div className="flex flex-row items-center justify-center mx-auto py-2.5 w-[97%]">
            <Text size="lg" as="p" className="!font-medium !text-blue_gray-800">
              Welcomback, Team!
            </Text>
            <Input
              size="xs"
              name="searchbox"
              placeholder="Search..."
              value={searchBarValue9}
              onChange={(e: string) => setSearchBarValue9(e)}
              prefix={
                <Img
                  src="images/img_search.svg"
                  alt="search"
                  className="cursor-pointer mr-2"
                />
              }
              suffix={
                searchBarValue9?.length > 0 ? (
                  <CloseSVG
                    onClick={() => setSearchBarValue9("")}
                    fillColor="#36414fff"
                  />
                ) : null
              }
              className="border border-blue_gray-200 border-solid font-medium ml-[332px] w-[29%]"
            />
            <div className="flex flex-row gap-6 items-center justify-end ml-[22px] pl-[214px] w-[34%]">
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
        <div className="flex flex-row justify-end pl-6 w-full">
          <div className="flex flex-row gap-5 items-center w-full">
            <div className="flex flex-col gap-5 items-center justify-start w-[74%]">
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
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-col gap-5 w-[21%]">
                  <div className="bg-white-A700 flex flex-col gap-4 items-center justify-center p-6 rounded shadow-xs w-full">
                    <Img
                      src="images/img_frame_indigo_400.svg"
                      alt="frame"
                      className="h-[43px] mt-[19px]"
                    />
                    <div className="flex flex-col gap-2.5 items-center justify-end mb-[19px] p-0.5 w-full">
                      <Text size="lg" as="p" className="text-center">
                        Total Tasks
                      </Text>
                      <Heading as="h6" className="text-center">
                        120
                      </Heading>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-4 items-center justify-center p-6 rounded shadow-xs w-full">
                    <Img
                      src="images/img_frame_green_700.svg"
                      alt="frame"
                      className="h-[43px] mt-[19px]"
                    />
                    <div className="flex flex-col gap-2.5 items-center justify-end mb-[19px] p-0.5 w-full">
                      <Text size="lg" as="p" className="text-center">
                        New Tasks
                      </Text>
                      <Heading as="h6" className="text-center">
                        60
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-[26px] items-center justify-end p-[15px] rounded shadow-xs w-[38%]">
                  <div className="flex flex-row gap-[187px] items-center mt-4 w-[90%]">
                    <Heading as="h6" className="!text-blue_gray-900">
                      Statistics
                    </Heading>
                    <Img
                      src="images/img_more_horizontal.svg"
                      alt="morehorizontal"
                      className="h-8 w-8"
                    />
                  </div>
                  <div className="flex flex-row justify-start w-[90%]">
                    <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                      <div className="flex flex-row items-end justify-between w-full">
                        <div className="bg-indigo-400 h-[58px] rounded-tl-[50%] rounded-tr-[50%] w-[4%]" />
                        <div className="bg-indigo-400 h-[95px] rounded-tl-[50%] rounded-tr-[50%] w-[4%]" />
                        <div className="bg-indigo-400 h-[77px] rounded-tl-[50%] rounded-tr-[50%] w-[4%]" />
                        <div className="bg-amber-300 h-[139px] rounded-tl-[50%] rounded-tr-[50%] w-[4%]" />
                        <div className="bg-indigo-400 h-[77px] rounded-tl-[50%] rounded-tr-[50%] w-[4%]" />
                        <div className="bg-indigo-400 h-10 rounded-tl-[50%] rounded-tr-[50%] w-[4%]" />
                        <div className="bg-indigo-400 h-[77px] rounded-tl-[50%] rounded-tr-[50%] w-[4%]" />
                      </div>
                      <div className="flex flex-row items-start justify-between px-0.5 w-full">
                        <Text
                          size="md"
                          as="p"
                          className="!text-base text-center"
                        >
                          Mon
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="!text-base text-center"
                        >
                          Tue
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="!text-base text-center"
                        >
                          Wed
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="!text-base text-center"
                        >
                          Thu
                        </Text>
                        <Text size="md" as="p" className="h-[15px] text-center">
                          Fri
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="!text-base text-center"
                        >
                          Sat
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="!text-base text-center"
                        >
                          Sun
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-100_04 flex flex-row justify-center p-4 rounded w-[90%]">
                    <div className="flex flex-row gap-5 items-center w-[95%]">
                      <div className="flex flex-col gap-2 items-start justify-start w-[68%]">
                        <Heading
                          size="lg"
                          as="h6"
                          className="!font-semibold !text-blue_gray-900"
                        >
                          Data project report
                        </Heading>
                        <Text size="lg" as="p" className="!text-blue_gray-900">
                          • In process
                        </Text>
                      </div>
                      <div className="bg-indigo-50_02 flex flex-col h-16 items-center justify-start p-1 rounded-[50%] w-16">
                        <div className="bg-indigo-400 h-14 rounded-[50%] shadow-lg w-14" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-[35px] items-center justify-start p-[21px] rounded shadow-xs w-[38%]">
                  <div className="flex flex-row gap-[244px] items-center mt-2.5 w-full">
                    <Heading as="h6" className="!text-blue_gray-900">
                      Sales
                    </Heading>
                    <Img
                      src="images/img_more_horizontal.svg"
                      alt="morehorizontalo"
                      className="h-8 w-8"
                    />
                  </div>
                  <div className="flex flex-col gap-[35px] items-center justify-start mb-2.5 w-full">
                    <div className="h-[190px] relative w-[190px]">
                      <CircularProgressbar
                        strokeWidth={1}
                        value={28}
                        styles={{
                          trail: {},
                          path: {
                            strokeLinecap: "square",
                            transformOrigin: "center",
                            transform: "rotate(225deg)",
                          },
                        }}
                        className="border-[12px] border-red-600 border-solid h-[190px] m-auto w-[190px]"
                      />
                      <div className="absolute bottom-0 flex flex-col gap-2 h-max items-center justify-center left-0 m-auto right-0 top-0 w-max">
                        <Text size="lg" as="p" className="!text-blue_gray-800">
                          Total
                        </Text>
                        <Heading size="2xl" as="h4" className="">
                          $2,000
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                      <div className="flex flex-row gap-[90px] w-full">
                        <div className="flex flex-row gap-2 items-center justify-start pb-1 w-[33%]">
                          <div className="bg-red-600 h-2 mb-0.5 mt-[7px] rounded-[50%] w-2" />
                          <Text size="lg" as="p" className="">
                            Current Week
                          </Text>
                        </div>
                        <div className="flex flex-row gap-5 items-start w-2/5">
                          <Text
                            size="lg"
                            as="p"
                            className="!font-medium !text-blue_gray-800"
                          >
                            $1,200
                          </Text>
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
                            className="font-semibold min-w-[62px]"
                          >
                            0.2%
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[122px] w-full">
                        <div className="flex flex-row gap-2 items-center justify-start pb-1 w-[27%]">
                          <div className="bg-green-700 h-2 mb-0.5 mt-[7px] rounded-[50%] w-2" />
                          <Text size="lg" as="p" className="">
                            Last Week
                          </Text>
                        </div>
                        <div className="flex flex-row gap-5 items-start w-[37%]">
                          <Text
                            size="lg"
                            as="p"
                            className="!font-medium !text-blue_gray-800"
                          >
                            $800
                          </Text>
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
                            className="font-semibold min-w-[62px]"
                          >
                            0.2%
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-5 w-full">
                <div className="bg-white-A700 flex flex-col gap-[26px] items-center justify-start p-[21px] rounded shadow-xs w-[49%]">
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
                  <div className="flex flex-col gap-8 items-center justify-start w-[99%]">
                    <div className="flex flex-row justify-evenly w-full">
                      <div className="flex flex-col gap-5 items-center justify-start w-full">
                        <div className="flex flex-row justify-between w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              size="md"
                              as="p"
                              className="h-[15px] text-right"
                            >
                              Su
                            </Text>
                            <Text
                              size="md"
                              as="p"
                              className="h-[15px] mt-[25px] text-right"
                            >
                              Sa
                            </Text>
                            <Text size="md" as="p" className="mt-6 text-right">
                              Fr
                            </Text>
                            <Text
                              size="md"
                              as="p"
                              className="h-[15px] mt-[25px] text-right"
                            >
                              Th
                            </Text>
                            <Text
                              size="md"
                              as="p"
                              className="mt-[25px] text-right"
                            >
                              We
                            </Text>
                            <Text
                              size="md"
                              as="p"
                              className="h-[15px] mt-6 text-right"
                            >
                              Tu
                            </Text>
                            <Text
                              size="md"
                              as="p"
                              className="mt-[25px] text-right"
                            >
                              Mo
                            </Text>
                          </div>
                          <div className="bg-indigo-50 h-64 w-px" />
                          <div className="h-64 relative w-[76%]">
                            <div className="absolute bottom-0 flex flex-row gap-12 h-full left-[0%] m-auto top-0 w-[88%]">
                              <div className="h-64 relative w-[83%]">
                                <div className="absolute bottom-0 flex flex-col h-full items-center justify-center left-0 m-auto right-0 top-0 w-max">
                                  <div className="flex flex-row justify-between w-full">
                                    <div className="bg-indigo-50 h-64 w-px" />
                                    <div className="bg-indigo-50 h-64 w-px" />
                                    <div className="bg-indigo-50 h-64 w-px" />
                                    <div className="bg-indigo-50 h-64 w-px" />
                                    <div className="bg-indigo-50 h-64 w-px" />
                                  </div>
                                </div>
                                <Img
                                  src="images/img_frame_indigo_400_248x236.svg"
                                  alt="frame"
                                  className="absolute bottom-0 h-[248px] justify-center left-0 m-auto right-0 top-0"
                                />
                              </div>
                              <div className="bg-indigo-50 h-64 w-px" />
                            </div>
                            <div className="absolute bg-[url(/public/images/img_group_white_a700_48x131.svg)] bg-cover bg-no-repeat flex flex-row h-12 items-center justify-end m-auto pt-[15px] px-[15px] right-[0%] shadow-md top-[11%] w-[41%]">
                              <div className="flex flex-row items-start justify-center w-[99%]">
                                <Img
                                  src="images/img_oval_indigo_400.svg"
                                  alt="oval"
                                  className="h-1.5 mt-[5px] w-[5px]"
                                />
                                <Heading
                                  size="s"
                                  as="p"
                                  className="!font-poppins !font-semibold !text-base !text-blue_gray-900 ml-[7px] w-[28%]"
                                >
                                  150.0
                                </Heading>
                                <Img
                                  src="images/img_oval_amber_300_6x5.svg"
                                  alt="ovalone"
                                  className="h-1.5 ml-[18px] mt-[5px] w-[5px]"
                                />
                                <Heading
                                  size="s"
                                  as="p"
                                  className="!font-poppins !font-semibold !text-base !text-blue_gray-900 ml-[7px] w-[28%]"
                                >
                                  120.0
                                </Heading>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-between w-[85%]">
                          <Text
                            size="md"
                            as="p"
                            className="!text-base text-right"
                          >
                            -300
                          </Text>
                          <Text
                            size="md"
                            as="p"
                            className="!text-base text-right"
                          >
                            -200
                          </Text>
                          <Text size="md" as="p" className="text-right">
                            -100
                          </Text>
                          <Text size="md" as="p" className="text-right">
                            0
                          </Text>
                          <Text size="md" as="p" className="text-right">
                            100
                          </Text>
                          <Text size="md" as="p" className="text-right">
                            200
                          </Text>
                          <Text size="md" as="p" className="text-right">
                            300
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-6 justify-start px-[139px] w-full">
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
                <div className="bg-white-A700 flex flex-col gap-[29px] items-center justify-start p-8 rounded shadow-xs w-[49%]">
                  <div className="flex flex-row items-end justify-between w-full">
                    <Heading as="h6" className="!text-blue_gray-900 mb-[3px]">
                      Total projects
                    </Heading>
                    <Img
                      src="images/img_more_horizontal.svg"
                      alt="morehorizontalt"
                      className="h-8 w-8"
                    />
                  </div>
                  <div className="flex flex-col gap-10 items-center justify-start w-full">
                    <div className="flex flex-col gap-5 w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                        <Heading
                          size="lg"
                          as="h6"
                          className="!font-semibold !text-blue_gray-900"
                        >
                          Mobile app (4/12)
                        </Heading>
                        <div className="flex flex-row gap-[25px] items-center pb-[3px] w-full">
                          <div className="bg-gray-50 h-2 mb-1 mt-2 relative rounded w-[86%]">
                            <div
                              style={{ width: "27%" }}
                              className="absolute bg-indigo-400 h-full rounded"
                            />
                          </div>
                          <Text
                            as="p"
                            className="!font-normal !text-blue_gray-900 text-right"
                          >
                            34%
                          </Text>
                        </div>
                      </div>
                      <div className="bg-indigo-50 h-px w-full" />
                      <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                        <Heading
                          size="lg"
                          as="h6"
                          className="!font-semibold !text-blue_gray-900"
                        >
                          Landing page (2/4)
                        </Heading>
                        <div className="flex flex-row gap-[25px] items-center pb-[3px] w-full">
                          <div className="bg-gray-50 h-2 mb-1 mt-2 relative rounded w-[86%]">
                            <div
                              style={{ width: "62%" }}
                              className="absolute bg-green-700 h-full rounded"
                            />
                          </div>
                          <Text
                            as="p"
                            className="!font-normal !text-blue_gray-900 text-right"
                          >
                            50%
                          </Text>
                        </div>
                      </div>
                      <div className="bg-indigo-50 h-px w-full" />
                      <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                        <Heading
                          size="lg"
                          as="h6"
                          className="!font-semibold !text-blue_gray-900"
                        >
                          Branding (2/2)
                        </Heading>
                        <div className="flex flex-row gap-[18px] items-center pb-[3px] w-full">
                          <div className="h-2 relative rotate-[90deg] w-[86%]">
                            <div
                              style={{ width: "0%" }}
                              className="absolute h-full"
                            />
                          </div>
                          <Text
                            as="p"
                            className="!font-normal !text-blue_gray-900 text-right"
                          >
                            100%
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                      <Heading
                        size="lg"
                        as="h6"
                        className="!font-semibold !text-blue_gray-900"
                      >
                        Branding (2/2)
                      </Heading>
                      <div className="flex flex-row gap-[26px] items-center pb-[3px] w-full">
                        <div className="bg-gray-50 flex flex-row justify-start mb-1 mt-2 pr-[293px] rounded w-[86%]">
                          <Img
                            src="images/img_rectangle.svg"
                            alt="rectangleseven"
                            className="h-2 rounded"
                          />
                        </div>
                        <Text
                          as="p"
                          className="!font-normal !text-blue_gray-900 text-right"
                        >
                          25%
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-[19px] items-center justify-start p-8 rounded shadow-xs w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Heading as="h6" className="!text-blue_gray-900">
                    Transactions history
                  </Heading>
                  <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-row gap-2.5 items-center justify-center p-2.5 rounded shadow-xs">
                    <Img
                      src="images/img_calendar.svg"
                      alt="calendarone"
                      className="h-5 ml-1.5 w-5"
                    />
                    <Heading size="md" as="p" className="mr-1.5 text-center">
                      13 Aug - 20 Aug
                    </Heading>
                  </div>
                </div>
                <ReactTable
                  size="sm"
                  variant="striped"
                  bodyProps={{ className: "" }}
                  headerProps={{ className: "" }}
                  rowDataProps={{ className: "" }}
                  className="w-[912px]"
                  columns={tableColumns}
                  data={tableData}
                />
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col items-center justify-start my-[5px] p-4 rounded shadow-xs w-[26%]">
              <div className="flex flex-col gap-[27px] items-center justify-start w-[91%]">
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
                      alt="morehorizontalt_One"
                      className="h-8 w-8"
                    />
                  </div>
                  <div className="flex flex-row justify-evenly outline outline-[0.5px] outline-gray-300 rounded w-full">
                    <div className="flex flex-row justify-start p-3 rounded w-full">
                      <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-[82%]">
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
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row justify-start w-full">
                            <Text
                              size="xs"
                              as="p"
                              className="!font-plusjakartasans !text-[8.98px] ml-[25px] text-center"
                            >
                              Mon
                            </Text>
                            <Text
                              size="xs"
                              as="p"
                              className="!font-plusjakartasans !text-[8.98px] ml-3 text-center"
                            >
                              Tue
                            </Text>
                            <Text
                              size="xs"
                              as="p"
                              className="!font-plusjakartasans !text-[8.98px] ml-[11px] text-center"
                            >
                              Wed
                            </Text>
                            <Text
                              size="xs"
                              as="p"
                              className="!font-plusjakartasans !text-[8.98px] ml-[11px] text-center"
                            >
                              Thu
                            </Text>
                            <Text
                              size="xs"
                              as="p"
                              className="!font-plusjakartasans !text-[8.98px] ml-[17px] text-center"
                            >
                              Fri
                            </Text>
                            <Text
                              size="xs"
                              as="p"
                              className="!font-plusjakartasans !text-[8.98px] ml-[17px] text-center"
                            >
                              Sat
                            </Text>
                            <Text
                              size="xs"
                              as="p"
                              className="!font-plusjakartasans !text-[8.98px] ml-3.5 text-center"
                            >
                              Sun
                            </Text>
                          </div>
                          <div className="flex flex-col items-end justify-start mt-[5px] px-5 w-full">
                            <div className="flex flex-row justify-end w-[85%]">
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
                </div>
                <div className="flex flex-col gap-8 items-center justify-start w-full">
                  <div className="flex flex-row gap-[94px] items-start w-full">
                    <Text
                      size="2xl"
                      as="p"
                      className="!font-poppins !text-blue_gray-900 text-center"
                    >
                      Recent activities
                    </Text>
                    <Img
                      src="images/img_more_horizontal.svg"
                      alt="morehorizontalf"
                      className="h-8 w-8"
                    />
                  </div>
                  <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                    <div className="flex flex-col gap-[25px] items-start justify-start pt-[3px] w-full">
                      <Text size="lg" as="p" className="!font-medium">
                        Feb 24, 2022
                      </Text>
                      <div className="flex flex-col gap-2.5 w-full">
                        <div className="flex flex-row gap-4 items-center w-full">
                          <Img
                            src="images/img_robototoyfacefinal_2.png"
                            alt="robototoyfacefi"
                            className="h-[46px] w-[46px]"
                          />
                          <div className="flex flex-col items-start justify-end w-[78%]">
                            <Text
                              size="lg"
                              as="p"
                              className="!text-blue_gray-900"
                            >
                              Ackerman
                            </Text>
                            <Text
                              as="p"
                              className="!text-2xl !text-blue_gray-900 mt-1.5"
                            >
                              Changelog Revamp #ver 1.0 Homescreen{" "}
                            </Text>
                            <Text size="lg" as="p" className="mt-[7px]">
                              2min ago
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-50 h-px w-full" />
                        <div className="flex flex-row gap-4 items-center w-full">
                          <Img
                            src="images/img_punktoyface_1.png"
                            alt="punktoyfaceone"
                            className="h-[46px] w-[46px]"
                          />
                          <div className="flex flex-col items-start justify-end w-[78%]">
                            <Text
                              size="lg"
                              as="p"
                              className="!text-blue_gray-800"
                            >
                              Blanker
                            </Text>
                            <Text
                              as="p"
                              className="!text-2xl !text-blue_gray-900 mt-1.5"
                            >
                              Create user flow for Data Projects
                            </Text>
                            <Text size="lg" as="p" className="mt-[7px]">
                              2min ago
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-50 h-px w-full" />
                        <div className="flex flex-row gap-4 items-center w-full">
                          <Img
                            src="images/img_vangoghbyamrit_1.png"
                            alt="vangoghbyamrit"
                            className="h-[46px] w-[46px]"
                          />
                          <div className="flex flex-col items-start justify-end w-[78%]">
                            <Text size="lg" as="p" className="">
                              Lee Ri
                            </Text>
                            <Text as="p" className="!text-blue_gray-900 mt-2.5">
                              Revision design system
                            </Text>
                            <Text size="lg" as="p" className="mt-2">
                              2min ago
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-50 h-px w-full" />
                        <div className="flex flex-row gap-4 items-center w-full">
                          <Img
                            src="images/img_rare_pepe_nakamoto_toy_face.png"
                            alt="rarepepe"
                            className="h-[46px] w-[46px]"
                          />
                          <div className="flex flex-col items-start justify-end w-[78%]">
                            <Text size="lg" as="p" className="">
                              Jackson
                            </Text>
                            <Text as="p" className="!text-blue_gray-900 mt-2.5">
                              Changelog Scan ID Card
                            </Text>
                            <Text size="lg" as="p" className="mt-[7px]">
                              2min ago
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-50 h-px w-full" />
                        <div className="flex flex-row gap-4 items-center w-full">
                          <Img
                            src="images/img_tintin2_2.png"
                            alt="tintin2two"
                            className="h-[46px] w-[46px]"
                          />
                          <div className="flex flex-col items-start justify-end w-[78%]">
                            <Text size="lg" as="p" className="">
                              Yomaha
                            </Text>
                            <Text as="p" className="!text-blue_gray-900 mt-2.5">
                              Pitching with client
                            </Text>
                            <Text size="lg" as="p" className="mt-2">
                              2min ago
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[25px] items-start justify-start pt-[3px] w-full">
                      <Text size="lg" as="p" className="!font-medium">
                        Feb 24, 2022
                      </Text>
                      <div className="flex flex-col gap-2.5 w-full">
                        <div className="flex flex-row gap-4 items-center w-full">
                          <Img
                            src="images/img_robototoyfacefinal_2.png"
                            alt="robototoyfacefi"
                            className="h-[46px] w-[46px]"
                          />
                          <div className="flex flex-col items-start justify-end w-[78%]">
                            <Text
                              size="lg"
                              as="p"
                              className="!text-blue_gray-900"
                            >
                              Ackerman
                            </Text>
                            <Text
                              as="p"
                              className="!text-2xl !text-blue_gray-900 mt-1.5"
                            >
                              Changelog Revamp #ver 1.0 Homescreen{" "}
                            </Text>
                            <Text size="lg" as="p" className="mt-[7px]">
                              2min ago
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-50 h-px w-full" />
                        <div className="flex flex-row gap-4 items-center w-full">
                          <Img
                            src="images/img_punktoyface_1.png"
                            alt="punktoyfaceone"
                            className="h-[46px] w-[46px]"
                          />
                          <div className="flex flex-col items-start justify-end w-[78%]">
                            <Text
                              size="lg"
                              as="p"
                              className="!text-blue_gray-800"
                            >
                              Blanker
                            </Text>
                            <Text
                              as="p"
                              className="!text-2xl !text-blue_gray-900 mt-1.5"
                            >
                              Create user flow for Data Projects
                            </Text>
                            <Text size="lg" as="p" className="mt-[7px]">
                              2min ago
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
