import React from "react";

import { Button, Img, Text, Heading } from "../../components";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
}

export default function DashboardPaymentsuccessful({ ...props }: Props) {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      {...props}
      className="min-w-[401px]"
    >
      <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded w-full">
        <div className="flex flex-col gap-8 items-center justify-start w-full">
          <div className="flex flex-col gap-[46px] items-center justify-start w-full">
            <Img
              src="images/img_layer_2.svg"
              alt="layertwo"
              className="h-[152px]"
            />
            <div className="flex flex-col gap-4 items-center justify-start px-[46px] w-full">
              <div className="flex flex-col gap-[19px] items-center justify-start w-full">
                <div className="flex flex-col gap-3.5 items-center justify-start pt-[3px] w-full">
                  <Heading size="2xl" as="h4" className="text-center">
                    Payment Successful
                  </Heading>
                  <Text
                    size="lg"
                    as="p"
                    className="!leading-[22px] !text-blue_gray-800 text-center"
                  >
                    Add 200.000đ to your wallet already
                    <br />
                    Check your new balance!
                  </Text>
                </div>
                <Text size="lg" as="p" className="text-center">
                  Send receipt to
                </Text>
              </div>
              <div className="flex flex-row gap-4 justify-center w-[73%]">
                <Button
                  color="indigo_50"
                  size="7xl"
                  variant="outline"
                  className="rounded-[50%] w-12"
                >
                  <Img src="images/img_github.svg" />
                </Button>
                <Button
                  color="indigo_50"
                  size="7xl"
                  variant="outline"
                  className="rounded-[50%] w-12"
                >
                  <Img src="images/img_facebook.svg" />
                </Button>
                <Button
                  color="indigo_50"
                  size="7xl"
                  variant="outline"
                  className="rounded-[50%] w-12"
                >
                  <Img src="images/img_globe.svg" />
                </Button>
              </div>
            </div>
          </div>
          <Button
            color="deep_orange_300"
            size="10xl"
            className="font-bold rounded-[28px] w-full"
          >
            Yes, I understand
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
}
