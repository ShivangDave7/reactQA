import React from "react";

import { Img, Button, Input, Text, Heading } from "./..";

interface Props {
  className?: string;
  subscribeNowAnd?: string;
  loremIpsumIsSimply?: string;
  btn?: string;
}

export default function CartSectionSubscribe({
  subscribeNowAnd = "Subscribe now and get 10% off all items",
  loremIpsumIsSimply = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text.",
  btn = "Subscribe",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row gap-11 justify-start ml-[13px] w-[99%]">
        <div className="flex flex-col gap-10 items-center justify-start w-[49%]">
          <div className="flex flex-col gap-2.5 items-center justify-start w-full">
            <Heading
              size="4xl"
              as="h1"
              className="!text-gray-50_01 text-6xl tracking-[-0.50px]"
            >
              {subscribeNowAnd}
            </Heading>
            <Text
              size="md"
              as="p"
              className="!text-gray-50_01 tracking-[-0.50px]"
            >
              {loremIpsumIsSimply}
            </Text>
          </div>
          <div className="flex flex-row justify-evenly w-full">
            <Input
              color="white_A700"
              size="xl"
              variant="fill"
              name="Frame 48095972"
              placeholder="Your email here.."
              className="!text-gray-500 w-[74%]"
            />
            <Button
              size="9xl"
              className="!text-yellow-100 font-bold min-w-[157px] tracking-[-0.50px]"
            >
              {btn}
            </Button>
          </div>
        </div>
        <Img
          src="images/img_pexels_photo_by.png"
          alt="Pexels Photo by"
          className="object-cover w-[49%]"
        />
      </div>
    </div>
  );
}
