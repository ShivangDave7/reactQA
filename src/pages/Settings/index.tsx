import React from "react";

import {
  Button,
  Text,
  Input,
  Img,
  SelectBox,
  Heading,
  Switch,
} from "../../components";
import Header from "../../components/Header";
import Sidebar2 from "../../components/Sidebar2";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function SettingsPage() {
  return (
    <div className="bg-gray-50 flex flex-row items-start w-full">
      <Sidebar2 className="!sticky !w-[243px] bg-white-A700 h-screen overflow-auto top-[0]" />
      <div className="bg-indigo-50 h-[870px] w-px" />
      <div className="flex flex-col gap-[25px] items-center justify-start w-[84%]">
        <Header className="bg-white-A700 flex w-full" />
        <div className="flex flex-row justify-start px-6 w-full">
          <div className="flex flex-col gap-[30px] items-start justify-start pt-[3px] w-full">
            <Text
              size="3xl"
              as="p"
              className="!font-poppins !text-blue_gray-900"
            >
              Settings
            </Text>
            <div className="flex flex-row gap-5 w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-[67%]">
                <div className="bg-white-A700 flex flex-row justify-start p-8 rounded shadow-xs w-full">
                  <div className="flex flex-col gap-8 items-center justify-start w-full">
                    <div className="flex flex-col gap-3.5 items-start justify-end w-full">
                      <Heading as="h6" className="!text-blue_gray-900">
                        Account info.
                      </Heading>
                      <Text size="lg" as="p" className="!text-blue_gray-900">
                        Verify your information to proctect your account. Verify
                        now
                      </Text>
                    </div>
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <div className="flex flex-row gap-5 w-full">
                        <div className="flex flex-col gap-2.5 items-start justify-start w-[49%]">
                          <Text
                            size="lg"
                            as="p"
                            className="!font-medium !text-blue_gray-800"
                          >
                            Username
                          </Text>
                          <Input
                            name="frame18249"
                            placeholder="Sam"
                            className="!text-blue_gray-800 border border-indigo-50 border-solid font-semibold w-full"
                          />
                        </div>
                        <div className="flex flex-col gap-2.5 items-start justify-start w-[49%]">
                          <Text
                            size="lg"
                            as="p"
                            className="!font-medium !text-blue_gray-800"
                          >
                            Email address
                          </Text>
                          <Input
                            name="email"
                            placeholder="xyz@gmail.com"
                            className="!text-blue_gray-800 border border-indigo-50 border-solid font-semibold w-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-5 w-full">
                        <div className="flex flex-col gap-2.5 items-start justify-start w-[49%]">
                          <Text
                            size="lg"
                            as="p"
                            className="!font-medium !text-blue_gray-800"
                          >
                            First name
                          </Text>
                          <Input
                            name="frame18249one"
                            placeholder="Sam"
                            className="!text-blue_gray-800 border border-indigo-50 border-solid font-semibold w-full"
                          />
                        </div>
                        <div className="flex flex-col gap-2.5 items-start justify-start w-[49%]">
                          <Text
                            size="lg"
                            as="p"
                            className="!font-medium !text-blue_gray-800"
                          >
                            Last name
                          </Text>
                          <Input
                            name="frame18249two"
                            placeholder="Brown"
                            className="!text-blue_gray-800 border border-indigo-50 border-solid font-semibold w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-[21px] w-full">
                  <div className="bg-white-A700 flex flex-row justify-start p-8 rounded shadow-xs w-[49%]">
                    <div className="flex flex-col gap-[34px] items-start justify-start pt-[3px] w-full">
                      <Heading as="h6" className="!text-blue_gray-900">
                        Password Reset
                      </Heading>
                      <div className="flex flex-col gap-6 items-center justify-start w-full">
                        <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-full">
                          <Text
                            size="lg"
                            as="p"
                            className="!font-medium !text-blue_gray-800"
                          >
                            Current password
                          </Text>
                          <Input
                            name="password"
                            placeholder="************"
                            className="!text-blue_gray-800 border border-indigo-50 border-solid font-semibold w-full"
                          />
                        </div>
                        <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-full">
                          <Text
                            size="lg"
                            as="p"
                            className="!font-medium !text-blue_gray-800"
                          >
                            New password
                          </Text>
                          <Input
                            name="password_One"
                            placeholder="************"
                            className="!text-blue_gray-800 border border-indigo-50 border-solid font-semibold w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-row justify-start p-8 rounded shadow-xs w-[49%]">
                    <div className="flex flex-col gap-[42px] items-center justify-start my-2.5 w-full">
                      <div className="flex flex-col gap-3.5 items-start justify-end w-full">
                        <Heading as="h6" className="!text-blue_gray-900">
                          Notifications
                        </Heading>
                        <Text size="lg" as="p" className="">
                          Open notification to receive our news fastly
                        </Text>
                      </div>
                      <div className="flex flex-col gap-8 items-center justify-start w-full">
                        <div className="flex flex-row gap-6 items-center justify-start w-full">
                          <Switch className="w-[16%]" />
                          <Text
                            as="p"
                            className="!font-normal !text-blue_gray-800"
                          >
                            Send notification to mail
                          </Text>
                        </div>
                        <div className="flex flex-row gap-6 items-start justify-start w-full">
                          <Switch className="w-[16%]" />
                          <Text
                            as="p"
                            className="!font-normal !text-blue_gray-800 mt-[3px]"
                          >
                            Send new promotion
                          </Text>
                        </div>
                        <div className="flex flex-row gap-6 items-start justify-start w-full">
                          <Switch className="w-[16%]" />
                          <Text
                            as="p"
                            className="!font-normal !text-blue_gray-800 mt-[3px]"
                          >
                            Notice my balance
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-xs w-[33%]">
                <div className="flex flex-col gap-[60px] items-center justify-start w-full">
                  <div className="flex flex-col gap-8 items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start pt-[5px] w-full">
                      <Heading as="h6" className="!text-blue_gray-900">
                        Payment
                      </Heading>
                      <div className="flex flex-col gap-6 items-center justify-start mt-8 w-full">
                        <SelectBox
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
                          }
                          name="group"
                          placeholder="Paypal"
                          options={dropDownOptions}
                          className="border border-indigo-50 border-solid font-semibold w-full"
                        />
                        <div className="bg-indigo-400 flex flex-col gap-[110px] justify-start p-5 rounded w-full">
                          <Img
                            src="images/img_group_white_a700.svg"
                            alt="groupone"
                            className="h-3 ml-[225px]"
                          />
                          <Text as="p" className="!text-white-A700 mr-[104px]">
                            1234 **** 4567 8901{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[9px] items-start justify-start mt-8 pt-[3px] w-full">
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium !text-blue_gray-800"
                        >
                          Type your email
                        </Text>
                        <Input
                          name="email_One"
                          placeholder="user@gmail.com"
                          className="!text-blue_gray-800 border border-indigo-50 border-solid font-medium w-full"
                        />
                      </div>
                    </div>
                    <Text
                      size="lg"
                      as="p"
                      className="!leading-[22px] text-center"
                    >
                      Please make sure that all your <br />
                      information precisely
                    </Text>
                  </div>
                  <Button
                    color="deep_orange_300"
                    className="font-bold rounded-[24px] w-full"
                  >
                    Save change
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
