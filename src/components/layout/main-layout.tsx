'use client'
import { MantineProvider } from '@mantine/core'
import React, { ReactNode } from 'react'

const MainLayout = ({children}: {children: ReactNode}) => {
  return (
    <MantineProvider>
        {children}
    </MantineProvider>
  )
}

export default MainLayout