"use client";
import React from "react";

import { Button, Text, Img, Heading } from "../../components";
import CartSectionSubscribe from "../../components/CartSectionSubscribe";
import Footer from "../../components/Footer";

export default function HomepagePage() {
  return (
    <div className="bg-gray-50 flex flex-col items-center justify-start w-full">
      <div className="flex flex-col items-center justify-start w-full">
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
        <div className="bg-orange-50 flex flex-row justify-start p-[75px] w-full">
          <div className="flex flex-row gap-[60px] items-center justify-start max-w-[1290px] mx-auto my-[5px] w-full">
            <div className="flex flex-col gap-[30px] items-start justify-start w-[48%]">
              <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                <Text size="xl" as="p" className="tracking-[-0.50px]">
                  Interior Needs
                </Text>
                <Text
                  size="3xl"
                  as="p"
                  className="!font-pollerone tracking-[-0.50px]"
                >
                  Various new collections of furniture to decorate the corner of
                  your house.
                </Text>
              </div>
              <Button
                size="8xl"
                className="!text-yellow-100 border-2 border-blue_gray-900_01 border-solid font-medium min-w-[218px] tracking-[-0.50px]"
              >
                Shop Now
              </Button>
            </div>
            <Img
              src="images/img_nathan_oakley_o.png"
              alt="nathan oakley O"
              className="object-cover w-[48%]"
            />
          </div>
        </div>
      </div>
      <div className="bg-black-900 flex flex-row justify-start mt-[100px] p-[41px] w-full">
        <div className="flex flex-col gap-11 items-center justify-start max-w-[1094px] mx-auto w-full">
          <Text
            size="xl"
            as="p"
            className="!text-gray-50_01 text-center tracking-[-0.50px]"
          >
            Various brands have used our products
          </Text>
          <div className="flex flex-row gap-[50px] justify-start w-full">
            <Img
              src="images/img_search_gray_50_01.svg"
              alt="search"
              className="h-12"
            />
            <Img
              src="images/img_company_logo_company109.svg"
              alt="Company logo Company109"
              className="h-12"
            />
            <Img
              src="images/img_company_logo_company109_gray_50_01.svg"
              alt="Company logo Company109"
              className="h-12"
            />
            <Img
              src="images/img_company_logo_company109_gray_50_01_48x141.svg"
              alt="Company logo Company109"
              className="h-12"
            />
            <Img
              src="images/img_company_logo_company109_gray_50_01_48x134.svg"
              alt="Company logo Company109"
              className="h-12"
            />
            <Img
              src="images/img_company_logo_company109_gray_50_01_48x132.svg"
              alt="Company logo Company109"
              className="h-12"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start mt-[100px] px-[75px] w-full">
        <div className="flex flex-row gap-5 max-w-[1290px] mx-auto w-full">
          <div className="bg-gradient flex flex-row justify-start p-6 w-full">
            <div className="flex flex-row items-center justify-between ml-1.5 w-[98%]">
              <div className="flex flex-col gap-6 items-start justify-start">
                <div className="flex flex-col gap-7 items-start justify-start w-full">
                  <Text as="p" className="!text-gray-50_01 tracking-[-0.50px]">
                    Living Room
                  </Text>
                  <Heading
                    size="3xl"
                    as="h1"
                    className="!text-gray-50_01 tracking-[-0.50px]"
                  >
                    The best foam padded chair
                  </Heading>
                </div>
                <Button
                  color="gray_50"
                  size="7xl"
                  variant="outline"
                  className="font-medium min-w-[155px] tracking-[-0.50px]"
                >
                  Shop Now
                </Button>
              </div>
              <Img
                src="images/img_sam_moghadam_kh.png"
                alt="sam moghadam kh"
                className="h-[301px] object-cover"
              />
            </div>
          </div>
          <div className="bg-gradient flex flex-row justify-center p-6 w-full">
            <div className="flex flex-row items-center justify-between py-7 w-[98%]">
              <div className="flex flex-col gap-6 items-start justify-start">
                <div className="flex flex-col gap-7 items-start justify-start w-full">
                  <Text as="p" className="!text-gray-50_01 tracking-[-0.50px]">
                    Living Room
                  </Text>
                  <Heading
                    size="3xl"
                    as="h1"
                    className="!text-gray-50_01 tracking-[-0.50px]"
                  >
                    Latest model chandelier
                  </Heading>
                </div>
                <Button
                  color="gray_50"
                  size="7xl"
                  variant="outline"
                  className="font-medium min-w-[155px] tracking-[-0.50px]"
                >
                  Shop Now
                </Button>
              </div>
              <Img
                src="images/img_phil_desforges.png"
                alt="phil desforges "
                className="h-[244px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[21px] items-center justify-start max-w-[1290px] mt-[100px] pb-1 px-1 w-full">
        <Heading size="4xl" as="h1" className="text-center tracking-[-0.50px]">
          Our Newest Product
        </Heading>
        <Text as="p" className="!text-gray-500 text-center tracking-[-0.50px]">
          Made of the best materials and with a design that follows the times
        </Text>
      </div>
      <div className="gap-[19px] grid grid-cols-4 justify-center max-w-[1290px] min-h-[auto] mt-[46px] w-full">
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-[url(/images/img_group_107.png)] bg-cover bg-no-repeat flex flex-col gap-[106px] h-[400px] justify-start p-4 w-full">
              <div className="flex flex-col gap-[106px] items-center justify-start ml-[234px] w-[16%]">
                <Text
                  size="s"
                  as="p"
                  className="!text-white-A700 bg-red-A200 flex h-[21px] items-center justify-center px-[7px] tracking-[-0.50px] w-[42px]"
                >
                  New
                </Text>
                <div className="flex flex-col gap-5 items-center justify-start w-[96%]">
                  <Button
                    color="black_900"
                    size="xl"
                    shape="circle"
                    className="w-10"
                  >
                    <Img src="images/img_bx_heart_1.svg" />
                  </Button>
                  <Button
                    color="yellow_100"
                    size="xl"
                    shape="circle"
                    className="shadow-xs w-10"
                  >
                    <Img src="images/img_bx_cart_2.svg" />
                  </Button>
                </div>
              </div>
              <Button className="min-w-[106px] mr-[170px] tracking-[-0.50px]">
                Living Room
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <Heading as="h5" className="tracking-[-0.50px]">
              Teak wood chair
            </Heading>
            <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.50px]">
              $24
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-[url(/images/img_group_124.png)] bg-cover bg-no-repeat flex flex-col gap-[312px] h-[400px] justify-start p-4 w-full">
              <div className="flex flex-row justify-end ml-[234px] w-[16%]">
                <Text
                  size="s"
                  as="p"
                  className="!text-white-A700 bg-red-A200 flex h-[21px] items-center justify-center px-[7px] tracking-[-0.50px] w-[42px]"
                >
                  New
                </Text>
              </div>
              <Button className="min-w-[106px] mr-[170px] tracking-[-0.50px]">
                Living Room
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <Heading as="h5" className="tracking-[-0.50px]">
              Teak wood chair
            </Heading>
            <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.50px]">
              $24
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-[url(/images/img_group_132.png)] bg-cover bg-no-repeat flex flex-col gap-[312px] h-[400px] justify-start p-4 w-full">
              <div className="flex flex-row justify-end ml-[234px] w-[16%]">
                <Text
                  size="s"
                  as="p"
                  className="!text-white-A700 bg-red-A200 flex h-[21px] items-center justify-center px-[7px] tracking-[-0.50px] w-[42px]"
                >
                  New
                </Text>
              </div>
              <Button className="min-w-[106px] mr-[170px] tracking-[-0.50px]">
                Living Room
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <Heading as="h5" className="tracking-[-0.50px]">
              Teak wood chair
            </Heading>
            <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.50px]">
              $24
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-[url(/images/img_group_156.png)] bg-cover bg-no-repeat flex flex-col gap-[312px] h-[400px] justify-start p-4 w-full">
              <div className="flex flex-row justify-end ml-[234px] w-[16%]">
                <Text
                  size="s"
                  as="p"
                  className="!text-white-A700 bg-red-A200 flex h-[21px] items-center justify-center px-[7px] tracking-[-0.50px] w-[42px]"
                >
                  New
                </Text>
              </div>
              <Button className="min-w-[106px] mr-[170px] tracking-[-0.50px]">
                Living Room
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <Heading as="h5" className="tracking-[-0.50px]">
              Teak wood chair
            </Heading>
            <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.50px]">
              $24
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-[url(/images/img_group_200.png)] bg-cover bg-no-repeat flex flex-col gap-[312px] h-[400px] justify-start p-4 w-full">
              <div className="flex flex-row justify-end ml-[234px] w-[16%]">
                <Text
                  size="s"
                  as="p"
                  className="!text-white-A700 bg-red-A200 flex h-[21px] items-center justify-center px-[7px] tracking-[-0.50px] w-[42px]"
                >
                  New
                </Text>
              </div>
              <Button className="min-w-[106px] mr-[170px] tracking-[-0.50px]">
                Living Room
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <Heading as="h5" className="tracking-[-0.50px]">
              Teak wood chair
            </Heading>
            <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.50px]">
              $24
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-[url(/images/img_group_216.png)] bg-cover bg-no-repeat flex flex-col gap-[312px] h-[400px] justify-start p-4 w-full">
              <div className="flex flex-row justify-end ml-[234px] w-[16%]">
                <Text
                  size="s"
                  as="p"
                  className="!text-white-A700 bg-red-A200 flex h-[21px] items-center justify-center px-[7px] tracking-[-0.50px] w-[42px]"
                >
                  New
                </Text>
              </div>
              <Button className="min-w-[106px] mr-[170px] tracking-[-0.50px]">
                Living Room
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <Heading as="h5" className="tracking-[-0.50px]">
              Teak wood chair
            </Heading>
            <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.50px]">
              $24
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-[url(/images/img_group_230.png)] bg-cover bg-no-repeat flex flex-col gap-[312px] h-[400px] justify-start p-4 w-full">
              <div className="flex flex-row justify-end ml-[234px] w-[16%]">
                <Text
                  size="s"
                  as="p"
                  className="!text-white-A700 bg-red-A200 flex h-[21px] items-center justify-center px-[7px] tracking-[-0.50px] w-[42px]"
                >
                  New
                </Text>
              </div>
              <Button className="min-w-[106px] mr-[170px] tracking-[-0.50px]">
                Living Room
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <Heading as="h5" className="tracking-[-0.50px]">
              Teak wood chair
            </Heading>
            <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.50px]">
              $24
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-[15px] items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-[url(/images/img_group_248.png)] bg-cover bg-no-repeat flex flex-col gap-[312px] h-[400px] justify-start p-4 w-full">
              <div className="flex flex-row justify-end ml-[234px] w-[16%]">
                <Text
                  size="s"
                  as="p"
                  className="!text-white-A700 bg-red-A200 flex h-[21px] items-center justify-center px-[7px] tracking-[-0.50px] w-[42px]"
                >
                  New
                </Text>
              </div>
              <Button className="min-w-[106px] mr-[170px] tracking-[-0.50px]">
                Living Room
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <Heading as="h5" className="tracking-[-0.50px]">
              Teak wood chair
            </Heading>
            <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.50px]">
              $24
            </Text>
          </div>
        </div>
      </div>
      <div className="flex h-[15px] justify-center mt-[45px] w-[75px]" />
      <div className="h-[535px] mt-[100px] relative w-full">
        <Img
          src="images/img_inside_weather.png"
          alt="inside weather "
          className="h-[535px] m-auto object-cover w-[535px]"
        />
        <div className="absolute bottom-0 h-[535px] justify-center left-0 m-auto right-0 top-0 w-full">
          <div className="absolute bg-yellow-100 bottom-[0%] h-[440px] left-0 m-auto right-0 w-full" />
          <div className="absolute bottom-0 flex flex-row h-full justify-start m-auto pr-[108px] py-[108px] right-[0%] top-0 w-[95%]">
            <div className="flex flex-col gap-[30px] items-start justify-start w-[42%]">
              <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                <Text
                  size="2xl"
                  as="p"
                  className="!text-blue_gray-900_01 tracking-[-0.50px]"
                >
                  Interior Modern
                </Text>
                <Heading
                  size="4xl"
                  as="h1"
                  className="text-6xl tracking-[-0.50px]"
                >
                  Arrange your home in such a way with our modern interiors
                </Heading>
              </div>
              <Button
                size="8xl"
                variant="outline"
                className="font-medium min-w-[218px] tracking-[-0.50px]"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start mt-[99px] px-[75px] w-full">
        <div className="flex flex-col gap-[67px] items-center justify-start max-w-[1290px] mx-auto w-full">
          <Heading
            size="2xl"
            as="h2"
            className="!text-blue_gray-900_01 text-center tracking-[-0.50px]"
          >
            New Arrival
          </Heading>
          <div className="gap-[19px] grid grid-cols-4 justify-center min-h-[auto] w-full">
            <div className="flex flex-col gap-[15px] items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-[url(/images/img_group_107.png)] bg-cover bg-no-repeat flex flex-col gap-[106px] h-[400px] justify-start p-4 w-full">
                  <div className="flex flex-col gap-[106px] items-center justify-start ml-[234px] w-[16%]">
                    <Text
                      size="s"
                      as="p"
                      className="!text-white-A700 bg-red-A200 flex h-[21px] items-center justify-center px-[7px] tracking-[-0.50px] w-[42px]"
                    >
                      New
                    </Text>
                    <div className="flex flex-col gap-5 items-center justify-start w-[96%]">
                      <Button
                        color="black_900"
                        size="xl"
                        shape="circle"
                        className="w-10"
                      >
                        <Img src="images/img_bx_heart_1.svg" />
                      </Button>
                      <Button
                        color="yellow_100"
                        size="xl"
                        shape="circle"
                        className="shadow-xs w-10"
                      >
                        <Img src="images/img_bx_cart_2.svg" />
                      </Button>
                    </div>
                  </div>
                  <Button className="min-w-[106px] mr-[170px] tracking-[-0.50px]">
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
                <div className="bg-[url(/images/img_group_260.png)] bg-cover bg-no-repeat flex flex-col gap-[312px] h-[400px] justify-start p-4 w-full">
                  <div className="flex flex-row justify-end ml-[234px] w-[16%]">
                    <Text
                      size="s"
                      as="p"
                      className="!text-white-A700 bg-red-A200 flex h-[21px] items-center justify-center px-[7px] tracking-[-0.50px] w-[42px]"
                    >
                      New
                    </Text>
                  </div>
                  <Button className="min-w-[106px] mr-[170px] tracking-[-0.50px]">
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
                <div className="bg-[url(/images/img_group_282.png)] bg-cover bg-no-repeat flex flex-col gap-[312px] h-[400px] justify-start p-4 w-full">
                  <div className="flex flex-row justify-end ml-[234px] w-[16%]">
                    <Text
                      size="s"
                      as="p"
                      className="!text-white-A700 bg-red-A200 flex h-[21px] items-center justify-center px-[7px] tracking-[-0.50px] w-[42px]"
                    >
                      New
                    </Text>
                  </div>
                  <Button className="min-w-[106px] mr-[170px] tracking-[-0.50px]">
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
                <div className="bg-[url(/images/img_group_296.png)] bg-cover bg-no-repeat flex flex-col gap-[312px] h-[400px] justify-start p-4 w-full">
                  <div className="flex flex-row justify-end ml-[234px] w-[16%]">
                    <Text
                      size="s"
                      as="p"
                      className="!text-white-A700 bg-red-A200 flex h-[21px] items-center justify-center px-[7px] tracking-[-0.50px] w-[42px]"
                    >
                      New
                    </Text>
                  </div>
                  <Button className="min-w-[106px] mr-[170px] tracking-[-0.50px]">
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
                <div className="bg-[url(/images/img_group_325.png)] bg-cover bg-no-repeat flex flex-col gap-[312px] h-[400px] justify-start p-4 w-full">
                  <div className="flex flex-row justify-end ml-[234px] w-[16%]">
                    <Text
                      size="s"
                      as="p"
                      className="!text-white-A700 bg-red-A200 flex h-[21px] items-center justify-center px-[7px] tracking-[-0.50px] w-[42px]"
                    >
                      New
                    </Text>
                  </div>
                  <Button className="min-w-[106px] mr-[170px] tracking-[-0.50px]">
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
                <div className="bg-[url(/images/img_group_337.png)] bg-cover bg-no-repeat flex flex-col gap-[312px] h-[400px] justify-start p-4 w-full">
                  <div className="flex flex-row justify-end ml-[234px] w-[16%]">
                    <Text
                      size="s"
                      as="p"
                      className="!text-white-A700 bg-red-A200 flex h-[21px] items-center justify-center px-[7px] tracking-[-0.50px] w-[42px]"
                    >
                      New
                    </Text>
                  </div>
                  <Button className="min-w-[106px] mr-[170px] tracking-[-0.50px]">
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
                <div className="bg-[url(/images/img_group_348.png)] bg-cover bg-no-repeat flex flex-col gap-[312px] h-[400px] justify-start p-4 w-full">
                  <div className="flex flex-row justify-end ml-[234px] w-[16%]">
                    <Text
                      size="s"
                      as="p"
                      className="!text-white-A700 bg-red-A200 flex h-[21px] items-center justify-center px-[7px] tracking-[-0.50px] w-[42px]"
                    >
                      New
                    </Text>
                  </div>
                  <Button className="min-w-[106px] mr-[170px] tracking-[-0.50px]">
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
                <div className="bg-[url(/images/img_group_355.png)] bg-cover bg-no-repeat flex flex-col gap-[312px] h-[400px] justify-start p-4 w-full">
                  <div className="flex flex-row justify-end ml-[234px] w-[16%]">
                    <Text
                      size="s"
                      as="p"
                      className="!text-white-A700 bg-red-A200 flex h-[21px] items-center justify-center px-[7px] tracking-[-0.50px] w-[42px]"
                    >
                      New
                    </Text>
                  </div>
                  <Button className="min-w-[106px] mr-[170px] tracking-[-0.50px]">
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
      <div className="flex flex-row justify-start mt-[99px] px-[75px] w-full">
        <div className="flex flex-row justify-between max-w-[1290px] mx-auto w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start">
            <Heading size="4xl" as="h1" className="text-6xl tracking-[-0.50px]">
              We guarantee the safety of your shopping
            </Heading>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="gap-[50px] grid grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="flex flex-col gap-10 items-start justify-start w-full">
                  <Img
                    src="images/img_icon.svg"
                    alt="Icon"
                    className="h-[60px]"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                    <Heading as="h5" className="tracking-[-0.50px]">
                      Fast Shipping
                    </Heading>
                    <Text
                      size="s"
                      as="p"
                      className="!text-gray-500 leading-[25px] tracking-[-0.50px]"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-10 items-start justify-start w-full">
                  <Img
                    src="images/img_lock.svg"
                    alt="lock"
                    className="h-[60px]"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                    <Heading as="h5" className="tracking-[-0.50px]">
                      Safe Delivery
                    </Heading>
                    <Text
                      size="s"
                      as="p"
                      className="!text-gray-500 leading-[25px] tracking-[-0.50px]"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-10 items-start justify-start w-full">
                  <Img
                    src="images/img_refresh.svg"
                    alt="refresh"
                    className="h-[60px]"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Heading as="h5" className="tracking-[-0.50px]">
                      365 Days Return
                    </Heading>
                    <Text
                      size="s"
                      as="p"
                      className="!text-gray-500 leading-[25px] tracking-[-0.50px]"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-10 items-start justify-start w-full">
                  <Img
                    src="images/img_call.svg"
                    alt="call"
                    className="h-[60px]"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                    <Heading as="h5" className="tracking-[-0.50px]">
                      24 hours CS
                    </Heading>
                    <Text
                      size="s"
                      as="p"
                      className="!text-gray-500 leading-[25px] tracking-[-0.50px]"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has{" "}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            src="images/img_rectangle_16.png"
            alt="Rectangle 16"
            className="h-[640px] object-cover"
          />
        </div>
      </div>
      <div className="flex flex-row justify-start mt-[100px] px-[75px] w-full">
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-auto w-full">
          <div className="flex flex-col gap-4 items-center justify-start p-1 w-full">
            <Heading
              size="4xl"
              as="h1"
              className="!font-semibold text-center tracking-[-0.50px]"
            >
              Read Our Latest Blog
            </Heading>
            <Text
              as="p"
              className="!text-gray-500 text-center tracking-[-0.50px]"
            >
              We write various things related to furniture, from tips and what
              things I need to pay attention to when choosing furniture
            </Text>
          </div>
          <div className="flex flex-row gap-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_18.png"
                  alt="Rectangle 18"
                  className="object-cover w-full"
                />
                <div className="flex flex-col items-start justify-start w-full">
                  <Heading size="xl" as="h4" className="tracking-[-0.50px]">
                    Why should you choose good wood
                  </Heading>
                  <div className="flex flex-row justify-start mt-4 w-full">
                    <div className="flex flex-row items-center justify-between w-[62%]">
                      <div className="flex flex-row items-start justify-evenly">
                        <Img
                          src="images/img_bx_edit_alt_1.svg"
                          alt="bx edit alt 1"
                          className="h-[18px] w-[18px]"
                        />
                        <Text size="s" as="p" className="tracking-[-0.50px]">
                          By Admin
                        </Text>
                      </div>
                      <div className="bg-gray-500 h-[15px] w-px" />
                      <div className="flex flex-row items-center justify-evenly">
                        <Img
                          src="images/img_bx_calendar_1.svg"
                          alt="bx calendar 1"
                          className="h-[18px] w-[18px]"
                        />
                        <Text size="s" as="p" className="tracking-[-0.50px]">
                          December 10, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    size="s"
                    as="p"
                    className="!text-gray-500 leading-[35px] mt-[18px] tracking-[-0.50px]"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever.
                  </Text>
                  <Button
                    color="black_900"
                    size="3xl"
                    variant="outline"
                    className="font-semibold min-w-[139px] mt-[19px] tracking-[-0.50px]"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_18_400x416.png"
                  alt="Rectangle 18"
                  className="object-cover w-full"
                />
                <div className="flex flex-col items-start justify-start w-full">
                  <Heading size="xl" as="h4" className="tracking-[-0.50px]">
                    Why should you choose good wood
                  </Heading>
                  <div className="flex flex-row justify-start mt-4 w-full">
                    <div className="flex flex-row items-center justify-between w-[62%]">
                      <div className="flex flex-row items-start justify-evenly">
                        <Img
                          src="images/img_bx_edit_alt_1.svg"
                          alt="bx edit alt 1"
                          className="h-[18px] w-[18px]"
                        />
                        <Text size="s" as="p" className="tracking-[-0.50px]">
                          By Admin
                        </Text>
                      </div>
                      <div className="bg-gray-500 h-[15px] w-px" />
                      <div className="flex flex-row items-center justify-evenly">
                        <Img
                          src="images/img_bx_calendar_1.svg"
                          alt="bx calendar 1"
                          className="h-[18px] w-[18px]"
                        />
                        <Text size="s" as="p" className="tracking-[-0.50px]">
                          December 10, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    size="s"
                    as="p"
                    className="!text-gray-500 leading-[35px] mt-[18px] tracking-[-0.50px]"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever.
                  </Text>
                  <Button
                    color="black_900"
                    size="3xl"
                    variant="outline"
                    className="font-semibold min-w-[139px] mt-[19px] tracking-[-0.50px]"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <Img
                src="images/img_rectangle_18_1.png"
                alt="Rectangle 18"
                className="object-cover w-full"
              />
              <div className="flex flex-col items-start justify-start w-full">
                <Heading size="xl" as="h4" className="tracking-[-0.50px]">
                  Why should you choose good wood
                </Heading>
                <div className="flex flex-row justify-start mt-4 w-full">
                  <div className="flex flex-row items-center justify-between w-[62%]">
                    <div className="flex flex-row items-start justify-evenly">
                      <Img
                        src="images/img_bx_edit_alt_1.svg"
                        alt="bx edit alt 1"
                        className="h-[18px] w-[18px]"
                      />
                      <Text size="s" as="p" className="tracking-[-0.50px]">
                        By Admin
                      </Text>
                    </div>
                    <div className="bg-gray-500 h-[15px] w-px" />
                    <div className="flex flex-row items-center justify-evenly">
                      <Img
                        src="images/img_bx_calendar_1.svg"
                        alt="bx calendar 1"
                        className="h-[18px] w-[18px]"
                      />
                      <Text size="s" as="p" className="tracking-[-0.50px]">
                        December 10, 2022
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  size="s"
                  as="p"
                  className="!text-gray-500 leading-[35px] mt-[18px] tracking-[-0.50px]"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever.
                </Text>
                <Button
                  color="black_900"
                  size="3xl"
                  variant="outline"
                  className="font-semibold min-w-[139px] mt-[19px] tracking-[-0.50px]"
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start mt-[100px] px-[75px] w-full">
        <CartSectionSubscribe className="bg-gradient flex flex-row flex-wrap justify-start max-w-[1290px] mx-auto pl-[46px] py-[46px] w-full" />
      </div>
      <Footer className="bg-black-900 flex mt-[100px] p-12 w-full" />
    </div>
  );
}
