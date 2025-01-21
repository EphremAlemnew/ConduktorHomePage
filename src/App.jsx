import { useState } from "react";

import NavBar from "./components/common/NavBar";

import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./components/common/SideBar";
import HomePage from "./pages/HomePage";
import NavBbar from "./components/common/NavBbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <Flex>
      <NavBbar />
      <Home />
    </Flex>
  );
};

export default App;
// import { useState } from "react";

// import NavBar from "./components/common/NavBar";

// import { Box, Flex } from "@chakra-ui/react";
// import Sidebar from "./components/common/SideBar";
// import HomePage from "./pages/HomePage";

// const App = () => {
//   return (
//     <Flex>
//       <Sidebar />
//       <Box ml={{ base: "0", md: "240px" }}>
//         <NavBar />
//         <HomePage />
//       </Box>
//     </Flex>
//   );
// };

// export default App;
