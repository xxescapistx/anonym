import { API, Post } from "@/lib/Api/api-bff";
import { Button, Center, Flex, Textarea } from "@mantine/core";
import React, { useEffect, useState } from "react";

function createPost(paragraph: string): Post {
    const match = paragraph.match(/@(\w+)/);
    const tMatch = paragraph.match(/(?<=#)\w+/g) ?? []
    const m = paragraph.replace(/@\w+/, '').replace(/@/g,'').replace(/#\w+/g,'')

    console.log()

    let u = 'anonym'
    let t = ''

    if (match) {
        u = match[1];
    }

    if (tMatch) {
      t = tMatch.slice(0,2 ).join(',');
  }
    
    return { u: u, m: m, t: t }
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
            const post = createPost(newMessage);
            const res = await API.getInstance().createPost(post);
            // add user feedback
            console.log(res)
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
