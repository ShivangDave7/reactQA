import React from "react";

import { RatingBar } from "../../components";
import EduviCoursesDetailsMaincard from "../../components/EduviCoursesDetailsMaincard";
import EduviCoursesDetailsMaincard1 from "../../components/EduviCoursesDetailsMaincard1";
import Header from "../../components/Header";
import {
  Link,
  Text,
  UnorderedList,
  ListItem,
  Heading,
  Flex,
  Image,
  IconButton,
  Container,
  Input,
  SimpleGrid,
  Button,
  Box,
  AbsoluteCenter,
} from "@chakra-ui/react";

export default function EduviCoursesDetailsPage() {
  const [searchBarValue2, setSearchBarValue2] = React.useState("");

  return (
    <Flex bg="gray.100" w="100%" direction="column" align="center">
      <Flex gap="48px" w="100%" direction="column" align="center">
        <Header bg="gray.100" w="100%" display="flex" />
        <Container
          gap="68px"
          bg="gray.200"
          w="100%"
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          maxW="1280px"
          p="24px"
          borderRadius="20px"
        >
          <Flex ml="5px" gap="29px" w="63%" direction="column" align="start">
            <Text color="black.900" letterSpacing="0.48px" fontWeight={500}>
              Home | Courses | Course Details
            </Text>
            <Flex gap="29px" w="100%" direction="column" align="start">
              <Box h="455px" w="100%" position="relative">
                <Image
                  src="images/img_pexels_vanessa_garcia_6325959.png"
                  h="455px"
                  w="100%"
                  left="0px"
                  bottom="0px"
                  right="0px"
                  top="0px"
                  justifyContent="center"
                  m="auto"
                  borderRadius="20px"
                />
                <IconButton
                  size="6xl"
                  variant="fill"
                  icon={<Image src="images/img_call_button.svg" />}
                  aria-label="443:1157-callbutton"
                  w="60px"
                  position="absolute"
                  top="0px"
                  bottom="0px"
                  left="0px"
                  right="0px"
                  m="auto"
                  borderRadius="50%"
                />
              </Box>
              <Heading size="lg" as="h4" color="black.900">
                Maths - for Standard 3 Students | Episode 2
              </Heading>
            </Flex>
          </Flex>
          <Flex gap="12px" w="32%" direction="column" align="start">
            <Heading size="lg" as="h4" color="black.900">
              Course Playlists
            </Heading>
            <Flex gap="16px" w="100%" direction="column">
              <Flex
                gap="10px"
                bg="white.A700"
                w="100%"
                cursor="pointer"
                align="center"
                p="10px"
                borderRadius="10px"
                _hover={{ boxShadow: "sm" }}
              >
                <Image src="images/img_image.png" w="23%" borderRadius="5px" />
                <Flex w="50%" direction="column" align="start">
                  <Heading as="h6" color="black.900">
                    Maths - Introduction
                  </Heading>
                  <Text size="s" color="deep_orange.400" mt="3px">
                    1:57
                  </Text>
                </Flex>
              </Flex>
              <Flex
                gap="10px"
                bg="white.A700"
                boxShadow="sm"
                w="100%"
                cursor="pointer"
                align="center"
                p="10px"
                borderRadius="10px"
                _hover={{ boxShadow: "sm" }}
              >
                <Image src="images/img_image.png" w="23%" borderRadius="5px" />
                <Flex w="64%" direction="column" align="start">
                  <Heading as="h6" color="black.900">
                    Maths - for Standard 3 St..
                  </Heading>
                  <Text size="s" color="deep_orange.400" mt="3px">
                    5:43
                  </Text>
                </Flex>
              </Flex>
              <Flex
                gap="10px"
                bg="white.A700"
                w="100%"
                cursor="pointer"
                align="center"
                p="10px"
                borderRadius="10px"
                _hover={{ boxShadow: "sm" }}
              >
                <Box h="50px" w="23%" position="relative">
                  <Image
                    src="images/img_image_50x80.png"
                    h="50px"
                    opacity={0.5}
                    w="100%"
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                    justifyContent="center"
                    m="auto"
                    borderRadius="5px"
                  />
                  <AbsoluteCenter
                    h="100%"
                    bg="white.A700"
                    w="100%"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    p="4px"
                    m="auto"
                    borderRadius="50%"
                  >
                    <Image
                      src="images/img_lock_pad_lock_s.svg"
                      h="10px"
                      w="10px"
                    />
                  </AbsoluteCenter>
                </Box>
                <Flex w="64%" direction="column" align="start">
                  <Heading as="h6" color="black.900_87" opacity={0.5}>
                    Maths - for Standard 3 St..
                  </Heading>
                  <Text
                    size="s"
                    color="deep_orange.400_87"
                    mt="3px"
                    opacity={0.5}
                  >
                    8:11
                  </Text>
                </Flex>
              </Flex>
              <Flex
                gap="10px"
                opacity={0.5}
                bg="white.A700_87"
                w="100%"
                cursor="pointer"
                align="center"
                p="10px"
                borderRadius="10px"
                _hover={{ boxShadow: "sm" }}
              >
                <Box h="50px" w="23%" position="relative">
                  <Image
                    src="images/img_image_50x80.png"
                    h="50px"
                    opacity={0.5}
                    w="100%"
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                    justifyContent="center"
                    m="auto"
                    borderRadius="5px"
                  />
                  <AbsoluteCenter
                    h="100%"
                    bg="white.A700"
                    w="100%"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    p="4px"
                    m="auto"
                    borderRadius="50%"
                  >
                    <Image
                      src="images/img_lock_pad_lock_s.svg"
                      h="10px"
                      w="10px"
                    />
                  </AbsoluteCenter>
                </Box>
                <Flex w="64%" direction="column" align="start">
                  <Heading as="h6" color="black.900_87" opacity={0.5}>
                    Maths - for Standard 3 St..
                  </Heading>
                  <Text
                    size="s"
                    color="deep_orange.400_87"
                    mt="3px"
                    opacity={0.5}
                  >
                    6:10
                  </Text>
                </Flex>
              </Flex>
              <Flex
                gap="10px"
                opacity={0.5}
                bg="white.A700_87"
                w="100%"
                cursor="pointer"
                align="center"
                p="10px"
                borderRadius="10px"
                _hover={{ boxShadow: "sm" }}
              >
                <Box h="50px" w="23%" position="relative">
                  <Image
                    src="images/img_image_50x80.png"
                    h="50px"
                    opacity={0.5}
                    w="100%"
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                    justifyContent="center"
                    m="auto"
                    borderRadius="5px"
                  />
                  <AbsoluteCenter
                    h="100%"
                    bg="white.A700"
                    w="100%"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    p="4px"
                    m="auto"
                    borderRadius="50%"
                  >
                    <Image
                      src="images/img_lock_pad_lock_s.svg"
                      h="10px"
                      w="10px"
                    />
                  </AbsoluteCenter>
                </Box>
                <Flex w="64%" direction="column" align="start">
                  <Heading as="h6" color="black.900_87" opacity={0.5}>
                    Maths - for Standard 3 St..
                  </Heading>
                  <Text
                    size="s"
                    color="deep_orange.400_87"
                    mt="3px"
                    opacity={0.5}
                  >
                    10:00
                  </Text>
                </Flex>
              </Flex>
              <Flex
                gap="10px"
                opacity={0.5}
                bg="white.A700_87"
                w="100%"
                cursor="pointer"
                align="center"
                p="10px"
                borderRadius="10px"
                _hover={{ boxShadow: "sm" }}
              >
                <Box h="50px" w="23%" position="relative">
                  <Image
                    src="images/img_image_50x80.png"
                    h="50px"
                    opacity={0.5}
                    w="100%"
                    left="0px"
                    bottom="0px"
                    right="0px"
                    top="0px"
                    justifyContent="center"
                    m="auto"
                    borderRadius="5px"
                  />
                  <AbsoluteCenter
                    h="100%"
                    bg="white.A700"
                    w="100%"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    p="4px"
                    m="auto"
                    borderRadius="50%"
                  >
                    <Image
                      src="images/img_lock_pad_lock_s.svg"
                      h="10px"
                      w="10px"
                    />
                  </AbsoluteCenter>
                </Box>
                <Flex w="64%" direction="column" align="start">
                  <Heading as="h6" color="black.900_87" opacity={0.5}>
                    Maths - for Standard 3 St..
                  </Heading>
                  <Text
                    size="s"
                    color="deep_orange.400_87"
                    mt="3px"
                    opacity={0.5}
                  >
                    7:53
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Flex>
      <Container
        mt="99px"
        w="100%"
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        maxW="1280px"
        px="0px"
      >
        <Flex gap="40px" w="100%" align="start">
          <Flex w="66%" direction="column" align="start">
            <Flex gap="8px" w="100%" direction="column" align="start">
              <Heading size="xl" as="h3">
                Course Details
              </Heading>
              <Text lineHeight="30px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis consectetur adipiscing
                elit.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis consectetur adipiscing
                elit.
              </Text>
            </Flex>
            <Flex mt="24px" gap="8px" w="100%" direction="column" align="start">
              <Heading size="xl" as="h3">
                Certification
              </Heading>
              <Text lineHeight="30px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis consectetur adipiscing
                elit.
              </Text>
            </Flex>
            <Flex mt="24px" gap="8px" w="100%" direction="column" align="start">
              <Heading size="xl" as="h3">
                Who this course is for
              </Heading>
              <Text lineHeight="30px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis consectetur adipiscing
                elit.
              </Text>
            </Flex>
            <Flex mt="27px" w="54%" direction="column" align="center">
              <Heading size="xl" as="h3">
                What you&#39;ll learn in this course:
              </Heading>
              <Flex mt="13px" gap="10px" w="97%" align="start">
                <Box
                  h="10px"
                  mt="3px"
                  bg="deep_orange.400"
                  w="10px"
                  borderRadius="50%"
                />
                <Text color="gray.900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
              </Flex>
              <Flex mt="20px" gap="10px" w="97%" align="start">
                <Box
                  h="10px"
                  mt="3px"
                  bg="deep_orange.400"
                  w="10px"
                  borderRadius="50%"
                />
                <Text color="gray.900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
              </Flex>
              <Flex mt="20px" gap="10px" w="97%" align="start">
                <Box
                  h="10px"
                  mt="3px"
                  bg="deep_orange.400"
                  w="10px"
                  borderRadius="50%"
                />
                <Text color="gray.900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
              </Flex>
              <Flex mt="20px" gap="10px" w="97%" align="start">
                <Box
                  h="10px"
                  mt="3px"
                  bg="deep_orange.400"
                  w="10px"
                  borderRadius="50%"
                />
                <Text color="gray.900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
              </Flex>
              <Flex mt="20px" gap="10px" w="97%" align="start">
                <Box
                  h="10px"
                  mt="3px"
                  bg="deep_orange.400"
                  w="10px"
                  borderRadius="50%"
                />
                <Text color="gray.900">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex gap="23px" w="32%" direction="column" align="center">
            <Flex
              bg="white.A700"
              w="100%"
              direction="column"
              align="center"
              justify="center"
              p="19px"
              borderRadius="10px"
            >
              <Flex mt="5px" w="100%" justify="space-between" align="center">
                <Heading size="s" as="h5" color="gray.700">
                  Price
                </Heading>
                <Heading
                  size="lg"
                  as="h4"
                  color="deep_orange.400"
                  textAlign="right"
                  fontWeight={700}
                >
                  $49.00
                </Heading>
              </Flex>
              <Flex mt="19px" w="100%" justify="space-between">
                <Heading size="s" as="h5" color="gray.700">
                  Instructor
                </Heading>
                <Heading
                  size="s"
                  as="h5"
                  textAlign="right"
                  textDecoration="underline"
                >
                  Wade Warren
                </Heading>
              </Flex>
              <Flex mt="19px" w="100%" justify="space-between" align="start">
                <Heading size="s" as="h5" color="gray.700">
                  Ratings
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
              <Flex mt="17px" w="100%" justify="space-between">
                <Heading size="s" as="h5" color="gray.700">
                  Durations
                </Heading>
                <Heading size="s" as="h5" textAlign="right">
                  10 Days
                </Heading>
              </Flex>
              <Flex mt="18px" w="100%" justify="space-between">
                <Heading size="s" as="h5" color="gray.700">
                  Lessons
                </Heading>
                <Heading size="s" as="h5" textAlign="right">
                  30
                </Heading>
              </Flex>
              <Flex mt="19px" w="100%" justify="space-between">
                <Heading size="s" as="h5" color="gray.700">
                  Quizzes
                </Heading>
                <Heading size="s" as="h5" textAlign="right">
                  5
                </Heading>
              </Flex>
              <Flex mt="19px" w="100%" justify="space-between">
                <Heading size="s" as="h5" color="gray.700">
                  Certificate
                </Heading>
                <Heading size="s" as="h5" textAlign="right">
                  Yes
                </Heading>
              </Flex>
              <Flex mt="21px" w="100%" justify="space-between">
                <Heading size="s" as="h5" color="gray.700">
                  Language
                </Heading>
                <Heading size="s" as="h5" textAlign="right">
                  English
                </Heading>
              </Flex>
              <Flex mt="17px" mb="5px" w="100%" justify="space-between">
                <Heading size="s" as="h5" color="gray.700">
                  Access
                </Heading>
                <Heading size="s" as="h5" textAlign="right">
                  Lifetime
                </Heading>
              </Flex>
            </Flex>
            <Button size="4xl" variant="fill" fontWeight={500} w="100%">
              Purchase Course
            </Button>
          </Flex>
        </Flex>
      </Container>
      <Container
        mt="105px"
        w="100%"
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        maxW="1280px"
        px="0px"
      >
        <Flex gap="48px" w="100%" direction="column" align="start">
          <Heading size="3xl" as="h1" fontFamily="Metropolis">
            Similar Courses
          </Heading>
          <SimpleGrid
            w="100%"
            minH="auto"
            gap="40px"
            columns={2}
            justifyContent="center"
          >
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
          </SimpleGrid>
        </Flex>
      </Container>
      <Flex
        direction="column"
        as="footer"
        mt="100px"
        w="100%"
        align="center"
        justify="center"
      >
        <Container
          gap="115px"
          bg="black.900_01"
          w="100%"
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          maxW="1280px"
          p="50px"
          mx="auto"
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
                size="3xl"
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
            <Input
              placeholder=""
              value={searchBarValue2}
              onChange={(e) => setSearchBarValue2(e.target.value)}
              borderTopLeftRadius="10px"
              borderBottomLeftRadius="10px"
              fontWeight={500}
            />
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
        </Container>
        <Flex mt="100px" bg="gray.100" w="100%" align="start" p="80px">
          <Flex gap="46px" w="15%" direction="column" align="center">
            <Container
              gap="22px"
              w="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-start"
              maxW="173px"
              px="0px"
            >
              <Image src="images/img_logo.svg" h="30px" />
              <Flex w="85%" justify="space-between" align="center">
                <Image src="images/img_facebook_logo_1.svg" h="22px" w="22px" />
                <IconButton
                  size="xs"
                  variant="fill"
                  colorScheme="deep_orange_400"
                  icon={<Image src="images/img_instagram_icon.svg" />}
                  aria-label="I1072:4637;1049:2236-instagramicon"
                  w="36px"
                  borderRadius="50%"
                />
                <Image src="images/img_twitter_logo.svg" h="17px" />
                <Image src="images/img_linkedin_icon.svg" h="18px" />
              </Flex>
            </Container>
            <Flex gap="14px" w="100%" direction="column" align="start">
              <Text>©2021 Educatsy</Text>
              <Text>Educatsy is a registered</Text>
            </Flex>
          </Flex>
          <Flex ml="95px" gap="24px" w="14%" direction="column" align="start">
            <Heading size="md" as="h5">
              Courses
            </Heading>
            <Flex w="100%" direction="column" align="start">
              <Text>Classroom courses</Text>
              <Text mt="21px" lineHeight="30px">
                Virtual classroom courses
              </Text>
              <Text mt="23px">E-learning courses</Text>
              <Text mt="25px">Video Courses</Text>
              <Text mt="26px">Offline Courses</Text>
            </Flex>
          </Flex>
          <Flex ml="99px" gap="22px" w="10%" direction="column" align="center">
            <Heading size="md" as="h5">
              Community
            </Heading>
            <UnorderedList
              styleType="none"
              w="100%"
              display="flex"
              flexDirection="column"
              alignItems="start"
              justifyContent="flex-start"
            >
              <ListItem>
                <Link href="#">
                  <Text>Learners</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text mt="27px">Partners</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text mt="28px">Developers</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text mt="25px">Transactions</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text mt="28px">Blog</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text mt="26px">Teaching Center</Text>
                </Link>
              </ListItem>
            </UnorderedList>
          </Flex>
          <Flex
            ml="150px"
            gap="24px"
            w="14%"
            direction="column"
            align="start"
            my="2px"
          >
            <Heading size="md" as="h5">
              Quick links
            </Heading>
            <UnorderedList
              styleType="none"
              w="100%"
              display="flex"
              flexDirection="column"
              alignItems="start"
              justifyContent="flex-start"
            >
              <ListItem>
                <Link href="#">
                  <Text>Home</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text mt="26px">Professional Education</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text mt="27px">Courses</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text mt="26px">Admissions</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text mt="27px">Testimonial</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text mt="28px">Programs</Text>
                </Link>
              </ListItem>
            </UnorderedList>
          </Flex>
          <Flex ml="104px" gap="24px" w="6%" direction="column" align="start">
            <Heading size="md" as="h5">
              More
            </Heading>
            <UnorderedList
              styleType="none"
              w="100%"
              display="flex"
              flexDirection="column"
              alignItems="start"
              justifyContent="flex-start"
            >
              <ListItem>
                <Link href="#">
                  <Text>Press</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text mt="27px">Investors</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text mt="27px">Terms</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text mt="28px">Privacy</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text mt="27px">Help</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  <Text mt="25px">Contact</Text>
                </Link>
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
