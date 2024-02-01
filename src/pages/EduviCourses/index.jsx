import React from "react";

import { SelectBox } from "../../components";
import EduviCoursesDetailsMaincard from "../../components/EduviCoursesDetailsMaincard";
import EduviCoursesDetailsMaincard1 from "../../components/EduviCoursesDetailsMaincard1";
import Footer from "../../components/Footer";
import { CloseIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Image,
  Text,
  Button,
  Flex,
  SimpleGrid,
  InputRightElement,
  InputGroup,
  Input,
  Heading,
  Container,
  Box,
  AbsoluteCenter,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function EduviCoursesPage() {
  const [searchBarValue10, setSearchBarValue10] = React.useState("");

  return (
    <Flex bg="gray.100" w="100%" direction="column" align="center">
      <Flex gap="48px" w="100%" direction="column" align="center">
        <Flex
          bg="gray.100"
          w="100%"
          justify="center"
          align="center"
          as="header"
        >
          <Container
            gap="54px"
            w="100%"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            maxW="1280px"
            px="0px"
            mx="auto"
            my="22px"
          >
            <Image src="images/img_logo.svg" h="30px" />
            <UnorderedList
              styleType="none"
              w="83%"
              display="flex"
              flexDirection="row"
              justifyContent="flex-start"
              alignItems="start"
            >
              <ListItem>
                <Link href="#">
                  <Text color="gray.900" fontWeight={500} mt="6px">
                    Shop
                  </Text>
                </Link>
              </ListItem>
              <ListItem>
                <Flex mt="3px" ml="25px" justify="center" align="start">
                  <Text
                    color="gray.900"
                    mt="3px"
                    textAlign="right"
                    fontWeight={500}
                  >
                    For Kindergarten
                  </Text>
                  <Image src="images/img_arrow_down.svg" h="24px" w="24px" />
                </Flex>
              </ListItem>
              <ListItem>
                <Flex mt="3px" ml="24px" justify="center" align="start">
                  <Text
                    color="gray.900"
                    mt="3px"
                    textAlign="right"
                    fontWeight={500}
                  >
                    For High School
                  </Text>
                  <Image src="images/img_arrow_down.svg" h="24px" w="24px" />
                </Flex>
              </ListItem>
              <ListItem>
                <Flex mt="3px" ml="24px" justify="center" align="start">
                  <Text
                    color="gray.900"
                    mt="3px"
                    textAlign="right"
                    fontWeight={500}
                  >
                    For College
                  </Text>
                  <Image src="images/img_arrow_down.svg" h="24px" w="24px" />
                </Flex>
              </ListItem>
              <ListItem>
                <Flex mt="3px" ml="24px" justify="center" align="center">
                  <Text color="gray.900" textAlign="right" fontWeight={500}>
                    Courses
                  </Text>
                  <Image src="images/img_arrow_down.svg" h="24px" w="24px" />
                </Flex>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text color="gray.900" fontWeight={500} mt="5px" ml="24px">
                    Mentors
                  </Text>
                </Link>
              </ListItem>
              <ListItem>
                <Flex ml="54px" gap="10px" justify="center" align="center">
                  <Text color="gray.900" textAlign="right" fontWeight={500}>
                    Cart (0)
                  </Text>
                  <Image
                    src="images/img_shopping_bag_24.svg"
                    h="30px"
                    w="30px"
                  />
                </Flex>
              </ListItem>
              <ListItem>
                <Flex ml="35px" justify="space-between" align="end">
                  <Text
                    color="gray.900"
                    mb="3px"
                    textAlign="right"
                    fontWeight={500}
                  >
                    My Account
                  </Text>
                  <Image
                    src="images/img_profile_24_outline.svg"
                    h="30px"
                    w="30px"
                  />
                </Flex>
              </ListItem>
            </UnorderedList>
          </Container>
        </Flex>
        <Container
          bg="yellow.100"
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
            Home | Courses
          </Text>
          <Flex
            mt="5px"
            ml="10px"
            w="99%"
            justify="space-between"
            align="center"
          >
            <Heading size="3xl" as="h1" fontWeight={600}>
              Educatsy Courses
              <br />
              For All Standards
            </Heading>
            <Box h="210px" w="32%" position="relative">
              <AbsoluteCenter
                w="100%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                h="100%"
                m="auto"
              >
                <Box h="78px" ml="26px" w="32%" position="relative">
                  <Flex
                    w="100%"
                    direction="column"
                    align="center"
                    h="100%"
                    m="auto"
                  >
                    <Box h="47px" w="100%" position="relative">
                      <Box h="47px" w="100%" m="auto">
                        <Flex
                          gap="14px"
                          w="100%"
                          direction="column"
                          align="start"
                          h="100%"
                          m="auto"
                        >
                          <Flex w="100%" justify="space-evenly">
                            <Flex
                              w="100%"
                              justify="space-between"
                              align="start"
                            >
                              <Text
                                size="xs"
                                color="deep_orange.400"
                                fontFamily="Airbnb Cereal App"
                                textAlign="center"
                                fontSize="12.61px"
                              >
                                +
                              </Text>
                              <Text
                                size="xs"
                                color="deep_orange.400"
                                fontFamily="Airbnb Cereal App"
                                textAlign="center"
                                fontSize="12.61px"
                              >
                                +
                              </Text>
                              <Text
                                size="xs"
                                color="deep_orange.400"
                                fontFamily="Airbnb Cereal App"
                                textAlign="center"
                                fontSize="12.61px"
                              >
                                +
                              </Text>
                              <Text
                                size="xs"
                                color="deep_orange.400"
                                fontFamily="Airbnb Cereal App"
                                textAlign="center"
                                fontSize="12.61px"
                              >
                                +
                              </Text>
                              <Text
                                size="xs"
                                color="deep_orange.400"
                                fontFamily="Airbnb Cereal App"
                                textAlign="center"
                                fontSize="12.61px"
                              >
                                +
                              </Text>
                              <Text
                                size="xs"
                                color="deep_orange.400"
                                fontFamily="Airbnb Cereal App"
                                textAlign="center"
                                fontSize="12.61px"
                              >
                                +
                              </Text>
                              <Text
                                size="xs"
                                color="deep_orange.400"
                                fontFamily="Airbnb Cereal App"
                                textAlign="center"
                                fontSize="12.61px"
                              >
                                +
                              </Text>
                              <Text
                                size="xs"
                                color="deep_orange.400"
                                fontFamily="Airbnb Cereal App"
                                textAlign="center"
                                fontSize="12.61px"
                              >
                                +
                              </Text>
                              <Text
                                size="xs"
                                color="deep_orange.400"
                                fontFamily="Airbnb Cereal App"
                                textAlign="center"
                                fontSize="12.61px"
                              >
                                +
                              </Text>
                              <Text
                                size="xs"
                                color="deep_orange.400"
                                fontFamily="Airbnb Cereal App"
                                textAlign="center"
                                fontSize="12.61px"
                              >
                                +
                              </Text>
                            </Flex>
                          </Flex>
                          <Flex gap="8px" w="26%">
                            <Text
                              size="xs"
                              color="deep_orange.400"
                              fontFamily="Airbnb Cereal App"
                              textAlign="center"
                              fontSize="12.61px"
                            >
                              +
                            </Text>
                            <Text
                              size="xs"
                              color="deep_orange.400"
                              fontFamily="Airbnb Cereal App"
                              textAlign="center"
                              fontSize="12.61px"
                            >
                              +
                            </Text>
                            <Text
                              size="xs"
                              color="deep_orange.400"
                              fontFamily="Airbnb Cereal App"
                              textAlign="center"
                              fontSize="12.61px"
                            >
                              +
                            </Text>
                          </Flex>
                        </Flex>
                        <AbsoluteCenter
                          w="100%"
                          display="flex"
                          flexDirection="row"
                          justifyContent="space-between"
                          alignItems="start"
                          h="100%"
                          m="auto"
                        >
                          <Text
                            size="xs"
                            color="deep_orange.400"
                            fontFamily="Airbnb Cereal App"
                            textAlign="center"
                            fontSize="12.61px"
                          >
                            +
                          </Text>
                          <Text
                            size="xs"
                            color="deep_orange.400"
                            fontFamily="Airbnb Cereal App"
                            textAlign="center"
                            fontSize="12.61px"
                          >
                            +
                          </Text>
                          <Text
                            size="xs"
                            color="deep_orange.400"
                            fontFamily="Airbnb Cereal App"
                            textAlign="center"
                            fontSize="12.61px"
                          >
                            +
                          </Text>
                          <Text
                            size="xs"
                            color="deep_orange.400"
                            fontFamily="Airbnb Cereal App"
                            textAlign="center"
                            fontSize="12.61px"
                          >
                            +
                          </Text>
                          <Text
                            size="xs"
                            color="deep_orange.400"
                            fontFamily="Airbnb Cereal App"
                            textAlign="center"
                            fontSize="12.61px"
                          >
                            +
                          </Text>
                          <Text
                            size="xs"
                            color="deep_orange.400"
                            fontFamily="Airbnb Cereal App"
                            textAlign="center"
                            fontSize="12.61px"
                          >
                            +
                          </Text>
                          <Text
                            size="xs"
                            color="deep_orange.400"
                            fontFamily="Airbnb Cereal App"
                            textAlign="center"
                            fontSize="12.61px"
                          >
                            +
                          </Text>
                          <Text
                            size="xs"
                            color="deep_orange.400"
                            fontFamily="Airbnb Cereal App"
                            textAlign="center"
                            fontSize="12.61px"
                          >
                            +
                          </Text>
                          <Text
                            size="xs"
                            color="deep_orange.400"
                            fontFamily="Airbnb Cereal App"
                            textAlign="center"
                            fontSize="12.61px"
                          >
                            +
                          </Text>
                          <Text
                            size="xs"
                            color="deep_orange.400"
                            fontFamily="Airbnb Cereal App"
                            textAlign="center"
                            fontSize="12.61px"
                          >
                            +
                          </Text>
                        </AbsoluteCenter>
                      </Box>
                      <Flex
                        w="68%"
                        justify="space-between"
                        position="absolute"
                        bottom="1%"
                        right="0%"
                        m="auto"
                      >
                        <Text
                          size="xs"
                          color="deep_orange.400"
                          fontFamily="Airbnb Cereal App"
                          textAlign="center"
                          fontSize="12.61px"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          color="deep_orange.400"
                          fontFamily="Airbnb Cereal App"
                          textAlign="center"
                          fontSize="12.61px"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          color="deep_orange.400"
                          fontFamily="Airbnb Cereal App"
                          textAlign="center"
                          fontSize="12.61px"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          color="deep_orange.400"
                          fontFamily="Airbnb Cereal App"
                          textAlign="center"
                          fontSize="12.61px"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          color="deep_orange.400"
                          fontFamily="Airbnb Cereal App"
                          textAlign="center"
                          fontSize="12.61px"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          color="deep_orange.400"
                          fontFamily="Airbnb Cereal App"
                          textAlign="center"
                          fontSize="12.61px"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          color="deep_orange.400"
                          fontFamily="Airbnb Cereal App"
                          textAlign="center"
                          fontSize="12.61px"
                        >
                          +
                        </Text>
                      </Flex>
                    </Box>
                    <Flex w="100%" direction="column" align="start">
                      <Flex w="100%" justify="space-between">
                        <Text
                          size="xs"
                          color="deep_orange.400"
                          fontFamily="Airbnb Cereal App"
                          textAlign="center"
                          fontSize="12.61px"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          color="deep_orange.400"
                          fontFamily="Airbnb Cereal App"
                          textAlign="center"
                          fontSize="12.61px"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          color="deep_orange.400"
                          fontFamily="Airbnb Cereal App"
                          textAlign="center"
                          fontSize="12.61px"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          color="deep_orange.400"
                          fontFamily="Airbnb Cereal App"
                          textAlign="center"
                          fontSize="12.61px"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          color="deep_orange.400"
                          fontFamily="Airbnb Cereal App"
                          textAlign="center"
                          fontSize="12.61px"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          color="deep_orange.400"
                          fontFamily="Airbnb Cereal App"
                          textAlign="center"
                          fontSize="12.61px"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          color="deep_orange.400"
                          fontFamily="Airbnb Cereal App"
                          textAlign="center"
                          fontSize="12.61px"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          color="deep_orange.400"
                          fontFamily="Airbnb Cereal App"
                          textAlign="center"
                          fontSize="12.61px"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          color="deep_orange.400"
                          fontFamily="Airbnb Cereal App"
                          textAlign="center"
                          fontSize="12.61px"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          color="deep_orange.400"
                          fontFamily="Airbnb Cereal App"
                          textAlign="center"
                          fontSize="12.61px"
                        >
                          +
                        </Text>
                      </Flex>
                      <Flex gap="8px" w="26%">
                        <Text
                          size="xs"
                          color="deep_orange.400"
                          fontFamily="Airbnb Cereal App"
                          textAlign="center"
                          fontSize="12.61px"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          color="deep_orange.400"
                          fontFamily="Airbnb Cereal App"
                          textAlign="center"
                          fontSize="12.61px"
                        >
                          +
                        </Text>
                        <Text
                          size="xs"
                          color="deep_orange.400"
                          fontFamily="Airbnb Cereal App"
                          textAlign="center"
                          fontSize="12.61px"
                        >
                          +
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex
                    w="68%"
                    justify="space-between"
                    position="absolute"
                    bottom="0%"
                    right="0%"
                    m="auto"
                  >
                    <Text
                      size="xs"
                      color="deep_orange.400"
                      fontFamily="Airbnb Cereal App"
                      textAlign="center"
                      fontSize="12.61px"
                    >
                      +
                    </Text>
                    <Text
                      size="xs"
                      color="deep_orange.400"
                      fontFamily="Airbnb Cereal App"
                      textAlign="center"
                      fontSize="12.61px"
                    >
                      +
                    </Text>
                    <Text
                      size="xs"
                      color="deep_orange.400"
                      fontFamily="Airbnb Cereal App"
                      textAlign="center"
                      fontSize="12.61px"
                    >
                      +
                    </Text>
                    <Text
                      size="xs"
                      color="deep_orange.400"
                      fontFamily="Airbnb Cereal App"
                      textAlign="center"
                      fontSize="12.61px"
                    >
                      +
                    </Text>
                    <Text
                      size="xs"
                      color="deep_orange.400"
                      fontFamily="Airbnb Cereal App"
                      textAlign="center"
                      fontSize="12.61px"
                    >
                      +
                    </Text>
                    <Text
                      size="xs"
                      color="deep_orange.400"
                      fontFamily="Airbnb Cereal App"
                      textAlign="center"
                      fontSize="12.61px"
                    >
                      +
                    </Text>
                    <Text
                      size="xs"
                      color="deep_orange.400"
                      fontFamily="Airbnb Cereal App"
                      textAlign="center"
                      fontSize="12.61px"
                    >
                      +
                    </Text>
                  </Flex>
                </Box>
                <Flex w="100%" direction="column">
                  <Flex ml="26px" gap="8px" w="32%">
                    <Text
                      size="xs"
                      color="deep_orange.400"
                      fontFamily="Airbnb Cereal App"
                      textAlign="center"
                      fontSize="12.61px"
                    >
                      +
                    </Text>
                    <Text
                      size="xs"
                      color="deep_orange.400"
                      fontFamily="Airbnb Cereal App"
                      textAlign="center"
                      fontSize="12.61px"
                    >
                      +
                    </Text>
                    <Text
                      size="xs"
                      color="deep_orange.400"
                      fontFamily="Airbnb Cereal App"
                      textAlign="center"
                      fontSize="12.61px"
                    >
                      +
                    </Text>
                    <Text
                      size="xs"
                      color="deep_orange.400"
                      fontFamily="Airbnb Cereal App"
                      textAlign="center"
                      fontSize="12.61px"
                    >
                      +
                    </Text>
                    <Text
                      size="xs"
                      color="deep_orange.400"
                      fontFamily="Airbnb Cereal App"
                      textAlign="center"
                      fontSize="12.61px"
                    >
                      +
                    </Text>
                    <Text
                      size="xs"
                      color="deep_orange.400"
                      fontFamily="Airbnb Cereal App"
                      textAlign="center"
                      fontSize="12.61px"
                    >
                      +
                    </Text>
                    <Text
                      size="xs"
                      color="deep_orange.400"
                      fontFamily="Airbnb Cereal App"
                      textAlign="center"
                      fontSize="12.61px"
                    >
                      +
                    </Text>
                    <Text
                      size="xs"
                      color="deep_orange.400"
                      fontFamily="Airbnb Cereal App"
                      textAlign="center"
                      fontSize="12.61px"
                    >
                      +
                    </Text>
                    <Text
                      size="xs"
                      color="deep_orange.400"
                      fontFamily="Airbnb Cereal App"
                      textAlign="center"
                      fontSize="12.61px"
                    >
                      +
                    </Text>
                    <Text
                      size="xs"
                      color="deep_orange.400"
                      fontFamily="Airbnb Cereal App"
                      textAlign="center"
                      fontSize="12.61px"
                    >
                      +
                    </Text>
                  </Flex>
                  <Flex gap="84px" w="100%" direction="column">
                    <Flex ml="26px" gap="8px" w="32%">
                      <Text
                        size="xs"
                        color="deep_orange.400"
                        fontFamily="Airbnb Cereal App"
                        textAlign="center"
                        fontSize="12.61px"
                      >
                        +
                      </Text>
                      <Text
                        size="xs"
                        color="deep_orange.400"
                        fontFamily="Airbnb Cereal App"
                        textAlign="center"
                        fontSize="12.61px"
                      >
                        +
                      </Text>
                      <Text
                        size="xs"
                        color="deep_orange.400"
                        fontFamily="Airbnb Cereal App"
                        textAlign="center"
                        fontSize="12.61px"
                      >
                        +
                      </Text>
                      <Text
                        size="xs"
                        color="deep_orange.400"
                        fontFamily="Airbnb Cereal App"
                        textAlign="center"
                        fontSize="12.61px"
                      >
                        +
                      </Text>
                      <Text
                        size="xs"
                        color="deep_orange.400"
                        fontFamily="Airbnb Cereal App"
                        textAlign="center"
                        fontSize="12.61px"
                      >
                        +
                      </Text>
                      <Text
                        size="xs"
                        color="deep_orange.400"
                        fontFamily="Airbnb Cereal App"
                        textAlign="center"
                        fontSize="12.61px"
                      >
                        +
                      </Text>
                      <Text
                        size="xs"
                        color="deep_orange.400"
                        fontFamily="Airbnb Cereal App"
                        textAlign="center"
                        fontSize="12.61px"
                      >
                        +
                      </Text>
                      <Text
                        size="xs"
                        color="deep_orange.400"
                        fontFamily="Airbnb Cereal App"
                        textAlign="center"
                        fontSize="12.61px"
                      >
                        +
                      </Text>
                      <Text
                        size="xs"
                        color="deep_orange.400"
                        fontFamily="Airbnb Cereal App"
                        textAlign="center"
                        fontSize="12.61px"
                      >
                        +
                      </Text>
                      <Text
                        size="xs"
                        color="deep_orange.400"
                        fontFamily="Airbnb Cereal App"
                        textAlign="center"
                        fontSize="12.61px"
                      >
                        +
                      </Text>
                    </Flex>
                    <Box
                      h="14px"
                      bg="black.900_cc"
                      w="100%"
                      borderRadius="50%"
                      sx={{
                        "backdrop-filter": "opacity(0.5)",
                        filter: "blur(81.00px)",
                      }}
                    />
                  </Flex>
                </Flex>
              </AbsoluteCenter>
              <Image
                src="images/img_image_210x374.png"
                h="210px"
                w="97%"
                position="absolute"
                left="0px"
                right="0px"
                bottom="0px"
                top="0px"
                justifyContent="center"
                m="auto"
              />
            </Box>
          </Flex>
        </Container>
      </Flex>
      <Container
        mt="100px"
        gap="47px"
        w="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
        maxW="1280px"
        px="0px"
      >
        <Flex w="100%" justify="space-evenly">
          <Flex gap="20px" w="100%">
            <Button
              variant="fill"
              colorScheme="white_A700"
              fontWeight={500}
              minW="142px"
              borderRadius="10px"
            >
              All Courses
            </Button>
            <Button
              variant="fill"
              colorScheme="white_A700"
              fontWeight={500}
              minW="142px"
              borderRadius="10px"
            >
              Kindergarten
            </Button>
            <Button
              variant="fill"
              colorScheme="orange_200"
              fontWeight={500}
              minW="142px"
              borderRadius="10px"
            >
              High School
            </Button>
            <Button
              variant="fill"
              colorScheme="white_A700"
              fontWeight={500}
              minW="142px"
              borderRadius="10px"
            >
              College
            </Button>
            <Button
              variant="fill"
              colorScheme="white_A700"
              fontWeight={500}
              minW="142px"
              borderRadius="10px"
            >
              Computer
            </Button>
            <Button
              variant="fill"
              colorScheme="white_A700"
              fontWeight={500}
              minW="142px"
              borderRadius="10px"
            >
              Science
            </Button>
            <Button
              variant="fill"
              colorScheme="white_A700"
              fontWeight={500}
              minW="142px"
              borderRadius="10px"
            >
              Engineering
            </Button>
            <Button
              variant="fill"
              colorScheme="white_A700"
              color="deep_orange.400"
              fontWeight={500}
              minW="142px"
              borderRadius="10px"
            >
              More Courses
            </Button>
          </Flex>
        </Flex>
        <Flex w="100%" justify="space-evenly">
          <Flex gap="23px" w="100%" direction="column" align="start">
            <Heading size="xl" as="h3">
              Standard Classes
            </Heading>
            <SimpleGrid
              w="100%"
              minH="auto"
              gap="40px"
              columns={4}
              justifyContent="center"
            >
              <Flex
                gap="19px"
                bg="white.A700"
                w="100%"
                direction="column"
                align="center"
                justify="center"
                p="15px"
                borderRadius="15px"
              >
                <Image src="images/img_group.svg" h="50px" mt="15px" w="50px" />
                <Flex
                  mb="15px"
                  gap="25px"
                  w="100%"
                  direction="column"
                  align="center"
                >
                  <Flex gap="9px" w="100%" direction="column" align="center">
                    <Heading size="lg" as="h4" textAlign="center">
                      Standard One
                    </Heading>
                    <Text textAlign="center" lineHeight="30px">
                      Standard 1 is a foundation Standard that reflects 7
                      important concepts...
                    </Text>
                  </Flex>
                  <Button size="md" fontWeight={500} minW="159px">
                    Class Details
                  </Button>
                </Flex>
              </Flex>
              <Flex
                gap="25px"
                bg="white.A700"
                w="100%"
                direction="column"
                align="center"
                p="15px"
                borderRadius="15px"
              >
                <Flex
                  mt="15px"
                  gap="19px"
                  w="100%"
                  direction="column"
                  align="center"
                >
                  <Image
                    src="images/img_group_gray_800.svg"
                    h="50px"
                    w="50px"
                  />
                  <Flex gap="9px" w="100%" direction="column" align="center">
                    <Heading size="lg" as="h4" textAlign="center">
                      Standard Two
                    </Heading>
                    <Text textAlign="center" lineHeight="30px">
                      Standard 2 builds on the foundations of Standard 1 and
                      includes requirements...
                    </Text>
                  </Flex>
                </Flex>
                <Button size="md" mb="15px" fontWeight={500} minW="159px">
                  Class Details
                </Button>
              </Flex>
              <Flex
                gap="19px"
                bg="white.A700"
                w="100%"
                direction="column"
                align="center"
                justify="center"
                p="15px"
                borderRadius="15px"
              >
                <Image
                  src="images/img_group_teal_a400.svg"
                  h="50px"
                  mt="15px"
                  w="50px"
                />
                <Flex
                  mb="15px"
                  gap="25px"
                  w="100%"
                  direction="column"
                  align="center"
                >
                  <Flex gap="9px" w="100%" direction="column" align="center">
                    <Heading size="lg" as="h4" textAlign="center">
                      Standard Three
                    </Heading>
                    <Text textAlign="center" lineHeight="30px">
                      Standard 3 of the Aged Care Quality Standards applies to
                      all services delivering personal...
                    </Text>
                  </Flex>
                  <Button size="md" fontWeight={500} minW="159px">
                    Class Details
                  </Button>
                </Flex>
              </Flex>
              <Flex
                gap="19px"
                bg="white.A700"
                w="100%"
                direction="column"
                align="center"
                justify="center"
                p="15px"
                borderRadius="15px"
              >
                <Image
                  src="images/img_group_gray_800_50x50.svg"
                  h="50px"
                  mt="15px"
                  w="50px"
                />
                <Flex
                  mb="15px"
                  gap="25px"
                  w="100%"
                  direction="column"
                  align="center"
                >
                  <Flex gap="9px" w="100%" direction="column" align="center">
                    <Heading size="lg" as="h4" textAlign="center">
                      Standard Four
                    </Heading>
                    <Text textAlign="center" lineHeight="30px">
                      Standard 4 of the Aged Care Quality Standards focuses on
                      services and supports...
                    </Text>
                  </Flex>
                  <Button size="md" fontWeight={500} minW="159px">
                    Class Details
                  </Button>
                </Flex>
              </Flex>
              <Flex
                gap="25px"
                bg="white.A700"
                w="100%"
                direction="column"
                align="center"
                p="15px"
                borderRadius="15px"
              >
                <Flex
                  mt="15px"
                  gap="19px"
                  w="100%"
                  direction="column"
                  align="center"
                >
                  <Image
                    src="images/img_group_teal_a400_50x50.svg"
                    h="50px"
                    w="50px"
                  />
                  <Flex gap="9px" w="100%" direction="column" align="center">
                    <Heading size="lg" as="h4" textAlign="center">
                      Standard Five
                    </Heading>
                    <Text textAlign="center" lineHeight="30px">
                      Standard 5 Learning Resources. Learning Resources ensure
                      that the school has the...
                    </Text>
                  </Flex>
                </Flex>
                <Button size="md" mb="15px" fontWeight={500} minW="159px">
                  Class Details
                </Button>
              </Flex>
              <Flex
                gap="25px"
                bg="white.A700"
                w="100%"
                direction="column"
                align="center"
                p="15px"
                borderRadius="15px"
              >
                <Flex
                  mt="15px"
                  gap="19px"
                  w="100%"
                  direction="column"
                  align="center"
                >
                  <Image
                    src="images/img_group_deep_orange_500.svg"
                    h="50px"
                    w="50px"
                  />
                  <Flex gap="9px" w="100%" direction="column" align="center">
                    <Heading size="lg" as="h4" textAlign="center">
                      Standard Six
                    </Heading>
                    <Text textAlign="center" lineHeight="30px">
                      Standard 6 requires an organisation to have a system to
                      resolve complaints...
                    </Text>
                  </Flex>
                </Flex>
                <Button size="md" mb="15px" fontWeight={500} minW="159px">
                  Class Details
                </Button>
              </Flex>
              <Flex
                gap="25px"
                bg="white.A700"
                w="100%"
                direction="column"
                align="center"
                p="15px"
                borderRadius="15px"
              >
                <Flex
                  mt="15px"
                  gap="19px"
                  w="100%"
                  direction="column"
                  align="center"
                >
                  <Image
                    src="images/img_group_red_500_01.svg"
                    h="50px"
                    w="50px"
                  />
                  <Flex gap="9px" w="100%" direction="column" align="center">
                    <Heading size="lg" as="h4" textAlign="center">
                      Standard Seven
                    </Heading>
                    <Text textAlign="center" lineHeight="30px">
                      Standard 7 Blood Management mandates that leaders of
                      health service organizations...
                    </Text>
                  </Flex>
                </Flex>
                <Button size="md" mb="15px" fontWeight={500} minW="159px">
                  Class Details
                </Button>
              </Flex>
              <Flex
                gap="25px"
                bg="white.A700"
                w="100%"
                direction="column"
                align="center"
                p="15px"
                borderRadius="15px"
              >
                <Flex
                  mt="15px"
                  gap="21px"
                  w="100%"
                  direction="column"
                  align="center"
                >
                  <Image
                    src="images/img_group_orange_300.svg"
                    h="50px"
                    w="50px"
                  />
                  <Flex gap="7px" w="100%" direction="column" align="center">
                    <Heading size="lg" as="h4" textAlign="center">
                      Standard Eight
                    </Heading>
                    <Text textAlign="center" lineHeight="30px">
                      Standard 8 Course from NCERT Solutions help students to
                      understand...
                    </Text>
                  </Flex>
                </Flex>
                <Button size="md" mb="15px" fontWeight={500} minW="159px">
                  Class Details
                </Button>
              </Flex>
              <Flex
                gap="25px"
                bg="white.A700"
                w="100%"
                direction="column"
                align="center"
                p="15px"
                borderRadius="15px"
              >
                <Flex
                  mt="15px"
                  gap="19px"
                  w="100%"
                  direction="column"
                  align="center"
                >
                  <Image
                    src="images/img_group_red_500_01_50x50.svg"
                    h="50px"
                    w="50px"
                  />
                  <Flex gap="9px" w="100%" direction="column" align="center">
                    <Heading size="lg" as="h4" textAlign="center">
                      Standard Nine
                    </Heading>
                    <Text textAlign="center" lineHeight="30px">
                      Standard 5 Learning Resources. Learning Resources ensure
                      that the school has the...
                    </Text>
                  </Flex>
                </Flex>
                <Button size="md" mb="15px" fontWeight={500} minW="159px">
                  Class Details
                </Button>
              </Flex>
              <Flex
                gap="25px"
                bg="white.A700"
                w="100%"
                direction="column"
                align="center"
                p="15px"
                borderRadius="15px"
              >
                <Flex
                  mt="15px"
                  gap="19px"
                  w="100%"
                  direction="column"
                  align="center"
                >
                  <Image
                    src="images/img_group_deep_orange_500_50x50.svg"
                    h="50px"
                    w="50px"
                  />
                  <Flex gap="9px" w="100%" direction="column" align="center">
                    <Heading size="lg" as="h4" textAlign="center">
                      O- Level
                    </Heading>
                    <Text textAlign="center" lineHeight="30px">
                      Standard 6 requires an organisation to have a system to
                      resolve complaints...
                    </Text>
                  </Flex>
                </Flex>
                <Button size="md" mb="15px" fontWeight={500} minW="159px">
                  Class Details
                </Button>
              </Flex>
              <Flex
                gap="25px"
                bg="white.A700"
                w="100%"
                direction="column"
                align="center"
                p="15px"
                borderRadius="15px"
              >
                <Flex
                  mt="15px"
                  gap="19px"
                  w="100%"
                  direction="column"
                  align="center"
                >
                  <Image src="images/img_group_50x50.svg" h="50px" w="50px" />
                  <Flex gap="9px" w="100%" direction="column" align="center">
                    <Heading size="lg" as="h4" textAlign="center">
                      A- Level
                    </Heading>
                    <Text textAlign="center" lineHeight="30px">
                      Standard 7 Blood Management mandates that leaders of
                      health service organizations...
                    </Text>
                  </Flex>
                </Flex>
                <Button size="md" mb="15px" fontWeight={500} minW="159px">
                  Class Details
                </Button>
              </Flex>
            </SimpleGrid>
          </Flex>
        </Flex>
      </Container>
      <Container
        mt="102px"
        w="100%"
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        maxW="1280px"
        px="0px"
      >
        <Flex gap="50px" w="100%" direction="column" align="center">
          <Flex gap="40px" w="100%" direction="column" align="center">
            <Flex gap="10px" w="100%" direction="column" align="start">
              <Heading size="xl" as="h3">
                Other Courses For High School
              </Heading>
              <Flex gap="42px" w="100%">
                <InputGroup w="66%">
                  <Input
                    colorScheme="white_A700"
                    placeholder="Search Class, Course, Book Name"
                    value={searchBarValue10}
                    onChange={(e) => setSearchBarValue10(e.target.value)}
                    color="gray.700_99"
                    fontWeight={500}
                    px="19px"
                    borderRadius="10px"
                  />
                  <InputRightElement>
                    {searchBarValue10?.length > 0 ? (
                      <CloseIcon onClick={() => setSearchBarValue10("")} />
                    ) : (
                      <Image src="images/img_search_white_a700.svg" />
                    )}
                  </InputRightElement>
                </InputGroup>
                <SelectBox
                  size="sm"
                  indicator={<Image src="images/img_arrow_down_red_300.svg" />}
                  name="sortby"
                  placeholder="Sort by: Latest"
                  options={dropDownOptions}
                  style={{ fontWeight: 500, w: "32%" }}
                />
              </Flex>
            </Flex>
            <SimpleGrid
              w="100%"
              minH="auto"
              gap="40px"
              columns={2}
              justifyContent="center"
            >
              <EduviCoursesDetailsMaincard1
                image="images/img_image_103x160.png"
                bg="white.A700"
                w="100%"
                cursor="pointer"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                p="15px"
                borderRadius="10px"
                _hover={{ boxShadow: "xs" }}
              />
              <EduviCoursesDetailsMaincard1
                bg="white.A700"
                w="100%"
                cursor="pointer"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                p="15px"
                borderRadius="10px"
                _hover={{ boxShadow: "xs" }}
              />
              <EduviCoursesDetailsMaincard1
                image="images/img_image_2.png"
                bg="white.A700"
                w="100%"
                cursor="pointer"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                p="15px"
                borderRadius="10px"
                _hover={{ boxShadow: "xs" }}
              />
              <EduviCoursesDetailsMaincard1
                image="images/img_image_3.png"
                bg="white.A700"
                w="100%"
                cursor="pointer"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                p="15px"
                borderRadius="10px"
                _hover={{ boxShadow: "xs" }}
              />
              <EduviCoursesDetailsMaincard
                bg="white.A700"
                boxShadow="xs"
                w="100%"
                cursor="pointer"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                p="15px"
                borderRadius="10px"
                _hover={{ boxShadow: "xs" }}
              />
              <EduviCoursesDetailsMaincard1
                bg="white.A700"
                w="100%"
                cursor="pointer"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                p="15px"
                borderRadius="10px"
                _hover={{ boxShadow: "xs" }}
              />
              <EduviCoursesDetailsMaincard1
                image="images/img_image_2.png"
                bg="white.A700"
                w="100%"
                cursor="pointer"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                p="15px"
                borderRadius="10px"
                _hover={{ boxShadow: "xs" }}
              />
              <EduviCoursesDetailsMaincard1
                image="images/img_image_3.png"
                bg="white.A700"
                w="100%"
                cursor="pointer"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                p="15px"
                borderRadius="10px"
                _hover={{ boxShadow: "xs" }}
              />
              <EduviCoursesDetailsMaincard1
                image="images/img_image_103x160.png"
                bg="white.A700"
                w="100%"
                cursor="pointer"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                p="15px"
                borderRadius="10px"
                _hover={{ boxShadow: "xs" }}
              />
              <EduviCoursesDetailsMaincard1
                bg="white.A700"
                w="100%"
                cursor="pointer"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                p="15px"
                borderRadius="10px"
                _hover={{ boxShadow: "xs" }}
              />
            </SimpleGrid>
          </Flex>
          <Flex gap="19px" w="23%" justify="center" align="start">
            <IconButton
              size="lg"
              variant="fill"
              colorScheme="white_A700"
              icon={<Image src="images/img_arrow_left.svg" />}
              aria-label="444:8303-arrowleft"
              w="44px"
              borderRadius="6px"
            />
            <Text color="gray.900" mt="13px" fontWeight={500}>
              Page
            </Text>
            <Button
              size="sm"
              variant="fill"
              colorScheme="white_A700"
              color="gray.700"
              mt="2px"
              fontWeight={500}
              minW="42px"
              borderRadius="8px"
            >
              5
            </Button>
            <Text color="gray.900" mt="11px" fontWeight={500}>
              of 80
            </Text>
            <IconButton
              size="lg"
              variant="fill"
              icon={<Image src="images/img_arrow_right.svg" />}
              aria-label="444:8310-arrowright"
              w="44px"
              borderRadius="6px"
            />
          </Flex>
        </Flex>
      </Container>
      <Footer
        mt="100px"
        flexDirection="column"
        display="flex"
        w="100%"
        alignItems="center"
        justifyContent="center"
      />
    </Flex>
  );
}
