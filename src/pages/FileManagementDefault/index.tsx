import React from "react";

import { Text, Img, Heading, Button } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MenuItem, Menu, Sidebar, useProSidebar } from "react-pro-sidebar";

const table2Data = [
  { name: "index.html", datemotified: "10.10.2021, 09:45", size: "09 KB" },
  { name: "image.png", datemotified: "10.10.2021, 09:45", size: "110 KB" },
  { name: "Document.txt", datemotified: "10.10.2021, 09:45", size: "10 KB" },
];

type Table2RowType = { name: string; datemotified: string; size: string };

export default function FileManagementDefaultPage() {
  const { collapseSidebar, collapsed } = useProSidebar();
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper<Table2RowType>();
    return [
      table2ColumnHelper.accessor("name", {
        cell: (info) => (
          <div className="flex flex-row gap-3.5 items-center justify-start">
            <Img
              src="images/img_file.svg"
              alt="fileone"
              className="h-6 my-1 w-6"
            />
            <Text
              as="p"
              className="!font-normal !text-blue_gray-900 text-center"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="!font-normal ml-[49px] text-center">
            Name
          </Text>
        ),
        meta: { width: "45px" },
      }),
      table2ColumnHelper.accessor("datemotified", {
        cell: (info) => (
          <Button size="11xl" className="min-w-[165px]">
            {info?.getValue()}
          </Button>
        ),
        header: (info) => (
          <Text as="p" className="!font-normal">
            Date motified
          </Text>
        ),
        meta: { width: "102px" },
      }),
      table2ColumnHelper.accessor("size", {
        cell: (info) => (
          <Button size="11xl" className="min-w-[165px]">
            {info?.getValue()}
          </Button>
        ),
        header: (info) => (
          <Text as="p" className="!font-normal mr-11">
            Size
          </Text>
        ),
        meta: { width: "32px" },
      }),
    ];
  }, []);

  return (
    <div className="bg-white-A700 flex flex-row items-start pb-[74px] w-full">
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
          className="flex flex-col items-center justify-start mb-[425px] mt-9 px-8 w-full"
        >
          <div className="flex flex-col gap-[32.00px] items-center justify-start w-full">
            <MenuItem
              icon={
                <Img
                  src="images/img_icon_blue_gray_400.svg"
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
                  src="images/img_icon_6.svg"
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
      <div className="bg-indigo-50 h-[950px] w-px" />
      <div className="flex flex-col gap-[25px] items-center justify-start w-[84%]">
        <Header className="bg-white-A700 flex w-full" />
        <div className="flex flex-row justify-start px-6 w-full">
          <div className="flex flex-col gap-[30px] items-start justify-start pt-[3px] w-full">
            <Text
              size="3xl"
              as="p"
              className="!font-poppins !text-blue_gray-900"
            >
              File Management
            </Text>
            <div className="flex flex-row gap-6 items-center w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-[24%]">
                <div className="bg-white-A700 flex flex-col gap-6 items-center justify-start p-8 rounded shadow-xs w-full">
                  <Accordion
                    preExpanded={[0]}
                    className="flex flex-col gap-[23px] w-full"
                  >
                    {[...Array(3)].map((_, i) => (
                      <AccordionItem uuid={i} key={`expandablelistlineone${i}`}>
                        <div className="flex flex-col gap-4 items-center justify-start w-full">
                          <AccordionItemHeading className="w-full">
                            <AccordionItemButton>
                              <AccordionItemState>
                                {(props) => (
                                  <>
                                    <div className="flex flex-row justify-between w-full">
                                      <div className="flex flex-row gap-[13px] items-center justify-start">
                                        <Img
                                          src="images/img_line_indigo_400.svg"
                                          alt="lineone"
                                          className="h-6 w-6"
                                        />
                                        <Text
                                          as="p"
                                          className="!text-blue_gray-900 text-center"
                                        >
                                          Main File
                                        </Text>
                                      </div>
                                      {props?.expanded ? (
                                        <Img
                                          src="images/img_carret_up.svg"
                                          alt="carretup"
                                          className="h-6 w-6"
                                        />
                                      ) : (
                                        <Img
                                          src="images/img_carret_up.svg"
                                          alt="carretupone"
                                          className="h-6 w-6"
                                        />
                                      )}
                                    </div>
                                  </>
                                )}
                              </AccordionItemState>
                            </AccordionItemButton>
                          </AccordionItemHeading>
                          <AccordionItemPanel>
                            <div className="flex flex-col items-start justify-start px-0.5 w-full">
                              <Text
                                as="p"
                                className="!font-normal !font-poppins ml-[34px]"
                              >
                                Product Design
                              </Text>
                              <Text
                                as="p"
                                className="!font-normal !font-poppins mt-3.5"
                              >
                                Outsource
                              </Text>
                              <Text
                                as="p"
                                className="!font-normal !font-poppins mt-[17px]"
                              >
                                Graphics
                              </Text>
                              <Text
                                as="p"
                                className="!font-normal !font-poppins mt-4"
                              >
                                Empty states
                              </Text>
                            </div>
                          </AccordionItemPanel>
                        </div>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  <Button
                    color="red_50_01"
                    rightIcon={
                      <Img
                        src="images/img_plus_deep_orange_300.svg"
                        alt="plus"
                        className="ml-[13px]"
                      />
                    }
                    className="font-bold font-poppins rounded-[24px] w-full"
                  >
                    Add new folder
                  </Button>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start p-4 rounded shadow-xs w-full">
                  <div className="flex flex-row justify-center pl-[202px] w-[95%]">
                    <Img src="images/img_x.svg" alt="x" className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col gap-11 items-center justify-start mt-[5px] w-[95%]">
                    <div className="flex flex-col gap-8 items-center justify-start w-full">
                      <Img
                        src="images/img_document_1.png"
                        alt="documentone"
                        className="object-cover w-[81px]"
                      />
                      <div className="flex flex-col gap-2 items-center justify-start pt-[3px] w-full">
                        <Heading size="lg" as="h6" className="text-center">
                          Upgrade Features
                        </Heading>
                        <Text
                          size="lg"
                          as="p"
                          className="!leading-[22px] !text-blue_gray-800 text-center"
                        >
                          Upgrade account to access multiple features
                        </Text>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      rightIcon={
                        <Img
                          src="images/img_chevronsright.svg"
                          alt="chevrons-right"
                          className="ml-2.5"
                        />
                      }
                      className="font-bold text-deep_orange-300 w-full"
                    >
                      Upgrade now
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-8 items-center justify-start mb-1 p-[26px] rounded shadow-xs w-[49%]">
                <div className="flex flex-col gap-[26px] items-center justify-start w-[99%]">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Heading as="h6" className="!text-blue_gray-900">
                      Main File
                    </Heading>
                    <div className="flex flex-row gap-4">
                      <Button size="6xl" className="rounded-[50%] w-10">
                        <Img src="images/img_search_blue_gray_900.svg" />
                      </Button>
                      <Button size="6xl" className="rounded-[50%] w-10">
                        <Img src="images/img_button_primary_blue_gray_900.svg" />
                      </Button>
                    </div>
                  </div>
                  <div className="gap-5 grid grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="bg-white-A700 border border-indigo-50 border-solid flex flex-col gap-8 items-center justify-start p-5 rounded w-full">
                      <div className="flex flex-row gap-[149px] w-full">
                        <Img
                          src="images/img_icon_file_glyph.svg"
                          alt="iconfileglyph"
                          className="h-6 w-6"
                        />
                        <Img
                          src="images/img_more_horizontal.svg"
                          alt="morehorizontal"
                          className="h-6 w-6"
                        />
                      </div>
                      <div className="flex flex-row gap-6 items-end w-full">
                        <div className="flex flex-col gap-1.5 items-start justify-end py-0.5 w-[74%]">
                          <Heading size="lg" as="h6" className="">
                            Product Design
                          </Heading>
                          <Text size="lg" as="p" className="">
                            12 Files
                          </Text>
                        </div>
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium mb-0.5 text-right"
                        >
                          3GB
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-indigo-50 border-solid flex flex-col gap-8 items-center justify-start p-5 rounded w-full">
                      <div className="flex flex-row gap-[149px] w-full">
                        <Img
                          src="images/img_icon_file_glyph.svg"
                          alt="iconfileglyph"
                          className="h-6 w-6"
                        />
                        <Img
                          src="images/img_more_horizontal.svg"
                          alt="morehorizontal"
                          className="h-6 w-6"
                        />
                      </div>
                      <div className="flex flex-row gap-6 items-end w-full">
                        <div className="flex flex-col gap-2 items-start justify-start py-0.5 w-[74%]">
                          <Heading size="lg" as="h6" className="">
                            Outsource
                          </Heading>
                          <Text size="lg" as="p" className="">
                            12 Files
                          </Text>
                        </div>
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium mb-0.5 text-right"
                        >
                          3GB
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-indigo-50 border-solid flex flex-col gap-8 items-center justify-start p-5 rounded w-full">
                      <div className="flex flex-row gap-[149px] w-full">
                        <Img
                          src="images/img_icon_file_glyph.svg"
                          alt="iconfileglyph"
                          className="h-6 w-6"
                        />
                        <Img
                          src="images/img_more_horizontal.svg"
                          alt="morehorizontal"
                          className="h-6 w-6"
                        />
                      </div>
                      <div className="flex flex-row gap-6 items-end w-full">
                        <div className="flex flex-col gap-1.5 items-start justify-end py-0.5 w-[74%]">
                          <Heading size="lg" as="h6" className="">
                            Graphics
                          </Heading>
                          <Text size="lg" as="p" className="">
                            12 Files
                          </Text>
                        </div>
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium mb-0.5 text-right"
                        >
                          3GB
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-indigo-50 border-solid flex flex-col gap-8 items-center justify-start p-5 rounded w-full">
                      <div className="flex flex-row gap-[149px] w-full">
                        <Img
                          src="images/img_icon_file_glyph.svg"
                          alt="iconfileglyph"
                          className="h-6 w-6"
                        />
                        <Img
                          src="images/img_more_horizontal.svg"
                          alt="morehorizontal"
                          className="h-6 w-6"
                        />
                      </div>
                      <div className="flex flex-row gap-6 items-end w-full">
                        <div className="flex flex-col gap-1.5 items-start justify-end py-0.5 w-[74%]">
                          <Heading size="lg" as="h6" className="">
                            Empty States
                          </Heading>
                          <Text size="lg" as="p" className="">
                            12 Files
                          </Text>
                        </div>
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium mb-0.5 text-right"
                        >
                          3GB
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[18px] items-center justify-start w-[99%]">
                  <div className="flex flex-row justify-between py-0.5 w-full">
                    <Heading as="h6" className="!text-blue_gray-900">
                      Recent files
                    </Heading>
                    <div className="flex flex-row gap-2 items-center">
                      <Text
                        size="lg"
                        as="p"
                        className="!font-medium !text-blue_gray-800 text-right"
                      >
                        View all
                      </Text>
                      <Img
                        src="images/img_arrow_right_blue_gray_800.svg"
                        alt="arrowright"
                        className="h-5 w-5"
                      />
                    </div>
                  </div>
                  <ReactTable
                    size="xs"
                    variant="striped"
                    bodyProps={{ className: "" }}
                    headerProps={{ className: "" }}
                    rowDataProps={{ className: "" }}
                    className="w-[495px]"
                    columns={table2Columns}
                    data={table2Data}
                  />
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-end p-8 rounded shadow-xs w-[24%]">
                <Heading as="h6" className="!text-blue_gray-900 mt-[5px]">
                  Storage
                </Heading>
                <div className="h-[190px] mt-7 relative w-[190px]">
                  <CircularProgressbar
                    strokeWidth={1}
                    value={16}
                    counterClockwise
                    styles={{ trail: {}, path: { strokeLinecap: "square" } }}
                    className="border-[12px] border-gray-50 border-solid h-[190px] m-auto w-[190px]"
                  />
                  <div className="absolute flex flex-col gap-1.5 items-center justify-start left-0 m-auto right-0 top-[32%] w-[49%]">
                    <Heading size="2xl" as="h4" className="">
                      25Gb
                    </Heading>
                    <Text size="lg" as="p" className="">
                      Used of 50GB
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[9.5px] mt-7 w-full">
                  <div className="flex flex-col items-center justify-start pb-[21px] w-full">
                    <div className="flex flex-row gap-4 items-center w-full">
                      <Img
                        src="images/img_image_indigo_400.svg"
                        alt="image"
                        className="h-6 w-6"
                      />
                      <div className="flex flex-row gap-6 items-start w-[81%]">
                        <div className="flex flex-col gap-1.5 items-start justify-end py-0.5 w-[69%]">
                          <Heading size="lg" as="h6" className="">
                            Image
                          </Heading>
                          <Text size="lg" as="p" className="">
                            23 files
                          </Text>
                        </div>
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium text-right"
                        >
                          3GB
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 h-px w-px" />
                  <div className="flex flex-col items-center justify-start pb-[21px] w-full">
                    <div className="flex flex-row gap-4 items-center w-full">
                      <Img
                        src="images/img_play_circle.svg"
                        alt="playcircle"
                        className="h-6 w-6"
                      />
                      <div className="flex flex-row gap-6 items-start w-[81%]">
                        <div className="flex flex-col gap-2 items-start justify-start w-[69%]">
                          <Heading size="lg" as="h6" className="">
                            Videos
                          </Heading>
                          <Text size="lg" as="p" className="">
                            23 files
                          </Text>
                        </div>
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium text-right"
                        >
                          3GB
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 h-px w-px" />
                  <div className="flex flex-row gap-4 items-center w-full">
                    <Img
                      src="images/img_music.svg"
                      alt="music"
                      className="h-6 w-6"
                    />
                    <div className="flex flex-row gap-6 items-start w-[81%]">
                      <div className="flex flex-col gap-2 items-start justify-start w-[69%]">
                        <Heading size="lg" as="h6" className="">
                          Muscics
                        </Heading>
                        <Text size="lg" as="p" className="">
                          23 files
                        </Text>
                      </div>
                      <Text
                        size="lg"
                        as="p"
                        className="!font-medium text-right"
                      >
                        3GB
                      </Text>
                    </div>
                  </div>
                  <div className="bg-indigo-50 h-px w-px" />
                  <div className="flex flex-col items-center justify-end pt-5 w-full">
                    <div className="flex flex-row gap-4 items-center w-full">
                      <Img
                        src="images/img_archive.svg"
                        alt="archive"
                        className="h-6 w-6"
                      />
                      <div className="flex flex-row gap-6 items-start w-[81%]">
                        <div className="flex flex-col gap-2 items-start justify-start py-0.5 w-[69%]">
                          <Heading size="lg" as="h6" className="">
                            Others
                          </Heading>
                          <Text size="lg" as="p" className="">
                            23 files
                          </Text>
                        </div>
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium text-right"
                        >
                          3GB
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-dashed border-indigo-50 flex flex-row justify-center mt-7 p-3 rounded w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start w-[39%]">
                    <Img
                      src="images/img_download_cloud.svg"
                      alt="downloadcloud"
                      className="h-6 w-6"
                    />
                    <Text size="lg" as="p" className="">
                      Import file
                    </Text>
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
