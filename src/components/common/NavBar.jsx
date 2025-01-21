import {
  Flex,
  Box,
  HStack,
  Link,
  IconButton,
  Spacer,
  Button,
  VStack,
  useDisclosure,
  Text,
  Input,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useColorMode } from "../ui/color-mode";
import { BiMoon, BiSun, BiMenu, BiX } from "react-icons/bi";
import { useColorModeValue } from "../ui/color-mode";
import {
  DrawerActionTrigger,
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
import { Avatar, AvatarGroup } from "../ui/avatar";
import { calcLength } from "framer-motion";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const bg = colorMode === "light" ? "white" : "gray.800";
  const textColor = colorMode === "light" ? "gray.800" : "white";

  return (
    <HStack
      px={4}
      shadow="sm"
      fontFamily="nunito"
      position="fixed"
      top={0}
      w={{ base: "full", md: "calc(100% - 240px)" }}
      zIndex={1000}
      bg={bg}
      color={textColor}
      h={16}
      justifyContent={"space-between"}
    >
      {/* Logo or App Name */}
      <Box fontWeight="bold" fontSize="lg">
        <Text>Erga mail</Text>
      </Box>
      <Spacer />

      {/* Desktop Navigation Links */}
      <HStack
        fontWeight={"bold"}
        spaceX={"8"}
        as="nav"
        display={{ base: "none", md: "flex" }}
        justifyContent="space-between"
        alignSelf={"center"}
      >
        <Input
          placeholder="Search here..."
          name="name"
          w={"2xl"}
          rounded={"2xl"}
        />
      </HStack>

      {/* Mobile Menu Icon */}
      <Spacer />
      <HStack>
        <Button variant={"plain"} onClick={toggleColorMode} rounded={"full"}>
          {colorMode === "light" ? <BiMoon /> : <BiSun />}
        </Button>
        <AvatarGroup>
          <Avatar />
        </AvatarGroup>
      </HStack>

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
              <VStack spacing={4} align="start" w={"full"}>
                <Input
                  placeholder="Search here..."
                  name="name"
                  rounded={"2xl"}
                />
              </VStack>
            </Box>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </HStack>
  );
}

export default NavBar;
