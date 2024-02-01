import React from "react";

import { RatingBar } from "./..";
import { IconButton, Image, Heading, Box, Flex } from "@chakra-ui/react";

export default function EduviCoursesDetailsMaincard({
  title = "The Three Musketeers",
  price = "$40.00",
  ...props
}) {
  return (
    <Flex {...props}>
      <Flex gap="15px" align="center">
        <Image src="images/img_image_103x160.png" w="39%" borderRadius="10px" />
        <Flex w="58%" direction="column" align="start">
          <Heading size="md" as="h5">
            {title}
          </Heading>
          <Box
            value={5}
            isEditable={true}
            color="#ffc107ff"
            activeColor="#ffc107ff"
            size={20}
            as={RatingBar}
            mt="12px"
            w="112px"
            display="flex"
            justifyContent="space-between"
          />
          <Heading size="md" as="h5" color="deep_orange.400" mt="13px">
            {price}
          </Heading>
        </Flex>
      </Flex>
      <IconButton
        size="lg"
        variant="fill"
        icon={<Image src="images/img_shopping_bag_24_white_a700.svg" />}
        aria-label="1066:2406-shoppingbagtwen"
        w="44px"
        borderRadius="6px"
      />
    </Flex>
  );
}
