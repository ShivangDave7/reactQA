import React from "react";

import { Text, Heading, Img, Button } from "../../components";

export default function CartPage() {
  return (
    <div className="bg-blue_gray-900_ad flex flex-row p-[100px] w-full">
      <div className="bg-white-A700 flex flex-col gap-[47px] items-center justify-center mx-[374px] p-12 w-2/5">
        <div className="flex flex-row items-start justify-between max-w-[395px] mt-1 w-full">
          <Heading size="2xl" as="h4" className="mt-[3px]">
            My Cart
          </Heading>
          <Img
            src="images/img_x_blue_gray_900.svg"
            alt="x"
            className="h-8 w-8"
          />
        </div>
        <div className="flex flex-col items-center justify-start max-w-[395px] mb-1 w-full">
          <div className="flex flex-col gap-[16.5px] pb-[34px] w-full">
            <div className="flex flex-row gap-6 items-center w-full">
              <Img
                src="images/img_rectangle_118x110.png"
                alt="rectangle"
                className="object-cover w-[28%]"
              />
              <div className="flex flex-col gap-[22px] items-center justify-start w-[67%]">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                    <div className="flex flex-row items-center justify-between py-0.5 w-full">
                      <Heading as="h6" className="!text-blue_gray-900">
                        Polo Shirt
                      </Heading>
                      <Img
                        src="images/img_minus.svg"
                        alt="minus"
                        className="h-6 w-6"
                      />
                    </div>
                    <Text size="lg" as="p" className="">
                      Color: Grey, S
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start w-full">
                    <Button
                      color="indigo_50"
                      size="4xl"
                      variant="outline"
                      className="w-8"
                    >
                      <Img src="images/img_minus.svg" />
                    </Button>
                    <Text
                      size="lg"
                      as="p"
                      className="!font-medium !text-blue_gray-900 ml-5 text-center"
                    >
                      1
                    </Text>
                    <Button
                      color="indigo_50"
                      size="4xl"
                      variant="outline"
                      className="ml-[21px] w-8"
                    >
                      <Img src="images/img_x_blue_gray_900.svg" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row gap-[180px] py-0.5 w-full">
                  <Text size="lg" as="p" className="">
                    Price
                  </Text>
                  <Heading size="md" as="p" className="text-right">
                    $120.0
                  </Heading>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50 h-px w-full" />
            <div className="flex flex-row gap-6 items-center w-full">
              <Img
                src="images/img_rectangle_4.png"
                alt="rectangle"
                className="object-cover w-[28%]"
              />
              <div className="flex flex-col gap-[22px] items-center justify-start w-[67%]">
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                    <div className="flex flex-row items-center justify-between py-0.5 w-full">
                      <Heading as="h6" className="!text-blue_gray-900">
                        Basic T-shirt
                      </Heading>
                      <Img
                        src="images/img_minus.svg"
                        alt="minus"
                        className="h-6 w-6"
                      />
                    </div>
                    <Text size="lg" as="p" className="">
                      Color: Grey, S
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-start w-full">
                    <Button
                      color="indigo_50"
                      size="4xl"
                      variant="outline"
                      leftIcon={
                        <Img
                          src="images/.png"
                          alt="ic_carat_left"
                          className="h-6 w-6"
                        >
                          <div />
                        </Img>
                      }
                      className="min-w-[32px]"
                    />
                    <Text
                      size="lg"
                      as="p"
                      className="!font-medium !text-blue_gray-900 ml-5 text-center"
                    >
                      1
                    </Text>
                    <Button
                      color="indigo_50"
                      size="4xl"
                      variant="outline"
                      className="ml-[21px] w-8"
                    >
                      <Img src="images/img_x_blue_gray_900.svg" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row gap-[180px] py-0.5 w-full">
                  <Text size="lg" as="p" className="">
                    Price
                  </Text>
                  <Heading size="md" as="p" className="text-right">
                    $120.0
                  </Heading>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[292px] items-center mt-8 py-0.5 w-full">
            <Text as="p" className="!font-normal text-center">
              Total
            </Text>
            <Heading as="h6" className="text-right">
              $240.0
            </Heading>
          </div>
          <div className="flex flex-row gap-4 mt-[33px] w-full">
            <Button
              color="deep_orange_300"
              className="font-bold min-w-[189px] rounded-[24px]"
            >
              Purchase now
            </Button>
            <Button
              color="deep_orange_50"
              className="font-bold min-w-[189px] rounded-[24px]"
            >
              Add to cart
            </Button>
          </div>
          <div className="flex flex-row gap-6 items-center mt-[33px] w-full">
            <Img src="images/img_truck.svg" alt="truck" className="h-6 w-6" />
            <div className="flex flex-col gap-[7px] items-start justify-end w-[88%]">
              <Heading size="lg" as="h6" className="!text-blue_gray-900">
                Free nationwide shipping
              </Heading>
              <Text size="lg" as="p" className="!text-blue_gray-900">
                (For order begin $100.0)
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
