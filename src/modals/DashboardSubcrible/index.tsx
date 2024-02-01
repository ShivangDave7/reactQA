import React from "react";

import { Input, Img, Text, Heading, Button } from "../../components";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
}

export default function DashboardSubcrible({ ...props }: Props) {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      {...props}
      className="min-w-[445px]"
    >
      <div className="bg-white-A700 flex flex-col gap-4 items-end justify-start p-4 rounded w-full">
        <Button size="lg" className="w-6">
          <Img src="images/img_x_circle.svg" />
        </Button>
        <div className="flex flex-col gap-8 items-center justify-start w-full">
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <Heading size="2xl" as="h4" className="">
              Subcrible
            </Heading>
            <Text size="lg" as="p" className="!text-blue_gray-800">
              Subcribe our newletter and get notification to stay update
            </Text>
          </div>
          <div className="flex flex-col gap-2.5 items-start justify-start w-full">
            <Text size="lg" as="p" className="!font-medium !text-blue_gray-800">
              Email
            </Text>
            <Input
              name="email_One"
              placeholder="xyz@gmail.com"
              prefix={
                <Img src="images/img_icon.svg" alt="Icon " className="mr-4" />
              }
              className="border border-indigo-50 border-solid w-full"
            />
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
