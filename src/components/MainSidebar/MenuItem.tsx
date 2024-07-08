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
}

const MainMenuItem: React.FC<MenuItemProps> = ({
  text,
  path,
  icon: Icon,
  isSelected,
  notificationsCount = 0,
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
          color: isSelected ? theme.palette.text.secondary : theme.palette.text.primary,
          fontSize: 14,
          alignItems: 'center',
          justifyContent: 'flex-start',
          fontWeight: isSelected ? 700 : 400,
        }}
        startIcon={
          <Icon
            color={isSelected ? theme.palette.secondary.main : theme.palette.text.primary} backgroundColor={isSelected ? theme.palette.secondary.main : 'transparent'}
          />
        }
      >
        {text}
        {path === '/notifications' && notificationsCount > 0 && (
          <Box
            sx={{
              backgroundColor: theme.palette.secondary.main,
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
