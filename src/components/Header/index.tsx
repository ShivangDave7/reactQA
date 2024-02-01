import React from "react";

import { CloseSVG } from "../../assets/images";
import { Img, Text, Input } from "./..";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props}>
      <div className="flex flex-row items-center justify-center mx-auto py-2.5 w-[97%]">
        <Text size="lg" as="p" className="!font-medium !text-blue_gray-800">
          Welcomback, Team!
        </Text>
        <Input
          size="xs"
          name="search_box"
          placeholder="Search..."
          value={searchBarValue}
          onChange={(e: string) => setSearchBarValue(e)}
          prefix={
            <Img
              src="images/img_search.svg"
              alt="search"
              className="cursor-pointer mr-2"
            />
          }
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG
                onClick={() => setSearchBarValue("")}
                fillColor="#36414fff"
              />
            ) : null
          }
          className="border border-blue_gray-200 border-solid font-medium ml-[254px] w-[33%]"
        />
        <div className="flex flex-row gap-6 items-center justify-end ml-[22px] pl-[136px] w-[32%]">
          <Img
            src="images/img_shopping_bag.svg"
            alt="shopping_bag"
            className="h-6 w-6"
          />
          <Img
            src="images/img_icon_icon_line293.svg"
            alt="icon_icon"
            className="h-6 w-6"
          />
          <div className="flex flex-row gap-[13px] items-center w-[59%]">
            <Text as="p" className="!font-normal !text-gray-500">
              Hello, Sam
            </Text>
            <Img
              src="images/img_sherlock_toy_face_low.png"
              alt="sherlock_toy"
              className="h-10 w-10"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
