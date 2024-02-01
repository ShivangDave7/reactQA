import React from "react";

import { Button, SelectBox, Img, Text, Input, Heading } from "../../components";
import { default as ModalProvider } from "react-modal";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
interface Props {
  className?: string;
}

export default function CreateEventPopup({ ...props }: Props) {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      {...props}
      className="min-w-[401px]"
    >
      <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded w-full">
        <div className="flex flex-col gap-8 items-center justify-start w-full">
          <div className="flex flex-col gap-[19px] items-start justify-start w-full">
            <Heading size="2xl" as="h4" className="">
              Create new event
            </Heading>
            <Text size="lg" as="p" className="!text-blue_gray-800">
              Add new event in the calendar
            </Text>
          </div>
          <div className="flex flex-col gap-3.5 items-center justify-start w-full">
            <div className="flex flex-col gap-2.5 items-start justify-start w-full">
              <Text
                size="lg"
                as="p"
                className="!font-medium !text-blue_gray-800"
              >
                Event name
              </Text>
              <Input
                name="frame18178"
                placeholder="Type name"
                className="border border-indigo-50 border-solid w-full"
              />
            </div>
            <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-full">
              <Text
                size="lg"
                as="p"
                className="!font-medium !text-blue_gray-800"
              >
                Select category
              </Text>
              <SelectBox
                indicator={
                  <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                }
                name="frame18180"
                placeholder="Data project"
                options={dropDownOptions}
                className="border border-indigo-50 border-solid font-semibold w-full"
              />
            </div>
          </div>
          <div className="flex flex-row gap-4 w-full">
            <Button
              color="deep_orange_300"
              size="10xl"
              className="font-bold min-w-[160px] rounded-[28px]"
            >
              Create now
            </Button>
            <Button
              size="10xl"
              className="font-semibold min-w-[160px] rounded-[28px]"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
