import { Flex, Group, UnstyledButton } from "@mantine/core";
import React from "react";
import NavigationButtons from "../nav/navigation-buttons";

const Header = () => {
  return (
    <Flex w='100vw' justify='center'>
      <NavigationButtons where='header'/>
    </Flex>
  );
};

export default Header;
