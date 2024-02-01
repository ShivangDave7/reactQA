import React from "react";

import { Text, Button, CheckBox, Input, Img, Heading } from "../../components";

export default function SigninDefaultPage() {
  return (
    <div className="bg-red-50 flex flex-row justify-start p-[90px] w-full">
      <div className="flex flex-row gap-[59px] items-center justify-start max-w-[1260px] mb-[25px] mt-4 mx-auto w-full">
        <div className="flex flex-col gap-[84px] items-center justify-start pt-[5px] w-[48%]">
          <Heading
            size="3xl"
            as="h3"
            className="!text-blue_gray-900 text-center"
          >
            Manage your work more effectively
          </Heading>
          <Img
            src="images/img_working_time.svg"
            alt="workingtime"
            className="h-[483px]"
          />
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[66px] rounded-[20px] shadow-sm w-[48%]">
          <div className="flex flex-col gap-12 items-center justify-start w-[97%]">
            <div className="flex flex-col gap-[47px] items-center justify-start pt-[3px] w-full">
              <Heading size="2xl" as="h4" className="text-center">
                Login to Utillia
              </Heading>
              <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                <Button
                  color="white_A700"
                  size="10xl"
                  shape="round"
                  leftIcon={
                    <Img
                      src="images/img_group.svg"
                      alt="Group "
                      className="mr-[35px]"
                    />
                  }
                  className="!text-blue_gray-800 border border-indigo-50 border-solid font-medium w-full"
                >
                  Login with Google
                </Button>
                <div className="flex flex-row items-start justify-between py-0.5 w-full">
                  <div className="bg-indigo-50 h-px mt-[7px] w-[39%]" />
                  <Text
                    size="lg"
                    as="p"
                    className="!text-blue_gray-800 h-[17px]"
                  >
                    Or
                  </Text>
                  <div className="bg-indigo-50 h-px mt-[7px] w-[39%]" />
                </div>
                <div className="flex flex-col gap-4 items-center justify-start w-full">
                  <div className="flex flex-col gap-7 items-center justify-start w-full">
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        size="lg"
                        as="p"
                        className="!font-medium !text-blue_gray-800"
                      >
                        Email
                      </Text>
                      <Input
                        name="email_One"
                        placeholder="xyz@gmail.com"
                        prefix={
                          <Img
                            src="images/img_icon.svg"
                            alt="Icon "
                            className="mr-4"
                          />
                        }
                        className="border border-indigo-50 border-solid w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        size="lg"
                        as="p"
                        className="!font-medium !text-blue_gray-800"
                      >
                        Password
                      </Text>
                      <Input
                        name="password_One"
                        placeholder="************"
                        prefix={
                          <Img
                            src="images/img_icon_blue_gray_800.svg"
                            alt="Icon "
                            className="mr-4"
                          />
                        }
                        className="border border-indigo-50 border-solid w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-[115px] items-end w-full">
                    <CheckBox
                      size="sm"
                      name="remember"
                      label="Remember"
                      className="font-medium text-blue_gray-800 text-left"
                    />
                    <Text
                      size="lg"
                      as="p"
                      className="!font-medium !text-blue_gray-800 text-right underline"
                    >
                      Forgot password?
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-12 items-center justify-start w-full">
              <Button
                color="deep_orange_300"
                size="10xl"
                className="font-bold rounded-[28px] w-full"
              >
                LOGIN
              </Button>
              <div className="flex flex-row justify-center pt-[3px] px-[3px] w-full">
                <Text
                  size="lg"
                  as="p"
                  className="!font-medium !text-blue_gray-800 ml-[90px]"
                >
                  You don’t have an account yet?
                </Text>
                <Text
                  size="lg"
                  as="p"
                  className="!font-medium !text-deep_orange-300 ml-1 mr-[90px] underline"
                >
                  Sign up
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
