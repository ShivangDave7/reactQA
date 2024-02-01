import React from "react";

import { Text, Button, Img, Heading } from "../../components";

export default function SignupVerificationPage() {
  return (
    <div className="bg-red-50 flex flex-col justify-start p-[173px] w-full">
      <Img
        src="images/img_icon_icon_line294.svg"
        alt="iconicon"
        className="h-6 ml-[340px] w-6"
      />
      <div className="flex flex-col items-center mt-[33px] mx-auto px-[123px] w-[38%]">
        <div className="h-[148px] relative w-[77%]">
          <div className="absolute bg-gray-50 h-[83px] left-[0%] m-auto rounded-[41px] top-[0%] w-[83px]" />
          <Img
            src="images/img_group_blue_gray_900_132x94.svg"
            alt="group"
            className="absolute bottom-[0%] h-[132px] m-auto right-[0%]"
          />
        </div>
      </div>
      <div className="flex flex-col items-end mt-1.5 mx-auto px-[123px] w-[38%]">
        <Button size="xl" className="w-7">
          <Img src="images/img_group_18072.svg" />
        </Button>
      </div>
      <div className="flex flex-col items-center mb-0.5 mt-[62px] mx-auto w-[38%]">
        <div className="flex flex-col gap-[22px] items-center justify-start pt-[3px] w-full">
          <Heading size="2xl" as="h4" className="text-center">
            2-Step Vertification
          </Heading>
          <Text
            size="lg"
            as="p"
            className="!leading-[22px] !text-blue_gray-800 text-center"
          >
            We sent a vertìication code to your email. Enter the code from the
            email in the field below
          </Text>
        </div>
        <div className="flex flex-row gap-5 justify-center max-w-[380px] mt-[124px] w-full">
          <Img
            src="images/img_vertified_code.svg"
            alt="vertifiedcode"
            className="h-20 w-20"
          />
          <Img
            src="images/img_vertified_code.svg"
            alt="vertifiedcodeon"
            className="h-20 w-20"
          />
          <Img
            src="images/img_vertified_code.svg"
            alt="vertifiedcodetw"
            className="h-20 w-20"
          />
          <Img
            src="images/img_vertified_code.svg"
            alt="vertifiedcodeth"
            className="h-20 w-20"
          />
        </div>
        <Button
          color="deep_orange_300"
          size="10xl"
          className="font-bold mt-[103px] rounded-[28px] w-full"
        >
          VERIFY OTP
        </Button>
        <Text
          size="lg"
          as="p"
          className="!font-medium !text-indigo-400 mt-[50px] text-center"
        >
          You haven’t received it? Resend a new code
        </Text>
      </div>
    </div>
  );
}
