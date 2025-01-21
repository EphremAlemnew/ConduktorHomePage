import React, { useState, useEffect } from "react";
import {
  Box,
  VStack,
  Text,
  Stack,
  Image,
  Blockquote,
  BlockquoteIcon,
  Float,
  Heading,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Toaster } from "@/components/ui/toaster";
const Home = () => {
  return (
    <VStack spacing={16} mt={"24"} mx={{ lg: "72" }} align="stretch">
      <Box>
        <HStack rounded={"xl"} bg={"#e9f7f7"} w={"full"}>
          <VStack p={"16"}>
            <Text fontWeight={"bold"} fontSize={"xl"} alignSelf={"start"}>
              Get Started with Conduktor
            </Text>
            <Text>
              Learn how to install Conduktor and explore our Enterprise Data
              Management Platform for Streaming.
            </Text>
            <HStack>
              {" "}
              <Button
                variant={"plain"}
                rounded={"md"}
                bg={"#17333b"}
                fontWeight={"bold"}
                color={"white"}
              >
                Get Started
              </Button>
              <Button variant={"plain"} fontWeight={"bold"}>
                Start with proxy
              </Button>
            </HStack>
          </VStack>
          <Image
            w={"1/2"}
            src="img.png"
            mt={"16"}
            rounded={"xl"}
            border={"xl"}
            borderColor={"#d9ffff"}
            borderRight={"none"}
            borderBottom={"none"}
          />
        </HStack>
      </Box>
    </VStack>
  );
};

export default Home;
