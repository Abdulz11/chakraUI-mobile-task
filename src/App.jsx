import {
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Box,
  HStack,
  Container,
  Text,
  Circle,
  VStack,
  Flex,
  Spacer,
  Tabs,
  TabList,
  Tab,
  Image,
} from "@chakra-ui/react";
import nairaSymbol from "./assets/iPhone 11 Pro/Group 14.png";
import foodIcon from "./assets/iPhone 11 Pro/Group 15 new(1).png";
import savingsIcon from "./assets/iPhone 11 Pro/Group 15.png";
import Budget from "./assets/iPhone 11 Pro/Group 26.png";
import Home from "./assets/iPhone 11 Pro/home.jpg";
import Report from "./assets/iPhone 11 Pro/report.jpg";
import menu from "./assets/iPhone 11 Pro/Group 19.png";
import Profile from "./assets/iPhone 11 Pro/profile.png";
import barchart from "./assets/iPhone 11 Pro/bar-chart.png";

function App() {
  return (
    <>
      <Container mt='40px' p='20px' maxW={["100%", "100%", "1200px"]}>
        <Box>
          <Heading as='h1' w={["100%"]} fontSize={["28px", "28px", "50px"]}>
            Budget
          </Heading>
        </Box>
        <HStack py='20px'>
          <Image src={nairaSymbol} />
          <Text
            color='#707480'
            fontSize={["16px", "25px", "30px"]}
            fontWeight={500}
          >
            Monthly Budget
          </Text>
        </HStack>
        <Box p={5} shadow='md' borderWidth='1px' borderRadius='20px'>
          <Heading fontSize='28px' fontWeight='700'>
            ₦120,000
          </Heading>
        </Box>
        <HStack mt='30px'>
          <Box>
            <Tabs>
              <TabList color='grey'>
                <Tab fontWeight='700' fontSize={["16px", "25px", "30px"]}>
                  Last Month
                </Tab>
                <Tab fontWeight='700' fontSize={["16px", "25px", "30px"]}>
                  This Month
                </Tab>
              </TabList>
            </Tabs>
          </Box>
          <Box ml='auto'>
            <Image src={menu} alt='menu image' />
          </Box>
        </HStack>

        {/* PROGRESS BAR */}
        <Circle p='30px'>
          <CircularProgress
            value={50}
            size={["155px", "200px", "250px"]}
            color='blue.400'
            borderRadius='50%'
            borderWidth='12px'
            borderColor='blue.200'
            thickness='4px'
          >
            <CircularProgressLabel fontWeight='bold' color='blue.400'>
              49%
            </CircularProgressLabel>
          </CircularProgress>
        </Circle>
        <Box>
          <VStack mt='15px'>
            <Text
              color='#707480'
              fontSize={["16px", "18px", "30px", "40px"]}
              fontWeight={500}
            >
              Amount spent so far
            </Text>
            <Text
              fontWeight={700}
              fontSize={["18px", "20px", "34px", "43px"]}
              color='#0466C8'
            >
              ₦50,000/
              <Text as='span' color='#67A2DC'>
                ₦120,000
              </Text>
            </Text>
          </VStack>
        </Box>

        {/* CATERGORIES */}
        <Heading as='h2' mt={["30px", "30px", "43px"]} ml='20px'>
          Category Breakdown
        </Heading>
        <VStack mt={["35px", "35px", "45px"]}>
          <Flex justify='space-between' w='90%'>
            <Box>
              <Image src={foodIcon} />
            </Box>
            <Box ml='10px'>
              <Text
                fontWeight='600'
                fontSize={["10px", "16px", "25px", "30px"]}
              >
                Food and Drink
              </Text>
              <Text
                color='#707480'
                fontWeight='600'
                fontSize={["10px", "16px", "25px", "30px"]}
                textAlign='left'
              >
                40%
              </Text>
            </Box>
            <Spacer />
            <Box>
              <Text
                fontWeight='700'
                fontSize={["10px", "16px", "25px", "30px"]}
              >
                <Text as='span' color='#001233'>
                  ₦10,000/
                  <Text as='span' color='#C1C4CD'>
                    ₦20,000
                  </Text>
                </Text>
              </Text>
            </Box>
          </Flex>
          <Flex justify='space-between' mt='10px' w='90%'>
            <Box>
              <Image src={savingsIcon} />
            </Box>
            <Box ml='10px'>
              <Text fontWeight='600' fontSize='15px'>
                Savings
              </Text>
              <Text
                color='#707480'
                fontWeight='600'
                fontSize={["10px", "16px", "25px", "30px"]}
                textAlign='left'
              >
                20%
              </Text>
            </Box>
            <Spacer />
            <Box>
              <Text
                fontWeight='700'
                fontSize={["10px", "16px", "25px", "30px"]}
              >
                <Text as='span' color='#001233'>
                  ₦10,000/
                  <Text as='span' color='#C1C4CD'>
                    ₦20,000
                  </Text>
                </Text>
              </Text>
            </Box>
          </Flex>
        </VStack>

        {/* NAVBAR */}
        <Flex mt='50px' w='100%' mx='auto'>
          <Tabs defaultIndex={3}>
            <TabList color='grey'>
              <Tab mr={["25px", "25px", "40px", "110px"]} ml={{ md: "30px" }}>
                <VStack>
                  <Image src={Home} boxSize={{ md: "40px" }} />
                  <Text
                    fontWeight='600'
                    fontSize={["12px", "12px", "25px", "32px"]}
                  >
                    Home
                  </Text>
                </VStack>
              </Tab>
              <Spacer />
              <Tab mr={["25px", "25px", "50px", "120px"]}>
                <VStack>
                  <Image src={Report} boxSize={{ md: "40px" }} />
                  <Text
                    fontWeight='600'
                    fontSize={["12px", "12px", "25px", "32px"]}
                  >
                    Report
                  </Text>
                </VStack>
              </Tab>
              <Spacer />
              <Tab mr={["25px", "25px", "40px", "100px"]}>
                <VStack>
                  <Image
                    src={Budget}
                    alt='image'
                    boxSize={{ sm: "20px", md: "40px" }}
                  />
                  <Text
                    fontWeight='600'
                    fontSize={["12px", "12px", "25px", "32px"]}
                  >
                    Budget
                  </Text>
                </VStack>
              </Tab>
              <Spacer />
              <Tab mr={["25px", "25px", "50px", "90px"]}>
                <VStack>
                  <Image
                    src={barchart}
                    alt='barchart image'
                    color='grey'
                    boxSize={{ sm: "23px", md: "40px" }}
                  />
                  <Text
                    fontWeight='600'
                    fontSize={["12px", "12px", "25px", "32px"]}
                  >
                    Chart
                  </Text>
                </VStack>
              </Tab>
              <Spacer />
              <Tab mr={["25px", "25px", "100px", "90px"]}>
                <VStack>
                  <Image src={Profile} boxSize={{ md: "40px" }} alt='image' />
                  <Text
                    fontWeight='600'
                    fontSize={["12px", "12px", "25px", "32px"]}
                  >
                    Profile
                  </Text>
                </VStack>
              </Tab>
            </TabList>
          </Tabs>
        </Flex>
      </Container>
    </>
  );
}

export default App;
