"use client";
import { API } from "@/lib/Api/api-bff";
import { ActionIcon, Badge, Box, Button, Card, CardSection, Divider, Flex, Space, Text, Tooltip } from "@mantine/core";
import { type posts } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { AiTwotoneNotification } from "react-icons/ai";

function getTimeDifference(datetime: Date) {
  const dateTime = new Date(datetime.toString())
  const now = new Date();

  let returnText = ""
  // @ts-ignore
  const differenceInMillis = now - dateTime;

  const seconds = Math.floor(differenceInMillis / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days>0) {
    returnText += days + ' Days '
  }

  if (hours>0) {
    returnText += hours % 24 + ' hrs '
  }

  if (minutes>0) {
    returnText += minutes % 60 + ' mins '
  }

  if (seconds>0) {
    returnText += seconds % 60 + ' secs '
  }

  return returnText + 'ago'
}

const Main = () => {
  const [posts, setPosts] = useState<posts[] | undefined>(undefined);

  const fetchPosts = async () => {
    const response = await API.getInstance().getPosts()
    const { posts }: { posts: posts[] } = await response.json();
    setPosts(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
      <Flex direction='column' p="lg" miw="80vw"align='stretch' gap={10}>
        {

          posts?.length! > 0 ?
        
        
        posts?.map((post) => {
          const diff = getTimeDifference(post.datetime)

          return (
            <Card shadow="sm" padding="md" w="auto" h='fit-content' key={post.id}>
              <Flex direction="row" gap={10}>
                <Badge bg="green">{post.user}</Badge>
                <Box flex={1}/>
                <Tooltip label='REPORT'>
                  <ActionIcon size='xs' bg='red'><AiTwotoneNotification color="black"/> </ActionIcon>                 
                </Tooltip>
              </Flex>

              <Divider my="md"/>

              <Text>{post.message}</Text>

              <Text pt={10} size="xs" c='gray'>{diff}</Text>

            </Card>
          );
        })
        :

        <Flex align='center' justify='center'>
          <Text>No posts available yet...</Text>
        </Flex>

        
      
      }
      </Flex>
  );
};

export default Main;
