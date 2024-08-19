"use client";
import {
  ActionIcon,
  AppShell,
  Burger,
  Flex,
  Group,
  MantineProvider,
  Modal,
  RadioIcon,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { ReactNode, useState } from "react";
import Header from "../header/header";
import NavBar from "../nav/navbar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();
  
  return (
    <MantineProvider>
      <AppShell
        padding="md"
        header={{ height: "10vh" }}
        navbar={{
          width: "10vh",
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: !opened },
        }}
      >
        <AppShell.Header bg='#e8e8e8'>
          <Flex align='center' h='10vh' p='md'>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size='lg'/>       
          <Header />
          </Flex>
        </AppShell.Header>
        <AppShell.Navbar py="md" px={4} opacity={.8} bg='#e8e8e8'>
          <NavBar />
        </AppShell.Navbar>
        <AppShell.Main bg='#f4f4f4'>
          <Flex direction="column" align="center">
          {children}
          </Flex>
          </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
};

export default MainLayout;
