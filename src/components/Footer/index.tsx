import React from "react";

import { Text, Button, Img, Heading } from "./..";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props}>
      <div className="flex flex-col gap-[149px] items-center justify-center ml-[26px] w-[97%]">
        <div className="flex flex-row items-start justify-between w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-[28%]">
            <Heading
              size="2xl"
              as="h2"
              className="!text-gray-50_01 tracking-[-0.50px]"
            >
              Furnit.
            </Heading>
            <Text
              size="md"
              as="p"
              className="!text-gray-50_a3 opacity-0.81 tracking-[-0.50px]"
            >
              Lorem ipsum dolor sit amet litam consectetur adipiscing elit,
              facilisi vivamus proin lit laoreet phasel alilus porttitor inter,
              facilisis condiment tarime egestas rhoncus dapibus iaculis alemir.
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-start justify-end pr-[5px] pt-[5px] w-[17%]">
            <Heading as="h5" className="!text-gray-50_01 tracking-[-0.50px]">
              Customer
            </Heading>
            <ul className="flex flex-col items-start justify-start w-[38%]">
              <li>
                <a href="#" className="opacity-0.81">
                  <Text
                    size="s"
                    as="p"
                    className="!text-gray-50_a3 tracking-[-0.50px]"
                  >
                    Order Status
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="mt-[23px] opacity-0.81">
                  <Text
                    size="s"
                    as="p"
                    className="!text-gray-50_a3 tracking-[-0.50px]"
                  >
                    Collections
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="mt-[25px] opacity-0.81">
                  <Text
                    size="s"
                    as="p"
                    className="!text-gray-50_a3 tracking-[-0.50px]"
                  >
                    Our Story
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="mt-[22px] opacity-0.81">
                  <Text
                    size="s"
                    as="p"
                    className="!text-gray-50_a3 tracking-[-0.50px]"
                  >
                    Affiliates
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="mt-[25px] opacity-0.81">
                  <Text
                    size="s"
                    as="p"
                    className="!text-gray-50_a3 tracking-[-0.50px]"
                  >
                    Security
                  </Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start pr-[5px] pt-[5px] w-[17%]">
            <Heading as="h5" className="!text-gray-50_01 tracking-[-0.50px]">
              Information
            </Heading>
            <ul className="flex flex-col gap-6 items-start justify-start w-[54%]">
              <li>
                <a href="#" className="opacity-0.81">
                  <Text
                    size="s"
                    as="p"
                    className="!text-gray-50_a3 tracking-[-0.50px]"
                  >
                    Customer Service
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="opacity-0.81">
                  <Text
                    size="s"
                    as="p"
                    className="!text-gray-50_a3 tracking-[-0.50px]"
                  >
                    Careers
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="opacity-0.81">
                  <Text
                    size="s"
                    as="p"
                    className="!text-gray-50_a3 tracking-[-0.50px]"
                  >
                    FAQ
                  </Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[25px] items-start justify-start pt-[5px] w-[17%]">
            <Heading as="h5" className="!text-gray-50_01 tracking-[-0.50px]">
              Follow Us
            </Heading>
            <div className="flex flex-row justify-between w-full">
              <Button
                color="yellow_100"
                size="xl"
                shape="circle"
                className="w-10"
              >
                <Img src="images/img_bxl_instagram.svg" />
              </Button>
              <Button
                color="yellow_100"
                size="xl"
                shape="circle"
                className="w-10"
              >
                <Img src="images/img_bxl_facebook.svg" />
              </Button>
              <Button
                color="yellow_100"
                size="xl"
                shape="circle"
                className="w-10"
              >
                <Img src="images/img_bxl_twitter.svg" />
              </Button>
              <Button
                color="yellow_100"
                size="xl"
                shape="circle"
                className="w-10"
              >
                <Img src="images/img_bxl_tiktok.svg" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-between w-full">
          <Text
            size="md"
            as="p"
            className="!text-gray-50_a3 opacity-0.81 tracking-[-0.50px]"
          >
            © Copyright 2022. All Rights Reserved.
          </Text>
          <div className="flex flex-row gap-[41px] justify-between pr-[3px] w-auto">
            <Text
              size="md"
              as="p"
              className="!text-gray-50_a3 opacity-0.81 tracking-[-0.50px]"
            >
              Terms of condition
            </Text>
            <Text
              size="md"
              as="p"
              className="!text-gray-50_a3 opacity-0.81 tracking-[-0.50px]"
            >
              Privacy Policy
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
}
