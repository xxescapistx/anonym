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
import MessageForm from "../message/form";
import { TbSend } from "react-icons/tb";
import { usePathname } from 'next/navigation'

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();
  const [showModel, setShowModel] = useState<boolean>(false)

  const pathname = usePathname()

  const hideModel = () => {
    setShowModel(!showModel)
  }

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
          <Modal title='Write your message' centered opened={showModel} onClose={() => setShowModel(!showModel)}>
            <MessageForm hideModel={hideModel}/>
          </Modal>
          <Flex direction="column" align="center">
          {children}
          </Flex>

          {
            pathname==='/' ?
            <>
            <ActionIcon onClick={() => setShowModel(!showModel)} style={{zIndex: 1}} variant="light" color="gray" radius='8vh' size={'8vh'} pos='absolute' bottom={'15vh'} right='6vw' hiddenFrom="sm">
            <TbSend size={'5vh'} />
          </ActionIcon>
          <ActionIcon onClick={() => setShowModel(!showModel)} style={{zIndex: 1}} variant="light" color="gray" radius='8vh' size={'8vh'} pos='absolute' top={'15vh'} right='6vw' visibleFrom="sm">
            <TbSend size={'5vh'} />
          </ActionIcon>
            </>
            :
            <></>
          }

          


          </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
};

export default MainLayout;
