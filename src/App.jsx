import { Box, Flex } from "@chakra-ui/react";

import NavBbar from "./components/common/NavBbar";
import Home from "./pages/Home";
import "@fontsource/roboto";
const App = () => {
  return (
    <Flex>
      <NavBbar />
      <Home />
    </Flex>
  );
};

export default App;
