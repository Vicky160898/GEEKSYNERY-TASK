import React, { useEffect, useState } from "react";
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
import axios from "axios";
export default function Movies() {
  const [state, setState] = useState([]);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const data = {
    category: "movies",
    language: "kannada",
    genre: "all",
  };
  const PostData = async () => {
    let res = await axios.post(`https://hoblist.com/api/movieList`, data);
    setState(res.data.result);
  };

  useEffect(() => {
    PostData();
  }, []);

  console.log(state);
  return (
    <>
      <Navbar />
      <Grid
        w={"88%"}
        m={"10px auto"}
        templateColumns="repeat(2, 1fr)"
        gap={"1% 3%"}
      >
        {state?.map((el) => (
          <GridItem key={el._id} boxShadow="lg">
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
                  gap={"10px "}
                >
                  <Icon as={FaThumbsUp} />
                  <Text>{el.totalVoted}</Text>
                  <Icon as={FaThumbsDown} />
                  <Text>Votes</Text>
                </Flex>
              </Flex>

              {/* Second Section */}
              <Box m={2}>
                <Image
                  src={el.poster}
                  alt="Image"
                  w={"100%"}
                  height={"30vh"}
                  borderRadius={8}
                />
              </Box>

              {/* Third Section */}
              <Box px="8" py="2" ml={5}>
                <Text fontSize="lg" fontWeight="bold" mb="2">
                  {el.title}
                </Text>
                <Text>Genre : {el.genre}</Text>
                <Text>Director: {el.director[0]}</Text>
                <Text>Starring:-{el.stars}</Text>
                <Box>
                  <Text>
                    Mins | {el.language} |{" "}
                    {new Date(el.releasedDate * 1000).getDate()}{" "}
                    {
                      monthNames[
                        new Date(el.releasedDate * 1000).getMonth() + 1
                      ]
                    }
                  </Text>
                </Box>
                <Box>
                  <Text color={"#2096F2"}>
                    {el.pageViews} views | Voted by {el.totalVoted} People
                  </Text>
                </Box>
              </Box>
            </Box>
            <Button
              colorScheme="purple"
              size="md"
              display={"block"}
              margin={" 0 auto 10px auto"}
              w={"400px"}
            >
              Watch Trailer
            </Button>
          </GridItem>
        ))}
      </Grid>
    </>
  );
}
