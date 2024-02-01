import React from "react";

import {
  Button,
  Img,
  Text,
  Heading,
  Input,
  TextArea,
  SelectBox,
} from "../../components";
import Header1 from "../../components/Header1";
import Sidebar2 from "../../components/Sidebar2";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ShippingInfoPage() {
  return (
    <div className="bg-gray-100_05 flex flex-row items-start w-full">
      <Sidebar2 className="!sticky !w-[243px] bg-white-A700 h-screen overflow-auto top-[0]" />
      <div className="bg-indigo-50 h-[990px] w-px" />
      <div className="flex flex-col gap-8 items-center justify-start w-[84%]">
        <Header1 className="bg-white-A700 flex w-full" />
        <div className="flex flex-row justify-start px-6 w-full">
          <div className="flex flex-col gap-8 items-center justify-start w-full">
            <div className="flex flex-row items-end justify-between w-full">
              <Text
                size="3xl"
                as="p"
                className="!font-poppins !text-blue_gray-900"
              >
                Checkout
              </Text>
              <Text as="p" className="!font-normal mb-[3px] text-right">
                Shop Central/ Product detail/ Checkout
              </Text>
            </div>
            <div className="flex flex-row gap-5 items-center w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-xs w-[67%]">
                <div className="flex flex-col gap-12 items-center justify-start w-full">
                  <div className="flex flex-col gap-[11px] items-start justify-end py-0.5 w-full">
                    <Heading as="h6" className="!text-blue_gray-900">
                      Shipping information
                    </Heading>
                    <Text size="lg" as="p" className="!text-blue_gray-900">
                      Fill form below
                    </Text>
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        size="lg"
                        as="p"
                        className="!font-medium !text-blue_gray-800"
                      >
                        Name
                      </Text>
                      <Input
                        name="frame18249"
                        placeholder="Enter your name"
                        className="border border-indigo-50 border-solid w-full"
                      />
                    </div>
                    <div className="flex flex-row gap-5 w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[49%]">
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium !text-blue_gray-800"
                        >
                          Email address
                        </Text>
                        <Input
                          name="frame18249one"
                          placeholder="Enter your email"
                          className="border border-indigo-50 border-solid w-full"
                        />
                      </div>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-[49%]">
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium !text-blue_gray-800"
                        >
                          Phone number
                        </Text>
                        <Input
                          name="frame18249two"
                          placeholder="Enter your phone number"
                          className="border border-indigo-50 border-solid w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        size="lg"
                        as="p"
                        className="!font-medium !text-blue_gray-800"
                      >
                        Your address
                      </Text>
                      <TextArea
                        name="frame18249three"
                        placeholder="Enter full address"
                        className="text-blue_gray-400 w-full"
                      />
                    </div>
                    <div className="flex flex-row justify-evenly w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-full">
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium !text-blue_gray-800"
                        >
                          Country
                        </Text>
                        <SelectBox
                          name="group"
                          placeholder="ID Card"
                          options={dropDownOptions}
                          className="border border-indigo-50 border-solid font-medium w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        size="lg"
                        as="p"
                        className="!font-medium !text-blue_gray-800"
                      >
                        Note
                      </Text>
                      <TextArea
                        name="frame18249four"
                        placeholder="Write something for us..."
                        className="text-blue_gray-400 w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8 items-center justify-start w-[33%]">
                <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-xs w-full">
                  <div className="flex flex-row gap-6 items-center justify-start w-full">
                    <Img
                      src="images/img_rectangle_118x110.png"
                      alt="rectangle"
                      className="object-cover w-[36%]"
                    />
                    <div className="flex flex-col gap-[22px] items-center justify-start w-[57%]">
                      <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                        <div className="flex flex-row gap-[62px] items-center py-0.5 w-full">
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
                      <div className="flex flex-row gap-[92px] py-0.5 w-full">
                        <Text size="lg" as="p" className="">
                          Price
                        </Text>
                        <Heading size="md" as="p" className="text-right">
                          $120.0
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 h-px mt-8 w-full" />
                  <Input
                    name="frame18328"
                    placeholder="Enter reffered code"
                    className="border border-indigo-50 border-solid mt-[31px] rounded-lg w-full"
                  />
                  <div className="bg-indigo-50 h-px mt-8 w-full" />
                  <div className="flex flex-col gap-5 items-center justify-start mt-[31px] w-full">
                    <div className="flex flex-row gap-[214px] w-full">
                      <Text as="p" className="!font-normal text-center">
                        Price
                      </Text>
                      <Text as="p" className="!text-blue_gray-800 text-right">
                        $120.0
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[168px] w-full">
                      <Text as="p" className="!font-normal text-center">
                        Shipping fee
                      </Text>
                      <Text as="p" className="!text-blue_gray-800 text-right">
                        $10.0
                      </Text>
                    </div>
                  </div>
                  <div className="bg-indigo-50 h-px mt-8 w-full" />
                  <div className="flex flex-row gap-[205px] items-center mt-[31px] py-0.5 w-full">
                    <Text as="p" className="!font-normal">
                      Total
                    </Text>
                    <Heading as="h6" className="text-right">
                      $130.0
                    </Heading>
                  </div>
                  <div className="flex flex-col gap-4 items-center justify-start mt-8 w-full">
                    <Button
                      color="deep_orange_300"
                      className="font-bold rounded-[24px] w-full"
                    >
                      Purchase now
                    </Button>
                    <Button className="font-semibold rounded-[24px] w-full">
                      Scan QR code
                    </Button>
                  </div>
                  <Text
                    size="lg"
                    as="p"
                    className="!leading-[22px] mt-8 text-center"
                  >
                    By clicking “Purchase” button, I agree with RiriBa Term and
                    Policy
                  </Text>
                </div>
                <Button
                  size="sm"
                  leftIcon={
                    <Img
                      src="images/img_arrowleft_indigo_400.svg"
                      alt="arrow_left"
                      className="mr-4"
                    />
                  }
                  className="font-medium text-indigo-400 w-full"
                >
                  Back to shopping cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
