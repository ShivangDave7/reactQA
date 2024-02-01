import React from "react";

import { Text, Button, Input, Img, Heading } from "../../components";

export default function SignupDefaultPage() {
  return (
    <div className="bg-red-50 flex flex-row p-[72px] w-full">
      <div className="flex flex-row gap-[59px] items-center justify-start mb-[42px] mx-[18px] w-[98%]">
        <div className="flex flex-col gap-[84px] items-center justify-start pt-[5px] px-[5px] w-[48%]">
          <Heading
            size="3xl"
            as="h3"
            className="!text-blue_gray-900 text-center"
          >
            Don&#39;t worry about overwhelming tasks
          </Heading>
          <Img
            src="images/img_group_7.svg"
            alt="groupseven"
            className="h-[597px] max-w-[493px] w-full"
          />
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start p-[66px] rounded-[20px] shadow-sm w-[48%]">
          <div className="flex flex-col gap-[43px] items-center justify-start max-w-[452px] w-full">
            <div className="flex flex-col gap-[47px] items-center justify-start pt-[3px] w-full">
              <Heading size="2xl" as="h4" className="text-center">
                Sign up to Utillia
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
                    <Input
                      name="frame"
                      placeholder="Full name"
                      prefix={
                        <Img
                          src="images/img_icon.svg"
                          alt="Icon "
                          className="mr-4"
                        />
                      }
                      className="border border-indigo-50 border-solid w-full"
                    />
                    <Input
                      name="frameone"
                      placeholder="Email"
                      prefix={
                        <Img
                          src="images/img_icon.svg"
                          alt="Icon "
                          className="mr-4"
                        />
                      }
                      className="border border-indigo-50 border-solid w-full"
                    />
                    <Input
                      name="password"
                      placeholder="************"
                      prefix={
                        <Img
                          src="images/img_icon_blue_gray_800.svg"
                          alt="Icon "
                          className="mr-4"
                        />
                      }
                      suffix={
                        <Img
                          src="images/img_icon_icon_eye_property_3298.svg"
                          alt="Icon /Icon/Eye/Property 3298"
                          className="ml-[35px]"
                        />
                      }
                      className="border border-indigo-50 border-solid w-full"
                    />
                  </div>
                  <Text
                    size="lg"
                    as="p"
                    className="!font-medium !leading-[22px] !text-blue_gray-800 text-center"
                  >
                    {`By clicking “SIGN UP" button, I agree with your `}
                    <br />
                    Term and Policy
                  </Text>
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
                  className="!text-blue_gray-800 ml-[95px]"
                >
                  You have an account already?
                </Text>
                <Text
                  size="lg"
                  as="p"
                  className="!font-medium !text-deep_orange-300 ml-1 mr-[101px] underline"
                >
                  Sign in
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
