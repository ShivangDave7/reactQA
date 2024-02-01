"use client";
import React from "react";

import { Text, Heading, Img, Slider, Button } from "../../components";
import CartSectionSubscribe from "../../components/CartSectionSubscribe";
import Footer from "../../components/Footer";
import AliceCarousel, { EventObject, DotsItem } from "react-alice-carousel";

export default function AboutusPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef<AliceCarousel>(null);

  return (
    <div className="bg-gray-50 flex flex-col items-center justify-start w-full">
      <header className="bg-white-A700 flex items-center justify-center p-[35px] w-full">
        <div className="flex flex-row items-center justify-between max-w-[1290px] ml-10 w-full">
          <Img
            src="images/img_linkedin.svg"
            alt="linkedin"
            className="h-[30px]"
          />
          <ul className="flex flex-row gap-9 items-start justify-center">
            <li>
              <div className="flex flex-row items-center justify-between">
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
      <div className="flex flex-row justify-start mt-[100px] px-[75px] w-full">
        <div className="flex flex-row items-center justify-between max-w-[1290px] mx-auto w-full">
          <div className="flex flex-col gap-14 items-center justify-start">
            <div className="flex flex-col gap-[25px] items-start justify-start w-full">
              <div className="flex flex-col gap-[25px] items-center justify-start w-full">
                <Heading size="5xl" as="h1" className="tracking-[-0.50px]">
                  Provide the best quality ingredients for home products
                </Heading>
                <Text
                  size="md"
                  as="p"
                  className="!text-gray-500 tracking-[-0.50px]"
                >
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  dictumst posuere, lectus dis vehicula augue elementum quam
                  risus. Placerat dictum lobortis lacinia volutpat morbi cum
                  justo commodo est aliquam, facilisi consequat ligula vivamus
                  faucibus
                </Text>
              </div>
              <Button
                color="black_900"
                size="3xl"
                variant="outline"
                className="font-semibold min-w-[172px] tracking-[-0.50px]"
              >
                Meet our Team
              </Button>
            </div>
            <div className="flex flex-col gap-[21px] items-start justify-start w-full">
              <div className="flex flex-col gap-[7px] items-start justify-start w-[38%]">
                <div className="flex flex-row gap-2.5 items-end justify-start w-[58%]">
                  <Heading
                    size="md"
                    as="h6"
                    className="!font-bold mb-0.5 tracking-[0.12px]"
                  >
                    Ratings
                  </Heading>
                  <div className="flex flex-row items-end justify-evenly w-[45%]">
                    <Img
                      src="images/img_ant_design_star_filled.svg"
                      alt="ant design star filled"
                      className="h-[30px] w-[30px]"
                    />
                    <Heading
                      size="md"
                      as="h6"
                      className="!font-bold tracking-[0.12px]"
                    >
                      5.0
                    </Heading>
                  </div>
                </div>
                <Text
                  size="xs"
                  as="p"
                  className="!text-black-900_7f tracking-[-0.50px]"
                >
                  Trusted by many people from all over the world
                </Text>
              </div>
              <div className="flex h-[50px] relative w-[37%]">
                <div className="h-[50px] m-auto w-[81%]">
                  <div className="h-[50px] m-auto w-[76%]">
                    <div className="h-[50px] m-auto w-[68%]">
                      <Img
                        src="images/img_unsplash_wnolnjo7ts8.png"
                        alt="unsplash WNoLnJo7tS8"
                        className="h-[50px] m-auto rounded-[50%] w-[50px]"
                      />
                      <Img
                        src="images/img_unsplash_rtvgs4vgkgm.png"
                        alt="unsplash RtVGS4vGkgM"
                        className="h-[50px] m-auto rounded-[50%] w-[50px] z-[1]"
                      />
                    </div>
                    <Img
                      src="images/img_unsplash_d1upkifd04a.png"
                      alt="unsplash d1UPkiFd04A"
                      className="h-[50px] m-auto rounded-[50%] w-[50px] z-[1]"
                    />
                  </div>
                  <Img
                    src="images/img_unsplash_plsf6obtgms.png"
                    alt="unsplash plsF6obTgms"
                    className="h-[50px] m-auto rounded-[50%] w-[50px] z-[1]"
                  />
                </div>
                <div className="flex flex-col h-[50px] items-center justify-start m-auto w-[50px] z-[1]">
                  <Heading
                    size="xs"
                    as="p"
                    className="!text-yellow-100 bg-blue_gray-900_01 flex h-[50px] items-center justify-center rounded-[50%] text-center tracking-[-0.50px] w-[50px]"
                  >
                    3K+
                  </Heading>
                </div>
              </div>
            </div>
          </div>
          <Img
            src="images/img_rectangle_1492.png"
            alt="Rectangle 1492"
            className="h-[650px] object-cover rounded-bl-[50%] rounded-tl-[50%] rounded-tr-[50%]"
          />
        </div>
      </div>
      <div className="bg-black-900 flex flex-row justify-start mt-[100px] p-[41px] w-full">
        <div className="flex flex-col gap-11 items-center justify-start max-w-[1094px] mx-auto w-full">
          <Text
            size="xl"
            as="p"
            className="!text-gray-50_01 text-center tracking-[-0.50px]"
          >
            Various brands have used our products
          </Text>
          <div className="flex flex-row gap-[50px] justify-start w-full">
            <Img
              src="images/img_search_gray_50_01.svg"
              alt="search"
              className="h-12"
            />
            <Img
              src="images/img_company_logo_company109.svg"
              alt="Company logo Company109"
              className="h-12"
            />
            <Img
              src="images/img_company_logo_company109_gray_50_01.svg"
              alt="Company logo Company109"
              className="h-12"
            />
            <Img
              src="images/img_company_logo_company109_gray_50_01_48x141.svg"
              alt="Company logo Company109"
              className="h-12"
            />
            <Img
              src="images/img_company_logo_company109_gray_50_01_48x134.svg"
              alt="Company logo Company109"
              className="h-12"
            />
            <Img
              src="images/img_company_logo_company109_gray_50_01_48x132.svg"
              alt="Company logo Company109"
              className="h-12"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start mt-[100px] px-[75px] w-full">
        <div className="flex flex-col items-center justify-start max-w-[1290px] mx-auto w-full">
          <div className="flex flex-col gap-5 items-center justify-start pb-1 px-1 w-full">
            <Heading
              size="4xl"
              as="h1"
              className="text-center tracking-[-0.50px]"
            >
              Meet Our Team
            </Heading>
            <Text
              as="p"
              className="!text-gray-500 text-center tracking-[-0.50px]"
            >
              We write various things related to furniture, from tips and what
              things I need to pay attention to when choosing furniture
            </Text>
          </div>
          <div className="flex flex-row justify-evenly mt-[53px] w-full">
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
              activeIndex={sliderState1}
              onSlideChanged={(e: EventObject) => {
                setSliderState1(e?.item);
              }}
              ref={sliderRef1}
              className=""
              items={[...Array(9)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex flex-col gap-[30px] items-center justify-start mx-2.5">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Img
                        src="images/img_rectangle_1487_450x416.png"
                        alt="Rectangle 1487"
                        className="object-cover w-full"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Heading
                        size="2xl"
                        as="h2"
                        className="text-center tracking-[-0.50px]"
                      >
                        Mia Lobey
                      </Heading>
                      <Text
                        as="p"
                        className="!text-gray-500 mt-1 text-center tracking-[-0.50px]"
                      >
                        Accountant
                      </Text>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
        </div>
      </div>
      <div className="h-[535px] mt-[100px] relative w-full">
        <Img
          src="images/img_inside_weather.png"
          alt="inside weather "
          className="h-[535px] m-auto object-cover w-[535px]"
        />
        <div className="absolute bottom-0 h-[535px] justify-center left-0 m-auto right-0 top-0 w-full">
          <div className="absolute bg-yellow-100 bottom-[0%] h-[440px] left-0 m-auto right-0 w-full" />
          <div className="absolute bottom-0 flex flex-row h-full justify-start m-auto pr-[108px] py-[108px] right-[0%] top-0 w-[95%]">
            <div className="flex flex-col gap-[30px] items-start justify-start w-[42%]">
              <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                <Text
                  size="2xl"
                  as="p"
                  className="!text-blue_gray-900_01 tracking-[-0.50px]"
                >
                  Interior Modern
                </Text>
                <Heading
                  size="4xl"
                  as="h1"
                  className="text-6xl tracking-[-0.50px]"
                >
                  Arrange your home in such a way with our modern interiors
                </Heading>
              </div>
              <Button
                size="8xl"
                variant="outline"
                className="font-medium min-w-[218px] tracking-[-0.50px]"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Heading
        size="4xl"
        as="h1"
        className="!font-poppins !font-semibold mt-[103px] text-center tracking-[0.12px]"
      >
        How happy are they with our service
      </Heading>
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
            <div className="bg-blue_gray-900_01 h-[15px] mr-2.5 w-[15px]" />
          ) : (
            <div className="bg-gray_200 h-[15px] mr-2.5 w-[15px]" />
          );
        }}
        activeIndex={sliderState}
        onSlideChanged={(e: EventObject) => {
          setSliderState(e?.item);
        }}
        ref={sliderRef}
        className="max-w-[1290px] mt-[46px] w-full"
        items={[...Array(3)].map(() => (
          <React.Fragment key={Math.random()}>
            <div className="flex flex-row gap-[21px] mx-auto">
              <div className="flex flex-row justify-start p-[26px] w-full">
                <div className="flex flex-col gap-5 items-start justify-start my-1 w-full">
                  <Img
                    src="images/img_bxs_quote_alt_left.svg"
                    alt="bxs quote alt left"
                    className="h-[50px] w-[50px]"
                  />
                  <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Heading
                        size="md"
                        as="h6"
                        className="!font-poppins leading-[35px] tracking-[0.12px]"
                      >
                        For the material and the chair as we expected it&#39;s
                        good
                      </Heading>
                      <Text
                        size="s"
                        as="p"
                        className="!font-poppins !text-black-900_87 leading-[35px] mt-1 opacity-0.5 tracking-[0.12px]"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever.
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        src="images/img_unsplash_wnolnjo7ts8_56x56.png"
                        alt="unsplash WNoLnJo7tS8"
                        className="h-14 rounded-[50%] w-14"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Heading
                          size="md"
                          as="h6"
                          className="!font-poppins tracking-[0.12px]"
                        >
                          Dagruel Manulo
                        </Heading>
                        <Text
                          size="s"
                          as="p"
                          className="!font-poppins !text-black-900_7f_01 tracking-[0.12px]"
                        >
                          Sydney, Australia
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start p-[26px] w-full">
                <div className="flex flex-col gap-5 items-start justify-start my-1 w-full">
                  <Img
                    src="images/img_bxs_quote_alt_left.svg"
                    alt="bxs quote alt left"
                    className="h-[50px] w-[50px]"
                  />
                  <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Heading
                        size="md"
                        as="h6"
                        className="!font-poppins leading-[35px] tracking-[0.12px]"
                      >
                        For the material and the chair as we expected it&#39;s
                        good
                      </Heading>
                      <Text
                        size="s"
                        as="p"
                        className="!font-poppins !text-black-900_87 leading-[35px] mt-1 opacity-0.5 tracking-[0.12px]"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever.
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        src="images/img_unsplash_wnolnjo7ts8_1.png"
                        alt="unsplash WNoLnJo7tS8"
                        className="h-14 rounded-[50%] w-14"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Heading
                          size="md"
                          as="h6"
                          className="!font-poppins tracking-[0.12px]"
                        >
                          Zambi Owel
                        </Heading>
                        <Text
                          size="s"
                          as="p"
                          className="!font-poppins !text-black-900_7f_01 mt-1 tracking-[0.12px]"
                        >
                          Sydney, Australia
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start p-[26px] w-full">
                <div className="flex flex-col gap-5 items-start justify-start my-1 w-full">
                  <Img
                    src="images/img_bxs_quote_alt_left.svg"
                    alt="bxs quote alt left"
                    className="h-[50px] w-[50px]"
                  />
                  <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Heading
                        size="md"
                        as="h6"
                        className="!font-poppins leading-[35px] tracking-[0.12px]"
                      >
                        For the material and the chair as we expected it&#39;s
                        good
                      </Heading>
                      <Text
                        size="s"
                        as="p"
                        className="!font-poppins !text-black-900_87 leading-[35px] mt-1 opacity-0.5 tracking-[0.12px]"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever.
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        src="images/img_unsplash_wnolnjo7ts8_2.png"
                        alt="unsplash WNoLnJo7tS8"
                        className="h-14 rounded-[50%] w-14"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Heading
                          size="md"
                          as="h6"
                          className="!font-poppins tracking-[0.12px]"
                        >
                          Mario
                        </Heading>
                        <Text
                          size="s"
                          as="p"
                          className="!font-poppins !text-black-900_7f_01 mt-1 tracking-[0.12px]"
                        >
                          Sydney, Australia
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      />
      <div className="flex flex-row justify-start mt-[100px] px-[75px] w-full">
        <CartSectionSubscribe className="bg-gradient flex flex-row flex-wrap justify-start max-w-[1290px] mx-auto pl-[46px] py-[46px] w-full" />
      </div>
      <Footer className="bg-black-900 flex mt-[100px] p-12 w-full" />
    </div>
  );
}
