import { Link, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BiSupport } from "react-icons/bi";
import { BsSlack } from "react-icons/bs";
import { MdMenuBook } from "react-icons/md";

const UsefulLinks = () => {
  return (
    <VStack mt={{ base: "4", lg: "8" }} alignItems={"start"}>
      <Text fontWeight={"bolder"} fontSize={"3xl"}>
        Useful links
      </Text>
      <Stack
        borderTop={"sm"}
        borderTopColor={"gray.300"}
        w={"full"}
        mt={{ base: "4", lg: "16" }}
        py={"10"}
        direction={{ base: "column", md: "row" }}
      >
        <SimpleGrid
          columns={{
            base: 1,
            md: 3,
          }}
          gap={4}
          p={"4"}
          w={"full"}
        >
          <Link
            rounded={"2xl"}
            bg={"#e9f7f7"}
            w={"full"}
            display={"block"}
            textDecoration={"none"}
            _hover={{
              transform: "translateY(-8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <VStack p={"4"} alignContent={"space-between"} alignItems={"start"}>
              <Text
                bg={"white"}
                shadow={"lg"}
                p={"4"}
                w={"fit-content"}
                rounded={"xl"}
                fontWeight={"bolder"}
                alignItems={"start"}
              >
                <BsSlack size={20} />
              </Text>
              <Text mt={"16"} fontSize={"2xl"} fontWeight={"bold"}>
                Slack
              </Text>
              <Text fontSize={"lg"} color={"gray.400"}>
                Explore Conduktor, its architecture and feature set.
              </Text>
            </VStack>
          </Link>
          <Link
            rounded={"xl"}
            bg={"#e9f7f7"}
            w={"full"}
            display={"block"}
            textDecoration={"none"}
            _hover={{
              transform: "translateY(-8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <VStack p={"4"} alignContent={"space-between"} alignItems={"start"}>
              <Text
                bg={"white"}
                shadow={"lg"}
                p={"4"}
                w={"fit-content"}
                rounded={"xl"}
                fontWeight={"bolder"}
                alignItems={"start"}
              >
                <BiSupport size={20} />
              </Text>
              <Text mt={"16"} fontSize={"2xl"} fontWeight={"bold"}>
                Support
              </Text>
              <Text fontSize={"lg"} color={"gray.400"}>
                Get step-by-step guidance on deploying Conduktor efficiently
              </Text>
            </VStack>
          </Link>
          <Link
            rounded={"xl"}
            bg={"#e9f7f7"}
            w={"full"}
            display={"block"}
            textDecoration={"none"}
            _hover={{
              transform: "translateY(-8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <VStack p={"4"} alignContent={"space-between"} alignItems={"start"}>
              <Text
                bg={"white"}
                shadow={"lg"}
                p={"4"}
                w={"fit-content"}
                rounded={"xl"}
                fontWeight={"bolder"}
                alignItems={"start"}
              >
                <MdMenuBook size={20} />
              </Text>
              <Text mt={"16"} fontSize={"2xl"} fontWeight={"bold"}>
                Changelog
              </Text>
              <Text color={"gray.400"} fontSize={"lg"}>
                Browse our CLI and API documentation Terraform and more.
              </Text>
            </VStack>
          </Link>
        </SimpleGrid>
      </Stack>
    </VStack>
  );
};

export default UsefulLinks;
