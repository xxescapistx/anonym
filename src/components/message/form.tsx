import { Button, Center, Flex, Textarea } from '@mantine/core'
import { Postpone } from 'next/dist/server/app-render/dynamic-rendering'
import React, { useEffect, useState } from 'react'

interface Post {
    u: string
    m: string
}

const MessageForm = ({hideModel}: {hideModel: () => void}) => {
    const [message, setMessage] = useState<string>('')

    useEffect(() => {
        setMessage('')
    },[])

  return (
    <Flex direction={'column'} justify={'center'} gap={10}>
        <Textarea autosize maxLength={455} flex={2} value={message} onChange={e => setMessage(e.currentTarget.value)}></Textarea>
        <Button size='xl' onClick={async () => {

            const u = 'anonym'
            const m = message.length>5 ? message : null

            if (m) {
                const post: Post = {u: u, m: m}
                fetch('/api/posts/create', {method: 'POST', body: JSON.stringify(post)})
            }
            
            setMessage('')
            hideModel()
        }}>Send</Button>
    </Flex>
  )
}

export default MessageForm