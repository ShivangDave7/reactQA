import React from "react";

import Header from "../../components/Header";
import HomeFooter from "../../components/HomeFooter";
import {
  Image,
  Flex,
  Button,
  Input,
  Text,
  Heading,
  Container,
  HStack,
  Divider,
  Box,
  AbsoluteCenter,
} from "@chakra-ui/react";

export default function EduviCoursesPricingPage() {
  return (
    <Flex gap="100px" bg="gray.100" w="100%" direction="column" align="center">
      <Flex gap="48px" w="100%" direction="column" align="center">
        <Header bg="gray.100" w="100%" display="flex" />
        <Container
          w="100%"
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          maxW="1280px"
          px="0px"
        >
          <Flex
            gap="10px"
            bg="red.50"
            w="100%"
            direction="column"
            align="start"
            justify="flex-end"
            p="19px"
            borderRadius="20px"
          >
            <Text color="black.900" mt="5px" fontWeight={500}>
              Home | Pricing
            </Text>
            <Flex ml="10px" w="97%" justify="space-between" align="center">
              <Heading size="2xl" as="h1" fontWeight={600}>
                Our Pre-ready
                <br />
                Pricing Packages
              </Heading>
              <Box
                h="205px"
                pt="7px"
                bgImage="url(/images/img_group_11.svg)"
                bgSize="cover"
                bgRepeat="no-repeat"
                w="37%"
                position="relative"
                px="7px"
              >
                <Box
                  h="189px"
                  w="91%"
                  position="absolute"
                  bottom="0%"
                  right="0px"
                  left="0px"
                  m="auto"
                >
                  <Flex
                    w="91%"
                    justify="space-evenly"
                    position="absolute"
                    right="0%"
                    bottom="0px"
                    top="0px"
                    h="100%"
                    m="auto"
                  >
                    <Flex w="100%" justify="space-between" align="start">
                      <Box h="189px" w="70%" position="relative">
                        <Image
                          src="images/img_vector_green_200.svg"
                          h="120px"
                          position="absolute"
                          bottom="0%"
                          right="0px"
                          left="0px"
                          m="auto"
                        />
                        <AbsoluteCenter
                          h="100%"
                          pt="36px"
                          bgImage="url(/images/img_group_15.svg)"
                          bgSize="cover"
                          bgRepeat="no-repeat"
                          w="100%"
                          display="flex"
                          flexDirection="row"
                          justifyContent="center"
                          alignItems="center"
                          px="36px"
                          m="auto"
                        >
                          <Box h="136px" mt="15px" w="20%" position="relative">
                            <AbsoluteCenter
                              w="100%"
                              display="flex"
                              flexDirection="column"
                              alignItems="center"
                              justifyContent="center"
                              h="100%"
                              m="auto"
                            >
                              <Image
                                src="images/img_vector_deep_orange_a100.svg"
                                h="14px"
                              />
                              <Box h="122px" w="100%" position="relative">
                                <Box
                                  h="122px"
                                  w="86%"
                                  position="absolute"
                                  right="-1%"
                                  bottom="0px"
                                  top="0px"
                                  m="auto"
                                >
                                  <Box h="122px" w="100%" m="auto">
                                    <Box h="114px" w="100%" m="auto">
                                      <AbsoluteCenter
                                        w="100%"
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        justifyContent="center"
                                        h="100%"
                                        m="auto"
                                      >
                                        <Flex
                                          gap="84px"
                                          w="100%"
                                          direction="column"
                                          align="end"
                                        >
                                          <Image
                                            src="images/img_vector_deep_orange_400_01.svg"
                                            h="24px"
                                          />
                                          <Flex w="100%" justify="space-evenly">
                                            <Image
                                              src="images/img_vector_indigo_900.svg"
                                              h="6px"
                                            />
                                            <Image
                                              src="images/img_vector_indigo_900.svg"
                                              h="6px"
                                            />
                                          </Flex>
                                        </Flex>
                                      </AbsoluteCenter>
                                      <Image
                                        src="images/img_vector_indigo_900_69x23.svg"
                                        h="69px"
                                        position="absolute"
                                        bottom="4%"
                                        right="0%"
                                        m="auto"
                                      />
                                    </Box>
                                    <Image
                                      src="images/img_vector_indigo_800.svg"
                                      h="69px"
                                      mb="4px"
                                      zIndex={1}
                                      mt="auto"
                                    />
                                    <Flex
                                      h="11px"
                                      ml="7px"
                                      bgImage="url(/images/img_group_17.svg)"
                                      bgSize="cover"
                                      bgRepeat="no-repeat"
                                      w="32%"
                                      direction="column"
                                      align="start"
                                      mb="-3.35px"
                                      zIndex={1}
                                    >
                                      <Image
                                        src="images/img_vector_deep_orange_a100_5x7.svg"
                                        h="5px"
                                        mb="3px"
                                      />
                                    </Flex>
                                  </Box>
                                  <Flex
                                    h="48px"
                                    pr="9px"
                                    bgImage="url(/images/img_group_16.svg)"
                                    bgSize="cover"
                                    bgRepeat="no-repeat"
                                    w="87%"
                                    direction="column"
                                    align="start"
                                    justify="flex-end"
                                    position="absolute"
                                    top="6%"
                                    left="5%"
                                    py="9px"
                                    m="auto"
                                  >
                                    <Flex
                                      h="28px"
                                      bgImage="url(/images/img_group_18.svg)"
                                      bgSize="cover"
                                      bgRepeat="no-repeat"
                                      w="50%"
                                      direction="column"
                                      align="start"
                                      justify="flex-end"
                                    >
                                      <Image
                                        src="images/img_vector_deep_orange_a100_6x4.svg"
                                        h="6px"
                                        mt="17px"
                                        mb="2px"
                                      />
                                    </Flex>
                                  </Flex>
                                </Box>
                                <Image
                                  src="images/img_group_16.svg"
                                  h="30px"
                                  position="absolute"
                                  top="7%"
                                  left="0%"
                                  m="auto"
                                />
                              </Box>
                            </AbsoluteCenter>
                            <Flex
                              w="45%"
                              direction="column"
                              align="start"
                              position="absolute"
                              right="22%"
                              top="0%"
                              m="auto"
                            >
                              <Image
                                src="images/img_vector_indigo_900_15x15.svg"
                                h="15px"
                                w="15px"
                              />
                              <Image
                                src="images/img_vector_deep_orange_400_01_4x10.svg"
                                h="4px"
                                mt="3px"
                              />
                            </Flex>
                          </Box>
                        </AbsoluteCenter>
                      </Box>
                      <Image
                        src="images/img_group_orange_a200.svg"
                        h="40px"
                        mt="82px"
                      />
                    </Flex>
                  </Flex>
                  <Image
                    src="images/img_group_blue_300.svg"
                    h="34px"
                    position="absolute"
                    bottom="24%"
                    left="0%"
                    m="auto"
                  />
                  <Image
                    src="images/img_group_deep_orange_400.svg"
                    h="66px"
                    position="absolute"
                    right="1%"
                    bottom="0%"
                    m="auto"
                  />
                </Box>
                <Flex
                  w="97%"
                  direction="column"
                  position="absolute"
                  bottom="0%"
                  right="0px"
                  left="0px"
                  m="auto"
                >
                  <Image
                    src="images/img_group_green_200.svg"
                    h="49px"
                    ml="5px"
                  />
                  <Image
                    src="images/img_group_deep_orange_400_43x57.svg"
                    h="43px"
                    mt="34px"
                    ml="17px"
                  />
                  <Box h="1px" bg="blue_gray.900" w="100%" />
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Flex>
      <Container
        w="100%"
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        maxW="1280px"
        px="0px"
      >
        <Flex gap="20px" w="100%" direction="column" align="center">
          <Heading
            size="2xl"
            as="h1"
            fontFamily="Metropolis"
            textAlign="center"
          >
            We create a monthly pricing package
            <br />
            for all standard students
          </Heading>
          <Text textAlign="center" lineHeight="30px">
            Basically we create this package for those who are really interested
            and get benefited from our courses or books. <br />
            We want to make a low cost package for them. So that they can
            purchase any courses with the package they buy from us. <br />
            Also will get free books from every packages.
          </Text>
        </Flex>
      </Container>
      <Container
        w="100%"
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        maxW="1280px"
        px="0px"
      >
        <Flex w="100%" justify="space-evenly">
          <HStack
            divider={<Divider borderColor="gray.900_26" w="1px" h="1px" />}
            spacing={5}
            display="flex"
            w="100%"
            flexDirection="row"
          >
            <Flex
              bg="white.A700"
              w="100%"
              cursor="pointer"
              direction="column"
              align="start"
              p="30px"
              borderRadius="20px"
              _hover={{ boxShadow: "md" }}
            >
              <Flex
                pb="14px"
                pr="14px"
                w="100%"
                direction="column"
                align="start"
              >
                <Flex gap="14px" w="49%" direction="column" align="start">
                  <Image src="images/img_group_red_300.svg" h="50px" w="50px" />
                  <Heading size="xl" as="h3">
                    Basic Pack
                  </Heading>
                </Flex>
              </Flex>
              <Flex
                mt="25px"
                gap="20px"
                w="82%"
                direction="column"
                align="start"
              >
                <Flex gap="10px" w="95%" align="center">
                  <Image
                    src="images/img_approve_24_outline.svg"
                    h="24px"
                    w="24px"
                  />
                  <Text fontWeight={500}>3 HD video lessons & tutorials</Text>
                </Flex>
                <Flex gap="10px" w="53%" align="start">
                  <Image
                    src="images/img_approve_24_outline.svg"
                    h="24px"
                    w="24px"
                  />
                  <Text fontWeight={500}>1 Official exam</Text>
                </Flex>
                <Flex gap="10px" w="76%" align="start">
                  <Image
                    src="images/img_approve_24_outline.svg"
                    h="24px"
                    w="24px"
                  />
                  <Text mt="3px" fontWeight={500}>
                    100 Practice questions
                  </Text>
                </Flex>
                <Flex gap="10px" w="74%" align="start">
                  <Image
                    src="images/img_approve_24_outline.svg"
                    h="24px"
                    w="24px"
                  />
                  <Text mt="3px" fontWeight={500}>
                    1 Month subscriptions
                  </Text>
                </Flex>
                <Flex gap="10px" w="45%" align="center">
                  <Image
                    src="images/img_approve_24_outline.svg"
                    h="24px"
                    w="24px"
                  />
                  <Text fontWeight={500}>1 Free book</Text>
                </Flex>
                <Flex gap="10px" w="100%" align="start">
                  <Image
                    src="images/img_close_24_outline.svg"
                    h="24px"
                    w="24px"
                  />
                  <Text mt="3px" fontWeight={500}>
                    Practice quizzes & assignments
                  </Text>
                </Flex>
                <Flex gap="10px" w="73%" align="start">
                  <Image
                    src="images/img_close_24_outline.svg"
                    h="24px"
                    w="24px"
                  />
                  <Text mt="3px" fontWeight={500}>
                    In depth explanations
                  </Text>
                </Flex>
                <Flex gap="10px" w="97%" align="center">
                  <Image
                    src="images/img_close_24_outline.svg"
                    h="24px"
                    w="24px"
                  />
                  <Text fontWeight={500}>Personal instructor Assistance</Text>
                </Flex>
              </Flex>
              <Heading size="s" as="h5" mt="24px">
                $200
              </Heading>
              <Button size="4xl" mt="24px" fontWeight={500} w="100%">
                Purchase Course
              </Button>
            </Flex>
            <Flex
              gap="25px"
              bg="white.A700"
              boxShadow="md"
              w="100%"
              cursor="pointer"
              direction="column"
              align="center"
              p="30px"
              borderRadius="20px"
              _hover={{ boxShadow: "md" }}
            >
              <Flex
                pb="15px"
                pr="15px"
                gap="14px"
                w="100%"
                direction="column"
                align="start"
              >
                <Image src="images/img_group_red_300.svg" h="50px" w="50px" />
                <Heading size="xl" as="h3">
                  Standard Pack
                </Heading>
              </Flex>
              <Flex gap="24px" w="100%" direction="column" align="start">
                <Flex gap="20px" w="82%" direction="column" align="start">
                  <Flex gap="10px" w="95%" align="center">
                    <Image
                      src="images/img_approve_24_outline.svg"
                      h="24px"
                      w="24px"
                    />
                    <Text fontWeight={500}>8 HD video lessons & tutorials</Text>
                  </Flex>
                  <Flex gap="10px" w="54%" align="start">
                    <Image
                      src="images/img_approve_24_outline.svg"
                      h="24px"
                      w="24px"
                    />
                    <Text fontWeight={500}>2 Official exam</Text>
                  </Flex>
                  <Flex gap="10px" w="77%" align="start">
                    <Image
                      src="images/img_approve_24_outline.svg"
                      h="24px"
                      w="24px"
                    />
                    <Text mt="3px" fontWeight={500}>
                      200 Practice questions
                    </Text>
                  </Flex>
                  <Flex gap="10px" w="74%" align="start">
                    <Image
                      src="images/img_approve_24_outline.svg"
                      h="24px"
                      w="24px"
                    />
                    <Text mt="3px" fontWeight={500}>
                      1 Month subscriptions
                    </Text>
                  </Flex>
                  <Flex gap="10px" w="49%" align="center">
                    <Image
                      src="images/img_approve_24_outline.svg"
                      h="24px"
                      w="24px"
                    />
                    <Text fontWeight={500}>3 Free books</Text>
                  </Flex>
                  <Flex gap="10px" w="100%" align="start">
                    <Image
                      src="images/img_approve_24_outline.svg"
                      h="24px"
                      w="24px"
                    />
                    <Text mt="3px" fontWeight={500}>
                      Practice quizzes & assignments
                    </Text>
                  </Flex>
                  <Flex gap="10px" w="73%" align="start">
                    <Image
                      src="images/img_close_24_outline.svg"
                      h="24px"
                      w="24px"
                    />
                    <Text mt="3px" fontWeight={500}>
                      In depth explanations
                    </Text>
                  </Flex>
                  <Flex gap="10px" w="97%" align="center">
                    <Image
                      src="images/img_close_24_outline.svg"
                      h="24px"
                      w="24px"
                    />
                    <Text fontWeight={500}>Personal instructor Assistance</Text>
                  </Flex>
                </Flex>
                <Heading size="s" as="h5">
                  $600
                </Heading>
                <Button size="4xl" variant="fill" fontWeight={500} w="100%">
                  Purchase Course
                </Button>
              </Flex>
            </Flex>
            <Flex
              bg="white.A700"
              w="100%"
              cursor="pointer"
              direction="column"
              align="start"
              p="30px"
              borderRadius="20px"
              _hover={{ boxShadow: "md" }}
            >
              <Flex
                pb="15px"
                pr="15px"
                gap="14px"
                w="100%"
                direction="column"
                align="start"
              >
                <Image src="images/img_group_red_300.svg" h="50px" w="50px" />
                <Heading size="xl" as="h3">
                  Premium Pack
                </Heading>
              </Flex>
              <Flex
                mt="25px"
                gap="20px"
                w="82%"
                direction="column"
                align="start"
              >
                <Flex gap="10px" w="98%" align="center">
                  <Image
                    src="images/img_approve_24_outline.svg"
                    h="24px"
                    w="24px"
                  />
                  <Text fontWeight={500}>15 HD video lessons & tutorials</Text>
                </Flex>
                <Flex gap="10px" w="54%" align="start">
                  <Image
                    src="images/img_approve_24_outline.svg"
                    h="24px"
                    w="24px"
                  />
                  <Text fontWeight={500}>3 Official exam</Text>
                </Flex>
                <Flex gap="10px" w="77%" align="start">
                  <Image
                    src="images/img_approve_24_outline.svg"
                    h="24px"
                    w="24px"
                  />
                  <Text mt="3px" fontWeight={500}>
                    300 Practice questions
                  </Text>
                </Flex>
                <Flex gap="10px" w="74%" align="start">
                  <Image
                    src="images/img_approve_24_outline.svg"
                    h="24px"
                    w="24px"
                  />
                  <Text mt="3px" fontWeight={500}>
                    1 Month subscriptions
                  </Text>
                </Flex>
                <Flex gap="10px" w="49%" align="center">
                  <Image
                    src="images/img_approve_24_outline.svg"
                    h="24px"
                    w="24px"
                  />
                  <Text fontWeight={500}>5 Free books</Text>
                </Flex>
                <Flex gap="10px" w="100%" align="start">
                  <Image
                    src="images/img_approve_24_outline.svg"
                    h="24px"
                    w="24px"
                  />
                  <Text mt="3px" fontWeight={500}>
                    Practice quizzes & assignments
                  </Text>
                </Flex>
                <Flex gap="10px" w="73%" align="start">
                  <Image
                    src="images/img_approve_24_outline.svg"
                    h="24px"
                    w="24px"
                  />
                  <Text mt="3px" fontWeight={500}>
                    In depth explanations
                  </Text>
                </Flex>
                <Flex gap="10px" w="97%" align="center">
                  <Image
                    src="images/img_approve_24_outline.svg"
                    h="24px"
                    w="24px"
                  />
                  <Text fontWeight={500}>Personal instructor Assistance</Text>
                </Flex>
              </Flex>
              <Heading size="s" as="h5" mt="24px">
                $1200
              </Heading>
              <Button size="4xl" mt="24px" fontWeight={500} w="100%">
                Purchase Course
              </Button>
            </Flex>
          </HStack>
        </Flex>
      </Container>
      <Flex
        direction="column"
        as="footer"
        w="100%"
        align="center"
        justify="center"
      >
        <Container
          w="100%"
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          maxW="1280px"
          px="0px"
          mx="auto"
        >
          <Flex
            bg="black.900_01"
            w="100%"
            justify="space-between"
            align="center"
            p="50px"
            borderRadius="20px"
          >
            <Flex w="16%" direction="column" my="11px">
              <Image
                src="images/img_ellipse_169.png"
                borderRadius="50%"
                h="60px"
                mr="127px"
                w="60px"
              />
              <Image
                src="images/img_ellipse_170.png"
                borderRadius="50%"
                h="60px"
                mt="45px"
                ml="127px"
                w="60px"
              />
              <Image
                src="images/img_ellipse_171.png"
                borderRadius="50%"
                h="60px"
                mt="69px"
                ml="30px"
                mr="97px"
                w="60px"
              />
            </Flex>
            <Flex gap="44px" w="49%" direction="column" align="center">
              <Flex gap="26px" w="100%" direction="column" align="center">
                <Heading
                  size="2xl"
                  as="h1"
                  color="white.A700"
                  fontFamily="Metropolis"
                  textAlign="center"
                >
                  Subscribe For Get Update
                  <br />
                  Every New Courses
                </Heading>
                <Text color="white.A700_b2" textAlign="center">
                  20k+ students daily learn with Educatsy. Subscribe for new
                  courses.
                </Text>
              </Flex>
              <Flex w="100%" justify="space-evenly">
                <Input
                  placeholder="enter your email"
                  pl="20px"
                  pr="35px"
                  w="77%"
                />
                <Button
                  size="5xl"
                  variant="fill"
                  borderTopRightRadius="10px"
                  borderBottomRightRadius="10px"
                  fontWeight={500}
                  minW="138px"
                >
                  Subscribe
                </Button>
              </Flex>
            </Flex>
            <Flex w="16%" direction="column" my="11px">
              <Image
                src="images/img_ellipse_166.png"
                borderRadius="50%"
                h="60px"
                ml="97px"
                mr="30px"
                w="60px"
              />
              <Image
                src="images/img_ellipse_167.png"
                borderRadius="50%"
                h="60px"
                mt="69px"
                mr="127px"
                w="60px"
              />
              <Image
                src="images/img_ellipse_168.png"
                borderRadius="50%"
                h="60px"
                mt="45px"
                ml="127px"
                w="60px"
              />
            </Flex>
          </Flex>
        </Container>
        <HomeFooter
          mt="100px"
          bg="gray.100"
          w="100%"
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          p="80px"
        />
      </Flex>
    </Flex>
  );
}
