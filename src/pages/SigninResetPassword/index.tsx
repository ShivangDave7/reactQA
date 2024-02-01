import React from "react";

import { Button, Input, Img, Text, Heading } from "../../components";

export default function SigninResetPasswordPage() {
  return (
    <div className="bg-red-50 flex flex-row p-[124px] w-full">
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-[322px] p-12 rounded-[20px] shadow-sm w-[46%]">
        <div className="flex flex-col gap-[70px] items-start justify-start max-w-[452px] my-[11px] w-full">
          <Img
            src="images/img_icon_icon_line294.svg"
            alt="iconicon"
            className="h-6 w-6"
          />
          <div className="flex flex-col gap-[60px] items-center justify-start w-full">
            <div className="flex flex-col gap-12 items-center justify-start w-full">
              <div className="h-[137px] relative w-[29%]">
                <div className="absolute h-32 left-[0%] m-auto top-[0%] w-[90%]">
                  <div className="absolute bg-gray-50 h-[83px] left-[0%] m-auto rounded-[41px] top-[0%] w-[83px]" />
                  <Img
                    src="images/img_group_blue_gray_900.svg"
                    alt="group"
                    className="absolute bottom-[0%] h-[103px] m-auto right-[0%]"
                  />
                </div>
                <Button
                  size="xl"
                  className="absolute bottom-[0%] m-auto right-[0%] w-7"
                >
                  <Img src="images/img_group_18072.svg" />
                </Button>
              </div>
              <div className="flex flex-col gap-1.5 items-center justify-start pt-[3px] w-full">
                <Heading size="2xl" as="h4" className="text-center">
                  Forgot Password
                </Heading>
                <Text
                  size="lg"
                  as="p"
                  className="!leading-[22px] !text-blue_gray-800 text-center"
                >
                  Enter the email address you used when you joined and we’ll
                  send you instructions to reset your password.
                  <br />
                  For security reasons, we do NOT store your password. So rest
                  assured that we will never send your password via email.
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-12 items-center justify-start w-full">
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
                  className="!text-blue_gray-800 border border-indigo-50 border-solid font-medium w-full"
                />
              </div>
              <Button
                color="deep_orange_300"
                size="10xl"
                className="font-bold rounded-[28px] w-full"
              >
                SEND RESET INSTRUCTIONS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
