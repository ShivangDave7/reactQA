import React from "react";

import { Text, Img, Heading } from "../../components";

export default function CartemptyPage() {
  return (
    <div className="bg-blue_gray-900_ad flex flex-row p-[297px] w-full">
      <div className="bg-white-A700 flex flex-col gap-[76px] items-center justify-start mx-[177px] p-12 w-[59%]">
        <div className="flex flex-row items-start justify-between max-w-[395px] mt-1 w-full">
          <Heading size="2xl" as="h4" className="mt-[3px]">
            My Cart
          </Heading>
          <Img
            src="images/img_x_blue_gray_900.svg"
            alt="x"
            className="h-8 w-8"
          />
        </div>
        <div className="flex flex-col gap-[42px] items-center justify-start max-w-[395px] mb-1 w-full">
          <Img src="images/img_20.svg" alt="twenty" className="h-[152px]" />
          <Text as="p" className="!font-normal text-center">
            No item. Add more
          </Text>
        </div>
      </div>
    </div>
  );
}
