import React from "react";

import { SelectBox } from "../../components";
import HomeFooter from "../../components/HomeFooter";
import {
  Image,
  Flex,
  Button,
  Input,
  Text,
  Heading,
  Container,
  Box,
  IconButton,
  Link,
  SimpleGrid,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Home1Page() {
  return (
    <Flex bg="gray.100" w="100%" direction="column" align="center">
      <Flex gap="60px" w="100%" direction="column" align="center">
        <Flex
          bg="gray.100"
          w="100%"
          justify="center"
          align="center"
          as="header"
        >
          <Container
            gap="54px"
            w="100%"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            maxW="1280px"
            px="0px"
            mx="auto"
            my="22px"
          >
            <Image src="images/img_logo.svg" h="30px" />
            <UnorderedList
              styleType="none"
              w="58%"
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="start"
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
                <Flex ml="24px" justify="center" align="start">
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
                <Flex ml="24px" justify="center" align="start">
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
            <Flex w="21%" justify="space-between">
              <Flex justify="space-between" align="center" gap="10px">
                <Text color="gray.900" textAlign="right" fontWeight={500}>
                  Cart (0)
                </Text>
                <Image src="images/img_shopping_bag_24.svg" h="30px" w="30px" />
              </Flex>
              <Flex justify="space-between" align="end" gap="10px">
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
            </Flex>
          </Container>
        </Flex>
        <Container
          gap="42px"
          w="100%"
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          maxW="1280px"
          px="0px"
        >
          <Flex gap="30px" w="49%" direction="column" align="start">
            <Button
              size="xl"
              variant="fill"
              colorScheme="white_A700"
              color="red.300"
              fontWeight={500}
              minW="236px"
              borderRadius="10px"
            >
              Never Stop Learning
            </Button>
            <Flex gap="30px" w="100%" direction="column" align="center">
              <Heading size="3xl" as="h1">
                Grow up your skills
                <br />
                by online courses
                <br />
                with Educatsy
              </Heading>
              <Text lineHeight="30px">
                Educatsy is a Global training provider based across the UK that
                specializes in accredited and bespoke training courses. We crush
                the barriers to getting a degree.
              </Text>
            </Flex>
            <Flex
              bg="white.A700"
              w="100%"
              justify="space-between"
              align="center"
              p="8px"
              borderRadius="10px"
            >
              <Flex ml="8px" justify="space-between" align="start" gap="20px">
                <SelectBox
                  size="xs"
                  shape="square"
                  indicator={<Image src="images/img_arrow_down_red_300.svg" />}
                  name="rowkindergarten"
                  placeholder="Kindergarten"
                  options={dropDownOptions}
                  isSearchable={true}
                  isMulti={true}
                  style={{
                    color: "gray.500_01",
                    mt: "3px",
                    fontWeight: 500,
                    w: "47%",
                  }}
                />
                <Box h="30px" bg="blue_gray.100" w="1px" />
                <Text color="gray.500_01" mt="5px" fontWeight={500}>
                  Class/Course
                </Text>
              </Flex>
              <Button
                size="4xl"
                variant="fill"
                leftIcon={<Image src="images/img_search.svg" mr="5px" />}
                fontWeight={500}
                minW="143px"
                borderRadius="10px"
              >
                Search
              </Button>
            </Flex>
          </Flex>
          <Box h="699px" w="49%" position="relative">
            <Box
              h="669px"
              w="89%"
              position="absolute"
              bottom="0%"
              right="0px"
              left="0px"
              m="auto"
            >
              <Image
                src="images/img_vector_1.svg"
                h="563px"
                position="absolute"
                top="1%"
                right="0px"
                left="0px"
                m="auto"
              />
              <Flex
                h="100%"
                bgImage="url(/images/img_group_3.png)"
                bgSize="cover"
                bgRepeat="no-repeat"
                w="88%"
                direction="column"
                align="center"
                position="absolute"
                right="0%"
                bottom="0px"
                top="0px"
                px="46px"
                m="auto"
                borderRadius="30px"
              >
                <Box h="669px" w="100%" position="relative">
                  <Image
                    src="images/img_school_boy_hold.png"
                    h="669px"
                    w="100%"
                    m="auto"
                  />
                  <Flex
                    bg="white.A700"
                    boxShadow="sm"
                    w="20%"
                    direction="column"
                    align="center"
                    position="absolute"
                    top="4%"
                    right="1%"
                    p="13px"
                    m="auto"
                    borderRadius="10px"
                  >
                    <Image src="images/img_lightbulb_1.svg" h="50px" />
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Flex
              bg="white.A700"
              boxShadow="sm"
              w="12%"
              direction="column"
              align="center"
              position="absolute"
              left="11%"
              bottom="0px"
              top="0px"
              h="100%"
              p="13px"
              m="auto"
              borderRadius="10px"
            >
              <Image src="images/img_presentation_1.svg" h="50px" />
            </Flex>
            <Flex
              bg="white.A700"
              boxShadow="sm"
              w="12%"
              direction="column"
              align="center"
              position="absolute"
              left="0%"
              top="0%"
              p="13px"
              m="auto"
              borderRadius="10px"
            >
              <Image src="images/img_book_1.svg" h="50px" />
            </Flex>
            <Flex
              bg="white.A700"
              boxShadow="sm"
              w="12%"
              direction="column"
              align="center"
              position="absolute"
              bottom="9%"
              right="0%"
              p="13px"
              m="auto"
              borderRadius="10px"
            >
              <Image src="images/img_blocks_1.svg" h="50px" />
            </Flex>
          </Box>
        </Container>
      </Flex>
      <Flex mt="160px" gap="40px" w="59%" direction="column" align="center">
        <Flex gap="20px" w="100%" direction="column" align="center">
          <Heading
            size="2xl"
            as="h1"
            fontFamily="Metropolis"
            textAlign="center"
          >
            High quality video, audio
            <br />& live classes
          </Heading>
          <Text textAlign="center" lineHeight="30px">
            High-definition video is video of higher resolution and quality than
            standard-definition. While there is no standardized meaning for
            high-definition, generally any video image with considerably more
            than
            <br />
            480 vertical scan lines or 576 vertical lines is considered
            high-definition.
          </Text>
        </Flex>
        <Button
          variant="fill"
          fontWeight={500}
          minW="162px"
          borderRadius="10px"
        >
          Visit Courses
        </Button>
      </Flex>
      <Container
        mt="100px"
        w="100%"
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        maxW="1120px"
        px="0px"
      >
        <Flex gap="60px" w="100%" direction="column" align="center">
          <Box h="540px" w="100%" position="relative">
            <Image
              src="images/img_rectangle_2868.png"
              h="540px"
              w="100%"
              m="auto"
              borderRadius="16px"
            />
            <Flex
              w="91%"
              justify="space-between"
              align="end"
              position="absolute"
              bottom="6%"
              right="0px"
              left="0px"
              m="auto"
            >
              <Image
                src="images/img_portrait_little_girl_coloring.png"
                h="215px"
                borderRadius="16px"
              />
              <Image src="images/img_call_button_red_700.svg" h="60px" />
              <Image src="images/img_arrow.svg" h="60px" />
            </Flex>
          </Box>
          <Flex gap="30px" w="100%">
            <Flex
              gap="20px"
              bg="white.A700"
              w="100%"
              align="center"
              p="15px"
              borderRadius="10px"
            >
              <Flex
                h="70px"
                bg="red.50_01"
                w="70px"
                direction="column"
                align="center"
                p="20px"
                borderRadius="10px"
              >
                <Image
                  src="images/img_speaker_filled_audio_tool.svg"
                  h="30px"
                  w="30px"
                />
              </Flex>
              <Heading size="lg" as="h4">
                Audio Classes
              </Heading>
            </Flex>
            <Flex
              gap="20px"
              bg="white.A700"
              w="100%"
              align="center"
              p="15px"
              borderRadius="10px"
            >
              <Flex
                h="70px"
                bg="gray.50"
                w="70px"
                direction="column"
                align="center"
                p="20px"
                borderRadius="10px"
              >
                <Image
                  src="images/img_live_streaming_1.svg"
                  h="30px"
                  w="30px"
                />
              </Flex>
              <Heading size="lg" as="h4">
                Live Classes
              </Heading>
            </Flex>
            <Flex
              gap="20px"
              bg="white.A700"
              w="100%"
              align="center"
              p="15px"
              borderRadius="10px"
            >
              <Flex
                h="70px"
                bg="cyan.50"
                w="70px"
                direction="column"
                align="center"
                p="20px"
                borderRadius="10px"
              >
                <Image src="images/img_vector.svg" h="30px" w="30px" />
              </Flex>
              <Heading size="lg" as="h4">
                Recorded Class
              </Heading>
            </Flex>
          </Flex>
        </Flex>
      </Container>
      <Container
        mt="101px"
        w="100%"
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        maxW="1280px"
        px="0px"
      >
        <Flex gap="52px" w="100%" direction="column" align="center">
          <Flex gap="28px" w="100%" direction="column" align="center">
            <Heading
              size="2xl"
              as="h1"
              fontFamily="Metropolis"
              textAlign="center"
            >
              Qualified lessons for students
            </Heading>
            <Text textAlign="center" lineHeight="30px">
              A lesson or class is a structured period of time where learning is
              intended to occur. <br />
              It involves one or more students being taught by a teacher or
              instructor.
            </Text>
          </Flex>
          <Flex gap="25px" w="41%" justify="center">
            <Button
              variant="fill"
              colorScheme="gray_200"
              fontWeight={500}
              minW="161px"
              borderRadius="10px"
            >
              Kindergarten
            </Button>
            <Button
              variant="fill"
              colorScheme="orange_200"
              fontWeight={500}
              minW="152px"
              borderRadius="10px"
            >
              High School
            </Button>
            <Button
              variant="fill"
              colorScheme="gray_200"
              fontWeight={500}
              minW="151px"
              borderRadius="10px"
            >
              College
            </Button>
          </Flex>
          <Flex w="100%" justify="space-evenly">
            <Flex w="100%" justify="space-evenly">
              <Flex w="100%" direction="column" align="center">
                <SimpleGrid
                  w="100%"
                  minH="auto"
                  gap="40px"
                  columns={4}
                  justifyContent="center"
                >
                  <Flex
                    gap="25px"
                    bg="white.A700"
                    w="100%"
                    direction="column"
                    align="center"
                    p="15px"
                    borderRadius="15px"
                  >
                    <Flex
                      mt="15px"
                      gap="19px"
                      w="100%"
                      direction="column"
                      align="center"
                    >
                      <Image src="images/img_group.svg" h="50px" w="50px" />
                      <Flex
                        gap="9px"
                        w="100%"
                        direction="column"
                        align="center"
                      >
                        <Heading size="lg" as="h4" textAlign="center">
                          Standard One
                        </Heading>
                        <Text textAlign="center" lineHeight="30px">
                          Standard 1 is a foundation Standard that reflects 7
                          important concepts...
                        </Text>
                      </Flex>
                    </Flex>
                    <Button size="md" mb="15px" fontWeight={500} minW="159px">
                      Class Details
                    </Button>
                  </Flex>
                  <Flex
                    gap="25px"
                    bg="white.A700"
                    w="100%"
                    direction="column"
                    align="center"
                    p="15px"
                    borderRadius="15px"
                  >
                    <Flex
                      mt="15px"
                      gap="19px"
                      w="100%"
                      direction="column"
                      align="center"
                    >
                      <Image
                        src="images/img_group_gray_800.svg"
                        h="50px"
                        w="50px"
                      />
                      <Flex
                        gap="9px"
                        w="100%"
                        direction="column"
                        align="center"
                      >
                        <Heading size="lg" as="h4" textAlign="center">
                          Standard Two
                        </Heading>
                        <Text textAlign="center" lineHeight="30px">
                          Standard 2 builds on the foundations of Standard 1 and
                          includes requirements...
                        </Text>
                      </Flex>
                    </Flex>
                    <Button size="md" mb="15px" fontWeight={500} minW="159px">
                      Class Details
                    </Button>
                  </Flex>
                  <Flex
                    gap="25px"
                    bg="white.A700"
                    w="100%"
                    direction="column"
                    align="center"
                    p="15px"
                    borderRadius="15px"
                  >
                    <Flex
                      mt="15px"
                      gap="19px"
                      w="100%"
                      direction="column"
                      align="center"
                    >
                      <Image
                        src="images/img_group_teal_a400.svg"
                        h="50px"
                        w="50px"
                      />
                      <Flex
                        gap="9px"
                        w="100%"
                        direction="column"
                        align="center"
                      >
                        <Heading size="lg" as="h4" textAlign="center">
                          Standard Three
                        </Heading>
                        <Text textAlign="center" lineHeight="30px">
                          Standard 3 of the Aged Care Quality Standards applies
                          to all services delivering personal...
                        </Text>
                      </Flex>
                    </Flex>
                    <Button size="md" mb="15px" fontWeight={500} minW="159px">
                      Class Details
                    </Button>
                  </Flex>
                  <Flex
                    gap="25px"
                    bg="white.A700"
                    w="100%"
                    direction="column"
                    align="center"
                    p="15px"
                    borderRadius="15px"
                  >
                    <Flex
                      mt="15px"
                      gap="19px"
                      w="100%"
                      direction="column"
                      align="center"
                    >
                      <Image
                        src="images/img_group_gray_800_50x50.svg"
                        h="50px"
                        w="50px"
                      />
                      <Flex
                        gap="9px"
                        w="100%"
                        direction="column"
                        align="center"
                      >
                        <Heading size="lg" as="h4" textAlign="center">
                          Standard Four
                        </Heading>
                        <Text textAlign="center" lineHeight="30px">
                          Standard 4 of the Aged Care Quality Standards focuses
                          on services and supports...
                        </Text>
                      </Flex>
                    </Flex>
                    <Button size="md" mb="15px" fontWeight={500} minW="159px">
                      Class Details
                    </Button>
                  </Flex>
                  <Flex
                    gap="25px"
                    bg="white.A700"
                    w="100%"
                    direction="column"
                    align="center"
                    p="15px"
                    borderRadius="15px"
                  >
                    <Flex
                      mt="15px"
                      gap="19px"
                      w="100%"
                      direction="column"
                      align="center"
                    >
                      <Image
                        src="images/img_group_teal_a400_50x50.svg"
                        h="50px"
                        w="50px"
                      />
                      <Flex
                        gap="9px"
                        w="100%"
                        direction="column"
                        align="center"
                      >
                        <Heading size="lg" as="h4" textAlign="center">
                          Standard Five
                        </Heading>
                        <Text textAlign="center" lineHeight="30px">
                          Standard 5 Learning Resources. Learning Resources
                          ensure that the school has the...
                        </Text>
                      </Flex>
                    </Flex>
                    <Button size="md" mb="15px" fontWeight={500} minW="159px">
                      Class Details
                    </Button>
                  </Flex>
                  <Flex
                    gap="25px"
                    bg="white.A700"
                    w="100%"
                    direction="column"
                    align="center"
                    p="15px"
                    borderRadius="15px"
                  >
                    <Flex
                      mt="15px"
                      gap="19px"
                      w="100%"
                      direction="column"
                      align="center"
                    >
                      <Image
                        src="images/img_group_deep_orange_500.svg"
                        h="50px"
                        w="50px"
                      />
                      <Flex
                        gap="9px"
                        w="100%"
                        direction="column"
                        align="center"
                      >
                        <Heading size="lg" as="h4" textAlign="center">
                          Standard Six
                        </Heading>
                        <Text textAlign="center" lineHeight="30px">
                          Standard 6 requires an organisation to have a system
                          to resolve complaints...
                        </Text>
                      </Flex>
                    </Flex>
                    <Button size="md" mb="15px" fontWeight={500} minW="159px">
                      Class Details
                    </Button>
                  </Flex>
                  <Flex
                    gap="25px"
                    bg="white.A700"
                    w="100%"
                    direction="column"
                    align="center"
                    p="15px"
                    borderRadius="15px"
                  >
                    <Flex
                      mt="15px"
                      gap="19px"
                      w="100%"
                      direction="column"
                      align="center"
                    >
                      <Image
                        src="images/img_group_red_500_01.svg"
                        h="50px"
                        w="50px"
                      />
                      <Flex
                        gap="9px"
                        w="100%"
                        direction="column"
                        align="center"
                      >
                        <Heading size="lg" as="h4" textAlign="center">
                          Standard Seven
                        </Heading>
                        <Text textAlign="center" lineHeight="30px">
                          Standard 7 Blood Management mandates that leaders of
                          health service organizations...
                        </Text>
                      </Flex>
                    </Flex>
                    <Button size="md" mb="15px" fontWeight={500} minW="159px">
                      Class Details
                    </Button>
                  </Flex>
                  <Flex
                    gap="25px"
                    bg="white.A700"
                    w="100%"
                    direction="column"
                    align="center"
                    p="15px"
                    borderRadius="15px"
                  >
                    <Flex
                      mt="15px"
                      gap="21px"
                      w="100%"
                      direction="column"
                      align="center"
                    >
                      <Image
                        src="images/img_group_orange_300.svg"
                        h="50px"
                        w="50px"
                      />
                      <Flex
                        gap="7px"
                        w="100%"
                        direction="column"
                        align="center"
                      >
                        <Heading size="lg" as="h4" textAlign="center">
                          Standard Eight
                        </Heading>
                        <Text textAlign="center" lineHeight="30px">
                          Standard 8 Course from NCERT Solutions help students
                          to understand...
                        </Text>
                      </Flex>
                    </Flex>
                    <Button size="md" mb="15px" fontWeight={500} minW="159px">
                      Class Details
                    </Button>
                  </Flex>
                </SimpleGrid>
              </Flex>
            </Flex>
          </Flex>
          <Button
            variant="fill"
            fontWeight={500}
            minW="202px"
            borderRadius="10px"
          >
            Visit More Classes
          </Button>
        </Flex>
      </Container>
      <Container
        pl="38px"
        pr="0px"
        mt="100px"
        gap="21px"
        bg="red.50"
        w="100%"
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        maxW="1280px"
        py="38px"
        borderRadius="20px"
      >
        <Flex ml="32px" gap="30px" w="41%" direction="column" align="start">
          <Button
            size="xl"
            variant="fill"
            colorScheme="black_900"
            fontWeight={500}
            minW="169px"
            borderRadius="10px"
          >
            College Level
          </Button>
          <Flex gap="20px" w="100%" direction="column" align="center">
            <Heading size="2xl" as="h1" fontFamily="Metropolis">
              Don’t waste time in
              <br />
              COVID-19 pandemic.
              <br />
              Develop your skills.
            </Heading>
            <Text lineHeight="30px">
              High-definition video is video of higher resolution and quality
              than standard-definition. While there is no standardized
              <br />
              meaning for high-definition, generally any video.
            </Text>
          </Flex>
          <Link
            href="#"
            bg="red.300"
            w="500px"
            justifyContent="center"
            display="flex"
            alignItems="center"
            h="51px"
            borderRadius="10px"
          >
            <Text
              color="white.A700"
              textAlign="center"
              fontWeight={500}
              px="35px"
              py="15px"
            >
              Register Now
            </Text>
          </Link>
        </Flex>
        <Box h="591px" w="56%" position="relative">
          <Box
            h="587px"
            w="100%"
            position="absolute"
            top="0px"
            left="0px"
            bottom="0px"
            right="0px"
            justifyContent="center"
            m="auto"
          >
            <Image
              src="images/img_image_587x689.png"
              h="587px"
              w="100%"
              m="auto"
            />
            <Flex
              gap="374px"
              w="93%"
              direction="column"
              position="absolute"
              bottom="0%"
              right="0px"
              left="0px"
              m="auto"
            >
              <Flex ml="50px" gap="369px" w="74%" justify="space-between">
                <Image src="images/img_4.svg" h="50px" mb="29px" w="50px" />
                <IconButton
                  size="2xl"
                  variant="fill"
                  colorScheme="white_A700"
                  icon={<Image src="images/img_5.svg" />}
                  aria-label="1049:2013-five"
                  mt="29px"
                  boxShadow="sm"
                  w="50px"
                />
              </Flex>
              <Box
                h="20px"
                bg="black.900"
                w="100%"
                borderRadius="50%"
                sx={{
                  "backdrop-filter": "opacity(0.5)",
                  filter: "blur(100.00px)",
                }}
              />
            </Flex>
          </Box>
          <Image
            src="images/img_6.svg"
            h="50px"
            w="50px"
            position="absolute"
            right="14%"
            top="0%"
            m="auto"
          />
        </Box>
      </Container>
      <Container
        mt="100px"
        w="100%"
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        maxW="1280px"
        px="0px"
      >
        <Flex w="100%" justify="space-between" align="center">
          <Image src="images/img_image_521x510.png" h="521px" />
          <Flex gap="40px" direction="column" align="start">
            <Flex gap="20px" w="100%" direction="column" align="center">
              <Heading size="2xl" as="h1" fontFamily="Metropolis">
                Want to share your
                <br />
                knowledge? Join us
                <br />a Mentor
              </Heading>
              <Text lineHeight="30px">
                High-definition video is video of higher resolution and quality
                than standard-definition. While there is no standardized meaning
                for high-definition, generally any video.
              </Text>
            </Flex>
            <Button
              variant="fill"
              fontWeight={500}
              minW="204px"
              borderRadius="10px"
            >
              Career Information
            </Button>
          </Flex>
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
                size="2xl"
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
        </Container>
        <HomeFooter
          learnmoreicon="images/img_dashicons_welcome_learn_more.svg"
          educatsyicon="images/img_educatsy_black_900.svg"
          mt="100px"
          bg="gray.100"
          w="100%"
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          p="80px"
        />
      </Flex>
    </Flex>
  );
}
