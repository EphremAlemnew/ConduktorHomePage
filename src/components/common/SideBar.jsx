import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";

const SidebarContent = ({ onClose }) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Settings", path: "/settings" },
    { name: "Profile", path: "/profile" },
    { name: "Logout", path: "/logout" },
  ];

  return (
    <Box shadow={"xl"} w={{ base: "full", md: "60" }} pos="fixed" h="full">
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          MyApp
        </Text>
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={<FiMenu />}
          onClick={onClose}
          aria-label="Close menu"
          variant="outline"
        />
      </Flex>
      <VStack align="start" spacing="4" px="4">
        {links.map((link) => (
          <Text
            as={RouterLink}
            to={link.path}
            key={link.name}
            _hover={{ textDecoration: "none", bg: "gray.700" }}
            p="2"
            w="full"
            rounded="md"
          >
            {link.name}
          </Text>
        ))}
      </VStack>
    </Box>
  );
};

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Sidebar for larger screens */}
      <Box display={{ base: "none", md: "block" }}>
        <SidebarContent />
      </Box>

      {/* Mobile menu button */}
      <IconButton
        display={{ base: "flex", md: "none" }}
        position="absolute"
        top="4"
        left="4"
        icon={<FiMenu />}
        onClick={onOpen}
        aria-label="Open Menu"
        variant="outline"
      />

      {/* Drawer for mobile screens */}
      {/* <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer> */}
    </>
  );
};

export default Sidebar;
