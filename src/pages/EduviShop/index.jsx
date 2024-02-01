import React from "react";

import { RatingBar, Slider, SelectBox } from "../../components";
import Footer1 from "../../components/Footer1";
import Header1 from "../../components/Header1";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Flex,
  Image,
  Square,
  SimpleGrid,
  InputRightElement,
  InputGroup,
  Input,
  TabPanels,
  TabPanel,
  TabList,
  Tab,
  Tabs,
  Text,
  Container,
} from "@chakra-ui/react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function EduviShopPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [searchBarValue9, setSearchBarValue9] = React.useState("");

  return (
    <Flex gap="100px" bg="gray.100" w="100%" direction="column" align="center">
      <Flex gap="48px" w="100%" direction="column" align="center">
        <Header1 bg="gray.100" w="100%" display="flex" />
        <Container
          bg="red.50"
          w="100%"
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="flex-end"
          maxW="1280px"
          p="20px"
          borderRadius="20px"
        >
          <Text color="black.900" mt="5px" fontWeight={500}>
            Home | Shop
          </Text>
          <Flex
            mt="5px"
            ml="10px"
            w="99%"
            justify="space-between"
            align="center"
          >
            <Heading size="3xl" as="h1" fontWeight={600}>
              Educatsy Online
              <br />
              Book Shop
            </Heading>
            <Image src="images/img_kisspng_bookcas.png" h="210px" />
          </Flex>
        </Container>
      </Flex>
      <Container
        gap="40px"
        w="100%"
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="start"
        maxW="1280px"
        px="0px"
      >
        <Flex gap="38px" w="32%" direction="column">
          <Flex w="100%" direction="column" align="start">
            <Heading size="xl" as="h3" color="black.900">
              Popular Books
            </Heading>
            <Flex mt="13px" gap="15px" w="100%" direction="column">
              <Flex
                gap="15px"
                bg="white.A700"
                w="100%"
                align="center"
                p="21px"
                borderRadius="10px"
              >
                <Image
                  src="images/img_image_14.png"
                  ml="3px"
                  w="21%"
                  borderRadius="5px"
                />
                <Flex gap="10px" w="73%" direction="column" align="start">
                  <Box
                    value={5}
                    isEditable={true}
                    color="#ffc107ff"
                    activeColor="#ffc107ff"
                    size={16}
                    as={RatingBar}
                    w="92px"
                    display="flex"
                    justifyContent="space-between"
                  />
                  <Heading as="h6" color="black.900">
                    The Three Musketeers, by
                    <br />
                    Alexandre Dumas
                  </Heading>
                  <Heading as="h6" color="red.300">
                    $39.00
                  </Heading>
                </Flex>
              </Flex>
              <Flex
                gap="15px"
                bg="white.A700"
                w="100%"
                align="center"
                p="21px"
                borderRadius="10px"
              >
                <Image
                  src="images/img_image_90x75.png"
                  ml="3px"
                  w="21%"
                  borderRadius="5px"
                />
                <Flex w="73%" justify="center">
                  <Flex gap="10px" w="100%" direction="column" align="start">
                    <Flex w="36%">
                      <Image
                        src="images/img_vector_amber_500_16x16.svg"
                        h="16px"
                        w="16px"
                      />
                      <Image
                        src="images/img_vector_amber_500_16x16.svg"
                        h="16px"
                        ml="3px"
                        w="16px"
                      />
                      <Image
                        src="images/img_vector_amber_500_16x16.svg"
                        h="16px"
                        ml="3px"
                        w="16px"
                      />
                      <Image
                        src="images/img_vector_amber_500_16x16.svg"
                        h="16px"
                        ml="3px"
                        w="16px"
                      />
                      <Image
                        src="images/img_vector_amber_500_16x16.svg"
                        h="16px"
                        ml="3px"
                        w="16px"
                      />
                    </Flex>
                    <Heading as="h6" color="black.900">
                      The Three Musketeers, by
                      <br />
                      Alexandre Dumas
                    </Heading>
                    <Heading as="h6" color="red.300">
                      $39.00
                    </Heading>
                  </Flex>
                </Flex>
              </Flex>
              <Flex
                gap="15px"
                bg="white.A700"
                w="100%"
                align="center"
                p="21px"
                borderRadius="10px"
              >
                <Image
                  src="images/img_image_4.png"
                  ml="3px"
                  w="21%"
                  borderRadius="5px"
                />
                <Flex gap="10px" w="73%" direction="column" align="start">
                  <Box
                    value={5}
                    isEditable={true}
                    color="#ffc107ff"
                    activeColor="#ffc107ff"
                    size={16}
                    as={RatingBar}
                    w="92px"
                    display="flex"
                    justifyContent="space-between"
                  />
                  <Heading as="h6" color="black.900">
                    The Three Musketeers, by
                    <br />
                    Alexandre Dumas
                  </Heading>
                  <Heading as="h6" color="red.300">
                    $39.00
                  </Heading>
                </Flex>
              </Flex>
            </Flex>
            <Text size="xl" color="red.300" mt="16px">
              See More
            </Text>
          </Flex>
          <Flex gap="16px" w="100%" direction="column" align="start">
            <Heading size="xl" as="h3" color="black.900">
              New Arrivals
            </Heading>
            <Flex gap="15px" w="100%" direction="column">
              <Flex
                gap="15px"
                bg="white.A700"
                w="100%"
                align="center"
                p="21px"
                borderRadius="10px"
              >
                <Image
                  src="images/img_image_14.png"
                  ml="3px"
                  w="21%"
                  borderRadius="5px"
                />
                <Flex gap="10px" w="73%" direction="column" align="start">
                  <Box
                    value={5}
                    isEditable={true}
                    color="#ffc107ff"
                    activeColor="#ffc107ff"
                    size={16}
                    as={RatingBar}
                    w="92px"
                    display="flex"
                    justifyContent="space-between"
                  />
                  <Heading as="h6" color="black.900">
                    The Three Musketeers, by
                    <br />
                    Alexandre Dumas
                  </Heading>
                  <Heading as="h6" color="red.300">
                    $39.00
                  </Heading>
                </Flex>
              </Flex>
              <Flex
                gap="15px"
                bg="white.A700"
                w="100%"
                align="center"
                p="21px"
                borderRadius="10px"
              >
                <Image
                  src="images/img_image_90x75.png"
                  ml="3px"
                  w="21%"
                  borderRadius="5px"
                />
                <Flex gap="10px" w="73%" direction="column" align="start">
                  <Box
                    value={5}
                    isEditable={true}
                    color="#ffc107ff"
                    activeColor="#ffc107ff"
                    size={16}
                    as={RatingBar}
                    w="92px"
                    display="flex"
                    justifyContent="space-between"
                  />
                  <Heading as="h6" color="black.900">
                    The Three Musketeers, by
                    <br />
                    Alexandre Dumas
                  </Heading>
                  <Heading as="h6" color="red.300">
                    $39.00
                  </Heading>
                </Flex>
              </Flex>
              <Flex
                gap="15px"
                bg="white.A700"
                w="100%"
                align="center"
                p="21px"
                borderRadius="10px"
              >
                <Image
                  src="images/img_image_4.png"
                  ml="3px"
                  w="21%"
                  borderRadius="5px"
                />
                <Flex gap="10px" w="73%" direction="column" align="start">
                  <Box
                    value={5}
                    isEditable={true}
                    color="#ffc107ff"
                    activeColor="#ffc107ff"
                    size={16}
                    as={RatingBar}
                    w="92px"
                    display="flex"
                    justifyContent="space-between"
                  />
                  <Heading as="h6" color="black.900">
                    The Three Musketeers, by
                    <br />
                    Alexandre Dumas
                  </Heading>
                  <Heading as="h6" color="red.300">
                    $39.00
                  </Heading>
                </Flex>
              </Flex>
            </Flex>
            <Text size="xl" color="red.300">
              See More
            </Text>
          </Flex>
        </Flex>
        <Flex gap="40px" w="66%" direction="column" align="center">
          <Tabs
            variant="custombackground"
            as={Flex}
            w="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
          >
            <TabList
              gap="109px"
              w="100%"
              display="flex"
              flexDirection="row"
              justifyContent="flex-start"
              p="14px"
            >
              <Tab
                color="white.A700"
                ml="15px"
                fontSize="16px"
                fontWeight={500}
              >
                All Books
              </Tab>
              <Tab color="gray.900" fontSize="16px" fontWeight={500}>
                Kindergarten
              </Tab>
              <Tab color="gray.900" fontSize="16px" fontWeight={500}>
                High School
              </Tab>
              <Tab color="gray.900" fontSize="16px" fontWeight={500}>
                College
              </Tab>
            </TabList>
            <TabPanels
              display="flex"
              mt="30px"
              w="100%"
              justifyContent="flex-start"
              alignItems="center"
            >
              {[...Array(4)].map((_, index) => (
                <TabPanel key={`tab-panel${index}`} w="100%">
                  <Flex direction="column">
                    <Flex gap="30px" w="100%" direction="column" align="center">
                      <Flex gap="15px" w="100%">
                        <InputGroup w="67%" size="lg">
                          <Input
                            colorScheme="white_A700"
                            placeholder="Search Class, Course, Book Name"
                            value={searchBarValue9}
                            onChange={(e) => setSearchBarValue9(e.target.value)}
                            color="gray.700_99"
                            fontWeight={500}
                            borderRadius="10px"
                          />
                          <InputRightElement>
                            {searchBarValue9?.length > 0 ? (
                              <CloseIcon
                                onClick={() => setSearchBarValue9("")}
                              />
                            ) : (
                              <Image src="images/img_search_white_a700.svg" />
                            )}
                          </InputRightElement>
                        </InputGroup>
                        <SelectBox
                          indicator={
                            <Image src="images/img_arrow_down_red_300.svg" />
                          }
                          name="sortby"
                          placeholder="Sort by: Latest"
                          options={dropDownOptions}
                          style={{ fontWeight: 500, w: "33%" }}
                        />
                      </Flex>
                      <SimpleGrid
                        w="100%"
                        minH="auto"
                        gap="15px"
                        columns={3}
                        justifyContent="center"
                      >
                        <Flex
                          gap="8px"
                          w="100%"
                          direction="column"
                          align="center"
                        >
                          <Flex
                            bg="white.A700"
                            w="100%"
                            direction="column"
                            align="center"
                            p="20px"
                            borderRadius="10px"
                          >
                            <Image
                              src="images/img_image_240x230.png"
                              w="100%"
                              borderRadius="10px"
                            />
                          </Flex>
                          <Flex
                            gap="9px"
                            w="100%"
                            direction="column"
                            align="start"
                          >
                            <Heading as="h6">The Three Musketeers</Heading>
                            <Flex
                              w="100%"
                              justify="space-between"
                              align="start"
                            >
                              <Heading as="h6" color="red.300">
                                $40.00
                              </Heading>
                              <Box
                                value={5}
                                isEditable={true}
                                color="#ffc107ff"
                                activeColor="#ffc107ff"
                                size={16}
                                as={RatingBar}
                                mt="2px"
                                w="92px"
                                display="flex"
                                justifyContent="space-between"
                              />
                            </Flex>
                          </Flex>
                        </Flex>
                        <Flex
                          gap="8px"
                          w="100%"
                          direction="column"
                          align="center"
                        >
                          <Flex
                            bg="white.A700"
                            w="100%"
                            direction="column"
                            align="center"
                            p="20px"
                            borderRadius="10px"
                          >
                            <Image
                              src="images/img_image_5.png"
                              w="100%"
                              borderRadius="10px"
                            />
                          </Flex>
                          <Flex
                            gap="9px"
                            w="100%"
                            direction="column"
                            align="start"
                          >
                            <Heading as="h6">The Three Musketeers</Heading>
                            <Flex
                              w="100%"
                              justify="space-between"
                              align="start"
                            >
                              <Heading as="h6" color="red.300">
                                $40.00
                              </Heading>
                              <Box
                                value={5}
                                isEditable={true}
                                color="#ffc107ff"
                                activeColor="#ffc107ff"
                                size={16}
                                as={RatingBar}
                                mt="2px"
                                w="92px"
                                display="flex"
                                justifyContent="space-between"
                              />
                            </Flex>
                          </Flex>
                        </Flex>
                        <Flex
                          gap="8px"
                          w="100%"
                          direction="column"
                          align="center"
                        >
                          <Flex
                            bg="white.A700"
                            w="100%"
                            direction="column"
                            align="center"
                            p="20px"
                            borderRadius="10px"
                          >
                            <Image
                              src="images/img_image_6.png"
                              w="100%"
                              borderRadius="10px"
                            />
                          </Flex>
                          <Flex
                            gap="9px"
                            w="100%"
                            direction="column"
                            align="start"
                          >
                            <Heading as="h6">The Three Musketeers</Heading>
                            <Flex
                              w="100%"
                              justify="space-between"
                              align="start"
                            >
                              <Heading as="h6" color="red.300">
                                $40.00
                              </Heading>
                              <Box
                                value={5}
                                isEditable={true}
                                color="#ffc107ff"
                                activeColor="#ffc107ff"
                                size={16}
                                as={RatingBar}
                                mt="2px"
                                w="92px"
                                display="flex"
                                justifyContent="space-between"
                              />
                            </Flex>
                          </Flex>
                        </Flex>
                        <Flex
                          gap="8px"
                          w="100%"
                          direction="column"
                          align="center"
                        >
                          <Flex
                            bg="white.A700"
                            w="100%"
                            direction="column"
                            align="center"
                            p="20px"
                            borderRadius="10px"
                          >
                            <Image
                              src="images/img_image_7.png"
                              w="100%"
                              borderRadius="10px"
                            />
                          </Flex>
                          <Flex
                            gap="9px"
                            w="100%"
                            direction="column"
                            align="start"
                          >
                            <Heading as="h6">The Three Musketeers</Heading>
                            <Flex
                              w="100%"
                              justify="space-between"
                              align="start"
                            >
                              <Heading as="h6" color="red.300">
                                $40.00
                              </Heading>
                              <Box
                                value={5}
                                isEditable={true}
                                color="#ffc107ff"
                                activeColor="#ffc107ff"
                                size={16}
                                as={RatingBar}
                                mt="2px"
                                w="92px"
                                display="flex"
                                justifyContent="space-between"
                              />
                            </Flex>
                          </Flex>
                        </Flex>
                        <Flex
                          gap="8px"
                          w="100%"
                          direction="column"
                          align="center"
                        >
                          <Flex
                            bg="white.A700"
                            w="100%"
                            direction="column"
                            align="center"
                            p="20px"
                            borderRadius="10px"
                          >
                            <Image
                              src="images/img_image_8.png"
                              w="100%"
                              borderRadius="10px"
                            />
                          </Flex>
                          <Flex
                            gap="9px"
                            w="100%"
                            direction="column"
                            align="start"
                          >
                            <Heading as="h6">The Three Musketeers</Heading>
                            <Flex
                              w="100%"
                              justify="space-between"
                              align="start"
                            >
                              <Heading as="h6" color="red.300">
                                $40.00
                              </Heading>
                              <Box
                                value={5}
                                isEditable={true}
                                color="#ffc107ff"
                                activeColor="#ffc107ff"
                                size={16}
                                as={RatingBar}
                                mt="2px"
                                w="92px"
                                display="flex"
                                justifyContent="space-between"
                              />
                            </Flex>
                          </Flex>
                        </Flex>
                        <Flex
                          gap="8px"
                          w="100%"
                          direction="column"
                          align="center"
                        >
                          <Flex
                            bg="white.A700"
                            w="100%"
                            direction="column"
                            align="center"
                            p="20px"
                            borderRadius="10px"
                          >
                            <Image
                              src="images/img_image_9.png"
                              w="100%"
                              borderRadius="10px"
                            />
                          </Flex>
                          <Flex
                            gap="9px"
                            w="100%"
                            direction="column"
                            align="start"
                          >
                            <Heading as="h6">The Three Musketeers</Heading>
                            <Flex
                              w="100%"
                              justify="space-between"
                              align="start"
                            >
                              <Heading as="h6" color="red.300">
                                $40.00
                              </Heading>
                              <Box
                                value={5}
                                isEditable={true}
                                color="#ffc107ff"
                                activeColor="#ffc107ff"
                                size={16}
                                as={RatingBar}
                                mt="2px"
                                w="92px"
                                display="flex"
                                justifyContent="space-between"
                              />
                            </Flex>
                          </Flex>
                        </Flex>
                      </SimpleGrid>
                    </Flex>
                  </Flex>
                </TabPanel>
              ))}
            </TabPanels>
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 3 },
              }}
              renderDotsItem={(props) => (
                <Square
                  bg={props.isActive ? "white.A700" : ""}
                  size="5%"
                  mr="19px"
                  borderRadius={props.isActive ? "6px" : ""}
                />
              )}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              mt="31px"
              gap="15px"
              display="flex"
              mx="7.5px"
              items={[...Array(9)].map(() => (
                <React.Fragment key={Math.random()}>
                  <Flex gap="8px" direction="column" align="center" mx="7.5px">
                    <Flex
                      bg="white.A700"
                      w="100%"
                      direction="column"
                      align="center"
                      p="20px"
                      borderRadius="10px"
                    >
                      <Image
                        src="images/img_image_5.png"
                        w="100%"
                        borderRadius="10px"
                      />
                    </Flex>
                    <Flex gap="9px" w="100%" direction="column" align="start">
                      <Heading as="h6">The Three Musketeers</Heading>
                      <Flex w="100%" justify="space-between" align="start">
                        <Heading as="h6" color="red.300">
                          $40.00
                        </Heading>
                        <Box
                          value={5}
                          isEditable={true}
                          color="#ffc107ff"
                          activeColor="#ffc107ff"
                          size={16}
                          as={RatingBar}
                          mt="2px"
                          w="92px"
                          display="flex"
                          justifyContent="space-between"
                        />
                      </Flex>
                    </Flex>
                  </Flex>
                </React.Fragment>
              ))}
            />
          </Tabs>
        </Flex>
      </Container>
      <Footer1
        flexDirection="column"
        display="flex"
        w="100%"
        alignItems="center"
        justifyContent="center"
      />
    </Flex>
  );
}
