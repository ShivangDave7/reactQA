"use client";
import React from "react";

import {
  Text,
  Heading,
  Button,
  Slider,
  Img,
  CheckBox,
  TextArea,
  Input,
  RatingBar,
} from "../../components";
import CartSectionSubscribe from "../../components/CartSectionSubscribe";
import Footer from "../../components/Footer";
import AliceCarousel, { EventObject, DotsItem } from "react-alice-carousel";

export default function DetailReviewPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef<AliceCarousel>(null);

  return (
    <div className="bg-gray-50 flex flex-col items-center justify-start w-full">
      <div className="flex flex-col items-center justify-start w-full">
        <header className="bg-white-A700 flex items-center justify-center p-[35px] w-full">
          <div className="flex flex-row items-center justify-center max-w-[1290px] ml-10 w-full">
            <Img
              src="images/img_linkedin.svg"
              alt="linkedin"
              className="h-[30px]"
            />
            <div className="flex flex-row gap-2.5 items-center justify-center ml-[285px] w-[7%]">
              <a href="/" target="_blank" rel="noreferrer" className="">
                <Text as="p" className="tracking-[-0.50px]">
                  Home
                </Text>
              </a>
              <Img
                src="images/img_arrow_down.svg"
                alt="arrow down"
                className="h-6 w-6"
              />
            </div>
            <Text as="p" className="ml-9 tracking-[-0.50px]">
              Shop
            </Text>
            <Text as="p" className="ml-9 tracking-[-0.50px]">
              Blog
            </Text>
            <ul className="flex flex-row items-center justify-start ml-9 w-[51%]">
              <li>
                <a href="#" className="">
                  <Text as="p" className="tracking-[-0.50px]">
                    About
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="ml-9">
                  <Text as="p" className="tracking-[-0.50px]">
                    Contact
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="ml-9">
                  <Text as="p" className="tracking-[-0.50px]">
                    Team
                  </Text>
                </a>
              </li>
              <li>
                <div className="flex flex-row justify-between ml-[285px]">
                  <Img
                    src="images/img_search.svg"
                    alt="search"
                    className="h-6 w-6"
                  />
                  <Img
                    src="images/img_list.svg"
                    alt="List"
                    className="h-6 w-6"
                  />
                  <Img
                    src="images/img_list_black_900.svg"
                    alt="List"
                    className="h-6 w-6"
                  />
                </div>
              </li>
            </ul>
          </div>
        </header>
        <div className="flex flex-row justify-start pt-[75px] px-[75px] w-full">
          <div className="flex flex-row gap-[47px] justify-start w-full">
            <Img
              src="images/img_rectangle_1475.png"
              alt="Rectangle 1475"
              className="object-cover w-[49%]"
            />
            <div className="flex flex-col gap-[30px] items-center justify-start w-[49%]">
              <div className="flex flex-col items-start justify-start w-full">
                <Heading size="2xl" as="h2" className="tracking-[-0.50px]">
                  Complete set of sofa, pillows and bed sheets
                </Heading>
                <div className="flex flex-row gap-[15px] items-center justify-start mt-[33px] w-full">
                  <RatingBar
                    value={1}
                    isEditable={true}
                    color="#d9d9d9"
                    activeColor="#ff9432"
                    size={20}
                    className="flex justify-between w-[140px]"
                  />
                  <Text
                    size="s"
                    as="p"
                    className="!text-gray-500 tracking-[-0.50px]"
                  >
                    ( 1 review )
                  </Text>
                </div>
                <Heading
                  size="3xl"
                  as="h1"
                  className="!text-blue_gray-900_01 mt-8 tracking-[-0.50px]"
                >
                  $ 75.00
                </Heading>
                <div className="flex flex-col items-start justify-start mt-8 w-full">
                  <Heading size="md" as="h6" className="tracking-[-0.50px]">
                    Stok : 18
                  </Heading>
                  <Heading
                    size="md"
                    as="h6"
                    className="mt-[19px] tracking-[-0.50px]"
                  >
                    SKU : BA65{" "}
                  </Heading>
                  <Heading
                    size="md"
                    as="h6"
                    className="mt-5 tracking-[-0.50px]"
                  >
                    Categories : Chair, New Arrivals, Special
                  </Heading>
                  <Heading
                    size="md"
                    as="h6"
                    className="mt-[19px] tracking-[-0.50px]"
                  >
                    Tags : Black, Chair
                  </Heading>
                </div>
                <Text
                  as="p"
                  className="!text-gray-500 leading-[35px] mt-[30px] tracking-[-0.50px]"
                >
                  In order to sit comfortably for long periods, people need
                  freedom of movement. The Form rocking chair has a molded
                  plastic shell with a wide, curved seat, which gives plenty of
                  opportunity for changing one’s sitting position.
                </Text>
              </div>
              <div className="flex flex-row justify-start w-full">
                <div className="flex flex-row items-center justify-between w-[55%]">
                  <div className="border border-black-900 border-solid flex flex-row gap-[15px] items-center justify-start p-2.5">
                    <Img
                      src="images/img_bx_minus_circle.svg"
                      alt="bx minus circle"
                      className="h-6 ml-1 w-6"
                    />
                    <Text as="p" className="tracking-[-0.50px]">
                      1
                    </Text>
                    <Img
                      src="images/img_bx_plus_circle_1.svg"
                      alt="bx plus circle 1"
                      className="h-6 w-6"
                    />
                  </div>
                  <Text
                    as="p"
                    className="!text-white-A700 bg-black-900 flex h-[45px] items-center justify-center pl-[25px] pr-[13px] py-[11px] tracking-[-0.50px] w-32"
                  >
                    Add to Cart
                  </Text>
                  <Button
                    color="blue_gray_100"
                    size="2xl"
                    variant="outline"
                    className="w-[43px]"
                  >
                    <Img src="images/img_vector.svg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start mt-[97px] px-[75px] w-full">
        <div className="flex flex-row gap-[50px] items-start justify-start max-w-[1290px] mx-auto w-full">
          <div className="flex flex-col items-center justify-start w-[49%]">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row gap-[50px] justify-start w-[41%]">
                <Heading
                  size="xl"
                  as="h4"
                  className="!font-josefinsans !text-gray-500 tracking-[-0.50px]"
                >
                  Description
                </Heading>
                <Heading
                  size="xl"
                  as="h4"
                  className="!font-josefinsans !text-blue_gray-900_01 tracking-[-0.50px]"
                >
                  Review
                </Heading>
              </div>
              <div className="bg-blue_gray-900_01 h-1.5 mt-2 w-[13%]" />
              <div className="flex flex-col gap-[30px] mt-[49px] w-full">
                <div className="flex flex-col gap-2.5 items-end justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row items-center justify-between w-[26%]">
                      <Img
                        src="images/img_image.png"
                        alt="Image"
                        className="h-[54px] rounded-[50%] w-[54px]"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text size="s" as="p" className="tracking-[-0.50px]">
                          Ralph Edwards
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-blue_gray-400 mt-1 tracking-[-0.50px]"
                        >
                          2 minutes ago
                        </Text>
                      </div>
                    </div>
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#d9d9d9"
                      activeColor="#ff9432"
                      size={16}
                      className="flex justify-between my-[19px] w-32"
                    />
                  </div>
                  <Text
                    size="s"
                    as="p"
                    className="leading-[35px] tracking-[-0.50px] w-[92%]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                    justo turpis massa tristique augue dignissim volutpat. Quis
                    ultricies eu libero tortor dictumst.
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-end justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row items-center justify-between w-[26%]">
                      <Img
                        src="images/img_image.png"
                        alt="Image"
                        className="h-[54px] rounded-[50%] w-[54px]"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text size="s" as="p" className="tracking-[-0.50px]">
                          Ralph Edwards
                        </Text>
                        <Text
                          size="xs"
                          as="p"
                          className="!text-blue_gray-400 mt-1 tracking-[-0.50px]"
                        >
                          2 minutes ago
                        </Text>
                      </div>
                    </div>
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#d9d9d9"
                      activeColor="#ff9432"
                      size={16}
                      className="flex justify-between my-[19px] w-32"
                    />
                  </div>
                  <Text
                    size="s"
                    as="p"
                    className="leading-[35px] tracking-[-0.50px] w-[92%]"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                    justo turpis massa tristique augue dignissim volutpat. Quis
                    ultricies eu libero tortor dictumst.
                  </Text>
                </div>
              </div>
              <Heading
                size="xl"
                as="h4"
                className="mt-[51px] text-center tracking-[-0.50px]"
              >
                Write your review
              </Heading>
              <div className="flex flex-col gap-[49px] items-center justify-start mt-[21px] w-full">
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Heading size="md" as="h6" className="tracking-[-0.50px]">
                    Your Rating
                  </Heading>
                  <RatingBar
                    value={2}
                    isEditable={true}
                    color="#d9d9d9"
                    activeColor="#ff9432"
                    size={16}
                    className="flex justify-between w-32"
                  />
                </div>
                <div className="flex flex-col gap-[31px] items-center justify-start w-full">
                  <div className="flex flex-row gap-4 justify-start w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-[49%]">
                      <Heading size="md" as="h6" className="tracking-[-0.50px]">
                        Your Name
                      </Heading>
                      <Input
                        name="Frame 48096015"
                        placeholder="Write your name here...."
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-[49%]">
                      <Heading size="md" as="h6" className="tracking-[-0.50px]">
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
                    <Heading size="md" as="h6" className="tracking-[-0.50px]">
                      Your Review
                    </Heading>
                    <TextArea
                      name="Frame 48096017"
                      placeholder="Write your review here...."
                      className="text-gray-500 tracking-[-0.50px] w-full"
                    />
                  </div>
                </div>
              </div>
              <CheckBox
                name="Save my name  email "
                label="Save my name, email, and website in this browser for the next time I comment."
                className="font-poppins italic mt-8 text-left tracking-[-0.50px]"
              />
              <Button
                size="7xl"
                className="border-2 border-blue_gray-900_01 border-solid font-medium font-poppins min-w-[155px] mt-[29px] tracking-[-0.50px]"
              >
                Submit
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-[21px] items-center justify-start w-[49%]">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{
                "0": { items: 1 },
                "550": { items: 1 },
                "1050": { items: 1 },
              }}
              renderDotsItem={(props: DotsItem) => {
                return props?.isActive ? (
                  <div className="bg-blue_gray-900_01 h-[15px] mr-[15px] w-[15px]" />
                ) : (
                  <div className="bg-gray_200 h-[15px] mr-[15px] w-[15px]" />
                );
              }}
              activeIndex={sliderState1}
              onSlideChanged={(e: EventObject) => {
                setSliderState1(e?.item);
              }}
              ref={sliderRef1}
              className=""
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="bg-gray-50_01 flex flex-row gap-[42px] items-start justify-evenly mx-auto p-6">
                    <div className="flex flex-col gap-[23px] items-start justify-start w-[55%]">
                      <div className="flex flex-col gap-7 items-start justify-start w-full">
                        <Text
                          as="p"
                          className="!text-blue_gray-900_01 tracking-[-0.50px]"
                        >
                          Living Room
                        </Text>
                        <Heading
                          size="3xl"
                          as="h1"
                          className="tracking-[-0.50px]"
                        >
                          The best foam padded chair
                        </Heading>
                      </div>
                      <Button
                        size="7xl"
                        variant="outline"
                        className="font-medium font-poppins min-w-[155px] tracking-[-0.50px]"
                      >
                        Shop Now
                      </Button>
                    </div>
                    <Img
                      src="images/img_sam_moghadam_kh.png"
                      alt="sam moghadam kh"
                      className="object-cover w-[32%]"
                    />
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
        </div>
      </div>
      <Heading
        size="4xl"
        as="h1"
        className="mt-[100px] text-center tracking-[-0.50px]"
      >
        Related Products
      </Heading>
      <div className="flex flex-row gap-[19px] justify-start max-w-[1290px] mt-[42px] w-full">
        <div className="flex flex-col gap-[15px] items-center justify-start w-[24%]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-[url(/images/img_group_325.png)] bg-cover bg-no-repeat flex flex-col h-[400px] items-start justify-end p-4 w-full">
              <Button className="min-w-[106px] mt-[333px] tracking-[-0.50px]">
                Living Room
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <Heading as="h5" className="tracking-[-0.50px]">
              Teak wood chair
            </Heading>
            <Text as="p" className="!text-blue_gray-900_01 tracking-[-0.50px]">
              $24
            </Text>
          </div>
        </div>
        <Slider
          autoPlay
          autoPlayInterval={2000}
          responsive={{
            "0": { items: 1 },
            "550": { items: 1 },
            "1050": { items: 3 },
          }}
          renderDotsItem={(props: DotsItem) => {
            return props?.isActive ? (
              <div className="bg-blue_gray-900_01 h-[15px] mr-[15px] w-[15px]" />
            ) : (
              <div className="bg-gray_200 h-[15px] mr-[15px] w-[15px]" />
            );
          }}
          activeIndex={sliderState}
          onSlideChanged={(e: EventObject) => {
            setSliderState(e?.item);
          }}
          ref={sliderRef}
          className=""
          items={[...Array(9)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="flex flex-col gap-[15px] items-center justify-start mx-2.5">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-[url(/images/img_group_337.png)] bg-cover bg-no-repeat flex flex-col h-[400px] items-start justify-end p-4 w-full">
                    <Button className="min-w-[106px] mt-[333px] tracking-[-0.50px]">
                      Living Room
                    </Button>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                  <Heading as="h5" className="tracking-[-0.50px]">
                    Teak wood chair
                  </Heading>
                  <Text
                    as="p"
                    className="!text-blue_gray-900_01 tracking-[-0.50px]"
                  >
                    $24
                  </Text>
                </div>
              </div>
            </React.Fragment>
          ))}
        />
      </div>
      <div className="flex flex-row justify-start max-w-[1428px] mt-[100px] px-[75px] w-full">
        <CartSectionSubscribe className="bg-gradient flex flex-row justify-start pl-[46px] py-[46px] w-full" />
      </div>
      <Footer className="bg-black-900 flex mt-[100px] p-12 w-full" />
    </div>
  );
}
