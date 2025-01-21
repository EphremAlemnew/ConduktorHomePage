import React from "react";
import {
  Box,
  VStack,
  Text,
  Stack,
  Image,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { BiSolidDashboard } from "react-icons/bi";
import {
  BsDownload,
  BsFolder,
  BsLayoutSidebar,
  BsWindowSidebar,
} from "react-icons/bs";
import BrowseByProducts from "./BrowseByProducts";
import BrowseByUseCase from "./BrowseByUseCase";

const Home = () => {
  return (
    <VStack spacing={16} mt={"24"} mx={{ base: "4", lg: "72" }} align="stretch">
      <Box>
        <Stack
          rounded={"xl"}
          bg={"#e9f7f7"}
          w={"full"}
          direction={{ base: "column", lg: "row" }}
        >
          <VStack p={"16"} align="stretch">
            <Text fontWeight={"bold"} fontSize={"xl"} alignSelf={"start"}>
              Get Started with Conduktor
            </Text>
            <Text>
              Learn how to install Conduktor and explore our Enterprise Data
              Management Platform for Streaming.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4} mt={4}>
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
            </Stack>
          </VStack>
          <Image
            w={{ base: "full", lg: "1/2" }}
            src="img.png"
            mt={{ base: 2, lg: "16" }}
            rounded={"xl"}
            border={"xl"}
            borderColor={"#d9ffff"}
            borderRight={"none"}
            borderBottom={"none"}
          />
        </Stack>
        <SimpleGrid
          columns={{
            base: 1,
            md: 3,
          }}
          gap={4}
          w={"full"}
          mt={"8"}
        >
          <VStack
            rounded={"xl"}
            bg={"#e9f7f7"}
            w={"full"}
            alignItems={"start"}
            alignContent={"space-between"}
          >
            <Box p={"6"}>
              <Text
                bg={"white"}
                shadow={"lg"}
                p={"4"}
                rounded={"xl"}
                fontWeight={"bolder"}
              >
                <BsWindowSidebar fontWeight={"bolder"} />
              </Text>
            </Box>
            <Box p={"6"}>
              <Text fontSize={"2xl"}>Platform Overview</Text>
              <Text fontSize={"lg"}>
                Explore Conduktor, its architecture and feature set
              </Text>
            </Box>
          </VStack>
          <VStack
            rounded={"xl"}
            bg={"#e9f7f7"}
            w={"full"}
            alignItems={"start"}
            alignContent={"space-between"}
          >
            <Box p={"6"}>
              <Text
                bg={"white"}
                shadow={"lg"}
                p={"4"}
                rounded={"xl"}
                fontWeight={"bolder"}
              >
                <BsDownload className="" fontWeight={"bolder"} />
              </Text>
            </Box>
            <Box p={"6"}>
              <Text fontSize={"2xl"}>Implement Conducktor</Text>
              <Text fontSize={"lg"}>
                Get step-by-step guidance on deploying Conduktor efficiently
              </Text>
            </Box>
          </VStack>
          <VStack
            rounded={"xl"}
            bg={"#e9f7f7"}
            w={"full"}
            alignItems={"start"}
            alignContent={"space-between"}
          >
            <Box p={"6"}>
              <Text
                bg={"white"}
                shadow={"lg"}
                p={"4"}
                rounded={"xl"}
                fontWeight={"bolder"}
              >
                <BsFolder fontWeight={"bolder"} />
              </Text>
            </Box>
            <Box p={"6"}>
              <Text fontSize={"2xl"}>Reference</Text>
              <Text fontSize={"lg"}>
                Browse our CLI and API documentation Terraform and more.
              </Text>
            </Box>
          </VStack>
        </SimpleGrid>
      </Box>
      <BrowseByProducts />
      <BrowseByUseCase />
    </VStack>
  );
};

export default Home;
