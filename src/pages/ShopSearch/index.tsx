import React from "react";

import {
  Button,
  Img,
  RatingBar,
  Text,
  Heading,
  Input,
  CheckBox,
  SeekBar,
} from "../../components";
import Header from "../../components/Header";
import Sidebar2 from "../../components/Sidebar2";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";

export default function ShopSearchPage() {
  const [searchBarValue28, setSearchBarValue28] = React.useState("");

  return (
    <div className="bg-gray-100_05 flex flex-row items-start w-full">
      <Sidebar2 className="!sticky !w-[243px] bg-white-A700 h-screen overflow-auto top-[0]" />
      <div className="bg-indigo-50 h-[1538px] w-px" />
      <div className="flex flex-col gap-[25px] items-center justify-start w-[84%]">
        <Header className="bg-white-A700 flex w-full" />
        <div className="flex flex-col items-center justify-start px-6 w-full">
          <div className="flex flex-col gap-[30px] items-start justify-start pt-[3px] w-full">
            <Text
              size="3xl"
              as="p"
              className="!font-poppins !text-blue_gray-900"
            >
              Shopping centre
            </Text>
            <div className="flex flex-row gap-5 items-start w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start mb-[285px] p-[31px] rounded shadow-xs w-[24%]">
                <div className="flex flex-col items-start justify-start pt-[5px] w-full">
                  <Heading as="h6" className="!text-blue_gray-900">
                    Categories
                  </Heading>
                  <Accordion
                    preExpanded={[0]}
                    className="flex flex-col gap-[19px] mt-[25px] w-full"
                  >
                    {[...Array(4)].map((_, i) => (
                      <AccordionItem uuid={i} key={`expandablelistclothes${i}`}>
                        <div className="flex flex-col items-center justify-start pb-[21px] w-full">
                          <div className="flex flex-col gap-5 items-center justify-start w-full">
                            <AccordionItemHeading className="w-full">
                              <AccordionItemButton>
                                <AccordionItemState>
                                  {(props) => (
                                    <>
                                      <div className="flex flex-row justify-between w-full">
                                        <Text
                                          as="p"
                                          className="!text-blue_gray-800"
                                        >
                                          Clothes
                                        </Text>
                                        {props?.expanded ? (
                                          <Img
                                            src="images/img_arrow_up.svg"
                                            alt="arrowup"
                                            className="h-5 w-5"
                                          />
                                        ) : (
                                          <Img
                                            src="images/img_arrowdown.svg"
                                            alt="arrowdown"
                                            className="h-5 w-5"
                                          />
                                        )}
                                      </div>
                                    </>
                                  )}
                                </AccordionItemState>
                              </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                              <div className="flex flex-row justify-evenly w-full">
                                <div className="flex flex-col items-start justify-end w-full">
                                  <Text
                                    as="p"
                                    className="!text-blue_gray-800 ml-1.5"
                                  >
                                    T-shirts
                                  </Text>
                                  <Text
                                    as="p"
                                    className="!text-blue_gray-800 mt-5"
                                  >
                                    Jeans
                                  </Text>
                                  <Text
                                    as="p"
                                    className="!text-blue_gray-800 ml-1.5 mt-5"
                                  >
                                    Jackets
                                  </Text>
                                </div>
                              </div>
                            </AccordionItemPanel>
                          </div>
                        </div>
                        <div className="bg-indigo-50 h-px w-full" />
                      </AccordionItem>
                    ))}
                  </Accordion>
                  <div className="flex flex-col gap-[17px] items-start justify-start mt-6 w-full">
                    <Text as="p" className="!text-blue_gray-800">
                      Price
                    </Text>
                    <div className="flex flex-col gap-2 items-center justify-start w-full">
                      <SeekBar
                        inputValue={[0]}
                        trackColors={["", "#e2e8ed"]}
                        className="flex h-3.5 w-full"
                        trackClassName="undefined"
                        thumbClassName="undefined"
                      />
                      <div className="flex flex-row justify-between w-full">
                        <Text
                          size="md"
                          as="p"
                          className="!font-medium h-[15px]"
                        >
                          $0
                        </Text>
                        <Text
                          size="md"
                          as="p"
                          className="!font-medium text-right"
                        >
                          $10,000
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-[25px] pt-[3px] w-full">
                    <Text as="p" className="!text-blue_gray-800">
                      Rating
                    </Text>
                    <div className="flex flex-row gap-[52px] items-center mt-4 w-full">
                      <CheckBox
                        size="sm"
                        name="remember"
                        label="5 Stars"
                        className="font-medium text-blue_gray-800 text-left"
                      />
                      <RatingBar
                        value={5}
                        isEditable={true}
                        size={11}
                        className="bg-gradient flex justify-between shadow-bs w-[77px]"
                      />
                    </div>
                    <div className="flex flex-row gap-[68px] items-center mt-4 w-full">
                      <CheckBox
                        size="sm"
                        name="rememberone"
                        label="4 Stars"
                        className="font-medium text-blue_gray-800 text-left"
                      />
                      <RatingBar
                        value={4}
                        isEditable={true}
                        size={11}
                        starCount={4}
                        className="bg-gradient flex justify-between shadow-bs w-[61px]"
                      />
                    </div>
                    <div className="flex flex-row gap-[84px] items-center mt-4 w-full">
                      <CheckBox
                        size="sm"
                        name="remembertwo"
                        label="3 Stars"
                        className="font-medium text-blue_gray-800 text-left"
                      />
                      <Img
                        src="images/img_frame_11x45.png"
                        alt="frametwo"
                        className="object-cover w-[22%]"
                      />
                    </div>
                    <div className="flex flex-row gap-[101px] items-center mt-4 w-full">
                      <CheckBox
                        size="sm"
                        name="rememberthree"
                        label="2 Stars"
                        className="font-medium text-blue_gray-800 text-left"
                      />
                      <Img
                        src="images/img_frame_11x28.png"
                        alt="framethree"
                        className="object-cover w-[14%]"
                      />
                    </div>
                    <div className="flex flex-row gap-[127px] items-center mt-4 w-full">
                      <CheckBox
                        size="sm"
                        name="rememberfour"
                        label="1 Star"
                        className="font-medium text-blue_gray-800 text-left"
                      />
                      <Img
                        src="images/img_vector_11x12.png"
                        alt="vectorone"
                        className="object-cover w-3"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[17px] items-start justify-start mt-[25px] w-full">
                    <Text as="p" className="!text-blue_gray-800">
                      Color
                    </Text>
                    <div className="flex flex-row justify-start w-full">
                      <div className="flex flex-row gap-2 w-[73%]">
                        <Img
                          src="images/img_icon_blue_gray_400_24x24.svg"
                          alt="iconseven"
                          className="h-6 w-6"
                        />
                        <div className="bg-light_blue-A700 flex flex-col h-6 items-center justify-start p-1.5 rounded-[50%] w-6">
                          <div className="bg-white-A700 h-3 rounded-[50%] w-3" />
                        </div>
                        <div className="bg-pink-400 h-6 rounded-[50%] w-6" />
                        <div className="bg-amber-300_02 h-6 rounded-[50%] w-6" />
                        <div className="bg-pink-A100 h-6 rounded-[50%] w-6" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-start mt-[25px] w-full">
                    <Button
                      color="deep_orange_300"
                      rightIcon={
                        <Img
                          src="images/img_plus_white_a700.svg"
                          alt="plus"
                          className="ml-[15px]"
                        />
                      }
                      className="font-semibold rounded-[24px] w-full"
                    >
                      Apply filter
                    </Button>
                    <Button
                      rightIcon={
                        <Img
                          src="images/img_trash2.svg"
                          alt="trash-2"
                          className="ml-[27px]"
                        />
                      }
                      className="!text-blue_gray-900 font-semibold rounded-[24px] w-full"
                    >
                      Clear all
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-10 items-center justify-start w-3/4">
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <Input
                    name="framefour"
                    placeholder="Seach name, type,..."
                    value={searchBarValue28}
                    onChange={(e: string) => setSearchBarValue28(e)}
                    prefix={
                      <Img
                        src="images/img_search_blue_gray_900.svg"
                        alt="search"
                        className="cursor-pointer mr-4"
                      />
                    }
                    suffix={
                      searchBarValue28?.length > 0 ? (
                        <Img
                          src="images/img_sliders.svg"
                          alt="sliders"
                          onClick={() => setSearchBarValue28("")}
                          className="cursor-pointer ml-[35px]"
                        />
                      ) : null
                    }
                    className="shadow-xs w-full"
                  />
                  <div className="gap-px grid grid-cols-1 justify-center min-h-[auto] w-full">
                    <div className="flex flex-row gap-5 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="h-[353px] relative w-full">
                          <Img
                            src="images/img_3427408800_6_1_1.png"
                            alt="34274088006one"
                            className="bottom-0 h-[353px] justify-center left-0 m-auto object-cover right-0 rounded-tl-lg rounded-tr-lg top-0 w-full"
                          />
                          <div className="absolute flex flex-row gap-2 justify-center m-auto right-[7%] top-[6%] w-[69%]">
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
                            alt="34274088006oneo"
                            className="bottom-0 h-[353px] justify-center left-0 m-auto object-cover right-0 rounded-tl-lg rounded-tr-lg top-0 w-full"
                          />
                          <div className="absolute flex flex-row gap-2 justify-center m-auto right-[7%] top-[6%] w-[69%]">
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
                            src="images/img_3427408800_6_1_1_1.png"
                            alt="34274088006onet"
                            className="bottom-0 h-[353px] justify-center left-0 m-auto object-cover right-0 rounded-tl-lg rounded-tr-lg top-0 w-full"
                          />
                          <div className="absolute flex flex-row gap-2 justify-center m-auto right-[7%] top-[6%] w-[69%]">
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
                    <div className="flex flex-row gap-5 w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="h-[353px] relative w-full">
                          <Img
                            src="images/img_3427408800_6_1_1_353x273.png"
                            alt="34274088006one"
                            className="bottom-0 h-[353px] justify-center left-0 m-auto object-cover right-0 rounded-tl-lg rounded-tr-lg top-0 w-full"
                          />
                          <div className="absolute flex flex-row gap-2 justify-center m-auto right-[7%] top-[6%] w-[69%]">
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
                                Polo Shirt
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
                            src="images/img_3427408800_6_1_1_2.png"
                            alt="34274088006oneo"
                            className="bottom-0 h-[353px] justify-center left-0 m-auto object-cover right-0 rounded-tl-lg rounded-tr-lg top-0 w-full"
                          />
                          <div className="absolute flex flex-row gap-2 justify-center m-auto right-[7%] top-[6%] w-[69%]">
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
                                Bomber
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
                            src="images/img_3427408800_6_1_1_3.png"
                            alt="34274088006onet"
                            className="bottom-0 h-[353px] justify-center left-0 m-auto object-cover right-0 rounded-tl-lg rounded-tr-lg top-0 w-full"
                          />
                          <div className="absolute flex flex-row gap-2 justify-center m-auto right-[7%] top-[6%] w-[69%]">
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
                                Over Shirt
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
                <div className="flex flex-row justify-end px-[313px] w-full">
                  <Button
                    color="indigo_50"
                    size="4xl"
                    variant="outline"
                    leftIcon={
                      <Img
                        src="images/.png"
                        alt="ic_carat_left"
                        className="h-6 w-6"
                      >
                        <div />
                      </Img>
                    }
                    className="min-w-[32px]"
                  />
                  <Button
                    color="blue_gray_900"
                    size="3xl"
                    variant="outline"
                    className="font-medium min-w-[32px]"
                  >
                    1
                  </Button>
                  <Button
                    color="indigo_50"
                    size="3xl"
                    variant="outline"
                    className="font-medium min-w-[32px]"
                  >
                    2
                  </Button>
                  <Button
                    color="indigo_50"
                    size="3xl"
                    variant="outline"
                    className="font-medium min-w-[32px]"
                  >
                    ...
                  </Button>
                  <Button
                    color="indigo_50"
                    size="3xl"
                    variant="outline"
                    className="font-medium min-w-[32px]"
                  >
                    9
                  </Button>
                  <Button
                    color="indigo_50"
                    size="4xl"
                    variant="outline"
                    className="w-8"
                  >
                    <Img src="images/img_arrow_right_blue_gray_400_32x32.svg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
