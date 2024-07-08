import React from 'react';
import { Box, Button, useTheme } from '@mui/material';
import { ElementType } from 'react';
import Link from 'next/link';

interface MenuItemProps {
  text: string;
  path: string;
  icon: ElementType;
  isSelected: boolean;
  notificationsCount?: number;
  navLinkTextColor?: string;
  iconsColor?: string;
  activeTextColor?: string;
  activeIconColor?: string;
}

const MainMenuItem: React.FC<MenuItemProps> = ({
  text,
  path,
  icon: Icon,
  isSelected,
  notificationsCount = 0,
  navLinkTextColor,
  iconsColor,
  activeTextColor,
  activeIconColor,
}) => {
  const theme = useTheme();

  return (
    <Link href={path} passHref>
      <Button
        component="a"
        variant="text"
        sx={{
          width: '100%',
          borderRight: isSelected ? `2px solid ${theme.palette.secondary.main}` : '',
          borderRadius: 0,
          padding: 2,
          paddingLeft: 4,
          color: isSelected ? (activeTextColor || theme.palette.text.secondary) : (navLinkTextColor || theme.palette.text.primary),
          fontSize: 14,
          alignItems: 'center',
          justifyContent: 'flex-start',
          fontWeight: isSelected ? 700 : 400,
        }}
        startIcon={
          <Icon
            color={isSelected ? (activeIconColor || theme.palette.secondary.main) : (iconsColor || theme.palette.text.primary)}
          />
        }
      >
        <Box
          component="span"
          sx={{
            color: isSelected ? (activeTextColor || theme.palette.secondary.main) : (navLinkTextColor || theme.palette.text.primary),
          }}
        >
          {text}
        </Box>
        {path === '/notifications' && notificationsCount > 0 && (
          <Box
            sx={{
              backgroundColor: theme.palette.notification.main,
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              ml: 1,
            }}
          />
        )}
      </Button>
    </Link>
  );
};

export default MainMenuItem;
