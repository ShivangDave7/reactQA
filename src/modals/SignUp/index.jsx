import React from "react";

import {
  Modal,
  ModalContent,
  ModalOverlay,
  Link,
  Text,
  Flex,
  Image,
  Input,
  Box,
  Checkbox,
  Button,
  InputLeftElement,
  InputGroup,
  Heading,
} from "@chakra-ui/react";

export default function SignUp({ isOpen, onClose, ...props }) {
  return (
    <Modal {...props} isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent minW="1069px">
        <Box h="799px" w="100%" position="relative">
          <Box
            h="799px"
            bg="white.A700"
            w="99%"
            position="absolute"
            right="0px"
            left="0px"
            bottom="0px"
            top="0px"
            justifyContent="center"
            m="auto"
            borderRadius="15px"
          />
          <Flex
            w="100%"
            justify="space-evenly"
            position="absolute"
            right="-7%"
            bottom="0px"
            top="0px"
            h="100%"
            m="auto"
          >
            <Flex w="100%" align="center">
              <Flex gap="25px" w="34%" direction="column" align="start">
                <Flex gap="11px" w="38%" align="center">
                  <Image
                    src="images/img_dashicons_welcome_learn_more.svg"
                    h="22px"
                    w="22px"
                  />
                  <Image src="images/img_educatsy_black_900.svg" h="21px" />
                </Flex>
                <Heading
                  size="2xl"
                  as="h1"
                  color="black.900"
                  fontFamily="Metropolis"
                >
                  Welcome to
                  <br />
                  Educatsy Online
                  <br />
                  Learning Platform
                </Heading>
                <Image src="images/img_5790719_1.svg" h="336px" />
                <Box
                  ml="159px"
                  w="36px"
                  display="flex"
                  justifyContent="center"
                  h="10px"
                />
              </Flex>
              <Box
                h="641px"
                ml="84px"
                bgGradient="linear-gradient(180deg, #0a023c00,#0a033c,#0a023c00)"
                w="1px"
              />
              <Flex ml="7px" w="59%" direction="column" align="center">
                <Button
                  variant="fill"
                  colorScheme="white_A700"
                  leftIcon={
                    <Image src="images/img_googleplus_1_1.svg" mr="23px" />
                  }
                  color="gray.700"
                  borderColor="gray.300"
                  borderWidth="1px"
                  borderStyle="solid"
                  minW="331px"
                  borderRadius="10px"
                >
                  Sign in with google
                </Button>
                <Flex mt="26px" gap="11px" w="41%" align="start">
                  <Box h="1px" mt="7px" bg="gray.700" w="8%" />
                  <Link href="#">
                    <Text textAlign="center" fontWeight={500}>
                      Or sign in with your email
                    </Text>
                  </Link>
                  <Box h="1px" mt="7px" bg="gray.700" w="8%" />
                </Flex>
                <Text color="gray.900_01" mt="28px" fontWeight={500}>
                  Full name
                </Text>
                <Box h="392px" mt="9px" w="100%" position="relative">
                  <Flex
                    w="72%"
                    direction="column"
                    align="end"
                    position="absolute"
                    left="0%"
                    bottom="0px"
                    top="0px"
                    h="100%"
                    m="auto"
                  >
                    <Flex w="100%" direction="column">
                      <Flex w="100%" justify="space-between" align="center">
                        <InputGroup ml="77px" size="sm">
                          <InputLeftElement>
                            <Image src="images/img_account_24_outline.svg" />
                          </InputLeftElement>
                          <Input
                            colorScheme="white_A700"
                            placeholder="Enter name"
                            borderColor="gray.300"
                            borderWidth="1px"
                            borderRadius="10px"
                          />
                        </InputGroup>
                        <Text color="gray.900_01" mr="274px" fontWeight={500}>
                          Email
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex w="83%" direction="column" align="center">
                      <InputGroup size="sm">
                        <InputLeftElement>
                          <Image src="images/img_message_24_outline.svg" />
                        </InputLeftElement>
                        <Input
                          colorScheme="white_A700"
                          placeholder="user@example.com"
                          borderColor="gray.300"
                          borderWidth="1px"
                          borderRadius="10px"
                        />
                      </InputGroup>
                      <Button
                        variant="fill"
                        mt="135px"
                        fontWeight={500}
                        w="100%"
                        borderRadius="10px"
                      >
                        Sign up
                      </Button>
                      <Checkbox color="gray.700" mt="27px" fontWeight={500}>
                        I agreed to the Terms & Conditions
                      </Checkbox>
                    </Flex>
                  </Flex>
                  <Box
                    h="325px"
                    w="88%"
                    position="absolute"
                    bottom="5%"
                    right="0%"
                    m="auto"
                  >
                    <Text color="gray.900_01" mt="134px" fontWeight={500}>
                      Password
                    </Text>
                    <Box
                      h="325px"
                      w="100%"
                      position="absolute"
                      left="0px"
                      bottom="0px"
                      right="0px"
                      top="0px"
                      justifyContent="center"
                      m="auto"
                    >
                      <Input
                        size="xs"
                        colorScheme="white_A700"
                        placeholder=""
                        borderColor="gray.300"
                        borderWidth="1px"
                        w="68%"
                        position="absolute"
                        bottom="34%"
                        left="0%"
                        m="auto"
                        borderRadius="10px"
                      />
                      <Image
                        src="images/img_vector_gray_700.svg"
                        h="325px"
                        position="absolute"
                        right="-3%"
                        bottom="0px"
                        top="0px"
                        m="auto"
                      />
                      <Flex
                        gap="15px"
                        w="26%"
                        align="start"
                        position="absolute"
                        bottom="38%"
                        left="3%"
                        m="auto"
                      >
                        <Image
                          src="images/img_lock_pad_lock_s_gray_700.svg"
                          h="18px"
                          w="18px"
                        />
                        <Text>*************</Text>
                      </Flex>
                    </Box>
                  </Box>
                </Box>
                <Flex mt="32px" w="38%">
                  <Link href="#">
                    <Text>Don’t have an account?</Text>
                  </Link>
                  <Link href="#">
                    <Text color="red.300" fontWeight={500} ml="4px">
                      Sign in
                    </Text>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </ModalContent>
    </Modal>
  );
}
