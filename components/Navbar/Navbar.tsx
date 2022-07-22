import React, { Fragment } from "react";
import { Button, Text, Flex, UnorderedList } from "@chakra-ui/react";
import { useRouter } from "next/router";
import memeHooks from "./memeHooks";

function Navbar() {
  const router = useRouter();

  return (
    <Fragment>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px={"30px"}
        py={"10px"}
      >
        <Text color="brand.accent" fontSize={"30px"} fontWeight={"bold"}>
          <a href="/">hookBy</a>
        </Text>
        <UnorderedList
          display="flex"
          alignItems="center"
          listStyleType={"none"}
        >
          {memeHooks.map((meme, index) => {
            return (
              <li key={index}>
                <Button
                  display="flex"
                  alignItems="center"
                  mx={"10px"}
                  size="sm"
                  backgroundColor="rgba(255,255,255,0.1)"
                  color="#fff"
                  _hover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <img src={meme.icon} alt={meme.name} width="25px" />
                  <Text marginLeft={"5px"}>{meme.name}</Text>
                </Button>
              </li>
            );
          })}
        </UnorderedList>
        <Flex>
          <Button
            mx={4}
            onClick={() => {
              router.push("/");
            }}
            backgroundColor="brand.accent"
            color="#fff"
          >
            Sign in
          </Button>
          <Button
            onClick={() => {
              router.push("/sponsor");
            }}
          >
            Sponsor
          </Button>
        </Flex>
      </Flex>
    </Fragment>
  );
}

export default Navbar;
