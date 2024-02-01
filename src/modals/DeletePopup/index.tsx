import React from "react";

import { Button, Text, Heading, Img } from "../../components";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
}

export default function DeletePopup({ ...props }: Props) {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      {...props}
      className="min-w-[478px]"
    >
      <div className="bg-white-A700 flex flex-col items-center justify-start p-[29px] rounded w-full">
        <div className="flex flex-col gap-12 items-center justify-start w-[99%]">
          <div className="flex flex-col gap-[35px] items-center justify-start w-full">
            <Img
              src="images/img_empty_box_1_1.svg"
              alt="emptybox1one"
              className="h-[234px]"
            />
            <div className="flex flex-col gap-[18px] items-center justify-end w-full">
              <Heading size="2xl" as="h4" className="text-center">
                Are you sure to delete item?
              </Heading>
              <Text
                size="lg"
                as="p"
                className="!text-blue_gray-800 text-center"
              >
                This item will be delete from your cart
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-4 w-full">
            <Button
              color="red_600"
              size="10xl"
              className="font-bold min-w-[199px] rounded-[28px]"
            >
              Yes, Delete item
            </Button>
            <Button
              size="10xl"
              className="font-semibold min-w-[199px] rounded-[28px]"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
