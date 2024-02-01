import React from "react";

import {
  Text,
  UnorderedList,
  ListItem,
  Heading,
  Flex,
  Image,
  IconButton,
  Button,
  Input,
} from "@chakra-ui/react";

export default function Footer1({ ...props }) {
  return (
    <Flex {...props} direction="column" as="footer">
      <Flex
        gap="115px"
        bg="black.900_01"
        w="89%"
        align="center"
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
      <Flex mt="100px" bg="gray.100" w="100%" p="80px">
        <Flex mb="3px" w="92%" align="start">
          <Flex gap="46px" w="16%" direction="column" align="center">
            <Flex gap="22px" w="97%" direction="column" align="center">
              <Image src="images/img_logo.svg" h="30px" />
              <Flex w="85%" justify="space-between" align="center">
                <Image src="images/img_facebook_logo_1.svg" h="22px" w="22px" />
                <IconButton
                  size="xs"
                  variant="fill"
                  colorScheme="deep_orange_400"
                  icon={<Image src="images/img_instagram_icon.svg" />}
                  aria-label="I1072:4454;1049:2236-instagram_icon"
                  w="36px"
                  borderRadius="50%"
                />
                <Image src="images/img_twitter_logo.svg" h="17px" />
                <Image src="images/img_linkedin_icon.svg" h="18px" />
              </Flex>
            </Flex>
            <Flex gap="14px" w="100%" direction="column" align="start">
              <Text>©2021 Educatsy</Text>
              <Text>Educatsy is a registered</Text>
            </Flex>
          </Flex>
          <Flex ml="95px" gap="24px" w="16%" direction="column" align="start">
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
          <Flex ml="99px" gap="22px" w="11%" direction="column" align="center">
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
                <Text>Learners</Text>
              </ListItem>
              <ListItem>
                <Text mt="27px">Partners</Text>
              </ListItem>
              <ListItem>
                <Text mt="28px">Developers</Text>
              </ListItem>
              <ListItem>
                <Text mt="25px">Transactions</Text>
              </ListItem>
              <ListItem>
                <Text mt="28px">Blog</Text>
              </ListItem>
              <ListItem>
                <Text mt="26px">Teaching Center</Text>
              </ListItem>
            </UnorderedList>
          </Flex>
          <Flex ml="150px" gap="24px" w="15%" direction="column" align="start">
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
                <Text>Home</Text>
              </ListItem>
              <ListItem>
                <Text mt="26px">Professional Education</Text>
              </ListItem>
              <ListItem>
                <Text mt="27px">Courses</Text>
              </ListItem>
              <ListItem>
                <Text mt="26px">Admissions</Text>
              </ListItem>
              <ListItem>
                <Text mt="27px">Testimonial</Text>
              </ListItem>
              <ListItem>
                <Text mt="28px">Programs</Text>
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
                <Text>Press</Text>
              </ListItem>
              <ListItem>
                <Text mt="27px">Investors</Text>
              </ListItem>
              <ListItem>
                <Text mt="27px">Terms</Text>
              </ListItem>
              <ListItem>
                <Text mt="28px">Privacy</Text>
              </ListItem>
              <ListItem>
                <Text mt="27px">Help</Text>
              </ListItem>
              <ListItem>
                <Text mt="25px">Contact</Text>
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
