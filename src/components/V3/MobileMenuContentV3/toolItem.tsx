import { Box, useTheme } from '@mui/material'
import { LinkExternal02 } from '@untitled-ui/icons-react'
import Link from 'next/link'
import React from 'react'

interface ToolItemProps {
  logo: string
  alt: string
  newTab?: boolean
  link: string
}

const ToolItem: React.FC<ToolItemProps> = ({ logo, alt, newTab, link }) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        width: '100%',
        padding: 2,
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}
    >
      <Link
        href={link}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
        target={newTab ? '_blank' : undefined}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt={alt} style={{ marginTop: 6 }} />
        {newTab && (
          <LinkExternal02
            width={14}
            height={14}
            color={theme.palette.grey[400]}
          />
        )}
      </Link>
    </Box>
  )
}

export default ToolItem
