import { Link, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BiInjection, BiLock, BiShare, BiToggleLeft } from "react-icons/bi";
import { BsFillMarkdownFill } from "react-icons/bs";

import { HiMiniBellAlert } from "react-icons/hi2";
import { IoCheckmarkCircle, IoLockClosed, IoSettings } from "react-icons/io5";
import { LuLink } from "react-icons/lu";
import { MdEqualizer, MdTraffic } from "react-icons/md";

const BrowseByProducts = () => {
  return (
    <VStack fontFamily={"roboto"} my={"16"} alignItems={"start"}>
      <Text color={"#17333b"} fontWeight={"bolder"} fontSize={"3xl"}>
        Browse by Products
      </Text>
      <Stack
        w={"full"}
        borderBottom={"sm"}
        borderBottomColor={"gray.200"}
        py={"10"}
        direction={{ base: "column", md: "row" }}
      >
        <VStack w={"1/2"} alignItems={"start"}>
          <Text color={"#17333b"} fontSize={"2xl"} fontWeight={"bold"}>
            Scale
          </Text>
          <Text color={"gray.500"}>
            Scale data Streaming with security and control
          </Text>
        </VStack>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          gap={4}
          p={"4"}
          w={"full"}
        >
          <Link
            rounded={"md"}
            border={"sm"}
            borderColor={"gray.200"}
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{
              transform: "translateY(-8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Text
              p={"3"}
              roundedRight={"lg"}
              rounded={"sm"}
              color={"white"}
              bg={"#17333b"}
            >
              <IoSettings />
            </Text>
            <Text>Configuration</Text>
          </Link>
          <Link
            rounded={"md"}
            border={"sm"}
            borderColor={"gray.200"}
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{
              transform: "translateY(-8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Text
              p={"3"}
              roundedRight={"lg"}
              rounded={"sm"}
              color={"white"}
              bg={"#17333b"}
            >
              <IoCheckmarkCircle />
            </Text>
            <Text>Self-service Quickstart</Text>
          </Link>
          <Link
            rounded={"md"}
            border={"sm"}
            borderColor={"gray.200"}
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{
              transform: "translateY(-8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Text
              p={"3"}
              roundedRight={"lg"}
              rounded={"sm"}
              color={"white"}
              bg={"#17333b"}
            >
              <IoLockClosed />
            </Text>
            <Text>RBAC</Text>
          </Link>
          <Link
            rounded={"md"}
            border={"sm"}
            borderColor={"gray.200"}
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{
              transform: "translateY(-8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Text
              p={"3"}
              roundedRight={"lg"}
              rounded={"sm"}
              color={"white"}
              bg={"#17333b"}
            >
              <MdEqualizer />
            </Text>
            <Text>Kafka Resource Management</Text>
          </Link>
          <Link
            rounded={"md"}
            border={"sm"}
            borderColor={"gray.200"}
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{
              transform: "translateY(-8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Text
              p={"3"}
              roundedRight={"lg"}
              rounded={"sm"}
              color={"white"}
              bg={"#17333b"}
            >
              <HiMiniBellAlert />
            </Text>
            <Text>Monitor & Alerting</Text>
          </Link>
          <Link
            rounded={"md"}
            border={"sm"}
            borderColor={"gray.200"}
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{
              transform: "translateY(-8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Text
              p={"3"}
              roundedRight={"lg"}
              rounded={"sm"}
              color={"white"}
              bg={"#17333b"}
            >
              <MdTraffic />
            </Text>
            <Text>Traffic Control Policies</Text>
          </Link>
        </SimpleGrid>
      </Stack>
      <Stack
        w={"full"}
        borderBottom={"sm"}
        borderBottomColor={"gray.200"}
        py={"10"}
        direction={{ base: "column", md: "row" }}
      >
        <VStack w={"1/2"} alignItems={"start"}>
          <Text color={"#17333b"} fontSize={"2xl"} fontWeight={"bold"}>
            Shield
          </Text>
          <Text color={"gray.500"}>
            Protect sensitive data and adhere to regulations
          </Text>
        </VStack>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          gap={4}
          p={"4"}
          w={"full"}
        >
          <Link
            rounded={"md"}
            border={"sm"}
            borderColor={"gray.200"}
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{
              transform: "translateY(-8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Text
              p={"3"}
              roundedRight={"lg"}
              rounded={"sm"}
              color={"white"}
              bg={"#17333b"}
            >
              <BiLock />
            </Text>
            <Text>Encryption</Text>
          </Link>
          <Link
            rounded={"md"}
            border={"sm"}
            borderColor={"gray.200"}
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{
              transform: "translateY(-8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Text
              p={"3"}
              roundedRight={"lg"}
              rounded={"sm"}
              color={"white"}
              bg={"#17333b"}
            >
              <LuLink />
            </Text>
            <Text>Data Masking</Text>
          </Link>
          <Link
            rounded={"md"}
            border={"sm"}
            borderColor={"gray.200"}
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{
              transform: "translateY(-8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Text
              p={"3"}
              roundedRight={"lg"}
              rounded={"sm"}
              color={"white"}
              bg={"#17333b"}
            >
              <BsFillMarkdownFill />
            </Text>
            <Text>Audit</Text>
          </Link>
          <Link
            rounded={"md"}
            border={"sm"}
            borderColor={"gray.200"}
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{
              transform: "translateY(-8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Text
              p={"3"}
              roundedRight={"lg"}
              rounded={"sm"}
              color={"white"}
              bg={"#17333b"}
            >
              <BiInjection />
            </Text>
            <Text>Dynamic Header Injection</Text>
          </Link>
        </SimpleGrid>
      </Stack>
      <Stack
        w={"full"}
        borderBottom={"sm"}
        borderBottomColor={"gray.200"}
        py={"10"}
        direction={{ base: "column", md: "row" }}
      >
        <VStack w={"1/2"} alignItems={"start"}>
          <Text color={"#17333b"} fontSize={"2xl"} fontWeight={"bold"}>
            Exchange
          </Text>
          <Text color={"gray.500"}>
            Grow your business with secure data sharing
          </Text>
        </VStack>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
          }}
          gap={4}
          p={"4"}
          w={"full"}
        >
          <Link
            rounded={"md"}
            border={"sm"}
            borderColor={"gray.200"}
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{
              transform: "translateY(-8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Text
              p={"3"}
              roundedRight={"lg"}
              rounded={"sm"}
              color={"white"}
              bg={"#17333b"}
            >
              <BiShare />
            </Text>
            <Text>Third-Party Data Sharing</Text>
          </Link>
          <Link
            rounded={"md"}
            border={"sm"}
            borderColor={"gray.200"}
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{
              transform: "translateY(-8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Text
              p={"3"}
              roundedRight={"lg"}
              rounded={"sm"}
              color={"white"}
              bg={"#17333b"}
            >
              <BiToggleLeft />
            </Text>
            <Text>Partner Zones</Text>
          </Link>
        </SimpleGrid>
      </Stack>
    </VStack>
  );
};

export default BrowseByProducts;
