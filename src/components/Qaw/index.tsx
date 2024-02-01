import React from "react";

import { Button, Heading, Img } from "./..";

interface Props {
  className?: string;
}

export default function Qaw({ ...props }: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row items-center justify-between w-[64%]">
        <Button color="gray_50_01" size="6xl" className="my-[35px] w-[50px]">
          <Img src="images/img_bx_trash_1.svg" />
        </Button>
        <div className="flex flex-row gap-5 items-center justify-center pr-1">
          <Img
            src="images/img_rectangle_1480.png"
            alt="Rectangle 1480"
            className="object-cover w-[120px]"
          />
          <div className="flex flex-col gap-3.5 items-start justify-start w-[68%]">
            <Heading
              as="h5"
              className="!font-bold !leading-[35px] tracking-[-0.50px]"
            >
              Complete set of sofa, pillows and bed sheets
            </Heading>
            <Heading
              as="h5"
              className="!font-bold !font-poppins !text-blue_gray-900_01 tracking-[-0.50px]"
            >
              $ 75.00
            </Heading>
          </div>
        </div>
        <Heading size="md" as="h6" className="tracking-[-0.50px]">
          $ 75.00
        </Heading>
      </div>
      <Heading
        size="md"
        as="h6"
        className="!text-blue_gray-900_01 tracking-[-0.50px]"
      >
        In Stock
      </Heading>
      <Button
        color="black_900"
        size="7xl"
        className="font-semibold min-w-[146px] my-[35px] text-white-A700 tracking-[-0.50px]"
      >
        Add to Cart
      </Button>
    </div>
  );
}
