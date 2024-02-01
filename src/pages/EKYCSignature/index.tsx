import React from "react";

import { Button, Text, Heading } from "../../components";
import Header from "../../components/Header";
import Sidebar3 from "../../components/Sidebar3";
import { default as Chart } from "react-google-charts";

const ReactPieData = [
  ["C1", "C2", "C3", "C4", "C5", "C6"],
  ["January", 27, 44, 37, 16, 27],
  ["February", 14, 44, 28, 39, 20],
  ["March", 29, 19, 6, 22, 14],
  ["April", 6, 10, 21, 2, 48],
  ["May", 23, 23, 9, 8, 42],
  ["June", 19, 42, 18, 12, 17],
  ["July", 39, 13, 39, 44, 5],
];

export default function EKYCSignaturePage() {
  return (
    <div className="bg-gray-100_05 flex flex-row items-start w-full">
      <Sidebar3 className="!sticky !w-[243px] bg-white-A700 h-screen overflow-auto top-[0]" />
      <div className="bg-indigo-50 h-[950px] w-px" />
      <div className="flex flex-col gap-8 items-center justify-start w-[84%]">
        <Header className="bg-white-A700 flex w-full" />
        <div className="flex flex-row justify-start px-6 w-full">
          <div className="flex flex-col gap-8 items-center justify-start w-full">
            <div className="flex flex-row items-end justify-between w-full">
              <Text
                size="3xl"
                as="p"
                className="!font-poppins !text-blue_gray-900"
              >
                eKYC
              </Text>
              <Text as="p" className="!font-normal mb-[5px] text-right">
                Setting/ eKYC
              </Text>
            </div>
            <div className="bg-white-A700 flex flex-col gap-[58px] items-center justify-start p-12 rounded shadow-xs w-full">
              <div className="flex flex-col gap-2.5 items-center justify-end w-[65%]">
                <Heading
                  size="2xl"
                  as="h4"
                  className="!text-blue_gray-900 text-center"
                >
                  Singature
                </Heading>
                <Text size="lg" as="p" className="text-center">
                  Make sure that all your information are precise
                </Text>
              </div>
              <div className="bg-gray-50 border-2 border-dashed border-indigo-50 flex flex-row h-[469px] items-center justify-end p-[31px] rounded w-[65%]">
                <Chart
                  width="100%"
                  height="100%"
                  chartType="PieChart"
                  data={ReactPieData}
                  options={{ is3D: false }}
                  className="bg-gray-50 border-2 border-dashed border-indigo-50 flex flex-row h-[469px] items-center justify-end p-[31px] rounded w-[65%]"
                />
              </div>
              <Button
                color="deep_orange_300"
                className="font-bold min-w-[270px] rounded-[24px]"
              >
                Finish process
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
