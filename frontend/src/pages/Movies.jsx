import React from "react";
import Navbar from "../component/Navbar";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
export default function Movies() {
  return (
    <>
      <Navbar />
      <Grid
        w={"95%"}
        m={"10px auto"}
        templateColumns="repeat(3, 1fr)"
        gap={"5%"}
      >
        <GridItem>
          {/* Content for the first column goes here */}
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            mb="4"
            display={"flex"}
          >
            {/* First Section */}
            <Flex
              align="center"
              justify="space-between"
              px="4"
              py="2"
              bg="purple.500"
              color="white"
            >
              <Flex
                align="center"
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
              >
                <Icon as={FaThumbsUp} />
                <Text>10</Text>
                <Icon as={FaThumbsDown} />
              </Flex>
            </Flex>

            {/* Second Section */}
            <Box>
              <Image
                src="https://via.placeholder.com/300x150"
                alt="Placeholder Image"
              />
            </Box>

            {/* Third Section */}
            <Box px="4" py="2">
              <Text fontSize="lg" fontWeight="bold" mb="2">
                Movie Title
              </Text>
              <Text>Movie Description</Text>
            </Box>
          </Box>
          <Button
            colorScheme="purple"
            size="md"
            display={"block"}
            margin={"auto"}
            w={"410px"}
          >
            Watch Trailer
          </Button>
        </GridItem>
        <GridItem>
          {/* Content for the second column goes here */}
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            mb="4"
            display={"flex"}
          >
            {/* First Section */}
            <Flex
              align="center"
              justify="space-between"
              px="4"
              py="2"
              bg="purple.500"
              color="white"
            >
              <Flex
                align="center"
                display={"flex"}
                flexDirection={"column"}
                gap={"10px"}
              >
                <Icon as={FaThumbsUp} />
                <Text>10</Text>
                <Icon as={FaThumbsDown} />
              </Flex>
            </Flex>

            {/* Second Section */}
            <Box>
              <Image
                src="https://via.placeholder.com/300x150"
                alt="Placeholder Image"
              />
            </Box>
            {/* Third Section */}
            <Box px="4" py="2">
              <Text fontSize="lg" fontWeight="bold" mb="2">
                Movie Title
              </Text>
              <Text>Movie Description</Text>
            </Box>
          </Box>
          <Button
            colorScheme="purple"
            size="md"
            display={"block"}
            margin={"auto"}
            w={"410px"}
          >
            Watch Trailer
          </Button>
        </GridItem>
      </Grid>
    </>
  );
}
