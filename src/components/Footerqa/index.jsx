import React from "react";

import {
  Link,
  Text,
  UnorderedList,
  ListItem,
  Heading,
  Flex,
  Image,
  IconButton,
} from "@chakra-ui/react";

export default function Footerqa({ ...props }) {
  return (
    <Flex {...props} direction="column" as="footer">
      <Flex
        mt="80px"
        mb="83px"
        ml="80px"
        mr="186px"
        w="82%"
        justify="center"
        align="center"
      >
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
                aria-label="I1072:4515;1049:2236-instagram_icon_One"
                w="36px"
                borderRadius="50%"
              />
              <Image src="images/img_twitter_logo.svg" h="17px" />
              <Image src="images/img_linkedin_icon.svg" h="18px" />
            </Flex>
          </Flex>
          <Flex gap="13px" w="100%" direction="column" align="start">
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
  );
}
