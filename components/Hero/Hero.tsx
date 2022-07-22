import React from "react";
import Navbar from "../Navbar/Navbar";
import { Flex, Text, Button, Box, Center } from "@chakra-ui/react";
import Link from "next/link";

import { useRouter } from "next/router";
function Hero() {
  const router = useRouter();
  return (
    <Box backgroundColor={"brand.dark1"} height={"100vh"}>
      <Navbar />
      <Box>
        <Text
          fontSize={"100px"}
          fontWeight={"bold"}
          color="brand.accent"
          textAlign={"center"}
          marginTop={"40px"}
        >
          Hooks is bae
        </Text>
        <Text
          fontSize={"20px"}
          fontWeight={"light"}
          color={"#fff"}
          textAlign={"center"}
          marginTop={"10px"}
          maxWidth={"700px"}
          margin="auto"
        >
          Hooks were added to React in version 16.8. Hooks allow function
          components to have access to state and other React features.
        </Text>

        <Text
          fontSize={"15px"}
          fontWeight={"light"}
          textAlign="center"
          color="rgba(255,255,255,0.5)"
        >
          Source: <Link href="https://w3schools.com">w3schools</Link>
        </Text>
        <Text
          fontSize={"20px"}
          fontWeight={"light"}
          color={"#fff"}
          textAlign={"center"}
          marginTop={"10px"}
          maxWidth={"700px"}
          margin="auto"
        >
          This platform gives you access to custom React hooks you can use in
          your projects and also allow you to write and share your own custom
          hooks.
        </Text>
        <Center mt={"30px"}>
          <Link href="/login">
            <Button mt={"20px"} backgroundColor="brand.accent" color="#fff">
              Get Started
            </Button>
          </Link>
        </Center>
      </Box>
    </Box>
  );
}

export default Hero;
