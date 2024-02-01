import React from "react";

import { Slider } from "../../components";
import {
  Modal,
  ModalContent,
  ModalOverlay,
  Box,
  Text,
  Flex,
  Checkbox,
  Button,
  InputLeftElement,
  InputGroup,
  InputRightElement,
  Image,
  Input,
  Heading,
  Circle,
} from "@chakra-ui/react";

export default function LogIn({ isOpen, onClose, ...props }) {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <Modal {...props} isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent minW="1052px">
        <Box h="799px" w="100%" position="relative">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            responsive={{
              0: { items: 1 },
              550: { items: 1 },
              1050: { items: 0 },
            }}
            renderDotsItem={(props) => (
              <Circle
                size={props.isActive ? "10px" : "8px"}
                borderColor={props.isActive ? "red.300" : ""}
                borderWidth={props.isActive ? "1px" : ""}
                borderStyle={props.isActive ? "solid" : ""}
                bg={props.isActive ? "white.A700" : "#ff65517f"}
                mr="5px"
              />
            )}
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setSliderState(e?.item);
            }}
            ref={sliderRef}
            m="auto"
            items={[...Array(3)].map(() => (
              <React.Fragment key={Math.random()}>
                <Flex bg="white.A700" p="79px" mx="10px" borderRadius="15px">
                  <Flex gap="7px" w="100%" align="center">
                    <Flex w="50%" justify="space-between" align="center">
                      <Flex pb="35px" direction="column" align="center">
                        <Flex
                          gap="25px"
                          w="100%"
                          direction="column"
                          align="start"
                        >
                          <Flex gap="11px" w="38%" align="center">
                            <Image
                              src="images/img_dashicons_welcome_learn_more.svg"
                              h="22px"
                              w="22px"
                            />
                            <Image src="images/img_educatsy.svg" h="21px" />
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
                        </Flex>
                      </Flex>
                      <Box
                        h="641px"
                        bgGradient="linear-gradient(180deg, #0a023c00,#1c1c1b,#0a023c00)"
                        w="1px"
                      />
                    </Flex>
                    <Flex w="50%" direction="column" align="center">
                      <Button
                        variant="fill"
                        colorScheme="white_A700"
                        leftIcon={
                          <Image
                            src="images/img_googleplus_1_1.svg"
                            mr="23px"
                          />
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
                      <Flex
                        mt="26px"
                        gap="11px"
                        w="57%"
                        justify="flex-end"
                        align="start"
                      >
                        <Box h="1px" mt="7px" bg="gray.700" w="8%" />
                        <Text textAlign="center">
                          Or sign in with your email
                        </Text>
                        <Box h="1px" mt="7px" bg="gray.700" w="8%" />
                      </Flex>
                      <Flex mt="28px" gap="23px" w="100%" direction="column">
                        <Flex mr="77px" w="83%" direction="column">
                          <Text
                            color="gray.900"
                            ml="77px"
                            mr="252px"
                            fontWeight={500}
                          >
                            Email
                          </Text>
                          <InputGroup>
                            <InputLeftElement>
                              <Image src="images/img_message_24_outline.svg" />
                            </InputLeftElement>
                            <Input
                              placeholder="user@example.com"
                              color="gray.700"
                              pr="35px"
                            />
                          </InputGroup>
                        </Flex>
                        <Flex
                          ml="77px"
                          w="83%"
                          direction="column"
                          align="center"
                        >
                          <Flex
                            gap="9px"
                            w="100%"
                            direction="column"
                            align="start"
                          >
                            <Text color="gray.900" fontWeight={500}>
                              Password
                            </Text>
                            <InputGroup size="sm">
                              <InputLeftElement>
                                <Image src="images/img_lock_pad_lock_s_gray_700.svg" />
                              </InputLeftElement>
                              <Input
                                colorScheme="white_A700"
                                placeholder="*************"
                                borderColor="gray.300"
                                borderWidth="1px"
                                borderRadius="10px"
                              />
                              <InputRightElement>
                                <Image src="images/img_vector_gray_700.svg" />
                              </InputRightElement>
                            </InputGroup>
                          </Flex>
                          <Button
                            variant="fill"
                            mt="30px"
                            fontWeight={500}
                            w="100%"
                            borderRadius="10px"
                          >
                            Sign In
                          </Button>
                          <Flex
                            mt="27px"
                            w="100%"
                            justify="space-between"
                            align="start"
                          >
                            <Checkbox color="gray.700">
                              Keep me signed in
                            </Checkbox>
                            <Text mt="3px">Forgot Password?</Text>
                          </Flex>
                          <Flex mt="32px" w="66%" justify="center">
                            <Text fontWeight={500}>Don’t have an account?</Text>
                            <Text color="red.300" ml="4px" fontWeight={500}>
                              Sign Up
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </React.Fragment>
            ))}
          />
        </Box>
      </ModalContent>
    </Modal>
  );
}
