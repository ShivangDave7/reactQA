import React from "react";

import { Button, Text, Heading, Img } from "../../components";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
}

export default function NoPromotionPopup({ ...props }: Props) {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      {...props}
      className="min-w-[478px]"
    >
      <div className="bg-white-A700 flex flex-col items-center justify-start p-[29px] rounded w-full">
        <div className="flex flex-col gap-12 items-center justify-start w-[99%]">
          <div className="flex flex-col gap-[35px] items-center justify-start w-full">
            <div className="bg-white-A700 flex flex-col h-[298px] items-center justify-end p-[47px] w-[298px]">
              <Img
                src="images/img_group_blue_gray_900_194x146.svg"
                alt="group"
                className="h-[194px] mt-2"
              />
            </div>
            <div className="flex flex-col gap-[18px] items-center justify-end w-full">
              <Heading size="2xl" as="h4" className="text-center">
                No promotion
              </Heading>
              <Text
                size="lg"
                as="p"
                className="!text-blue_gray-800 text-center"
              >
                Follow us to review lattest promotion
              </Text>
            </div>
          </div>
          <Button
            color="deep_orange_300"
            size="10xl"
            className="font-bold min-w-[199px] rounded-[28px]"
          >
            Yes, I understand
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
}
