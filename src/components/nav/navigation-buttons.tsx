import {
  Box,
  Button,
  Flex,
  Group,
  NavLink,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import Link from "next/link";
import React from "react";

const NavigationButtons = ({ where }: { where: string }) => {
  const { hovered, ref } = useHover();
  return (
    <Flex
      direction={where == "header" ? "row" : "column"}
      gap="md"
      m={10}
      hiddenFrom={where == "nav" ? "sm" : ""}
      visibleFrom={where == "header" ? "sm" : ""}
      align="center"
      justify="center"
      mih={"10vh"}
    >
      <Link href={"/"}>
        <Text size="xl">Home</Text>
      </Link>
      <Link href={"/about"}> <Text size="xl">About</Text></Link>
    </Flex>
  );
};

export default NavigationButtons;
