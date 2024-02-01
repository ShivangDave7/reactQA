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

export default function HomeFooter({
  learnmoreicon,
  educatsyicon,
  p2021educatsy = "©2021 Educatsy",
  educatsyisa = "Educatsy is a registered",
  coursestext = "Courses",
  classroomcoursestext = "Classroom courses",
  virtualclassroomcoursestext = "Virtual classroom courses",
  elearningcoursestext = "E-learning courses",
  videocoursestext = "Video Courses",
  offlinecoursestext = "Offline Courses",
  communitytext = "Community",
  learnerstext = "Learners",
  partnerstext = "Partners",
  developerstext = "Developers",
  transactionstext = "Transactions",
  blogtext = "Blog",
  teachingcentertext = "Teaching Center",
  quicklinkstext = "Quick links",
  hometext = "Home",
  professionaleducationtext = "Professional Education",
  coursestwotext = "Courses",
  admissionstext = "Admissions",
  testimonialtext = "Testimonial",
  programstext = "Programs",
  more = "More",
  presstext = "Press",
  investorstext = "Investors",
  termstext = "Terms",
  privacytext = "Privacy",
  helptext = "Help",
  contacttext = "Contact",
  ...props
}) {
  return (
    <Flex {...props}>
      <Flex mb="3px" w="92%" align="start">
        <UnorderedList
          styleType="none"
          w="16%"
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="flex-start"
        >
          <ListItem>
            <Link href="#">
              <Flex justify="space-between" align="center">
                {!!learnmoreicon ? (
                  <Image src={learnmoreicon} h="30px" w="30px" />
                ) : null}
                {!!educatsyicon ? <Image src={educatsyicon} h="27px" /> : null}
              </Flex>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#">
              <Flex mt="22px" ml="13px" justify="space-between" align="center">
                <Image src="images/img_facebook_logo_1.svg" h="22px" w="22px" />
                <IconButton
                  size="xs"
                  variant="fill"
                  colorScheme="deep_orange_400"
                  icon={<Image src="images/img_instagram_icon.svg" />}
                  aria-label="1049:2237-instagramicon"
                  w="36px"
                  borderRadius="50%"
                />
                <Image src="images/img_twitter_logo.svg" h="17px" />
                <Image src="images/img_linkedin_icon.svg" h="18px" />
              </Flex>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#">
              <Text mt="46px">{p2021educatsy}</Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="#">
              <Text mt="14px">{educatsyisa}</Text>
            </Link>
          </ListItem>
        </UnorderedList>
        <Flex ml="95px" gap="24px" w="16%" direction="column" align="start">
          <Heading size="md" as="h5">
            {coursestext}
          </Heading>
          <Flex w="100%" direction="column" align="start">
            <Text>{classroomcoursestext}</Text>
            <Text mt="21px" lineHeight="30px">
              {virtualclassroomcoursestext}
            </Text>
            <Text mt="23px">{elearningcoursestext}</Text>
            <Text mt="25px">{videocoursestext}</Text>
            <Text mt="26px">{offlinecoursestext}</Text>
          </Flex>
        </Flex>
        <Flex ml="99px" gap="22px" w="11%" direction="column" align="center">
          <Heading size="md" as="h5">
            {communitytext}
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
                <Text>{learnerstext}</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Text mt="27px">{partnerstext}</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Text mt="28px">{developerstext}</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Text mt="25px">{transactionstext}</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Text mt="28px">{blogtext}</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Text mt="26px">{teachingcentertext}</Text>
              </Link>
            </ListItem>
          </UnorderedList>
        </Flex>
        <Flex ml="150px" gap="24px" w="15%" direction="column" align="start">
          <Heading size="md" as="h5">
            {quicklinkstext}
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
                <Text>{hometext}</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Text mt="26px">{professionaleducationtext}</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Text mt="27px">{coursestwotext}</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Text mt="26px">{admissionstext}</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Text mt="27px">{testimonialtext}</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Text mt="28px">{programstext}</Text>
              </Link>
            </ListItem>
          </UnorderedList>
        </Flex>
        <Flex ml="104px" gap="24px" w="6%" direction="column" align="start">
          <Heading size="md" as="h5">
            {more}
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
                <Text>{presstext}</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Text mt="27px">{investorstext}</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Text mt="27px">{termstext}</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Text mt="28px">{privacytext}</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Text mt="27px">{helptext}</Text>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Text mt="25px">{contacttext}</Text>
              </Link>
            </ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </Flex>
  );
}
