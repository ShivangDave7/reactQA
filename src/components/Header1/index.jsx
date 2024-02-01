import React from "react";

import { Image, Text, Flex, UnorderedList, ListItem } from "@chakra-ui/react";

export default function Header1({ ...props }) {
  return (
    <Flex {...props} as="header">
      <Flex w="89%" justify="center" align="center" mx="auto" my="22px">
        <Image
          src="images/img_dashicons_welcome_learn_more.svg"
          h="30px"
          w="30px"
        />
        <Image src="images/img_educatsy_black_900.svg" h="27px" ml="12px" />
        <UnorderedList
          styleType="none"
          ml="54px"
          w="83%"
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="start"
        >
          <ListItem>
            <Text color="gray.900" mt="6px" fontWeight={500}>
              Shop
            </Text>
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
            <Text color="gray.900" mt="5px" ml="24px" fontWeight={500}>
              Mentors
            </Text>
          </ListItem>
          <ListItem>
            <Flex ml="54px" gap="10px" justify="center" align="center">
              <Text color="gray.900" textAlign="right" fontWeight={500}>
                Cart (0)
              </Text>
              <Image src="images/img_shopping_bag_24.svg" h="30px" w="30px" />
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
      </Flex>
    </Flex>
  );
}
