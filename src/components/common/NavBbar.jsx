import {
  Box,
  HStack,
  Spacer,
  Button,
  VStack,
  useDisclosure,
  Text,
  Link,
} from "@chakra-ui/react";

import { useColorMode } from "../ui/color-mode";
import { BiMenu, BiX, BiLogoDrupal, BiMoon, BiSun } from "react-icons/bi";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
const NavBbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const bg = colorMode === "light" ? "white" : "gray.800";
  const textColor = colorMode === "light" ? "gray.800" : "white";

  return (
    <HStack
      px={4}
      fontFamily="nunito"
      position="fixed"
      top={0}
      w={"full"}
      zIndex={1000}
      bg={bg}
      color={textColor}
      h={"20"}
      justifyContent={"space-between"}
    >
      {/* Logo or App Name */}
      <Link href="/" textDecoration={"none"} variant={"plain"}>
        <BiLogoDrupal size={30} />
        <Text color={"#17333b"} fontSize="2xl" fontWeight="bold">
          conduktor
        </Text>
        <Text fontSize="2xl" color={"#86a157"} fontWeight={"lighter"}>
          docs
        </Text>
      </Link>
      <Spacer />

      {/* Desktop Navigation Links */}
      <Spacer />
      <HStack fontFamily={"roboto"} display={{ base: "none", md: "flex" }}>
        <Button fontWeight={"bold"} variant={"plain"}>
          Console
        </Button>
        <Button fontWeight={"bold"} variant={"plain"}>
          Gateway
        </Button>
        <Button fontWeight={"bold"} variant={"plain"}>
          Blog
        </Button>
        <Button fontWeight={"bold"} variant={"plain"}>
          Changelog
        </Button>{" "}
        <Button fontWeight={"bold"} variant={"plain"}>
          FAQ
        </Button>
        <Button
          variant={"plain"}
          onClick={toggleColorMode}
          rounded={"md"}
          bg={"#bcf553"}
          fontWeight={"bold"}
          px={"8"}
        >
          Get Started
        </Button>
      </HStack>
      <Button variant={"plain"} onClick={toggleColorMode} rounded={"full"}>
        {colorMode === "light" ? <BiMoon /> : <BiSun />}
      </Button>
      <DrawerRoot placement={"top"}>
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <Button variant={"plain"} display={{ base: "flex", md: "none" }}>
            {isOpen ? <BiX /> : <BiMenu />}
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <Box>
              <VStack fontFamily={"roboto"} spacing={4} w={"full"}>
                <Button
                  w={"1/2"}
                  borderBottom={"sm"}
                  borderBottomColor={"gray.300"}
                  fontWeight={"bold"}
                  variant={"plain"}
                >
                  Console
                </Button>
                <Button
                  w={"1/2"}
                  borderBottom={"sm"}
                  borderBottomColor={"gray.300"}
                  fontWeight={"bold"}
                  variant={"plain"}
                >
                  Gateway
                </Button>
                <Button
                  w={"1/2"}
                  borderBottom={"sm"}
                  borderBottomColor={"gray.300"}
                  fontWeight={"bold"}
                  variant={"plain"}
                >
                  Blog
                </Button>
                <Button
                  w={"1/2"}
                  borderBottom={"sm"}
                  borderBottomColor={"gray.300"}
                  fontWeight={"bold"}
                  variant={"plain"}
                >
                  Changelog
                </Button>{" "}
                <Button
                  w={"1/2"}
                  borderBottom={"sm"}
                  borderBottomColor={"gray.300"}
                  fontWeight={"bold"}
                  variant={"plain"}
                >
                  FAQ
                </Button>
                <Button
                  variant={"plain"}
                  onClick={toggleColorMode}
                  rounded={"md"}
                  bg={"#bcf553"}
                  fontWeight={"bold"}
                  px={"8"}
                >
                  Get Started
                </Button>
              </VStack>
            </Box>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </HStack>
  );
};

export default NavBbar;
