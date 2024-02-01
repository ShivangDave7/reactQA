"use client";
import React from "react";

import {
  Button,
  Heading,
  Text,
  Img,
  TextArea,
  SelectBox,
  Input,
} from "../../components";
import CartSectionSubscribe from "../../components/CartSectionSubscribe";
import Footer from "../../components/Footer";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function CheckoutPage() {
  return (
    <div className="bg-gray-50 flex flex-col gap-[100px] items-center justify-start w-full">
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
            <Img src="images/img_search.svg" alt="search" className="h-6 w-6" />
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
        <div className="flex flex-col gap-12 items-center justify-start max-w-[1290px] mx-auto w-full">
          <Heading
            size="4xl"
            as="h1"
            className="text-center tracking-[-0.50px]"
          >
            Checkout
          </Heading>
          <div className="flex flex-row gap-[19px] items-start justify-start w-full">
            <div className="flex flex-col gap-[53px] items-center justify-start w-[67%]">
              <div className="flex flex-col gap-9 items-start justify-start w-full">
                <Heading size="xl" as="h4" className="tracking-[-0.50px]">
                  Contact Information
                </Heading>
                <div className="flex flex-col gap-[35px] items-center justify-start w-full">
                  <div className="flex flex-row gap-5 justify-start w-full">
                    <div className="flex flex-col gap-[11px] items-start justify-start w-[49%]">
                      <Text
                        size="xl"
                        as="p"
                        className="!font-raleway tracking-[-0.50px]"
                      >
                        First Name
                      </Text>
                      <Input
                        size="md"
                        name="Frame 48096050"
                        placeholder="Your first name here.."
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[11px] items-start justify-start w-[49%]">
                      <Text
                        size="xl"
                        as="p"
                        className="!font-raleway tracking-[-0.50px]"
                      >
                        Last Name
                      </Text>
                      <Input
                        size="md"
                        name="Frame 48096051"
                        placeholder="Your last name here.."
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 justify-start w-full">
                    <div className="flex flex-col gap-[11px] items-start justify-start w-[49%]">
                      <Text
                        size="xl"
                        as="p"
                        className="!font-raleway tracking-[-0.50px]"
                      >
                        Phone
                      </Text>
                      <Input
                        size="md"
                        name="Frame 48096053"
                        placeholder="Your phone here.."
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[11px] items-start justify-start w-[49%]">
                      <Text
                        size="xl"
                        as="p"
                        className="!font-raleway tracking-[-0.50px]"
                      >
                        Email
                      </Text>
                      <Input
                        size="md"
                        name="Frame 48096054"
                        placeholder="Your email here.."
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[33px] items-start justify-start w-full">
                  <Heading size="xl" as="h4" className="tracking-[-0.50px]">
                    Shipping Method
                  </Heading>
                  <div className="flex flex-row gap-[21px] justify-start w-full">
                    <Button
                      color="blue_gray_100"
                      size="9xl"
                      variant="outline"
                      leftIcon={
                        <Img
                          src="images/img_bxstore_1.svg"
                          alt="bx-store 1"
                          className="mr-2.5"
                        />
                      }
                      className="min-w-[154px] tracking-[-0.50px]"
                    >
                      Store
                    </Button>
                    <Button
                      color="gray_100"
                      size="9xl"
                      leftIcon={
                        <Img
                          src="images/img_bxpackage_1.svg"
                          alt="bx-package 1"
                          className="mr-2.5"
                        />
                      }
                      className="border border-blue_gray-900_01 border-solid min-w-[175px] tracking-[-0.50px]"
                    >
                      Delivery
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[9px] items-start justify-start mt-[30px] w-full">
                  <Text
                    size="xl"
                    as="p"
                    className="!font-raleway tracking-[-0.50px]"
                  >
                    Country / Region{" "}
                  </Text>
                  <SelectBox
                    indicator={
                      <Img src="images/img_arrow_down.svg" alt="arrow_down" />
                    }
                    name="Group 969"
                    placeholder="United States (US)"
                    options={dropDownOptions}
                    className="tracking-[-0.50px] w-full"
                  />
                </div>
                <div className="flex flex-col gap-[11px] items-start justify-start mt-[29px] w-full">
                  <Text
                    size="xl"
                    as="p"
                    className="!font-raleway tracking-[-0.50px]"
                  >
                    Street address{" "}
                  </Text>
                  <TextArea
                    size="xs"
                    name="Frame 48096064"
                    placeholder="Write your full address"
                    className="text-gray-500 tracking-[-0.50px] w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[33px] items-start justify-start w-full">
                <Heading size="xl" as="h4" className="tracking-[-0.50px]">
                  Payment Method
                </Heading>
                <div className="flex flex-row gap-5 justify-start w-3/5">
                  <div className="border border-blue_gray-100 border-solid flex flex-row justify-center p-[27px] w-[31%]">
                    <Img
                      src="images/img_vector_19x60.png"
                      alt="Vector"
                      className="object-cover w-3/5"
                    />
                  </div>
                  <div className="border border-blue_gray-100 border-solid flex flex-row justify-center p-[25px] w-[31%]">
                    <Img
                      src="images/img_google_pay.svg"
                      alt="google pay"
                      className="h-[23px]"
                    />
                  </div>
                  <div className="border border-blue_gray-100 border-solid flex flex-row justify-center p-[27px] w-[31%]">
                    <Img
                      src="images/img_paypal.svg"
                      alt="paypal"
                      className="h-[19px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50_01 flex flex-col items-center justify-start mb-[463px] p-[27px] w-[33%]">
              <div className="flex flex-col gap-[35px] items-start justify-start my-[7px] pt-[5px] w-full">
                <Heading as="h5" className="!font-bold tracking-[-0.50px]">
                  Your Order
                </Heading>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[25px] items-center justify-start w-full">
                    <div className="flex flex-row items-end justify-between py-0.5 w-full">
                      <Text
                        size="xl"
                        as="p"
                        className="!font-raleway !text-gray-500 tracking-[-0.50px]"
                      >
                        Complete set of sofa... 1x
                      </Text>
                      <Heading
                        as="h5"
                        className="!font-poppins tracking-[-0.50px]"
                      >
                        $ 75.00
                      </Heading>
                    </div>
                    <div className="flex flex-row items-center justify-between py-0.5 w-full">
                      <Text
                        size="xl"
                        as="p"
                        className="!font-raleway !text-gray-500 tracking-[-0.50px]"
                      >
                        Teak wood chair 1x
                      </Text>
                      <Heading
                        as="h5"
                        className="!font-poppins tracking-[-0.50px]"
                      >
                        $ 24.00
                      </Heading>
                    </div>
                    <div className="bg-black-900 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-[25px] items-center justify-start mt-6 w-full">
                    <div className="flex flex-row items-center justify-between py-0.5 w-full">
                      <Text
                        size="xl"
                        as="p"
                        className="!font-raleway !text-gray-500 tracking-[-0.50px]"
                      >
                        Subtotal
                      </Text>
                      <Heading
                        as="h5"
                        className="!font-poppins tracking-[-0.50px]"
                      >
                        $ 99.00
                      </Heading>
                    </div>
                    <div className="flex flex-row items-start justify-between py-0.5 w-full">
                      <Text
                        size="xl"
                        as="p"
                        className="!font-raleway !text-gray-500 mt-1 tracking-[-0.50px]"
                      >
                        Discount (30%)
                      </Text>
                      <Heading
                        as="h5"
                        className="!font-poppins !text-deep_orange-A400 tracking-[-0.50px]"
                      >
                        - $ 29.70
                      </Heading>
                    </div>
                  </div>
                  <div className="bg-black-900 h-px mt-[25px] w-full" />
                  <div className="flex flex-row items-center justify-between mt-6 py-0.5 w-full">
                    <Text
                      size="xl"
                      as="p"
                      className="!font-raleway !text-gray-500 tracking-[-0.50px]"
                    >
                      Total
                    </Text>
                    <Heading
                      as="h5"
                      className="!font-poppins tracking-[-0.50px]"
                    >
                      $ 69.30
                    </Heading>
                  </div>
                  <Button
                    size="7xl"
                    className="!text-yellow-100 font-semibold mt-[25px] tracking-[-0.50px] w-full"
                  >
                    Place Order
                  </Button>
                </div>
              </div>
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
