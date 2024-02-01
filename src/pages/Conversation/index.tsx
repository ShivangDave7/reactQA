import React from "react";

import { CloseSVG } from "../../assets/images";
import { Input, Img, Text, Heading, Button } from "../../components";
import Header from "../../components/Header";
import { MenuItem, Menu, Sidebar, useProSidebar } from "react-pro-sidebar";

export default function ConversationPage() {
  const [searchBarValue14, setSearchBarValue14] = React.useState("");
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <div className="bg-white-A700_01 flex flex-row items-start w-full">
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
          className="flex flex-col items-center justify-start mb-[522px] mt-9 px-8 w-full"
        >
          <div className="flex flex-col gap-[30.00px] items-center justify-start w-full">
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
                  src="images/img_icon_7.svg"
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
      <div className="bg-indigo-50 h-[927px] w-px" />
      <div className="flex flex-col gap-[25px] items-center justify-start w-[84%]">
        <Header className="bg-white-A700 flex w-full" />
        <div className="flex flex-row justify-start px-[25px] w-full">
          <div className="flex flex-col gap-[30px] items-start justify-start pt-[3px] w-full">
            <Text
              size="3xl"
              as="p"
              className="!font-poppins !text-blue_gray-900"
            >
              Message
            </Text>
            <div className="bg-white-A700 flex flex-row items-center justify-start px-4 rounded shadow-xs w-full">
              <div className="flex flex-row gap-[26px] items-center w-[51%]">
                <div className="flex flex-col gap-8 items-center justify-start w-[96%]">
                  <div className="flex flex-row gap-4 items-center w-full">
                    <div className="border-2 border-green-700 border-solid flex flex-col h-[62px] items-center justify-start p-[7px] rounded-[50%] w-[62px]">
                      <Img
                        src="images/img_robototoyfacefinal_2_48x48.png"
                        alt="robototoyfacefi"
                        className="h-12 w-12"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-end w-[86%]">
                      <Heading as="h6" className="">
                        Ackerman
                      </Heading>
                      <Text size="lg" as="p" className="">
                        My accout
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-7 items-start justify-start w-full">
                    <Text size="lg" as="p" className="">
                      Online (10)
                    </Text>
                    <div className="flex flex-row gap-7 items-center w-full">
                      <div className="flex flex-row gap-[52px] w-[91%]">
                        <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                          <Img
                            src="images/img_group_green_700_51x48.png"
                            alt="group"
                            className="object-cover w-full"
                          />
                          <Text as="p" className="!text-blue_gray-900">
                            Lee
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                          <Img
                            src="images/img_group_blue_gray_200.png"
                            alt="group"
                            className="object-cover w-full"
                          />
                          <Text as="p" className="!text-blue_gray-900">
                            Riri
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                          <Img
                            src="images/img_group_blue_gray_200.png"
                            alt="group"
                            className="object-cover w-full"
                          />
                          <Text as="p" className="!text-blue_gray-900">
                            Jimo
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                          <Img
                            src="images/img_group_blue_gray_200.png"
                            alt="group"
                            className="object-cover w-full"
                          />
                          <Text as="p" className="!text-blue_gray-900">
                            Acker
                          </Text>
                        </div>
                        <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                          <Img
                            src="images/img_group_blue_gray_200.png"
                            alt="group"
                            className="object-cover w-full"
                          />
                          <Text as="p" className="!text-blue_gray-900">
                            Momo
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_arrow_right_blue_gray_400.svg"
                        alt="arrowright"
                        className="h-6 w-6"
                      />
                    </div>
                  </div>
                  <Input
                    color="gray_50"
                    size="xs"
                    name="searchboxone"
                    placeholder="Search..."
                    value={searchBarValue14}
                    onChange={(e: string) => setSearchBarValue14(e)}
                    prefix={
                      <Img
                        src="images/img_search.svg"
                        alt="search"
                        className="cursor-pointer mr-2"
                      />
                    }
                    suffix={
                      searchBarValue14?.length > 0 ? (
                        <CloseSVG
                          onClick={() => setSearchBarValue14("")}
                          fillColor="#36414fff"
                        />
                      ) : null
                    }
                    className="font-medium w-full"
                  />
                  <div className="flex flex-col gap-2.5 pb-[21px] w-full">
                    <div className="flex flex-col gap-5 w-full">
                      <div className="flex flex-row gap-5 items-center w-full">
                        <Img
                          src="images/img_group_green_700_51x48.png"
                          alt="group"
                          className="object-cover w-[10%]"
                        />
                        <div className="flex flex-row gap-6 w-[88%]">
                          <div className="flex flex-col gap-[9px] items-start justify-start pr-[3px] pt-[3px] w-[89%]">
                            <Heading as="h6" className="">
                              Lee Ankar
                            </Heading>
                            <Text as="p" className="!text-blue_gray-800">
                              Hey! Can i meet you for a sec?
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[11px] items-center justify-start pt-[3px] w-[7%]">
                            <Text size="lg" as="p" className="text-right">
                              now
                            </Text>
                            <Heading
                              size="s"
                              as="p"
                              className="!text-white-A700 bg-red-600 flex h-6 items-center justify-center rounded-[50%] text-center w-6"
                            >
                              3
                            </Heading>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-5 items-center w-full">
                        <Img
                          src="images/img_group_blue_gray_200.png"
                          alt="group"
                          className="object-cover w-[10%]"
                        />
                        <div className="flex flex-row gap-6 items-start w-[88%]">
                          <div className="flex flex-col gap-2.5 items-start justify-start pr-[3px] pt-[3px] w-[84%]">
                            <Heading as="h6" className="">
                              Jimo
                            </Heading>
                            <Text as="p" className="!font-normal">
                              Sorry for my mistaken ✓
                            </Text>
                          </div>
                          <Text size="lg" as="p" className="text-right">
                            23 mins
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-5 items-center w-full">
                        <Img
                          src="images/img_group_blue_gray_200.png"
                          alt="group"
                          className="object-cover w-[10%]"
                        />
                        <div className="flex flex-row gap-6 items-start w-[88%]">
                          <div className="flex flex-col gap-[9px] items-start justify-start pr-[3px] pt-[3px] w-[84%]">
                            <Heading as="h6" className="">
                              Momo
                            </Heading>
                            <Text as="p" className="!font-normal">
                              Sorry for my mistaken ✓
                            </Text>
                          </div>
                          <Text size="lg" as="p" className="text-right">
                            23 mins
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-5 items-center w-full">
                        <Img
                          src="images/img_group_blue_gray_200.png"
                          alt="group"
                          className="object-cover w-[10%]"
                        />
                        <div className="flex flex-row gap-6 items-start w-[88%]">
                          <div className="flex flex-col gap-2.5 items-start justify-start pr-[3px] pt-[3px] w-[84%]">
                            <Heading as="h6" className="">
                              Riri lee
                            </Heading>
                            <Text as="p" className="!font-normal">
                              Sorry for my mistaken ✓
                            </Text>
                          </div>
                          <Text size="lg" as="p" className="text-right">
                            23 mins
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-indigo-50 h-[747px] w-px" />
              </div>
              <div className="flex flex-col items-center justify-start px-[31px] w-1/2">
                <div className="flex flex-col gap-[104px] items-center justify-start w-full">
                  <div className="flex flex-col gap-[31px] items-center justify-start w-full">
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <div className="flex flex-row gap-[295px] items-center w-full">
                        <div className="flex flex-col gap-2.5 items-start justify-start pt-[3px] w-[18%]">
                          <Heading as="h6" className="">
                            Lee Ankar
                          </Heading>
                          <div className="flex flex-row justify-start w-[70%]">
                            <div className="flex flex-row gap-2 items-center justify-start pb-[3px] w-full">
                              <div className="bg-green-700 h-2 mb-1 mt-[7px] rounded-[50%] w-2" />
                              <Text
                                size="lg"
                                as="p"
                                className="!font-medium !text-blue_gray-800"
                              >
                                Online
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-4 w-[23%]">
                          <Button size="7xl" className="rounded-[50%] w-12">
                            <Img src="images/img_search_blue_gray_900.svg" />
                          </Button>
                          <Button size="7xl" className="rounded-[50%] w-12">
                            <Img src="images/img_button_primary_blue_gray_900.svg" />
                          </Button>
                        </div>
                      </div>
                      <div className="bg-indigo-50 h-px w-full" />
                    </div>
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-row gap-3 items-center w-[61%]">
                          <Img
                            src="images/img_punktoyface_1_24x24.png"
                            alt="punktoyfaceone"
                            className="h-6 w-6"
                          />
                          <div className="flex flex-col gap-2.5 items-start justify-start w-[88%]">
                            <Text size="lg" as="p" className="">
                              Lee Ankar{" "}
                            </Text>
                            <div className="bg-gray-50 flex flex-row justify-start p-4 rounded-bl rounded-br rounded-tr w-full">
                              <Text
                                as="p"
                                className="!text-blue_gray-800 my-0.5"
                              >
                                Hey! Can i meet you for a sec?
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-end pl-[185px] w-full">
                        <div className="flex flex-col gap-4 items-end justify-start w-full">
                          <div className="flex flex-row gap-2 items-end justify-end w-[94%]">
                            <div className="bg-deep_orange-50_01 flex flex-row justify-start p-4 rounded-bl rounded-tl rounded-tr w-[91%]">
                              <Text
                                as="p"
                                className="!text-blue_gray-800 my-0.5"
                              >
                                Hey! Can i meet you for a sec?
                              </Text>
                            </div>
                            <Img
                              src="images/img_circle_check_full.svg"
                              alt="circlecheck"
                              className="h-5 w-5"
                            />
                          </div>
                          <div className="flex flex-row gap-2 items-end w-full">
                            <div className="bg-gray-50 flex flex-row justify-start p-4 rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px] w-[91%]">
                              <div className="flex flex-col gap-4 items-center justify-start w-full">
                                <Img
                                  src="images/img_vector.png"
                                  alt="vectorone"
                                  className="object-cover rounded-lg w-full"
                                />
                                <div className="flex flex-col gap-[13px] items-start justify-end w-full">
                                  <Heading
                                    size="lg"
                                    as="h6"
                                    className="!font-semibold !text-blue_gray-900"
                                  >
                                    ☕️ Life Style Coffee
                                  </Heading>
                                  <Text
                                    size="lg"
                                    as="p"
                                    className="!text-blue_gray-400_02"
                                  >
                                    8350 Melrose Ave, USA
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Img
                              src="images/img_circle_check_full.svg"
                              alt="circlecheckone"
                              className="h-5 w-5"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Input
                    color="gray_50"
                    name="textinput"
                    placeholder="Enter message..."
                    suffix={
                      <Img
                        src="images/img_share2.svg"
                        alt="share-2"
                        className="ml-[35px]"
                      />
                    }
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
