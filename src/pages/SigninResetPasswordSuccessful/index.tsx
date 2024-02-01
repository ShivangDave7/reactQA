import React from "react";

import { Text, Img, Button, Heading } from "../../components";

export default function SigninResetPasswordSuccessfulPage() {
  return (
    <div className="bg-red-50 flex flex-row p-[230px] w-full">
      <div className="bg-white-A700 flex flex-col gap-[60px] items-center justify-start mx-[216px] p-12 rounded-[20px] shadow-sm w-[56%]">
        <div className="flex flex-col gap-12 items-center justify-start max-w-[452px] mt-[11px] w-full">
          <Img
            src="images/img_completed_1.svg"
            alt="completedone"
            className="h-[180px] w-[180px]"
          />
          <div className="flex flex-row justify-start w-full">
            <Heading size="2xl" as="h4" className="ml-12 text-center">
              Password has been recovered
            </Heading>
          </div>
        </div>
        <div className="flex flex-col gap-12 items-center justify-start max-w-[452px] mb-[11px] w-full">
          <Button
            color="deep_orange_300"
            size="10xl"
            className="font-bold rounded-[28px] w-full"
          >
            LOGIN
          </Button>
          <div className="flex flex-row gap-[7px] items-start justify-center w-[28%]">
            <Img
              src="images/img_arrow_left.svg"
              alt="arrowleft"
              className="h-5 w-5"
            />
            <Text
              size="lg"
              as="p"
              className="!font-medium !text-indigo-400 text-center"
            >
              Back to Sign in
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
