import { Box, Button, alpha, useTheme } from '@mui/material'
import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
  text: string
  path: string
  isSelected: boolean
  onClick?: () => void
  icon: React.ElementType
}

const MenuItem: React.FC<MenuItemProps> = ({
  text,
  path,
  icon: IconComponent,
  isSelected,
  onClick
}) => {
  const theme = useTheme()

  return (
    <Link href={path}>
      <Button
        variant='text'
        sx={{
          width: '100%',
          borderRight: `2px solid ${
            isSelected ? theme.palette.secondary.main : 'transparent'
          }`,
          borderRadius: 0,
          padding: 2,
          paddingLeft: 2,
          color: 'black',
          fontSize: 14,
          alignItems: 'center',
          justifyContent: 'flex-start',
          fontWeight: isSelected ? 700 : 400,
          backgroundColor: isSelected
            ? alpha(theme.palette.grey[300], 0.5)
            : 'transparent'
        }}
        startIcon={
          <IconComponent
            color={
              isSelected
                ? theme.palette.secondary.main
                : theme.palette.text.primary
            }
            style={{
              fill:
                path === '/'
                  ? isSelected
                    ? theme.palette.secondary.main
                    : 'transparent'
                  : 'transparent'
            }}
          />
        }
        onClick={onClick}
      >
        {text}
        {path === '/notifications' && (
          <Box
            sx={{
              backgroundColor: theme.palette.error.main,
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              ml: 1
            }}
          />
        )}
      </Button>
    </Link>
  )
}

export default MenuItem
