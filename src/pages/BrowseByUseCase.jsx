import {
  Button,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import { RxDoubleArrowRight } from "react-icons/rx";

const BrowseByUseCase = () => {
  return (
    <VStack
      fontFamily={"roboto"}
      mt={{ base: "4", lg: "8" }}
      alignItems={"start"}
    >
      <Text color={"#17333b"} fontWeight={"bolder"} fontSize={"3xl"}>
        Browse by Use Case
      </Text>
      <Stack w={"full"} py={"10"} direction={{ base: "column", md: "row" }}>
        <VStack w={"1/2"} alignItems={"start"}>
          <Text color={"#17333b"} fontSize={"2xl"} fontWeight={"bold"}>
            Use cases
          </Text>
          <Text color={"gray.500"}>
            Scale data streaming with security and control
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
            borderColor={"gray.200"}
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{
              transform: "translateX(8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Text p={"3"} color={"#17333b"}>
              <RxDoubleArrowRight />
            </Text>
            <Text>Configure SQL</Text>
          </Link>
          <Link
            rounded={"md"}
            borderColor={"gray.200"}
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{
              transform: "translateX(8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Text p={"3"} color={"#17333b"}>
              <RxDoubleArrowRight />
            </Text>
            <Text>Configure Custom Deserializers</Text>
          </Link>
          <Link
            rounded={"md"}
            borderColor={"gray.200"}
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{
              transform: "translateX(8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Text p={"3"} color={"#17333b"}>
              <RxDoubleArrowRight />
            </Text>
            <Text>Configure Chargeback</Text>
          </Link>
          <Link
            rounded={"md"}
            borderColor={"gray.200"}
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{
              transform: "translateX(8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Text p={"3"} color={"#17333b"}>
              <RxDoubleArrowRight />
            </Text>
            <Text>Configure SNI Routing</Text>
          </Link>
          <Link
            rounded={"md"}
            borderColor={"gray.200"}
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{
              transform: "translateX(8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Text p={"3"} color={"#17333b"}>
              <RxDoubleArrowRight />
            </Text>
            <Text>Configure Exportable Audit Log</Text>
          </Link>
          <Link
            rounded={"md"}
            borderColor={"gray.200"}
            fontWeight={"bold"}
            textDecoration={"none"}
            _hover={{
              transform: "translateX(8px)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Text p={"3"} color={"#17333b"}>
              <RxDoubleArrowRight fontWeight={"bolder"} />
            </Text>
            <Text>Configure Failover</Text>
          </Link>
        </SimpleGrid>
      </Stack>
    </VStack>
  );
};

export default BrowseByUseCase;
