import React from "react";

import { Img, Text } from "./..";

interface Props {
  className?: string;
}

export default function Header1({ ...props }: Props) {
  return (
    <header {...props}>
      <div className="flex flex-row items-center justify-between ml-10 w-[95%]">
        <Img
          src="images/img_linkedin.svg"
          alt="linkedin"
          className="h-[30px]"
        />
        <ul className="flex flex-row gap-9 items-start justify-center">
          <li>
            <div className="flex flex-row items-center justify-between">
              <Text as="p" className="tracking-[-0.50px]">
                Home
              </Text>
              <Img
                src="images/img_arrow_down.svg"
                alt="arrow down"
                className="h-6 w-6"
              />
            </div>
          </li>
          <li>
            <a href="#" className="">
              <Text as="p" className="tracking-[-0.50px]">
                Shop
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="mt-[3px]">
              <Text as="p" className="tracking-[-0.50px]">
                Blog
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="">
              <Text as="p" className="tracking-[-0.50px]">
                About
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="">
              <Text as="p" className="tracking-[-0.50px]">
                Contact
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="">
              <Text as="p" className="tracking-[-0.50px]">
                Team
              </Text>
            </a>
          </li>
        </ul>
        <div className="flex flex-row gap-[30px] justify-between w-auto">
          <Img src="images/img_search.svg" alt="search" className="h-6 w-6" />
          <Img src="images/img_list.svg" alt="List" className="h-6 w-6" />
          <Img
            src="images/img_list_black_900.svg"
            alt="List"
            className="h-6 w-6"
          />
        </div>
      </div>
    </header>
  );
}
