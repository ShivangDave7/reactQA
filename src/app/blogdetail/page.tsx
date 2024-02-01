"use client";
import React from "react";

import {
  Button,
  Text,
  Img,
  Heading,
  Input,
  CheckBox,
  TextArea,
} from "../../components";
import CartSectionSubscribe from "../../components/CartSectionSubscribe";
import Footer1 from "../../components/Footer1";
import Header1 from "../../components/Header1";

export default function BlogDetailPage() {
  return (
    <div className="bg-gray-50 flex flex-col gap-[100px] items-center justify-start w-full">
      <Header1 className="bg-white-A700 flex p-[35px] w-full" />
      <div className="flex flex-col items-center justify-start px-[75px] w-full">
        <div className="flex flex-col gap-[83px] items-center justify-start max-w-[1291px] w-full">
          <div className="flex flex-col gap-[60px] items-center justify-start w-full">
            <div className="flex flex-col gap-[39px] items-center justify-start pb-1.5 w-full">
              <div className="flex flex-col gap-[11px] items-center justify-start pt-1 w-full">
                <Heading
                  size="4xl"
                  as="h1"
                  className="text-center tracking-[-0.50px]"
                >
                  Why should you choose good wood
                </Heading>
                <div className="flex flex-row items-center justify-start px-[478px] w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-center w-[34%]">
                    <Img
                      src="images/img_bx_edit_alt_1.svg"
                      alt="bx edit alt 1"
                      className="h-6 w-6"
                    />
                    <Text as="p" className="tracking-[-0.50px]">
                      By Admin
                    </Text>
                  </div>
                  <div className="bg-gray-500 h-[15px] ml-[18px] my-1 w-px" />
                  <div className="flex flex-row gap-2.5 items-start justify-center ml-[17px] w-[56%]">
                    <Img
                      src="images/img_bx_calendar_1.svg"
                      alt="bx calendar 1"
                      className="h-6 w-6"
                    />
                    <Text as="p" className="tracking-[-0.50px]">
                      December 10, 2022
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                size="md"
                as="p"
                className="!text-gray-500 text-center tracking-[-0.50px]"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever.
              </Text>
            </div>
            <Img
              src="images/img_rectangle_1488.png"
              alt="Rectangle 1488"
              className="object-cover w-full"
            />
          </div>
          <div className="flex flex-row items-start justify-between w-full">
            <div className="flex flex-col gap-[50px] items-center justify-start w-[67%]">
              <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Heading size="2xl" as="h2" className="tracking-[-0.50px]">
                    How to choose the best chair
                  </Heading>
                  <Text
                    size="md"
                    as="p"
                    className="!text-gray-500 mt-[18px] tracking-[-0.50px]"
                  >
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    dictumst posuere, lectus dis vehicula augue elementum quam
                    risus. Placerat dictum lobortis lacinia volutpat morbi cum
                    justo commodo est aliquam, facilisi consequat ligula vivamus
                    faucibus ac sociis cubilia neque, felis fringilla aenean hac
                    eleifend tellus pellentesque quis suspendisse. Sociosqu
                    suscipit sodales taciti rutrum condimentum conubia volutpat
                    cubilia mi, velit curabitur consequat proin neque commodo
                    interdum eleifend dui, ac magna leo ridiculus facilisi duis
                    sapien etiam.
                  </Text>
                  <Text
                    size="md"
                    as="p"
                    className="!text-gray-500 mt-5 tracking-[-0.50px]"
                  >
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    dictumst posuere, lectus dis vehicula augue elementum quam
                    risus. Placerat dictum lobortis lacinia volutpat morbi cum
                    justo commodo est aliquam, facilisi consequat ligula vivamus
                    faucibus ac sociis cubilia neque.
                  </Text>
                </div>
                <Img
                  src="images/img_rectangle_1489.png"
                  alt="Rectangle 1489"
                  className="object-cover w-full"
                />
                <Text
                  size="md"
                  as="p"
                  className="!text-gray-500 tracking-[-0.50px]"
                >
                  Massa mus mattis natoque ante sapien venenatis nisl, mauris
                  malesuada parturient fringilla dignissim tortor morbi,
                  imperdiet quam faucibus id nunc cum. Suscipit lectus curae cum
                  in taciti ullamcorper accumsan luctus, euismod ornare fames
                  aenean ultrices odio ultricies et mus, gravida condimentum
                  senectus hendrerit lobortis sociis quam. Blandit placerat cras
                  suscipit egestas arcu nam ligula rhoncus, tortor purus proin
                  nulla faucibus odio molestie semper, venenatis urna mollis
                  libero praesent cum nec.
                </Text>
                <div className="flex flex-row gap-[19px] justify-start w-full">
                  <Img
                    src="images/img_rectangle_1490.png"
                    alt="Rectangle 1490"
                    className="object-cover w-[49%]"
                  />
                  <Img
                    src="images/img_rectangle_1491.png"
                    alt="Rectangle 1491"
                    className="object-cover w-[49%]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[49px] items-center justify-start w-full">
                <div className="flex flex-row gap-[15px] items-start justify-start w-full">
                  <Heading
                    size="xl"
                    as="h4"
                    className="!font-semibold mt-[3px] tracking-[-0.50px]"
                  >
                    Tag :
                  </Heading>
                  <div className="flex flex-row gap-2.5 justify-center w-[29%]">
                    <Button
                      size="xs"
                      className="!text-yellow-100 border border-blue_gray-900_01 border-solid min-w-[62px] rounded-[5px] tracking-[-0.50px]"
                    >
                      Chair
                    </Button>
                    <Button
                      color="gray_500"
                      size="xs"
                      variant="outline"
                      className="min-w-[65px] rounded-[5px] tracking-[-0.50px]"
                    >
                      Lamp
                    </Button>
                    <Button
                      color="gray_500"
                      size="xs"
                      variant="outline"
                      className="min-w-[96px] rounded-[5px] tracking-[-0.50px]"
                    >
                      Minimalist
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                  <Heading size="xl" as="h4" className="tracking-[-0.50px]">
                    Leave a Comment
                  </Heading>
                  <div className="flex flex-col gap-8 items-center justify-start w-full">
                    <div className="flex flex-col gap-[31px] items-center justify-start w-full">
                      <div className="flex flex-row gap-4 justify-start w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-1/2">
                          <Heading
                            size="md"
                            as="h6"
                            className="tracking-[-0.50px]"
                          >
                            Your Name
                          </Heading>
                          <Input
                            name="Frame 48096015"
                            placeholder="Write your name here...."
                            className="w-full"
                          />
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-start w-1/2">
                          <Heading
                            size="md"
                            as="h6"
                            className="tracking-[-0.50px]"
                          >
                            Your Email
                          </Heading>
                          <Input
                            name="Frame 48096015"
                            placeholder="Write your email here...."
                            className="w-full"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Heading
                          size="md"
                          as="h6"
                          className="tracking-[-0.50px]"
                        >
                          Your Comment
                        </Heading>
                        <TextArea
                          name="Frame 48096017"
                          placeholder="Write your review here...."
                          className="text-gray-500 tracking-[-0.50px] w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                      <CheckBox
                        name="Save my name  email "
                        label="Save my name, email, and website in this browser for the next time I comment."
                        className="font-poppins italic text-left tracking-[-0.50px]"
                      />
                      <Button
                        size="7xl"
                        className="border-2 border-blue_gray-900_01 border-solid font-medium font-poppins min-w-[155px] tracking-[-0.50px]"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[26%]">
              <div className="flex flex-row justify-evenly w-full">
                <Input
                  color="gray_50_01"
                  size="sm"
                  variant="fill"
                  name="Frame 48096101"
                  placeholder="Find Something..."
                  className="w-[68%]"
                />
                <Button
                  size="5xl"
                  className="!text-yellow-100 font-semibold min-w-[107px] tracking-[-0.50px]"
                >
                  Search
                </Button>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start mt-[50px] w-full">
                <Heading as="h5" className="!text-gray-900">
                  Recent Post
                </Heading>
                <div className="flex flex-col gap-5 w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Img
                      src="images/img_rectangle_1480_120x120.png"
                      alt="Image"
                      className="object-cover w-[70px]"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start w-3/4">
                      <Heading size="s" as="h6" className="">
                        How to choose a chair at home
                      </Heading>
                      <Text
                        size="s"
                        as="p"
                        className="!text-gray-500 tracking-[-0.50px]"
                      >
                        December 27, 2021
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Img
                      src="images/img_image_70x70.png"
                      alt="Image"
                      className="object-cover w-[70px]"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start w-3/4">
                      <Heading size="s" as="h6" className="">
                        How to choose a chair at home
                      </Heading>
                      <Text
                        size="s"
                        as="p"
                        className="!text-gray-500 tracking-[-0.50px]"
                      >
                        December 27, 2021
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Img
                      src="images/img_image_1.png"
                      alt="Image"
                      className="object-cover w-[70px]"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start w-3/4">
                      <Heading size="s" as="h6" className="">
                        How to choose a chair at home
                      </Heading>
                      <Text
                        size="s"
                        as="p"
                        className="!text-gray-500 tracking-[-0.50px]"
                      >
                        December 27, 2021
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Img
                      src="images/img_image_2.png"
                      alt="Image"
                      className="object-cover w-[70px]"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start w-3/4">
                      <Heading size="s" as="h6" className="">
                        How to choose a chair at home
                      </Heading>
                      <Text
                        size="s"
                        as="p"
                        className="!text-gray-500 tracking-[-0.50px]"
                      >
                        December 27, 2021
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start mt-[49px] w-full">
                <Heading as="h5" className="!font-josefinsans !text-gray-900">
                  Follow Us
                </Heading>
                <div className="flex flex-row gap-5 justify-start w-full">
                  <Button
                    color="yellow_100"
                    size="xl"
                    shape="circle"
                    className="w-10"
                  >
                    <Img src="images/img_bxl_instagram.svg" />
                  </Button>
                  <div className="flex flex-col h-10 items-center justify-start w-10">
                    <Button
                      color="yellow_100"
                      size="xl"
                      shape="circle"
                      className="w-10"
                    >
                      <Img src="images/img_bxl_facebook.svg" />
                    </Button>
                  </div>
                  <Button
                    color="yellow_100"
                    size="xl"
                    shape="circle"
                    className="w-10"
                  >
                    <Img src="images/img_bxl_twitter.svg" />
                  </Button>
                  <Button
                    color="yellow_100"
                    size="xl"
                    shape="circle"
                    className="w-10"
                  >
                    <Img src="images/img_bxl_tiktok.svg" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-[22px] items-start justify-start mt-[50px] w-full">
                <Heading as="h5" className="!font-josefinsans !text-gray-900">
                  Our Gallery
                </Heading>
                <div className="gap-3.5 grid grid-cols-3 justify-center min-h-[auto] w-full">
                  <Img
                    src="images/img_rectangle_21.png"
                    alt="Rectangle 21"
                    className="object-cover w-full"
                  />
                  <Img
                    src="images/img_image_1.png"
                    alt="Image"
                    className="object-cover w-full"
                  />
                  <Img
                    src="images/img_image_100x100.png"
                    alt="Image"
                    className="object-cover w-full"
                  />
                  <Img
                    src="images/img_image_3.png"
                    alt="Image"
                    className="object-cover w-full"
                  />
                  <Img
                    src="images/img_image_4.png"
                    alt="Image"
                    className="object-cover w-full"
                  />
                  <Img
                    src="images/img_image_2.png"
                    alt="Image"
                    className="object-cover w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[22px] items-start justify-start mt-[50px] w-full">
                <Heading as="h5" className="!font-josefinsans !text-gray-900">
                  Tags
                </Heading>
                <div className="w-[78%]">
                  <div className="bg-blue_gray-900_01 border border-blue_gray-900_01 border-solid font-poppins mb-[102px] mr-[189px] px-3 py-[5px] rounded-[5px] text-base text-left text-yellow-100 tracking-[-0.50px] w-[26%]">
                    Chair
                  </div>
                  <div className="border border-gray-500 border-solid font-poppins mb-[102px] ml-[76px] mr-[111px] pb-[3px] pt-2 px-3 rounded-[5px] text-base text-gray-500 text-left tracking-[-0.50px] w-[27%]">
                    Lamp
                  </div>
                  <div className="border border-gray-500 border-solid font-poppins mb-[102px] ml-[154px] px-3 py-[5px] rounded-[5px] text-base text-gray-500 text-left tracking-[-0.50px] w-2/5">
                    Minimalist
                  </div>
                  <div className="border border-gray-500 border-solid font-poppins mr-[196px] my-[51px] px-3 py-[5px] rounded-[5px] text-base text-gray-500 text-left tracking-[-0.50px] w-[24%]">
                    Sofa
                  </div>
                  <div className="border border-gray-500 border-solid font-poppins ml-[69px] mr-32 my-[51px] px-3 py-[5px] rounded-[5px] text-base text-gray-500 text-left tracking-[-0.50px] w-[23%]">
                    New
                  </div>
                  <div className="border border-gray-500 border-solid font-poppins ml-[137px] mr-[51px] my-[51px] px-3 py-[5px] rounded-[5px] text-base text-gray-500 text-left tracking-[-0.50px] w-[27%]">
                    Clock
                  </div>
                  <div className="border border-gray-500 border-solid font-poppins ml-2 mr-[181px] mt-[102px] px-3 py-[5px] rounded-[5px] text-base text-gray-500 text-left tracking-[-0.50px] w-[26%]">
                    Pillow
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start px-[75px] w-full">
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1291px] mx-auto w-full">
          <div className="flex flex-col gap-4 items-center justify-start p-1 w-full">
            <Heading
              size="4xl"
              as="h1"
              className="!font-semibold text-center tracking-[-0.50px]"
            >
              Other blogs
            </Heading>
            <Text
              as="p"
              className="!text-gray-500 text-center tracking-[-0.50px]"
            >
              We write various things related to furniture, from tips and what
              things I need to pay attention to when choosing furniture
            </Text>
          </div>
          <div className="flex flex-row gap-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_18.png"
                  alt="Rectangle 18"
                  className="object-cover w-full"
                />
                <div className="flex flex-col items-start justify-start w-full">
                  <Heading size="xl" as="h4" className="tracking-[-0.50px]">
                    Why should you choose good wood
                  </Heading>
                  <div className="flex flex-row justify-start mt-4 w-full">
                    <div className="flex flex-row items-center justify-between w-[62%]">
                      <div className="flex flex-row items-start justify-evenly">
                        <Img
                          src="images/img_bx_edit_alt_1.svg"
                          alt="bx edit alt 1"
                          className="h-[18px] w-[18px]"
                        />
                        <Text size="s" as="p" className="tracking-[-0.50px]">
                          By Admin
                        </Text>
                      </div>
                      <div className="bg-gray-500 h-[15px] w-px" />
                      <div className="flex flex-row items-center justify-evenly">
                        <Img
                          src="images/img_bx_calendar_1.svg"
                          alt="bx calendar 1"
                          className="h-[18px] w-[18px]"
                        />
                        <Text size="s" as="p" className="tracking-[-0.50px]">
                          December 10, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    size="s"
                    as="p"
                    className="!text-gray-500 leading-[35px] mt-[18px] tracking-[-0.50px]"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever.
                  </Text>
                  <Button
                    color="black_900"
                    size="3xl"
                    variant="outline"
                    className="font-semibold min-w-[139px] mt-[19px] tracking-[-0.50px]"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_18_400x416.png"
                  alt="Rectangle 18"
                  className="object-cover w-full"
                />
                <div className="flex flex-col items-start justify-start w-full">
                  <Heading size="xl" as="h4" className="tracking-[-0.50px]">
                    Why should you choose good wood
                  </Heading>
                  <div className="flex flex-row justify-start mt-4 w-full">
                    <div className="flex flex-row items-center justify-between w-[62%]">
                      <div className="flex flex-row items-start justify-evenly">
                        <Img
                          src="images/img_bx_edit_alt_1.svg"
                          alt="bx edit alt 1"
                          className="h-[18px] w-[18px]"
                        />
                        <Text size="s" as="p" className="tracking-[-0.50px]">
                          By Admin
                        </Text>
                      </div>
                      <div className="bg-gray-500 h-[15px] w-px" />
                      <div className="flex flex-row items-center justify-evenly">
                        <Img
                          src="images/img_bx_calendar_1.svg"
                          alt="bx calendar 1"
                          className="h-[18px] w-[18px]"
                        />
                        <Text size="s" as="p" className="tracking-[-0.50px]">
                          December 10, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    size="s"
                    as="p"
                    className="!text-gray-500 leading-[35px] mt-[18px] tracking-[-0.50px]"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever.
                  </Text>
                  <Button
                    color="black_900"
                    size="3xl"
                    variant="outline"
                    className="font-semibold min-w-[139px] mt-[19px] tracking-[-0.50px]"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Img
                  src="images/img_rectangle_18_1.png"
                  alt="Rectangle 18"
                  className="object-cover w-full"
                />
                <div className="flex flex-col items-start justify-start w-full">
                  <Heading size="xl" as="h4" className="tracking-[-0.50px]">
                    Why should you choose good wood
                  </Heading>
                  <div className="flex flex-row justify-start mt-4 w-full">
                    <div className="flex flex-row items-center justify-between w-[62%]">
                      <div className="flex flex-row items-start justify-evenly">
                        <Img
                          src="images/img_bx_edit_alt_1.svg"
                          alt="bx edit alt 1"
                          className="h-[18px] w-[18px]"
                        />
                        <Text size="s" as="p" className="tracking-[-0.50px]">
                          By Admin
                        </Text>
                      </div>
                      <div className="bg-gray-500 h-[15px] w-px" />
                      <div className="flex flex-row items-center justify-evenly">
                        <Img
                          src="images/img_bx_calendar_1.svg"
                          alt="bx calendar 1"
                          className="h-[18px] w-[18px]"
                        />
                        <Text size="s" as="p" className="tracking-[-0.50px]">
                          December 10, 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    size="s"
                    as="p"
                    className="!text-gray-500 leading-[35px] mt-[18px] tracking-[-0.50px]"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever.
                  </Text>
                  <Button
                    color="black_900"
                    size="3xl"
                    variant="outline"
                    className="font-semibold min-w-[139px] mt-[19px] tracking-[-0.50px]"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start px-[75px] w-full">
        <CartSectionSubscribe className="bg-gradient flex flex-row flex-wrap justify-start max-w-[1291px] mx-auto pl-[46px] py-[46px] w-full" />
      </div>
      <Footer1 className="bg-black-900 flex p-12 w-full" />
    </div>
  );
}
