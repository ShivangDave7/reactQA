import React from "react";

import {
  Button,
  Input,
  Text,
  Heading,
  Img,
  TextArea,
  SelectBox,
} from "../../components";
import Header from "../../components/Header";
import Sidebar4 from "../../components/Sidebar4";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AddProductPage() {
  return (
    <div className="bg-gray-100 flex flex-row items-start w-full">
      <Sidebar4 className="!sticky !w-[243px] bg-white-A700 h-screen overflow-auto top-[0]" />
      <div className="bg-indigo-50 h-[1071px] w-px" />
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
                Add Product
              </Text>
              <Text as="p" className="!font-normal mb-[3px] text-right">
                Ecommerce/ Add Product
              </Text>
            </div>
            <div className="flex flex-col gap-5 items-center justify-start w-full">
              <div className="bg-white-A700 flex flex-row justify-start p-8 rounded shadow-xs w-full">
                <div className="flex flex-col gap-[34px] items-start justify-start pt-[3px] w-full">
                  <Heading as="h6" className="!text-blue_gray-900">
                    Basic information
                  </Heading>
                  <div className="flex flex-row gap-6 w-full">
                    <div className="flex flex-col gap-6 items-center justify-start w-[49%]">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium !text-blue_gray-800"
                        >
                          Product name
                        </Text>
                        <Input
                          name="frame18249"
                          placeholder="Enter product’s name"
                          className="border border-indigo-50 border-solid w-full"
                        />
                      </div>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium !text-blue_gray-800"
                        >
                          Branch
                        </Text>
                        <Input
                          name="frame18249one"
                          placeholder="Enter branch"
                          className="border border-indigo-50 border-solid w-full"
                        />
                      </div>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium !text-blue_gray-800"
                        >
                          Price
                        </Text>
                        <Input
                          name="frame18249two"
                          placeholder="Enter price"
                          className="border border-indigo-50 border-solid w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 items-center justify-start w-[49%]">
                      <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-full">
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium !text-blue_gray-800"
                        >
                          Select category
                        </Text>
                        <SelectBox
                          name="frame18352"
                          placeholder="Data project"
                          options={dropDownOptions}
                          className="border border-indigo-50 border-solid font-semibold w-full"
                        />
                      </div>
                      <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-full">
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium !text-blue_gray-800"
                        >
                          Product description
                        </Text>
                        <TextArea
                          size="sm"
                          name="frame18354"
                          placeholder="Write something..."
                          className="text-blue_gray-400 w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-5 w-full">
                <div className="bg-white-A700 flex flex-row justify-start p-8 rounded shadow-xs w-1/2">
                  <div className="flex flex-col gap-8 items-start justify-start pt-[5px] w-full">
                    <Heading as="h6" className="!text-blue_gray-900">
                      Product image
                    </Heading>
                    <div className="border-2 border-dashed border-indigo-50 flex flex-row justify-start p-20 rounded w-full">
                      <div className="flex flex-col gap-10 items-center justify-start w-full">
                        <Img
                          src="images/img_image.svg"
                          alt="image"
                          className="h-7 w-7"
                        />
                        <div className="flex flex-col gap-3 items-center justify-end w-full">
                          <Heading size="lg" as="h6" className="text-center">
                            Upload image
                          </Heading>
                          <Text
                            size="lg"
                            as="p"
                            className="!text-blue_gray-800 text-center"
                          >
                            Drag or click to upload image
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-row justify-start p-8 rounded shadow-xs w-1/2">
                  <div className="flex flex-col items-start justify-start my-[3px] pt-[3px] w-full">
                    <Heading as="h6" className="!text-blue_gray-900">
                      Add link
                    </Heading>
                    <div className="flex flex-col gap-6 items-center justify-start mt-[34px] w-full">
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium !text-blue_gray-800"
                        >
                          Product Link
                        </Text>
                        <Input
                          name="frame18249three"
                          placeholder="Enter link"
                          className="border border-indigo-50 border-solid w-full"
                        />
                      </div>
                      <div className="flex flex-col gap-[9px] items-start justify-start pt-[3px] w-full">
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium !text-blue_gray-800"
                        >
                          Hashtag
                        </Text>
                        <Input
                          name="frame18249four"
                          placeholder="Enter tag"
                          className="border border-indigo-50 border-solid w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row gap-4 mt-8 w-full">
                      <Button
                        color="deep_orange_300"
                        className="font-bold min-w-[242px] rounded-[24px]"
                      >
                        Save
                      </Button>
                      <Button className="font-semibold min-w-[242px] rounded-[24px]">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
