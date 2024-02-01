import React from "react";

import { Text, Button, Img, Heading } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { MenuItem, Menu, Sidebar, useProSidebar } from "react-pro-sidebar";

const table3Data = [
  {
    header: "1",
    headerone: "Branding guideline",
    headertwo: "2 Sep, 2020",
    headerthree: "10 Sep, 2020",
    headerfour: "$1,000",
  },
  {
    header: "2",
    headerone: "Mobile design",
    headertwo: "2 Sep, 2020",
    headerthree: "10 Sep, 2020",
    headerfour: "$1,200",
  },
  {
    header: "3",
    headerone: "Branding guideline",
    headertwo: "2 Sep, 2020",
    headerthree: "10 Sep, 2020",
    headerfour: "$1,000",
  },
  {
    header: "4",
    headerone: "Mobile design",
    headertwo: "2 Sep, 2020",
    headerthree: "10 Sep, 2020",
    headerfour: "$1,200",
  },
  {
    header: "5",
    headerone: "Branding guideline",
    headertwo: "2 Sep, 2020",
    headerthree: "10 Sep, 2020",
    headerfour: "$1,000",
  },
  {
    header: "6",
    headerone: "Mobile design",
    headertwo: "2 Sep, 2020",
    headerthree: "10 Sep, 2020",
    headerfour: "$1,200",
  },
  {
    header: "7",
    headerone: "Branding guideline",
    headertwo: "2 Sep, 2020",
    headerthree: "10 Sep, 2020",
    headerfour: "$1,000",
  },
  {
    header: "8",
    headerone: "Mobile design",
    headertwo: "2 Sep, 2020",
    headerthree: "10 Sep, 2020",
    headerfour: "$1,200",
  },
];

type Table3RowType = {
  header: string;
  headerone: string;
  headertwo: string;
  headerthree: string;
  headerfour: string;
};

