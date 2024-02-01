import React from "react";

import { Heading, Img, Button } from "./..";

interface Props {
  className?: string;
}

export default function Qwd({ ...props }: Props) {
  return (
    <div {...props}>
      <Button color="gray_50_01" size="6xl" className="my-[35px] w-[50px]">
        <Img src="images/img_bx_trash_1.svg" />
      </Button>
      <div className="flex flex-row gap-5 items-center justify-start pr-[3px]">
        <Img
          src="images/img_rectangle_1480_120x120.png"
          alt="Rectangle 1480"
          className="object-cover w-[120px]"
        />
        <div className="flex flex-col gap-[11px] items-start justify-start w-[68%]">
          <Heading as="h5" className="!font-bold tracking-[-0.50px]">
            Teak wood chair
          </Heading>
          <Heading
            as="h5"
            className="!font-bold !font-poppins !text-blue_gray-900_01 tracking-[-0.50px]"
          >
            $ 24.00
          </Heading>
        </div>
      </div>
    </div>
  );
}
