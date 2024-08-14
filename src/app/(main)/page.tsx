"use client";
import { Badge, Box, Button, Card, CardSection, Divider, Flex, Text } from "@mantine/core";
import { type posts } from "@prisma/client";
import React, { useEffect, useState } from "react";

const Main = () => {
  const [posts, setPosts] = useState<posts[] | undefined>(undefined);

  const fetchPosts = async () => {
    const response = await fetch("/api/posts/");
    const { posts }: { posts: posts[] } = await response.json();
    setPosts(posts);
  };

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  return (
    <Flex direction="column" h="100vh" w="100vw" align="center">
      <Button onClick={() => fetchPosts()}>Fetch Posts</Button>
      <Flex direction='column' p="lg" h="100vh" w="80vw" bg="gray" align='stretch' gap={10}>
        {posts?.map((post) => {
          return (
            <Card shadow="sm" padding="md" w="auto" h='fit-content' key={post.id}>
              <Flex direction="row" gap={10}>
                <Badge bg="red">{post.id}</Badge>
                <Badge bg="green">{post.user}</Badge>
                <Box flex={1}/>
                <Badge bg="red" style={{userSelect: 'none'}} onClick={() => console.log("delete:",post.id)}>delete</Badge>
              </Flex>

              <Divider my="md"/>

              <Text>{post.message}</Text>
            </Card>
          );
        })}
      </Flex>
      Test
    </Flex>
  );
};

export default Main;
