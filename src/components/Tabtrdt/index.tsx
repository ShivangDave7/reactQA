import React from "react";

import { Text } from "./..";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

interface Props {
  className?: string;
}

export default function Tabtrdt({ ...props }: Props) {
  return (
    <Tabs
      {...props}
      selectedTabClassName="!text-blue_gray-900_01 border-b-[6px] border-b-blue_gray-900_01 pb-[9px]"
      selectedTabPanelClassName="relative tab-panel--selected"
    >
      <TabList className="flex flex-row gap-[50px] justify-start w-[41%]">
        <Tab className="font-bold font-josefinsans mt-[2.2px] text-2xl text-gray-500 tracking-[-0.50px]">
          Description
        </Tab>
        <Tab className="font-bold font-josefinsans text-2xl text-gray-500 tracking-[-0.50px]">
          Review
        </Tab>
      </TabList>
      {[...Array(2)].map((_, index) => (
        <TabPanel key={`tab-panel${index}`} className="absolute justify-center">
          <Text
            size="md"
            as="p"
            className="!text-gray-500 tracking-[-0.50px] w-full"
          >
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, `}
            <br />
            but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum
          </Text>
        </TabPanel>
      ))}
    </Tabs>
  );
}
