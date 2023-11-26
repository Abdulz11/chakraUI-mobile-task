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
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Container mt='40px' p='20px'>
        <Box>
          <Heading>Budget</Heading>
        </Box>
        <HStack py='20px'>
          <img src='' alt='' />
          <Text color='#707480' fontSize='16px' fontWeight={500}>
            Monthly Budget
          </Text>
        </HStack>
        <Box p={5} shadow='md' borderWidth='1px' borderRadius='20px2'>
          <Heading fontSize='28px' fontWeight='700'>
            120,000
          </Heading>
        </Box>
        <HStack mt='30px'>
          <Box>
            <Text>Last Month</Text>
          </Box>
          <Box>
            <Text>This Month</Text>
          </Box>
          <Box>
            <img src='' alt='image' />
          </Box>
        </HStack>
        <Circle borderColor='blue.500'>
          <CircularProgress value={50} size='150px' color='blue.400'>
            <CircularProgressLabel fontWeight='bold' color='blue.500'>
              49%
            </CircularProgressLabel>
          </CircularProgress>
        </Circle>
        <Box>
          <VStack>
            <Text color='#707480' fontSize='16px' fontWeight={500}>
              Amount spent so far
            </Text>
            <Text fontWeight={700} fontSize='18px'>
              50,000/120,000
            </Text>
          </VStack>
        </Box>
        <Heading as='h2' mt='30px'>
          Category Breakdown
        </Heading>
        {/* categories */}
        <VStack>
          <HStack>
            <Box>Image</Box>
            <VStack>
              <Text>Food and Drink</Text>
              <Text>40%</Text>
            </VStack>
            <Box>
              <Text>10,000/20,000</Text>
            </Box>
          </HStack>
        </VStack>
        <VStack>
          <HStack spacing='24px'>
            <Box h='40px'>
              <HStack>
                <img src='' alt='image' />
                <VStack>
                  <Text>Savings</Text>
                  <Text>20%</Text>
                </VStack>
              </HStack>
            </Box>
            <Spacer />
            <Box h='40px'>
              <Text>10,000/20,000</Text>
            </Box>
          </HStack>
        </VStack>
        {/* nav */}
        <Flex mt='50px'>
          <Tabs defaultIndex={1}>
            <TabList>
              <Tab>
                <VStack>
                  <img src='' alt='image' />
                  <Text>Home</Text>
                </VStack>
              </Tab>
              <Tab>
                <VStack>
                  <img src='' alt='image' />
                  <Text>Report</Text>
                </VStack>
              </Tab>
              <Tab>
                <VStack>
                  <img src='' alt='image' />
                  <Text>Chart</Text>
                </VStack>
              </Tab>
              <Tab>
                <VStack>
                  <img src='' alt='image' />
                  <Text>Budget</Text>
                </VStack>
              </Tab>
              <Tab>
                <VStack>
                  <img src='' alt='image' />
                  <Text>Profile</Text>
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
