import React from "react";

import { Slider } from "../../components";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";
import {
  Text,
  Button,
  Flex,
  IconButton,
  Image,
  SimpleGrid,
  TabPanels,
  TabPanel,
  TabList,
  Tab,
  Tabs,
  Container,
  Box,
  Heading,
} from "@chakra-ui/react";

export default function AllmentorsPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <Flex gap="100px" bg="gray.100" w="100%" direction="column" align="center">
      <Flex gap="48px" w="100%" direction="column" align="center">
        <Header bg="gray.100" w="100%" display="flex" />
        <Container
          gap="9px"
          bg="red.50"
          w="100%"
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="flex-start"
          maxW="1280px"
          p="25px"
          borderRadius="20px"
        >
          <Text color="black.900" fontWeight={500}>
            Home | Our Mentors
          </Text>
          <Flex ml="4px" w="100%" justify="space-between" align="center">
            <Heading size="2xl" as="h1" fontWeight={600}>
              Educatsy has the
              <br />
              qualified mentor
            </Heading>
            <Box h="198px" w="34%" position="relative">
              <Box h="192px" w="100%" position="absolute" m="auto">
                <Box h="192px" w="100%" m="auto">
                  <Box h="192px" w="100%" m="auto">
                    <Box h="192px" w="100%" m="auto">
                      <Box h="192px" w="100%" m="auto">
                        <Box h="192px" w="100%" m="auto">
                          <Box
                            h="184px"
                            w="100%"
                            position="absolute"
                            bottom="0%"
                            right="0px"
                            left="0px"
                            m="auto"
                          >
                            <Box h="184px" w="100%" m="auto">
                              <Box h="184px" w="100%" zIndex={1} m="auto">
                                <Box h="184px" w="100%" m="auto">
                                  <Box h="184px" w="100%" m="auto">
                                    <Box h="184px" w="100%" m="auto">
                                      <Box
                                        h="98px"
                                        w="100%"
                                        position="absolute"
                                        bottom="0%"
                                        right="0px"
                                        left="0px"
                                        m="auto"
                                      >
                                        <Flex
                                          w="100%"
                                          direction="column"
                                          align="start"
                                          position="absolute"
                                          bottom="-1%"
                                          right="0px"
                                          left="0px"
                                          m="auto"
                                        >
                                          <Image
                                            src="images/img_background_complete.svg"
                                            h="86px"
                                          />
                                          <Image
                                            src="images/img_table.svg"
                                            h="1px"
                                          />
                                        </Flex>
                                        <Image
                                          src="images/img_plants.svg"
                                          h="98px"
                                          position="absolute"
                                          left="0px"
                                          bottom="0px"
                                          right="0px"
                                          top="0px"
                                          justifyContent="center"
                                          m="auto"
                                        />
                                      </Box>
                                      <Image
                                        src="images/img_device.svg"
                                        h="184px"
                                        position="absolute"
                                        left="0px"
                                        right="0px"
                                        bottom="0px"
                                        top="0px"
                                        justifyContent="center"
                                        m="auto"
                                      />
                                    </Box>
                                    <Image
                                      src="images/img_vector_deep_orange_400_78x35.svg"
                                      h="78px"
                                      position="absolute"
                                      bottom="22%"
                                      right="34%"
                                      m="auto"
                                    />
                                  </Box>
                                  <Image
                                    src="images/img_vector_deep_orange_400_90x87.svg"
                                    h="90px"
                                    position="absolute"
                                    bottom="20%"
                                    right="0px"
                                    left="0px"
                                    m="auto"
                                  />
                                </Box>
                                <Flex
                                  gap="28px"
                                  w="9%"
                                  direction="column"
                                  position="absolute"
                                  bottom="23%"
                                  left="41%"
                                  m="auto"
                                >
                                  <Image
                                    src="images/img_vector_blue_gray_900_03.svg"
                                    h="21px"
                                    ml="13px"
                                    w="20px"
                                  />
                                  <Image
                                    src="images/img_vector_black_900_28x13.svg"
                                    h="28px"
                                    opacity={0.3}
                                  />
                                </Flex>
                              </Box>
                              <Flex
                                mb="35px"
                                ml="128px"
                                w="28%"
                                align="end"
                                zIndex={1}
                                mt="auto"
                              >
                                <Flex
                                  h="74px"
                                  mt="12px"
                                  gap="25px"
                                  bgImage="url(/images/img_group_94.svg)"
                                  bgSize="cover"
                                  bgRepeat="no-repeat"
                                  w="35%"
                                  direction="column"
                                  p="2px"
                                >
                                  <Image
                                    src="images/img_table.svg"
                                    h="12px"
                                    ml="29px"
                                  />
                                  <Box
                                    h="25px"
                                    mb="3px"
                                    mr="6px"
                                    w="26px"
                                    position="relative"
                                  >
                                    <Flex
                                      h="23px"
                                      w="23px"
                                      direction="column"
                                      align="end"
                                      position="absolute"
                                      bottom="-1%"
                                      left="0%"
                                      m="auto"
                                    >
                                      <Image
                                        src="images/img_vector_blue_gray_900_03_5x11.svg"
                                        h="5px"
                                      />
                                      <Image
                                        src="images/img_vector_blue_gray_900_03_19x19.svg"
                                        h="19px"
                                        mr="4px"
                                        w="19px"
                                      />
                                    </Flex>
                                    <Flex
                                      w="93%"
                                      direction="column"
                                      align="end"
                                      position="absolute"
                                      right="3%"
                                      top="0%"
                                      m="auto"
                                    >
                                      <Image
                                        src="images/img_vector_blue_gray_900_03_2x18.svg"
                                        h="2px"
                                      />
                                      <Image
                                        src="images/img_vector_black_900_9x20.svg"
                                        h="9px"
                                        mr="4px"
                                        opacity={0.3}
                                      />
                                    </Flex>
                                  </Box>
                                </Flex>
                                <Flex
                                  h="85px"
                                  ml="34px"
                                  bgImage="url(/images/img_group_97.svg)"
                                  bgSize="cover"
                                  bgRepeat="no-repeat"
                                  w="15%"
                                  direction="column"
                                  align="start"
                                  justify="flex-end"
                                  p="3px"
                                >
                                  <Flex
                                    mt="25px"
                                    mb="3px"
                                    gap="20px"
                                    w="30%"
                                    direction="column"
                                    align="center"
                                  >
                                    <Image
                                      src="images/img_group_white_a700.svg"
                                      h="26px"
                                    />
                                    <Image
                                      src="images/img_vector_white_a700_3x3.svg"
                                      h="3px"
                                      w="3px"
                                    />
                                  </Flex>
                                </Flex>
                                <Image
                                  src="images/img_vector_black_900_32x18.svg"
                                  h="32px"
                                  mb="3px"
                                  ml="3px"
                                  opacity={0.3}
                                />
                              </Flex>
                              <Box
                                h="15px"
                                mt="74px"
                                mr="167px"
                                bg="blue_gray.900_03"
                                w="5px"
                                ml="auto"
                                zIndex={1}
                              />
                            </Box>
                            <Flex
                              h="57px"
                              bgImage="url(/images/img_group_96.svg)"
                              bgSize="cover"
                              bgRepeat="no-repeat"
                              w="13%"
                              direction="column"
                              align="start"
                              position="absolute"
                              bottom="19%"
                              right="34%"
                              m="auto"
                            >
                              <Image
                                src="images/img_vector_blue_gray_900_03_4x20.svg"
                                h="4px"
                                mt="25px"
                                ml="25px"
                              />
                              <Flex
                                mb="17px"
                                ml="26px"
                                w="38%"
                                direction="column"
                                align="start"
                              >
                                <Image
                                  src="images/img_vector_blue_gray_900_03_6x18.svg"
                                  h="6px"
                                />
                                <Image
                                  src="images/img_vector_blue_gray_900_03_4x17.svg"
                                  h="4px"
                                />
                              </Flex>
                            </Flex>
                          </Box>
                          <Flex
                            gap="70px"
                            w="33%"
                            justify="center"
                            align="start"
                            position="absolute"
                            bottom="19%"
                            right="0px"
                            left="0px"
                            m="auto"
                          >
                            <Flex
                              h="60px"
                              bgImage="url(/images/img_group_95.svg)"
                              bgSize="cover"
                              bgRepeat="no-repeat"
                              w="34%"
                              direction="column"
                              align="end"
                              justify="flex-end"
                              p="8px"
                            >
                              <Image
                                src="images/img_vector_deep_orange_300_01.svg"
                                h="16px"
                                mt="20px"
                                mb="7px"
                              />
                            </Flex>
                            <Image
                              src="images/img_vector_black_900_9x19.svg"
                              h="9px"
                              mt="36px"
                              opacity={0.3}
                            />
                          </Flex>
                          <Image
                            src="images/img_vector_blue_gray_900_03_44x52.svg"
                            h="44px"
                            position="absolute"
                            top="0%"
                            right="0px"
                            left="0px"
                            m="auto"
                          />
                        </Box>
                        <Box
                          h="87px"
                          bgImage="url(/images/img_group_86.svg)"
                          bgSize="cover"
                          bgRepeat="no-repeat"
                          w="11%"
                          position="absolute"
                          top="4%"
                          right="0px"
                          left="0px"
                          p="14px"
                          m="auto"
                        >
                          <Image
                            src="images/img_vector_deep_orange_300_01_6x6.svg"
                            h="6px"
                            w="6px"
                            position="absolute"
                            right="34%"
                            bottom="0px"
                            top="0px"
                            m="auto"
                          />
                          <Image
                            src="images/img_vector_blue_gray_900_03_7x6.svg"
                            h="7px"
                            w="6px"
                            position="absolute"
                            right="35%"
                            bottom="0px"
                            top="0px"
                            m="auto"
                          />
                        </Box>
                      </Box>
                      <Image
                        src="images/img_group_deep_orange_200.svg"
                        h="12px"
                        position="absolute"
                        top="21%"
                        left="42%"
                        m="auto"
                      />
                    </Box>
                    <Image
                      src="images/img_vector_blue_gray_900_03_37x41.svg"
                      h="37px"
                      position="absolute"
                      top="3%"
                      right="0px"
                      left="0px"
                      m="auto"
                    />
                  </Box>
                  <Image
                    src="images/img_vector_blue_gray_900_03_17x17.svg"
                    h="17px"
                    w="17px"
                    position="absolute"
                    top="14%"
                    left="46%"
                    m="auto"
                  />
                </Box>
                <Image
                  src="images/img_vector_blue_gray_900_03_16x16.svg"
                  h="16px"
                  w="16px"
                  position="absolute"
                  top="14%"
                  right="45%"
                  m="auto"
                />
              </Box>
              <Image
                src="images/img_vector_blue_gray_900_03_1x4.svg"
                h="1px"
                position="absolute"
                m="auto"
              />
              <Image
                src="images/img_table.svg"
                h="5px"
                mt="40px"
                ml="181px"
                position="absolute"
              />
              <Flex
                gap="8px"
                w="9%"
                justify="center"
                align="start"
                position="absolute"
                m="auto"
              >
                <Image
                  src="images/img_vector_black_900_21x13.svg"
                  h="21px"
                  opacity={0.3}
                />
                <Image
                  src="images/img_vector_black_900_24x13.svg"
                  h="24px"
                  opacity={0.3}
                />
              </Flex>
              <Image
                src="images/img_group_white_a700_86x134.svg"
                h="86px"
                position="absolute"
                m="auto"
              />
              <Image
                src="images/img_speech_bubble.svg"
                h="48px"
                mr="120px"
                position="absolute"
                ml="auto"
              />
            </Box>
          </Flex>
        </Container>
      </Flex>
      <Container
        w="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
        maxW="1280px"
        px="0px"
      >
        <Tabs
          variant="custombackground"
          as={Flex}
          gap="51px"
          w="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <TabList
            gap="80px"
            w="72%"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            p="14px"
          >
            <Tab color="gray.900" ml="15px" fontSize="16px" fontWeight={500}>
              All Mentors
            </Tab>
            <Tab color="gray.900" fontSize="16px" fontWeight={500}>
              For Kindergarten
            </Tab>
            <Tab color="white.A700" fontSize="16px" fontWeight={500}>
              For high school
            </Tab>
            <Tab color="gray.900" fontSize="16px" fontWeight={500}>
              For college
            </Tab>
            <Tab color="gray.900" mr="15px" fontSize="16px" fontWeight={500}>
              For Technology
            </Tab>
          </TabList>
          <Flex gap="42px" w="100%" direction="column" align="center">
            <TabPanels
              display="flex"
              w="100%"
              justifyContent="flex-start"
              alignItems="center"
            >
              {[...Array(5)].map((_, index) => (
                <TabPanel key={`tab-panel${index}`} w="100%">
                  <Flex direction="column">
                    <Flex w="100%" direction="column" align="center">
                      <SimpleGrid
                        w="100%"
                        minH="auto"
                        gap="40px"
                        columns={4}
                        justifyContent="center"
                      >
                        <Flex
                          gap="10px"
                          w="100%"
                          direction="column"
                          align="center"
                        >
                          <Image
                            src="images/img_bg_290x290.png"
                            w="290px"
                            borderRadius="10px"
                          />
                          <Flex
                            gap="13px"
                            w="100%"
                            direction="column"
                            align="start"
                          >
                            <Flex w="100%" justify="space-between" align="end">
                              <Text color="black.900" fontWeight={500}>
                                Kristin Watson
                              </Text>
                              <Image
                                src="images/img_arrow_down_black_900.svg"
                                h="24px"
                                w="24px"
                              />
                            </Flex>
                            <Flex w="42%" direction="column" align="center">
                              <Flex w="100%" justify="space-evenly">
                                <Text size="s">Founder & Mentor</Text>
                              </Flex>
                            </Flex>
                          </Flex>
                        </Flex>
                        <Flex
                          gap="10px"
                          w="100%"
                          direction="column"
                          align="center"
                        >
                          <Image
                            src="images/img_bg_1.png"
                            w="290px"
                            borderRadius="10px"
                          />
                          <Flex
                            gap="12px"
                            w="100%"
                            direction="column"
                            align="start"
                          >
                            <Flex w="100%" justify="space-between" align="end">
                              <Text color="black.900" fontWeight={500}>
                                Brooklyn Simmons
                              </Text>
                              <Image
                                src="images/img_arrow_down_black_900.svg"
                                h="24px"
                                w="24px"
                              />
                            </Flex>
                            <Flex w="42%" direction="column" align="center">
                              <Flex w="100%" justify="space-evenly">
                                <Text size="s">Founder & Mentor</Text>
                              </Flex>
                            </Flex>
                          </Flex>
                        </Flex>
                        <Flex
                          gap="10px"
                          w="100%"
                          direction="column"
                          align="center"
                        >
                          <Image
                            src="images/img_bg_2.png"
                            w="290px"
                            borderRadius="10px"
                          />
                          <Flex
                            gap="13px"
                            w="100%"
                            direction="column"
                            align="start"
                          >
                            <Flex w="100%" justify="space-between" align="end">
                              <Text color="black.900" fontWeight={500}>
                                Robert Fox
                              </Text>
                              <Image
                                src="images/img_arrow_down_black_900.svg"
                                h="24px"
                                w="24px"
                              />
                            </Flex>
                            <Flex w="42%" direction="column" align="center">
                              <Flex w="100%" justify="space-evenly">
                                <Text size="s">Founder & Mentor</Text>
                              </Flex>
                            </Flex>
                          </Flex>
                        </Flex>
                        <Flex
                          gap="10px"
                          w="100%"
                          direction="column"
                          align="center"
                        >
                          <Image
                            src="images/img_bg_3.png"
                            w="290px"
                            borderRadius="10px"
                          />
                          <Flex
                            gap="13px"
                            w="100%"
                            direction="column"
                            align="start"
                          >
                            <Flex w="100%" justify="space-between" align="end">
                              <Text color="black.900" fontWeight={500}>
                                Wade Warren
                              </Text>
                              <Image
                                src="images/img_arrow_down_black_900.svg"
                                h="24px"
                                w="24px"
                              />
                            </Flex>
                            <Flex w="42%" direction="column" align="center">
                              <Flex w="100%" justify="space-evenly">
                                <Text size="s">Founder & Mentor</Text>
                              </Flex>
                            </Flex>
                          </Flex>
                        </Flex>
                        <Flex
                          gap="10px"
                          w="100%"
                          direction="column"
                          align="center"
                        >
                          <Image
                            src="images/img_bg_4.png"
                            w="290px"
                            borderRadius="10px"
                          />
                          <Flex
                            gap="12px"
                            w="100%"
                            direction="column"
                            align="start"
                          >
                            <Flex w="100%" justify="space-between" align="end">
                              <Text color="black.900" fontWeight={500}>
                                Bessie Cooper
                              </Text>
                              <Image
                                src="images/img_arrow_down_black_900.svg"
                                h="24px"
                                w="24px"
                              />
                            </Flex>
                            <Flex w="42%" direction="column" align="center">
                              <Flex w="100%" justify="space-evenly">
                                <Text size="s">Founder & Mentor</Text>
                              </Flex>
                            </Flex>
                          </Flex>
                        </Flex>
                        <Flex
                          gap="10px"
                          w="100%"
                          direction="column"
                          align="center"
                        >
                          <Image
                            src="images/img_bg_5.png"
                            w="290px"
                            borderRadius="10px"
                          />
                          <Flex
                            gap="13px"
                            w="100%"
                            direction="column"
                            align="start"
                          >
                            <Flex w="100%" justify="space-between" align="end">
                              <Text color="black.900" fontWeight={500}>
                                Ronald Richards
                              </Text>
                              <Image
                                src="images/img_arrow_down_black_900.svg"
                                h="24px"
                                w="24px"
                              />
                            </Flex>
                            <Flex w="42%" direction="column" align="center">
                              <Flex w="100%" justify="space-evenly">
                                <Text size="s">Founder & Mentor</Text>
                              </Flex>
                            </Flex>
                          </Flex>
                        </Flex>
                        <Flex
                          gap="10px"
                          w="100%"
                          direction="column"
                          align="center"
                        >
                          <Image
                            src="images/img_bg_6.png"
                            w="290px"
                            borderRadius="10px"
                          />
                          <Flex
                            gap="12px"
                            w="100%"
                            direction="column"
                            align="start"
                          >
                            <Flex w="100%" justify="space-between" align="end">
                              <Text color="black.900" fontWeight={500}>
                                Guy Hawkins
                              </Text>
                              <Image
                                src="images/img_arrow_down_black_900.svg"
                                h="24px"
                                w="24px"
                              />
                            </Flex>
                            <Flex w="42%" direction="column" align="center">
                              <Flex w="100%" justify="space-evenly">
                                <Text size="s">Founder & Mentor</Text>
                              </Flex>
                            </Flex>
                          </Flex>
                        </Flex>
                        <Flex
                          gap="10px"
                          w="100%"
                          direction="column"
                          align="center"
                        >
                          <Image
                            src="images/img_bg_7.png"
                            w="290px"
                            borderRadius="10px"
                          />
                          <Flex
                            gap="12px"
                            w="100%"
                            direction="column"
                            align="start"
                          >
                            <Flex w="100%" justify="space-between" align="end">
                              <Text color="black.900" fontWeight={500}>
                                Floyd Miles
                              </Text>
                              <Image
                                src="images/img_arrow_down_black_900.svg"
                                h="24px"
                                w="24px"
                              />
                            </Flex>
                            <Flex w="42%" direction="column" align="center">
                              <Flex w="100%" justify="space-evenly">
                                <Text size="s">Founder & Mentor</Text>
                              </Flex>
                            </Flex>
                          </Flex>
                        </Flex>
                      </SimpleGrid>
                    </Flex>
                  </Flex>
                </TabPanel>
              ))}
            </TabPanels>
            <Flex w="100%" justify="space-evenly">
              <Flex gap="51px" w="100%" direction="column" align="center">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 1 },
                    1050: { items: 1 },
                  }}
                  disableDotsControls
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setSliderState(e?.item);
                  }}
                  ref={sliderRef}
                  items={[...Array(3)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <Flex gap="40px" mx="auto">
                        <Flex
                          gap="10px"
                          w="100%"
                          direction="column"
                          align="center"
                        >
                          <Image
                            src="images/img_bg_8.png"
                            w="290px"
                            borderRadius="10px"
                          />
                          <Flex
                            gap="13px"
                            w="100%"
                            direction="column"
                            align="start"
                          >
                            <Flex w="100%" justify="space-between" align="end">
                              <Text color="black.900" fontWeight={500}>
                                Theresa Webb
                              </Text>
                              <Image
                                src="images/img_arrow_down_black_900.svg"
                                h="24px"
                                w="24px"
                              />
                            </Flex>
                            <Text size="s">Founder & Mentor</Text>
                          </Flex>
                        </Flex>
                        <Flex
                          gap="10px"
                          w="100%"
                          direction="column"
                          align="center"
                        >
                          <Image
                            src="images/img_bg_9.png"
                            w="290px"
                            borderRadius="10px"
                          />
                          <Flex
                            gap="12px"
                            w="100%"
                            direction="column"
                            align="start"
                          >
                            <Flex w="100%" justify="space-between" align="end">
                              <Text color="black.900" fontWeight={500}>
                                Cody Fisher
                              </Text>
                              <Image
                                src="images/img_arrow_down_black_900.svg"
                                h="24px"
                                w="24px"
                              />
                            </Flex>
                            <Text size="s">Founder & Mentor</Text>
                          </Flex>
                        </Flex>
                        <Flex
                          gap="10px"
                          w="100%"
                          direction="column"
                          align="center"
                        >
                          <Image
                            src="images/img_bg_10.png"
                            w="290px"
                            borderRadius="10px"
                          />
                          <Flex
                            gap="12px"
                            w="100%"
                            direction="column"
                            align="start"
                          >
                            <Flex w="100%" justify="space-between" align="end">
                              <Text color="black.900" fontWeight={500}>
                                Courtney Henry
                              </Text>
                              <Image
                                src="images/img_arrow_down_black_900.svg"
                                h="24px"
                                w="24px"
                              />
                            </Flex>
                            <Text size="s">Founder & Mentor</Text>
                          </Flex>
                        </Flex>
                        <Flex
                          gap="10px"
                          w="100%"
                          direction="column"
                          align="center"
                        >
                          <Image
                            src="images/img_bg_11.png"
                            w="290px"
                            borderRadius="10px"
                          />
                          <Flex
                            gap="13px"
                            w="100%"
                            direction="column"
                            align="start"
                          >
                            <Flex w="100%" justify="space-between" align="end">
                              <Text color="black.900" fontWeight={500}>
                                Jerome Bell
                              </Text>
                              <Image
                                src="images/img_arrow_down_black_900.svg"
                                h="24px"
                                w="24px"
                              />
                            </Flex>
                            <Text size="s">Founder & Mentor</Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    </React.Fragment>
                  ))}
                />
                <Flex gap="195px" w="23%" justify="space-between">
                  <IconButton
                    size="lg"
                    variant="fill"
                    colorScheme="white_A700"
                    icon={<Image src="images/img_arrow_left.svg" />}
                    aria-label="447:11575-arrowleft"
                    w="44px"
                    borderRadius="6px"
                    onClick={() => {
                      sliderRef?.current?.slidePrev();
                    }}
                  />
                  <IconButton
                    size="lg"
                    variant="fill"
                    icon={<Image src="images/img_arrow_right.svg" />}
                    aria-label="447:11582-arrowright"
                    w="44px"
                    borderRadius="6px"
                    onClick={() => {
                      sliderRef?.current?.slideNext();
                    }}
                  />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex gap="19px" w="23%" justify="center" align="center" p="2px">
            <Text color="gray.900" ml="61px" fontWeight={500}>
              Page
            </Text>
            <Button
              size="sm"
              variant="fill"
              colorScheme="white_A700"
              color="gray.700"
              fontWeight={500}
              minW="39px"
              borderRadius="8px"
            >
              1
            </Button>
            <Text color="gray.900" mr="61px" fontWeight={500}>
              of 03
            </Text>
          </Flex>
        </Tabs>
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
