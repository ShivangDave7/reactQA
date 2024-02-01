import React from "react";

import Footerqa from "../../components/Footerqa";
import Heafer from "../../components/Heafer";
import {
  Image,
  Flex,
  Button,
  Input,
  Text,
  Heading,
  Container,
  IconButton,
  Box,
} from "@chakra-ui/react";

export default function SinglementordetailsPage() {
  return (
    <Flex gap="100px" bg="gray.100" w="100%" direction="column" align="center">
      <Flex gap="61px" w="100%" direction="column" align="center">
        <Flex gap="48px" w="100%" direction="column" align="center">
          <Heafer
            flexDirection="row"
            display="flex"
            bg="gray.100"
            w="100%"
            justifyContent="center"
            alignItems="center"
          />
          <Container
            w="100%"
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            maxW="1280px"
            px="0px"
          >
            <Box
              display="flex"
              flexDirection="column"
              h="260px"
              w="100%"
              position="relative"
            >
              <Flex bg="red.50" w="100%" p="29px" m="auto" borderRadius="20px">
                <Text color="black.900" mb="92px" fontWeight={500}>
                  Home | Mentor | Kristin Watson
                </Text>
              </Flex>
              <Image
                src="images/img_bg_170x170.png"
                h="170px"
                ml="30px"
                w="170px"
                mt="auto"
                zIndex={1}
                borderRadius="10px"
              />
              <Flex
                ml="220px"
                w="17%"
                direction="column"
                align="start"
                mt="auto"
                zIndex={1}
              >
                <Text size="2xl" color="gray.900">
                  Kritsin Watson
                </Text>
                <Text size="lg">Founder & Mentor</Text>
              </Flex>
            </Box>
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
          <Flex gap="40px" w="100%" align="start">
            <Flex gap="29px" w="66%" direction="column" align="center">
              <Flex gap="24px" w="100%">
                <Flex gap="19px" w="79%">
                  <Button
                    variant="fill"
                    colorScheme="orange_200"
                    fontWeight={500}
                    minW="205px"
                    borderRadius="10px"
                  >
                    About
                  </Button>
                  <Button
                    variant="fill"
                    colorScheme="white_A700"
                    fontWeight={500}
                    minW="205px"
                    borderRadius="10px"
                  >
                    Courses
                  </Button>
                  <Button
                    variant="fill"
                    colorScheme="white_A700"
                    fontWeight={500}
                    minW="205px"
                    borderRadius="10px"
                  >
                    Reviews
                  </Button>
                </Flex>
                <Button
                  variant="fill"
                  fontWeight={500}
                  minW="160px"
                  borderRadius="10px"
                >
                  Contact Now
                </Button>
              </Flex>
              <Flex w="100%" direction="column" align="start">
                <Heading size="xl" as="h3">
                  About Kritsin
                </Heading>
                <Flex
                  mt="8px"
                  gap="29px"
                  w="100%"
                  direction="column"
                  align="start"
                >
                  <Text lineHeight="30px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </Text>
                  <Heading size="xl" as="h3">
                    Certification
                  </Heading>
                </Flex>
                <Text mt="8px" lineHeight="30px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                </Text>
              </Flex>
            </Flex>
            <Flex
              mb="144px"
              bg="white.A700"
              w="32%"
              direction="column"
              align="center"
              justify="center"
              p="20px"
              borderRadius="10px"
            >
              <Flex mt="9px" w="100%" justify="space-between" align="center">
                <Heading size="s" as="h5" color="gray.700">
                  Total Course
                </Heading>
                <Heading
                  size="lg"
                  as="h4"
                  color="deep_orange.400"
                  textAlign="right"
                >
                  30
                </Heading>
              </Flex>
              <Flex mt="19px" w="100%" justify="space-between">
                <Flex justify="space-between" align="start" gap="8px">
                  <Heading size="s" as="h5" color="gray.700">
                    Ratings
                  </Heading>
                  <Image
                    src="images/img_vector_amber_500.svg"
                    h="16px"
                    w="16px"
                  />
                </Flex>
                <Heading size="s" as="h5" textAlign="right">
                  4.9(153)
                </Heading>
              </Flex>
              <Flex mt="18px" w="100%" justify="space-between">
                <Heading size="s" as="h5" color="gray.700">
                  Experiences
                </Heading>
                <Heading size="s" as="h5" textAlign="right">
                  10 Years
                </Heading>
              </Flex>
              <Flex mt="18px" w="100%" justify="space-between">
                <Heading size="s" as="h5" color="gray.700">
                  Graduated
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
                  English, French
                </Heading>
              </Flex>
              <Flex
                mt="18px"
                mb="10px"
                w="100%"
                justify="space-between"
                align="center"
              >
                <Heading size="s" as="h5" color="gray.700">
                  Social
                </Heading>
                <Flex justify="space-between" align="center" gap="15px">
                  <Image
                    src="images/img_facebook_logo_1_gray_900.svg"
                    h="22px"
                    w="22px"
                  />
                  <IconButton
                    size="xs"
                    variant="fill"
                    colorScheme="deep_orange_400"
                    icon={<Image src="images/img_instagram_icon.svg" />}
                    aria-label="443:2458-instagramicon"
                    w="36px"
                    borderRadius="50%"
                  />
                  <Image src="images/img_twitter_logo_gray_900.svg" h="17px" />
                  <Image src="images/img_linkedin_icon_gray_900.svg" h="18px" />
                </Flex>
              </Flex>
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
        <Flex bg="black.900_01" w="100%" p="50px" borderRadius="20px">
          <Flex w="100%" justify="space-between" my="11px">
            <Flex w="16%" direction="column">
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
            <Flex w="75%" justify="space-between" align="center">
              <Flex gap="44px" w="66%" direction="column" align="center">
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
                <Flex w="100%" justify="space-evenly">
                  <Input
                    placeholder="enter your email"
                    pl="20px"
                    pr="35px"
                    borderTopLeftRadius="10px"
                    borderBottomLeftRadius="10px"
                    fontWeight={500}
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
              <Flex w="22%" direction="column">
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
          </Flex>
        </Flex>
      </Container>
      <Footerqa bg="gray.100" w="100%" display="flex" />
    </Flex>
  );
}
