import React from "react";

import { Button, Img, RatingBar, Text, Heading } from "../../components";
import Header from "../../components/Header";
import Sidebar2 from "../../components/Sidebar2";

export default function ShopReviewsPage() {
  return (
    <div className="bg-gray-100 flex flex-row items-start w-full">
      <Sidebar2 className="!sticky !w-[243px] bg-white-A700 h-screen overflow-auto top-[0]" />
      <div className="bg-indigo-50 h-[1979px] w-px" />
      <div className="flex flex-col gap-8 items-center justify-start w-[84%]">
        <Header className="bg-white-A700 flex w-full" />
        <div className="flex flex-col items-center justify-start px-6 w-full">
          <div className="flex flex-col gap-[70px] items-center justify-start w-full">
            <div className="flex flex-col gap-8 h-[1150px] items-center justify-start w-[1151px]">
              <div className="flex flex-row items-start justify-between pt-[3px] w-full">
                <Text
                  size="3xl"
                  as="p"
                  className="!font-poppins !text-blue_gray-900"
                >
                  Shopping centre
                </Text>
                <Text as="p" className="!font-normal mt-1 text-right">
                  Shop Central/ Product detail
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-row justify-start p-[30px] rounded shadow-xs w-full">
                <div className="flex flex-col gap-12 items-center justify-start w-full">
                  <div className="flex flex-row gap-10 items-center w-full">
                    <div className="flex flex-row gap-5 w-[49%]">
                      <div className="flex flex-col gap-5 w-[23%]">
                        <Img
                          src="images/img_rectangle_126x116.png"
                          alt="rectangle"
                          className="object-cover w-full"
                        />
                        <Img
                          src="images/img_rectangle_1.png"
                          alt="rectangle"
                          className="object-cover w-full"
                        />
                        <Img
                          src="images/img_rectangle_2.png"
                          alt="rectangle"
                          className="object-cover w-full"
                        />
                        <Img
                          src="images/img_rectangle_3.png"
                          alt="rectangle"
                          className="object-cover w-full"
                        />
                      </div>
                      <Img
                        src="images/img_rectangle_564x387.png"
                        alt="rectangle"
                        className="object-cover w-[74%]"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[49%]">
                      <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                        <Heading
                          size="3xl"
                          as="h3"
                          className="!text-blue_gray-900"
                        >
                          Polo Shirt
                        </Heading>
                        <div className="flex flex-row gap-[18px] items-center justify-start w-full">
                          <Text as="p" className="!font-normal">
                            Code: #1230
                          </Text>
                          <RatingBar
                            value={5}
                            isEditable={true}
                            size={14}
                            className="bg-gradient flex justify-between shadow-bs w-[90px]"
                          />
                        </div>
                      </div>
                      <Heading
                        size="2xl"
                        as="h4"
                        className="!text-indigo-400 mt-[33px]"
                      >
                        $120.0
                      </Heading>
                      <div className="flex flex-col gap-[17px] items-start justify-start mt-8 w-full">
                        <Text as="p" className="!text-blue_gray-800">
                          Choose color
                        </Text>
                        <div className="flex flex-row justify-start w-full">
                          <Img
                            src="images/img_square.svg"
                            alt="square"
                            className="h-6 w-6"
                          />
                          <Img
                            src="images/img_square_gray_400.svg"
                            alt="squareone"
                            className="h-6 ml-1 w-6"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start mt-8 pt-[3px] w-full">
                        <Text as="p" className="!text-blue_gray-800">
                          Choose quantity
                        </Text>
                        <div className="flex flex-row items-center justify-start w-full">
                          <Button
                            color="indigo_50"
                            size="4xl"
                            variant="outline"
                            className="w-8"
                          >
                            <Img src="images/img_page_disabled_blue_gray_900.svg" />
                          </Button>
                          <Text
                            size="lg"
                            as="p"
                            className="!font-medium !text-blue_gray-900 ml-5 text-center"
                          >
                            1
                          </Text>
                          <Button
                            color="indigo_50"
                            size="4xl"
                            variant="outline"
                            className="ml-[21px] w-8"
                          >
                            <Img src="images/img_page_disabled.svg" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-end mt-8 w-full">
                        <Text as="p" className="!text-blue_gray-800">
                          Choose size
                        </Text>
                        <div className="flex flex-row gap-2 justify-start mt-[17px] w-full">
                          <Button
                            color="indigo_50"
                            size="3xl"
                            variant="outline"
                            className="font-medium min-w-[32px]"
                          >
                            S
                          </Button>
                          <Button
                            color="indigo_50"
                            size="3xl"
                            variant="outline"
                            className="font-medium min-w-[32px]"
                          >
                            M
                          </Button>
                          <Button
                            color="indigo_50"
                            size="3xl"
                            variant="outline"
                            className="font-medium min-w-[32px]"
                          >
                            L
                          </Button>
                        </div>
                        <Text
                          size="lg"
                          as="p"
                          className="!text-indigo-400 mt-[19px]"
                        >
                          How to find your size?
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 mt-8 w-full">
                        <Button
                          color="deep_orange_300"
                          className="font-bold min-w-[253px] rounded-[24px]"
                        >
                          Purchase now
                        </Button>
                        <Button
                          color="deep_orange_50"
                          className="font-bold min-w-[253px] rounded-[24px]"
                        >
                          Add to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-10 items-start w-full">
                    <div className="flex flex-col gap-[25px] items-start justify-start w-[31%]">
                      <Text as="p" className="!font-normal">
                        Product Detail
                      </Text>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <div className="bg-indigo-400 h-0.5 my-[9px] w-[13%]" />
                        <Text as="p" className="!text-indigo-400">
                          Reviews
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5 w-[66%]">
                      <div className="border border-indigo-50 border-solid flex flex-col gap-9 items-center justify-start p-8 rounded w-full">
                        <div className="flex flex-row gap-[57px] items-start w-full">
                          <div className="flex flex-row gap-5 items-center w-[77%]">
                            <Img
                              src="images/img_tintin2_2_48x48.png"
                              alt="tintin2two"
                              className="h-12 w-12"
                            />
                            <div className="flex flex-col gap-3.5 items-start justify-start pt-[3px] w-[87%]">
                              <Heading as="h6" className="">
                                Jimo
                              </Heading>
                              <Text
                                as="p"
                                className="!font-normal !text-blue_gray-800"
                              >
                                {`Nice T-Shirt, I have a soft spot for buying this stuff <3 <3`}
                              </Text>
                            </div>
                          </div>
                          <Text
                            as="p"
                            className="!font-normal mt-[3px] text-right"
                          >
                            20 mins ago
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[30px] justify-center pl-[427px] w-full">
                          <div className="flex flex-row gap-2 items-center justify-center w-3/5">
                            <Img
                              src="images/img_message_circle.svg"
                              alt="messagecircle"
                              className="h-6 w-6"
                            />
                            <Text
                              as="p"
                              className="!font-normal !text-blue_gray-800"
                            >
                              10 comments
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-center w-[28%]">
                            <Img
                              src="images/img_heart_blue_gray_800.svg"
                              alt="heart"
                              className="h-6 w-6"
                            />
                            <Text
                              as="p"
                              className="!font-normal !text-blue_gray-800"
                            >
                              200
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="border border-indigo-50 border-solid flex flex-col gap-9 items-center justify-start p-8 rounded w-full">
                        <div className="flex flex-row gap-[57px] items-start w-full">
                          <div className="flex flex-row gap-5 items-center w-[77%]">
                            <Img
                              src="images/img_indiahigh.png"
                              alt="indiahigh"
                              className="h-12 w-12"
                            />
                            <div className="flex flex-col gap-[9px] items-start justify-start pt-1 w-[87%]">
                              <Heading as="h6" className="">
                                Ackerman_lhn
                              </Heading>
                              <Text
                                as="p"
                                className="!font-normal !text-2xl !text-blue_gray-800"
                              >
                                Oh my god, i am really addicted to this brand a
                                lot. I define myself as a big fan
                              </Text>
                            </div>
                          </div>
                          <Text
                            as="p"
                            className="!font-normal mt-[3px] text-right"
                          >
                            20 mins ago
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[30px] justify-center pl-[427px] w-full">
                          <div className="flex flex-row gap-2 items-center justify-center w-3/5">
                            <Img
                              src="images/img_message_circle.svg"
                              alt="messagecircle"
                              className="h-6 w-6"
                            />
                            <Text
                              as="p"
                              className="!font-normal !text-blue_gray-800"
                            >
                              10 comments
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-center w-[28%]">
                            <Img
                              src="images/img_heart_blue_gray_800.svg"
                              alt="heart"
                              className="h-6 w-6"
                            />
                            <Text
                              as="p"
                              className="!font-normal !text-blue_gray-800"
                            >
                              200
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="flex flex-row items-start justify-between pt-[3px] w-full">
                <Text
                  size="3xl"
                  as="p"
                  className="!font-poppins !text-blue_gray-900"
                >
                  Related product
                </Text>
                <div className="flex flex-row gap-4 items-center">
                  <Text as="p" className="text-right">
                    See all
                  </Text>
                  <Img
                    src="images/img_arrow_right.svg"
                    alt="arrowright"
                    className="h-6 w-6"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-5 w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="h-[353px] relative w-full">
                    <Img
                      src="images/img_3427408800_6_1_1.png"
                      alt="34274088006one"
                      className="bottom-0 h-[353px] justify-center left-0 m-auto object-cover right-0 rounded-tl-lg rounded-tr-lg top-0 w-full"
                    />
                    <div className="absolute flex flex-row gap-2 justify-center m-auto right-[7%] top-[6%] w-[70%]">
                      <Button
                        color="red_400_19"
                        size="3xl"
                        shape="round"
                        rightIcon={
                          <Img
                            src="images/img_zap.svg"
                            alt="zap"
                            className="ml-[11px]"
                          />
                        }
                        className="min-w-[82px]"
                      >
                        Feature
                      </Button>
                      <Button
                        color="indigo_400_19"
                        size="3xl"
                        shape="round"
                        rightIcon={
                          <Img
                            src="images/img_tag.svg"
                            alt="tag"
                            className="ml-[13px]"
                          />
                        }
                        className="min-w-[98px]"
                      >
                        Flash sale
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-8 items-center justify-start py-8 w-full">
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium !text-blue_gray-900 text-center"
                        >
                          Avo T-Shirt
                        </Text>
                        <div className="flex flex-row items-center justify-center p-0.5 w-full">
                          <Heading
                            as="h6"
                            className="!text-blue_gray-900 ml-20"
                          >
                            $120.0
                          </Heading>
                          <Text
                            size="lg"
                            as="p"
                            className="!font-poppins line-through ml-0.5 mr-20"
                          >
                            $140.0
                          </Text>
                        </div>
                      </div>
                      <RatingBar
                        value={5}
                        isEditable={true}
                        size={11}
                        className="bg-gradient flex justify-between shadow-bs w-[77px]"
                      />
                    </div>
                    <div className="flex flex-row gap-4 justify-end px-20 w-full">
                      <Button
                        color="deep_orange_300"
                        size="7xl"
                        className="rounded-[50%] w-12"
                      >
                        <Img src="images/img_plus_white_a700.svg" />
                      </Button>
                      <Button size="7xl" className="rounded-[50%] w-12">
                        <Img src="images/img_heart.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="h-[353px] relative w-full">
                    <Img
                      src="images/img_3427408800_6_1_1.png"
                      alt="34274088006one"
                      className="bottom-0 h-[353px] justify-center left-0 m-auto object-cover right-0 rounded-tl-lg rounded-tr-lg top-0 w-full"
                    />
                    <div className="absolute flex flex-row gap-2 justify-center m-auto right-[7%] top-[6%] w-[70%]">
                      <Button
                        color="red_400_19"
                        size="3xl"
                        shape="round"
                        rightIcon={
                          <Img
                            src="images/img_zap.svg"
                            alt="zap"
                            className="ml-[11px]"
                          />
                        }
                        className="min-w-[82px]"
                      >
                        Feature
                      </Button>
                      <Button
                        color="indigo_400_19"
                        size="3xl"
                        shape="round"
                        rightIcon={
                          <Img
                            src="images/img_tag.svg"
                            alt="tag"
                            className="ml-[13px]"
                          />
                        }
                        className="min-w-[98px]"
                      >
                        Flash sale
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-8 items-center justify-start py-8 w-full">
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium !text-blue_gray-900 text-center"
                        >
                          Avo T-Shirt
                        </Text>
                        <div className="flex flex-row items-center justify-center p-0.5 w-full">
                          <Heading
                            as="h6"
                            className="!text-blue_gray-900 ml-20"
                          >
                            $120.0
                          </Heading>
                          <Text
                            size="lg"
                            as="p"
                            className="!font-poppins line-through ml-0.5 mr-20"
                          >
                            $140.0
                          </Text>
                        </div>
                      </div>
                      <RatingBar
                        value={5}
                        isEditable={true}
                        size={11}
                        className="bg-gradient flex justify-between shadow-bs w-[77px]"
                      />
                    </div>
                    <div className="flex flex-row gap-4 justify-start px-20 w-full">
                      <Button
                        color="deep_orange_300"
                        size="7xl"
                        className="rounded-[50%] w-12"
                      >
                        <Img src="images/img_plus_white_a700.svg" />
                      </Button>
                      <Button size="7xl" className="rounded-[50%] w-12">
                        <Img src="images/img_heart.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="h-[353px] relative w-full">
                    <Img
                      src="images/img_3427408800_6_1_1_353x272.png"
                      alt="34274088006one"
                      className="bottom-0 h-[353px] justify-center left-0 m-auto object-cover right-0 rounded-tl-lg rounded-tr-lg top-0 w-full"
                    />
                    <div className="absolute flex flex-row gap-2 justify-center m-auto right-[7%] top-[6%] w-[70%]">
                      <Button
                        color="red_400_19"
                        size="3xl"
                        shape="round"
                        rightIcon={
                          <Img
                            src="images/img_zap.svg"
                            alt="zap"
                            className="ml-[11px]"
                          />
                        }
                        className="min-w-[82px]"
                      >
                        Feature
                      </Button>
                      <Button
                        color="indigo_400_19"
                        size="3xl"
                        shape="round"
                        rightIcon={
                          <Img
                            src="images/img_tag.svg"
                            alt="tag"
                            className="ml-[13px]"
                          />
                        }
                        className="min-w-[98px]"
                      >
                        Flash sale
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-8 items-center justify-start py-8 w-full">
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium !text-blue_gray-900 text-center"
                        >
                          Basic T-Shirt
                        </Text>
                        <div className="flex flex-row items-center justify-center p-0.5 w-full">
                          <Heading
                            as="h6"
                            className="!text-blue_gray-900 ml-20"
                          >
                            $120.0
                          </Heading>
                          <Text
                            size="lg"
                            as="p"
                            className="!font-poppins line-through ml-0.5 mr-20"
                          >
                            $140.0
                          </Text>
                        </div>
                      </div>
                      <RatingBar
                        value={5}
                        isEditable={true}
                        size={11}
                        className="bg-gradient flex justify-between shadow-bs w-[77px]"
                      />
                    </div>
                    <div className="flex flex-row gap-4 justify-end px-20 w-full">
                      <Button
                        color="deep_orange_300"
                        size="7xl"
                        className="rounded-[50%] w-12"
                      >
                        <Img src="images/img_plus_white_a700.svg" />
                      </Button>
                      <Button size="7xl" className="rounded-[50%] w-12">
                        <Img src="images/img_heart.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="h-[353px] relative w-full">
                    <Img
                      src="images/img_3427408800_6_1_1_1.png"
                      alt="34274088006one"
                      className="bottom-0 h-[353px] justify-center left-0 m-auto object-cover right-0 rounded-tl-lg rounded-tr-lg top-0 w-full"
                    />
                    <div className="absolute flex flex-row gap-2 justify-center m-auto right-[7%] top-[6%] w-[70%]">
                      <Button
                        color="red_400_19"
                        size="3xl"
                        shape="round"
                        rightIcon={
                          <Img
                            src="images/img_zap.svg"
                            alt="zap"
                            className="ml-[11px]"
                          />
                        }
                        className="min-w-[82px]"
                      >
                        Feature
                      </Button>
                      <Button
                        color="indigo_400_19"
                        size="3xl"
                        shape="round"
                        rightIcon={
                          <Img
                            src="images/img_tag.svg"
                            alt="tag"
                            className="ml-[13px]"
                          />
                        }
                        className="min-w-[98px]"
                      >
                        Flash sale
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-8 items-center justify-start py-8 w-full">
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-col gap-[9px] items-center justify-start pt-[3px] w-full">
                        <Text
                          size="lg"
                          as="p"
                          className="!font-medium !text-blue_gray-900 text-center"
                        >
                          Trendy Polo
                        </Text>
                        <div className="flex flex-row items-center justify-center p-0.5 w-full">
                          <Heading
                            as="h6"
                            className="!text-blue_gray-900 ml-20"
                          >
                            $120.0
                          </Heading>
                          <Text
                            size="lg"
                            as="p"
                            className="!font-poppins line-through ml-0.5 mr-20"
                          >
                            $140.0
                          </Text>
                        </div>
                      </div>
                      <RatingBar
                        value={5}
                        isEditable={true}
                        size={11}
                        className="bg-gradient flex justify-between shadow-bs w-[77px]"
                      />
                    </div>
                    <div className="flex flex-row gap-4 justify-start px-20 w-full">
                      <Button
                        color="deep_orange_300"
                        size="7xl"
                        className="rounded-[50%] w-12"
                      >
                        <Img src="images/img_plus_white_a700.svg" />
                      </Button>
                      <Button size="7xl" className="rounded-[50%] w-12">
                        <Img src="images/img_heart.svg" />
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
