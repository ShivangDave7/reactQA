"use client";
import React from "react";

import { Img, Button, Text, Heading, Input } from "../../components";
import CartSectionSubscribe from "../../components/CartSectionSubscribe";
import Footer from "../../components/Footer";

export default function ShopPage() {
  return (
    <div className="bg-gray-50 flex flex-col gap-[100px] items-center justify-start w-full">
      <div className="flex flex-col gap-[75px] items-center justify-start w-full">
        <header className="bg-white-A700 flex items-center justify-center p-[35px] w-full">
          <div className="flex flex-row items-center justify-between max-w-[1290px] ml-10 w-full">
            <Img
              src="images/img_linkedin.svg"
              alt="linkedin"
              className="h-[30px]"
            />
            <ul className="flex flex-row gap-9 items-start justify-center">
              <li>
                <div className="flex flex-row items-center justify-between">
                  <a href="/" target="_blank" rel="noreferrer" className="">
                    <Text as="p" className="tracking-[-0.50px]">
                      Home
                    </Text>
                  </a>
                  <Img
                    src="images/img_arrow_down.svg"
                    alt="arrow down"
                    className="h-6 w-6"
                  />
                </div>
              </li>
              <li>
                <a href="#" className="">
                  <Text as="p" className="tracking-[-0.50px]">
                    Shop
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="mt-[3px]">
                  <Text as="p" className="tracking-[-0.50px]">
                    Blog
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <Text as="p" className="tracking-[-0.50px]">
                    About
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <Text as="p" className="tracking-[-0.50px]">
                    Contact
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <Text as="p" className="tracking-[-0.50px]">
                    Team
                  </Text>
                </a>
              </li>
            </ul>
            <div className="flex flex-row gap-[30px] justify-between w-auto">
              <Img
                src="images/img_search.svg"
                alt="search"
                className="h-6 w-6"
              />
              <Img src="images/img_list.svg" alt="List" className="h-6 w-6" />
              <Img
                src="images/img_list_black_900.svg"
                alt="List"
                className="h-6 w-6"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-row justify-start px-[75px] w-full">
          <div className="flex flex-row justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-row justify-evenly w-full">
              <div className="bg-[url(/images/img_group_47.png)] bg-cover bg-no-repeat flex flex-row h-[450px] items-center justify-start p-[70px] w-full">
                <div className="flex flex-col gap-[30px] items-start justify-start w-[41%]">
                  <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                    <Heading
                      size="md"
                      as="h6"
                      className="!text-yellow-100 tracking-[-0.50px]"
                    >
                      Best Room Decor Items
                    </Heading>
                    <Heading
                      size="3xl"
                      as="h1"
                      className="!text-white-A700 text-6xl tracking-[-0.50px]"
                    >
                      Our goods have the best quality and materials in the world
                    </Heading>
                  </div>
                  <Button
                    color="yellow_100"
                    size="8xl"
                    className="font-bold font-poppins min-w-[170px] tracking-[-0.50px]"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start px-[75px] w-full">
        <div className="flex flex-row gap-5 items-start justify-start max-w-[1290px] w-full">
          <div className="flex flex-col gap-[60px] items-center justify-start w-[24%]">
            <div className="flex flex-col items-start justify-start w-full">
              <Heading as="h5" className="">
                Filter By Price
              </Heading>
              <div className="flex flex-row gap-4 items-start justify-start mt-5 w-full">
                <div className="flex flex-row justify-evenly w-[32%]">
                  <Text
                    as="p"
                    className="!text-gray-500 border border-gray-500 border-solid pl-2 pr-[35px] py-[7px] rounded tracking-[-0.50px]"
                  >
                    $0
                  </Text>
                </div>
                <Heading
                  size="xs"
                  as="p"
                  className="!font-plusjakartasans mt-3"
                >
                  -
                </Heading>
                <div className="flex flex-row justify-center w-[32%]">
                  <Text
                    as="p"
                    className="!text-gray-500 border border-gray-500 border-solid pl-2 pr-[35px] py-[7px] rounded tracking-[-0.50px]"
                  >
                    $2000
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_slider.svg"
                alt="Slider"
                className="h-4 mt-[22px]"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Heading as="h5" className="">
                Filter By Color
              </Heading>
              <Img
                src="images/img_frame_48095956.svg"
                alt="Frame 48095956"
                className="h-10 mt-5"
              />
              <Img
                src="images/img_frame_48095957.svg"
                alt="Frame 48095957"
                className="h-10 mt-[22px]"
              />
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <Heading as="h5" className="">
                Product Categories
              </Heading>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  size="md"
                  as="p"
                  className="!font-poppins !text-blue_gray-900_01 tracking-[-0.50px]"
                >
                  Chair (9)
                </Text>
                <Text
                  size="md"
                  as="p"
                  className="!font-poppins !text-gray-500 mt-5 tracking-[-0.50px]"
                >
                  Lamp (10)
                </Text>
                <Text
                  size="md"
                  as="p"
                  className="!font-poppins !text-gray-500 mt-[19px] tracking-[-0.50px]"
                >
                  Table (12)
                </Text>
                <Text
                  size="md"
                  as="p"
                  className="!font-poppins !text-gray-500 mt-5 tracking-[-0.50px]"
                >
                  Sofa (6)
                </Text>
                <Text
                  size="md"
                  as="p"
                  className="!font-poppins !text-gray-500 mt-5 tracking-[-0.50px]"
                >
                  Table (12)
                </Text>
                <Text
                  size="md"
                  as="p"
                  className="!font-poppins !text-gray-500 mt-5 tracking-[-0.50px]"
                >
                  Clock (5)
                </Text>
                <Text
                  size="md"
                  as="p"
                  className="!font-poppins !text-gray-500 mt-5 tracking-[-0.50px]"
                >
                  Pillow (3)
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <Heading as="h5" className="">
                Product Tag
              </Heading>
              <div className="w-[83%]">
                <div className="bg-blue_gray-900_01 border border-blue_gray-900_01 border-solid font-poppins mb-[102px] mr-[189px] px-3 py-[5px] rounded-[5px] text-base text-left text-yellow-100 tracking-[-0.50px] w-[26%]">
                  Chair
                </div>
                <div className="border border-gray-500 border-solid font-poppins mb-[102px] ml-[76px] mr-[111px] pb-[3px] pt-2 px-3 rounded-[5px] text-base text-gray-500 text-left tracking-[-0.50px] w-[27%]">
                  Lamp
                </div>
                <div className="border border-gray-500 border-solid font-poppins mb-[102px] ml-[154px] px-3 py-[5px] rounded-[5px] text-base text-gray-500 text-left tracking-[-0.50px] w-2/5">
                  Minimalist
                </div>
                <div className="border border-gray-500 border-solid font-poppins mr-[196px] my-[51px] px-3 py-[5px] rounded-[5px] text-base text-gray-500 text-left tracking-[-0.50px] w-[24%]">
                  Sofa
                </div>
                <div className="border border-gray-500 border-solid font-poppins ml-[69px] mr-32 my-[51px] px-3 py-[5px] rounded-[5px] text-base text-gray-500 text-left tracking-[-0.50px] w-[23%]">
                  New
                </div>
                <div className="border border-gray-500 border-solid font-poppins ml-[137px] mr-[51px] my-[51px] px-3 py-[5px] rounded-[5px] text-base text-gray-500 text-left tracking-[-0.50px] w-[27%]">
                  Clock
                </div>
                <div className="border border-gray-500 border-solid font-poppins mr-[189px] mt-[102px] px-3 py-[5px] rounded-[5px] text-base text-gray-500 text-left tracking-[-0.50px] w-[26%]">
                  Pillow
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-[url(/images/img_group_63.png)] bg-cover bg-no-repeat flex flex-col h-[400px] items-center justify-end p-[21px] rounded-[10px] w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start mb-[19px] mt-[216px] w-full">
                  <Heading
                    as="h5"
                    className="!font-bold !leading-[35px] !text-white-A700 text-center"
                  >
                    Make a purchase now and get 50% discount
                  </Heading>
                  <Button
                    color="yellow_100"
                    size="lg"
                    className="!text-black-900 border border-solid border-yellow-100 font-poppins font-semibold min-w-[107px] rounded-[5px] tracking-[-0.50px]"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[50px] items-center justify-start w-3/4">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row justify-evenly w-[43%]">
                <div className="flex flex-row justify-evenly w-full">
                  <Input
                    color="white_A700"
                    size="sm"
                    variant="fill"
                    name="Frame 48095984"
                    placeholder="Office Chair"
                    className="w-[74%]"
                  />
                  <Button
                    size="5xl"
                    className="!text-yellow-100 font-semibold min-w-[107px] tracking-[-0.50px]"
                  >
                    Search
                  </Button>
                </div>
              </div>
              <div className="flex flex-row items-start justify-evenly w-[8%]">
                <Text
                  size="s"
                  as="p"
                  className="!font-medium !font-raleway mt-[3px]"
                >
                  Sort By
                </Text>
                <Img
                  src="images/img_eva_arrow_ios_forward_fill.svg"
                  alt="eva arrow ios forward fill"
                  className="h-5 w-5"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                <div className="flex flex-row gap-5 justify-start w-full">
                  <div className="flex flex-col gap-[33px] items-center justify-start w-[32%]">
                    <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-[url(/images/img_group_107.png)] bg-cover bg-no-repeat flex flex-col gap-[106px] h-[400px] justify-start p-[15px] w-full">
                          <div className="flex flex-col gap-[106px] items-center justify-start ml-[234px] w-[16%]">
                            <Text
                              size="s"
                              as="p"
                              className="!text-white-A700 bg-red-A200 flex h-[21px] items-center justify-center px-[7px] tracking-[-0.50px] w-[42px]"
                            >
                              New
                            </Text>
                            <Img
                              src="images/img_overflow_menu.svg"
                              alt="overflow menu"
                              className="h-[100px]"
                            />
                          </div>
                          <Button className="min-w-[105px] mr-[170px] tracking-[-0.50px]">
                            Living Room
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Heading as="h5" className="tracking-[-0.50px]">
                          Teak wood chair
                        </Heading>
                        <Text
                          as="p"
                          className="!text-blue_gray-900_01 tracking-[-0.50px]"
                        >
                          $24
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-[url(/images/img_group_325.png)] bg-cover bg-no-repeat flex flex-col h-[400px] items-start justify-end p-[15px] w-full">
                          <Button className="min-w-[105px] mt-[333px] tracking-[-0.50px]">
                            Living Room
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Heading as="h5" className="tracking-[-0.50px]">
                          Teak wood chair
                        </Heading>
                        <Text
                          as="p"
                          className="!text-blue_gray-900_01 tracking-[-0.50px]"
                        >
                          $24
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="gap-5 grid grid-cols-2 min-h-[auto] w-[66%]">
                    <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-[url(/images/img_group_260.png)] bg-cover bg-no-repeat flex flex-col h-[400px] items-start justify-end p-[15px] w-full">
                          <Button className="min-w-[105px] mt-[333px] tracking-[-0.50px]">
                            Living Room
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Heading as="h5" className="tracking-[-0.50px]">
                          Teak wood chair
                        </Heading>
                        <Text
                          as="p"
                          className="!text-blue_gray-900_01 tracking-[-0.50px]"
                        >
                          $24
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-[url(/images/img_group_282.png)] bg-cover bg-no-repeat flex flex-col h-[400px] items-start justify-end p-[15px] w-full">
                          <Button className="min-w-[105px] mt-[333px] tracking-[-0.50px]">
                            Living Room
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Heading as="h5" className="tracking-[-0.50px]">
                          Teak wood chair
                        </Heading>
                        <Text
                          as="p"
                          className="!text-blue_gray-900_01 tracking-[-0.50px]"
                        >
                          $24
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-[url(/images/img_group_337.png)] bg-cover bg-no-repeat flex flex-col h-[400px] items-start justify-end p-[15px] w-full">
                          <Button className="min-w-[105px] mt-[333px] tracking-[-0.50px]">
                            Living Room
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Heading as="h5" className="tracking-[-0.50px]">
                          Teak wood chair
                        </Heading>
                        <Text
                          as="p"
                          className="!text-blue_gray-900_01 tracking-[-0.50px]"
                        >
                          $24
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-[url(/images/img_group_348.png)] bg-cover bg-no-repeat flex flex-col h-[400px] items-start justify-end p-[15px] w-full">
                          <Button className="min-w-[105px] mt-[333px] tracking-[-0.50px]">
                            Living Room
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <Heading as="h5" className="tracking-[-0.50px]">
                          Teak wood chair
                        </Heading>
                        <Text
                          as="p"
                          className="!text-blue_gray-900_01 tracking-[-0.50px]"
                        >
                          $24
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-5 w-full">
                  <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="bg-[url(/images/img_group_296.png)] bg-cover bg-no-repeat flex flex-col h-[400px] items-start justify-end p-[15px] w-full">
                        <Button className="min-w-[105px] mt-[333px] tracking-[-0.50px]">
                          Living Room
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Heading as="h5" className="tracking-[-0.50px]">
                        Teak wood chair
                      </Heading>
                      <Text
                        as="p"
                        className="!text-blue_gray-900_01 tracking-[-0.50px]"
                      >
                        $24
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="bg-[url(/images/img_group_355.png)] bg-cover bg-no-repeat flex flex-col h-[400px] items-start justify-end p-[15px] w-full">
                        <Button className="min-w-[105px] mt-[333px] tracking-[-0.50px]">
                          Living Room
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Heading as="h5" className="tracking-[-0.50px]">
                        Teak wood chair
                      </Heading>
                      <Text
                        as="p"
                        className="!text-blue_gray-900_01 tracking-[-0.50px]"
                      >
                        $24
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="bg-[url(/images/img_group_260.png)] bg-cover bg-no-repeat flex flex-col h-[400px] items-start justify-end p-[15px] w-full">
                        <Button className="min-w-[105px] mt-[333px] tracking-[-0.50px]">
                          Living Room
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Heading as="h5" className="tracking-[-0.50px]">
                        Teak wood chair
                      </Heading>
                      <Text
                        as="p"
                        className="!text-blue_gray-900_01 tracking-[-0.50px]"
                      >
                        $24
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2.5 items-center justify-start px-[371px] w-full">
              <Img
                src="images/img_arrow_left.svg"
                alt="arrow left"
                className="h-[15px] w-[15px]"
              />
              <div className="flex flex-row gap-2.5 w-[57%]">
                <div className="flex flex-col h-[35px] items-center justify-start w-full">
                  <Button
                    shape="round"
                    className="font-semibold min-w-[35px] tracking-[-0.50px]"
                  >
                    1
                  </Button>
                </div>
                <div className="flex flex-col h-[35px] items-center justify-start w-full">
                  <Button
                    color="gray_100"
                    shape="round"
                    className="font-semibold min-w-[35px] tracking-[-0.50px]"
                  >
                    2
                  </Button>
                </div>
                <div className="flex flex-col h-[35px] items-center justify-start w-full">
                  <Button
                    color="gray_100"
                    shape="round"
                    className="font-semibold min-w-[35px] tracking-[-0.50px]"
                  >
                    3
                  </Button>
                </div>
              </div>
              <Button
                color="gray_100"
                size="sm"
                shape="round"
                className="w-[35px]"
              >
                <Img src="images/img_bx_bx_dots_horizontal_rounded.svg" />
              </Button>
              <Img
                src="images/img_arrow_right.svg"
                alt="arrow right"
                className="h-[15px] w-[15px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start px-[75px] w-full">
        <CartSectionSubscribe className="bg-gradient flex flex-row flex-wrap justify-start max-w-[1290px] mx-auto pl-[46px] py-[46px] w-full" />
      </div>
      <Footer className="bg-black-900 flex p-12 w-full" />
    </div>
  );
}
