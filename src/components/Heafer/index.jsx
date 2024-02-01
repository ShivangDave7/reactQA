import React from "react";

import {
  Image,
  Text,
  Flex,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export default function Heafer({ ...props }) {
  return (
    <Flex {...props} as="header">
      <Image src="images/img_logo.svg" h="30px" ml="80px" my="22px" />
      <UnorderedList
        styleType="none"
        ml="54px"
        w="51%"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="start"
        my="25px"
      >
        <ListItem>
          <Link href="#">
            <Text color="gray.900" fontWeight={500} mt="3px">
              Shop
            </Text>
          </Link>
        </ListItem>
        <ListItem>
          <Flex ml="25px" justify="center" align="start">
            <Text color="gray.900" mt="3px" textAlign="right" fontWeight={500}>
              For Kindergarten
            </Text>
            <Image src="images/img_arrow_down.svg" h="24px" w="24px" />
          </Flex>
        </ListItem>
        <ListItem>
          <Flex ml="24px" justify="center" align="start">
            <Text color="gray.900" mt="3px" textAlign="right" fontWeight={500}>
              For High School
            </Text>
            <Image src="images/img_arrow_down.svg" h="24px" w="24px" />
          </Flex>
        </ListItem>
        <ListItem>
          <Flex ml="24px" justify="center" align="start">
            <Text color="gray.900" mt="3px" textAlign="right" fontWeight={500}>
              For College
            </Text>
            <Image src="images/img_arrow_down.svg" h="24px" w="24px" />
          </Flex>
        </ListItem>
        <ListItem>
          <Flex ml="24px" justify="center" align="center">
            <Text color="gray.900" textAlign="right" fontWeight={500}>
              Courses
            </Text>
            <Image src="images/img_arrow_down.svg" h="24px" w="24px" />
          </Flex>
        </ListItem>
        <ListItem>
          <Link href="#">
            <Text color="gray.900" fontWeight={500} ml="24px">
              Mentors
            </Text>
          </Link>
        </ListItem>
      </UnorderedList>
      <Flex ml="54px" mr="80px" gap="35px" w="19%" justify="center" my="22px">
        <Flex w="38%" justify="space-between" align="center">
          <Text color="gray.900" textAlign="right" fontWeight={500}>
            Cart (0)
          </Text>
          <Image src="images/img_shopping_bag_24.svg" h="30px" w="30px" />
        </Flex>
        <Flex w="49%" justify="space-between" align="end">
          <Text color="gray.900" mb="3px" textAlign="right" fontWeight={500}>
            My Account
          </Text>
          <Image src="images/img_profile_24_outline.svg" h="30px" w="30px" />
        </Flex>
      </Flex>
    </Flex>
  );
}