export default function ProfilePage() {
  const { collapseSidebar, collapsed } = useProSidebar();
  const table3Columns = React.useMemo(() => {
    const table3ColumnHelper = createColumnHelper<Table3RowType>();
    return [
      table3ColumnHelper.accessor("header", {
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
      table3ColumnHelper.accessor("headerone", {
        cell: (info) => (
          <Text
            as="p"
            className="!text-blue_gray-800 flex h-16 items-center justify-center"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="!font-normal ml-[66px] my-0.5">
            Projects
          </Text>
        ),
        meta: { width: "62px" },
      }),
      table3ColumnHelper.accessor("headertwo", {
        cell: (info) => (
          <Button size="11xl" className="font-medium min-w-[160px]">
            {info?.getValue()}
          </Button>
        ),
        header: (info) => (
          <Text as="p" className="!font-normal ml-[110px]">
            Start
          </Text>
        ),
        meta: { width: "38px" },
      }),
      table3ColumnHelper.accessor("headerthree", {
        cell: (info) => (
          <Button size="11xl" className="font-medium min-w-[160px]">
            {info?.getValue()}
          </Button>
        ),
        header: (info) => (
          <Text as="p" className="!font-normal ml-[107px]">
            Deadline
          </Text>
        ),
        meta: { width: "67px" },
      }),
      table3ColumnHelper.accessor("headerfour", {
        cell: (info) => (
          <Button size="11xl" className="font-medium min-w-[160px]">
            {info?.getValue()}
          </Button>
        ),
        header: (info) => (
          <Text as="p" className="!font-normal ml-[99px] mt-[3px]">
            Budget
          </Text>
        ),
        meta: { width: "55px" },
      }),
    ];
  }, []);

  return (
    <div className="bg-gray-50 flex flex-row items-start w-full">
      <Sidebar
        onClick={() => {
          collapseSidebar(!collapsed);
        }}
        className="!sticky !w-[243px] bg-white-A700 h-screen overflow-auto top-[0]"
      >
        {!collapsed ? (
          <Img
            src="images/img_logo.svg"
            alt="logo"
            className="h-7 mt-9 mx-auto"
          />
        ) : null}
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              gap: "16px",
              color: "#ffffff",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "12px",
            },
          }}
          className="flex flex-col items-center justify-start mb-[536px] mt-9 px-8 w-full"
        >
          <div className="flex flex-col gap-[32.00px] items-center justify-start w-full">
            <MenuItem
              icon={
                <Img
                  src="images/img_icon_deep_orange_300_20x20.svg"
                  alt="icon"
                  className="h-5 w-5"
                />
              }
            >
              <div className="font-medium text-blue_gray-400 text-left text-sm w-[41%]">
                Dashboard
              </div>
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  src="images/img_icon_blue_gray_400_20x20.svg"
                  alt="iconone"
                  className="h-5 w-5"
                />
              }
            >
              <div className="font-medium text-blue_gray-400 text-left text-sm w-[38%]">
                Customer
              </div>
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  src="images/img_icon_20x20.svg"
                  alt="icontwo"
                  className="h-5 w-5"
                />
              }
              suffix={
                <div className="bg-red-600 h-6 rounded-[50%] w-6">
                  <Heading size="s" as="p" className="mx-auto my-1">
                    3
                  </Heading>
                </div>
              }
            >
              <div className="font-medium text-blue_gray-400 text-left text-sm w-[34%]">
                Message
              </div>
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  src="images/img_icon_1.svg"
                  alt="iconthree"
                  className="h-5 w-5"
                />
              }
            >
              <div className="font-medium text-blue_gray-400 text-left text-sm w-[13%]">
                File
              </div>
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  src="images/img_icon_2.svg"
                  alt="iconfour"
                  className="h-5 w-5"
                />
              }
            >
              <div className="font-medium text-blue_gray-400 text-left text-sm w-[35%]">
                Calender
              </div>
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  src="images/img_icon_4.svg"
                  alt="iconfive"
                  className="h-5 w-5"
                />
              }
            >
              <div className="font-medium text-blue_gray-400 text-left text-sm w-1/5">
                Shop
              </div>
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  src="images/img_icon_3.svg"
                  alt="iconsix"
                  className="h-5 w-5"
                />
              }
            >
              <div className="font-medium text-blue_gray-400 text-left text-sm w-[17%]">
                Cart
              </div>
            </MenuItem>
            <MenuItem icon={<div className="h-[18px] w-[18px]" />}>
              <div className="font-medium text-blue_gray-400 text-left text-sm w-[32%]">
                Settings
              </div>
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
      <div className="bg-indigo-50 h-[1038px] w-px" />
      <div className="flex flex-col gap-[25px] items-center justify-start w-[84%]">
        <Header className="bg-white-A700 flex w-full" />
        <div className="flex flex-row justify-start px-6 w-full">
          <div className="flex flex-col gap-8 items-start justify-start w-full">
            <Text
              size="3xl"
              as="p"
              className="!font-poppins !text-blue_gray-900"
            >
              Profile
            </Text>
            <div className="flex flex-row gap-5 items-center w-full">
              <div className="flex flex-col gap-[21px] items-center justify-start w-[33%]">
                <div className="bg-white-A700 flex flex-col items-center justify-start pb-8 rounded shadow-xs w-full">
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <div className="flex flex-col h-[196px] relative w-full">
                      <Img
                        src="images/img_img_lib_img_15.png"
                        alt="imglibimgfiftee"
                        className="h-[136px] m-auto object-cover w-full"
                      />
                      <div className="flex flex-col h-[120px] items-center justify-start m-auto rounded-[50%] w-[120px] z-[1]">
                        <Img
                          src="images/img_sherlock_toy_face_low_120x120.png"
                          alt="sherlocktoyone"
                          className="h-[120px] w-[120px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-10 items-center justify-start w-full">
                        <div className="flex flex-col gap-6 items-center justify-start w-full">
                          <div className="flex flex-col gap-3 items-center justify-end w-full">
                            <Heading
                              size="2xl"
                              as="h4"
                              className="!text-blue_gray-900 text-center"
                            >
                              Sam Brown
                            </Heading>
                            <Text size="lg" as="p" className="text-center">
                              xyz@gmail.com
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-center w-[35%]">
                            <Img
                              src="images/img_globe.svg"
                              alt="globe"
                              className="h-5 w-5"
                            />
                            <Text
                              size="lg"
                              as="p"
                              className="!font-medium !text-blue_gray-800 ml-[5px] text-center"
                            >
                              xyzxsdsfg.com
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-6 items-center justify-start px-28 w-full">
                          <Button
                            color="red_600"
                            rightIcon={
                              <Img
                                src="images/img_logout.svg"
                                alt="log-out"
                                className="ml-4"
                              />
                            }
                            className="font-bold rounded-[24px] w-full"
                          >
                            Logout
                          </Button>
                          <div className="flex flex-row gap-6 justify-center w-[74%]">
                            <Img
                              src="images/img_line_indigo_400_20x20.svg"
                              alt="lineone"
                              className="h-5 w-5"
                            />
                            <Img
                              src="images/img_line.svg"
                              alt="linetwo"
                              className="h-5 w-5"
                            />
                            <Img
                              src="images/img_line_20x20.svg"
                              alt="linethree"
                              className="h-5 w-5"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-indigo-50 h-px mt-8 w-[83%]" />
                      <Text size="lg" as="p" className="mt-[33px] text-center">
                        Member since 2021
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-row justify-start p-6 rounded shadow-xl w-full">
                  <div className="flex flex-col gap-7 items-center justify-start ml-2 w-[96%]">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Heading as="h6" className="!text-blue_gray-900">
                        Personal info.
                      </Heading>
                      <Img
                        src="images/img_more_horizontal.svg"
                        alt="morehorizontal"
                        className="h-8 w-8"
                      />
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-row gap-[191px] w-full">
                        <Text as="p" className="!font-normal text-center">
                          Full name
                        </Text>
                        <Text as="p" className="!text-blue_gray-800 text-right">
                          Utillia
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[142px] w-full">
                        <Text as="p" className="!font-normal text-center">
                          Mobile
                        </Text>
                        <Text as="p" className="!text-blue_gray-800 text-right">
                          123-456-7890
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[136px] w-full">
                        <Text as="p" className="!font-normal text-center">
                          E-mail
                        </Text>
                        <Text as="p" className="!text-blue_gray-800 text-right">
                          xyz@gmail.com
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[124px] w-full">
                        <Text as="p" className="!font-normal text-center">
                          Location
                        </Text>
                        <Text as="p" className="!text-blue_gray-800 text-right">
                          Hanoi, Vietnam
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-center justify-start w-[67%]">
                <div className="flex flex-row gap-5 w-full">
                  <div className="bg-white-A700 flex flex-row gap-5 items-center justify-start p-8 rounded shadow-xl w-full">
                    <div className="flex flex-row gap-5 items-center justify-start w-[84%]">
                      <Button
                        size="7xl"
                        shape="round"
                        className="my-[5px] w-12"
                      >
                        <Img src="images/img_layers.svg" />
                      </Button>
                      <div className="flex flex-col gap-3 items-start justify-end py-0.5 w-[74%]">
                        <Text size="lg" as="p" className="!text-blue_gray-800">
                          Completed tasks
                        </Text>
                        <Heading as="h6" className="">
                          125
                        </Heading>
                      </div>
                    </div>
                    <Img
                      src="images/img_more_horizontal.svg"
                      alt="morehorizontal"
                      className="h-8 w-8"
                    />
                  </div>
                  <div className="bg-white-A700 flex flex-row gap-5 items-center justify-start p-8 rounded shadow-xl w-full">
                    <div className="flex flex-row gap-5 items-center justify-start w-[84%]">
                      <Button
                        size="7xl"
                        shape="round"
                        className="my-[5px] w-12"
                      >
                        <Img src="images/img_layers.svg" />
                      </Button>
                      <div className="flex flex-col gap-3.5 items-start justify-end w-[74%]">
                        <Text size="lg" as="p" className="!text-blue_gray-800">
                          Total Revenue
                        </Text>
                        <Heading as="h6" className="">
                          $10,000
                        </Heading>
                      </div>
                    </div>
                    <Img
                      src="images/img_more_horizontal.svg"
                      alt="morehorizontal"
                      className="h-8 w-8"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-row justify-start p-8 rounded shadow-xl w-full">
                  <div className="flex flex-col gap-[31px] items-center justify-start w-full">
                    <div className="flex flex-row items-end justify-between w-full">
                      <Heading as="h6" className="!text-blue_gray-900 mb-[3px]">
                        My projects
                      </Heading>
                      <div className="flex flex-row gap-6">
                        <Img
                          src="images/img_search_blue_gray_400.svg"
                          alt="search"
                          className="h-8 w-8"
                        />
                        <Img
                          src="images/img_more_horizontal.svg"
                          alt="morehorizontalo"
                          className="h-8 w-8"
                        />
                      </div>
                    </div>
                    <ReactTable
                      size="md"
                      variant="striped1"
                      bodyProps={{ className: "" }}
                      headerProps={{ className: "" }}
                      rowDataProps={{ className: "" }}
                      className="w-[697px]"
                      columns={table3Columns}
                      data={table3Data}
                    />
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
