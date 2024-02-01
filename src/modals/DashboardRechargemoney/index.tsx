import React from "react";

import { Button, Img, Text, Heading, Input } from "../../components";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
}

export default function DashboardRechargemoney({ ...props }: Props) {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      {...props}
      className="min-w-[756px]"
    >
      <div className="bg-white-A700 flex flex-col items-center justify-start p-7 rounded w-full">
        <div className="flex flex-col items-start justify-start my-1 w-full">
          <Heading size="2xl" as="h4" className="">
            Pick a wallet
          </Heading>
          <Input
            name="textinput"
            placeholder="0.0"
            prefix={
              <Img
                src="images/img_icon_blue_gray_900.svg"
                alt="Icon "
                className="mr-4"
              />
            }
            className="border border-indigo-50 border-solid font-medium mt-[33px] w-full"
          />
          <div className="flex flex-row gap-5 justify-start mt-8 w-full">
            <Button
              shape="round"
              className="font-semibold min-w-[114px] w-full"
            >
              200.000đ
            </Button>
            <Button
              shape="round"
              className="font-semibold min-w-[114px] w-full"
            >
              500.000đ
            </Button>
            <Button
              shape="round"
              className="font-semibold min-w-[114px] w-full"
            >
              1.000.000đ
            </Button>
            <Button
              shape="round"
              className="font-semibold min-w-[114px] w-full"
            >
              2.000.000đ
            </Button>
          </div>
          <div className="bg-indigo-50 h-px mt-8 w-full" />
          <div className="flex flex-row justify-between mt-[31px] w-full">
            <div className="flex flex-col gap-[17px] items-start justify-start">
              <Text as="p" className="!text-blue_gray-800">
                Available Wallet
              </Text>
              <div className="flex flex-col gap-4 w-full">
                <div className="border border-indigo-50 border-solid flex flex-row gap-2.5 items-center justify-start p-4 rounded w-full">
                  <Img
                    src="images/img_logo_indigo_400.svg"
                    alt="logo"
                    className="h-8 w-8"
                  />
                  <Heading size="lg" as="h6" className="!font-semibold">
                    Torus
                  </Heading>
                </div>
                <div className="bg-gray-50 border border-indigo-50 border-solid flex flex-row gap-6 items-center p-4 rounded w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start pr-[118px] w-[85%]">
                    <Img
                      src="images/img_metamask_icon_0.png"
                      alt="metamaskiconzer"
                      className="object-cover rounded-[5px] w-8"
                    />
                    <Heading size="lg" as="h6" className="!font-semibold">
                      Metamask
                    </Heading>
                  </div>
                  <Img
                    src="images/img_arrow_right_blue_gray_900.svg"
                    alt="arrowright"
                    className="h-5 w-5"
                  />
                </div>
                <div className="border border-indigo-50 border-solid flex flex-row gap-2.5 items-center justify-start p-4 rounded w-full">
                  <Img
                    src="images/img_logo_32x32.png"
                    alt="logo"
                    className="object-cover w-8"
                  />
                  <Heading size="lg" as="h6" className="!font-semibold">
                    Portis
                  </Heading>
                </div>
                <div className="border border-indigo-50 border-solid flex flex-row gap-2.5 items-center justify-start p-4 rounded w-full">
                  <Img
                    src="images/img_logo_fortmatic.png"
                    alt="logofortmatic"
                    className="object-cover w-8"
                  />
                  <Heading size="lg" as="h6" className="!font-semibold">
                    Fortmatic
                  </Heading>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50 h-[344px] w-px" />
            <div className="flex flex-col gap-[19px] items-center justify-start">
              <div className="flex flex-row items-start justify-evenly w-full">
                <div className="flex flex-col items-start justify-end py-0.5 w-[73%]">
                  <Text as="p" className="!text-blue_gray-800">
                    QR Code
                  </Text>
                  <Text size="lg" as="p" className="mt-1">
                    Scan this QR code{" "}
                  </Text>
                </div>
                <div className="flex flex-row gap-2 justify-start py-0.5 w-[28%]">
                  <Img
                    src="images/img_icon_indigo_400_20x20.svg"
                    alt="iconone"
                    className="h-5 w-5"
                  />
                  <Text as="p" className="!text-indigo-400">
                    Refresh
                  </Text>
                </div>
              </div>
              <div className="border border-indigo-50 border-solid flex flex-row justify-center p-[43px] w-full">
                <Img
                  src="images/img_group_blue_gray_800.svg"
                  alt="group"
                  className="h-[193px] w-[193px]"
                />
              </div>
            </div>
          </div>
          <Button
            color="deep_orange_300"
            size="10xl"
            className="font-bold mt-8 rounded-[27px] w-full"
          >
            Pay now
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
}
