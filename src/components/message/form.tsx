import { API, Post } from "@/lib/Api/api-bff";
import { Button, Center, Flex, Textarea } from "@mantine/core";
import React, { useEffect, useState } from "react";

function findUser(paragraph: string): Post {
    const match = paragraph.match(/@(\w+)/);
    const m = paragraph.replace(/@\w+/, '')
    let u = 'anonym'
    if (match) {
        u = match[1];
    }
    
    return { u: u, m: m }
}

const MessageForm = ({ hideModel }: { hideModel: () => void }) => {
  const [message, setMessage] = useState<string>("");

  return (
    <Flex direction={"column"} justify={"center"} gap={10}>
      <Textarea
        autosize
        maxLength={455}
        flex={2}
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      ></Textarea>
      <Button
      bg='gray'
        size="xl"
        onClick={async () => {
          const newMessage = message.length > 5 ? message : null;

          if (newMessage) {
            const post = findUser(newMessage);
            await API.getInstance().createPost(post);
          }
          setMessage("");
          hideModel();
        }}
      >
        Create
      </Button>
    </Flex>
  );
};

export default MessageForm;
