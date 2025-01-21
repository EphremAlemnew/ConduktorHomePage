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
import {
  BiArrowToRight,
  BiData,
  BiEqualizer,
  BiInjection,
  BiLock,
  BiShare,
  BiStar,
  BiToggleLeft,
  BiTrafficCone,
} from "react-icons/bi";
import { BsFillMarkdownFill, BsMarkdown, BsMarkerTip } from "react-icons/bs";
import { CiMonitor } from "react-icons/ci";
import { FaMarker } from "react-icons/fa";
import { FaRadiation } from "react-icons/fa6";
import { HiMiniBellAlert, HiSpeakerWave } from "react-icons/hi2";
import {
  IoAlert,
  IoCheckmarkCircle,
  IoLockClosed,
  IoSettings,
} from "react-icons/io5";
import { LuLink } from "react-icons/lu";
import {
  MdDataUsage,
  MdEqualizer,
  MdMobiledataOff,
  MdTraffic,
} from "react-icons/md";
import { RxDoubleArrowRight } from "react-icons/rx";

const BrowseByUseCase = () => {
  return (
    <VStack my={"16"} alignItems={"start"}>
      <Text fontWeight={"bolder"} fontSize={"3xl"}>
        Browse by Use Case
      </Text>
      <Stack
        w={"full"}
        borderBottom={"sm"}
        borderBottomColor={"gray.200"}
        py={"10"}
        direction={{ base: "column", md: "row" }}
      >
        <VStack w={"1/2"} alignItems={"start"}>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
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
