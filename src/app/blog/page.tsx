"use client";
import React from "react";

import { Img, Button, Text, Heading } from "../../components";
import CartSectionSubscribe from "../../components/CartSectionSubscribe";
import Footer1 from "../../components/Footer1";
import Header1 from "../../components/Header1";

export default function BlogPage() {
  return (
    <div className="bg-gray-50 flex flex-col gap-[126px] items-center justify-start w-full">
      <Header1 className="bg-white-A700 flex p-[35px] w-full" />
      <div className="flex flex-col items-center justify-start px-[75px] w-full">
        <div className="flex flex-col gap-[54px] items-center justify-start max-w-[1291px] w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start w-full">
            <div className="flex flex-col gap-2 items-center justify-start pt-1 w-full">
              <Heading
                size="4xl"
                as="h1"
                className="text-center tracking-[-0.50px]"
              >
                Read Our Latest Blog
              </Heading>
              <Text
                as="p"
                className="!text-gray-500 leading-[35px] text-center tracking-[-0.50px]"
              >
                We write various things related to furniture, from tips and what
                things <br />I need to pay attention to when choosing furniture
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="gap-5 grid grid-cols-3 justify-center min-h-[auto] w-full">
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
                            <Text
                              size="s"
                              as="p"
                              className="tracking-[-0.50px]"
                            >
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
                            <Text
                              size="s"
                              as="p"
                              className="tracking-[-0.50px]"
                            >
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
                            <Text
                              size="s"
                              as="p"
                              className="tracking-[-0.50px]"
                            >
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
                            <Text
                              size="s"
                              as="p"
                              className="tracking-[-0.50px]"
                            >
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
                            <Text
                              size="s"
                              as="p"
                              className="tracking-[-0.50px]"
                            >
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
                            <Text
                              size="s"
                              as="p"
                              className="tracking-[-0.50px]"
                            >
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
                      src="images/img_rectangle_18_400x417.png"
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
                            <Text
                              size="s"
                              as="p"
                              className="tracking-[-0.50px]"
                            >
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
                            <Text
                              size="s"
                              as="p"
                              className="tracking-[-0.50px]"
                            >
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
                      src="images/img_rectangle_18_2.png"
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
                            <Text
                              size="s"
                              as="p"
                              className="tracking-[-0.50px]"
                            >
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
                            <Text
                              size="s"
                              as="p"
                              className="tracking-[-0.50px]"
                            >
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
                      src="images/img_rectangle_18_3.png"
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
                            <Text
                              size="s"
                              as="p"
                              className="tracking-[-0.50px]"
                            >
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
                            <Text
                              size="s"
                              as="p"
                              className="tracking-[-0.50px]"
                            >
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
                      src="images/img_rectangle_18_4.png"
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
                            <Text
                              size="s"
                              as="p"
                              className="tracking-[-0.50px]"
                            >
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
                            <Text
                              size="s"
                              as="p"
                              className="tracking-[-0.50px]"
                            >
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
                      src="images/img_rectangle_18_5.png"
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
                            <Text
                              size="s"
                              as="p"
                              className="tracking-[-0.50px]"
                            >
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
                            <Text
                              size="s"
                              as="p"
                              className="tracking-[-0.50px]"
                            >
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
                      src="images/img_rectangle_18_6.png"
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
                            <Text
                              size="s"
                              as="p"
                              className="tracking-[-0.50px]"
                            >
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
                            <Text
                              size="s"
                              as="p"
                              className="tracking-[-0.50px]"
                            >
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
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2.5 items-center justify-start px-[535px] w-full">
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
      <div className="flex flex-row justify-start px-[75px] w-full">
        <CartSectionSubscribe className="bg-gradient flex flex-row flex-wrap justify-start max-w-[1291px] mx-auto pl-[46px] py-[46px] w-full" />
      </div>
      <Footer1 className="bg-black-900 flex p-12 w-full" />
    </div>
  );
}
