import React from 'react';
import { Box, Button } from '@mui/material';
import { ElementType } from 'react';

// temp
const primaryMain = '#5A5BEB';
const secondaryMain = "#E0A225";
const blackColor = 'black';

interface MenuItemProps {
  text: string;
  path: string;
  icon: ElementType;
  isSelected: boolean;
  textColor?: string;
}

const MainMenuItem: React.FC<MenuItemProps> = ({
  text,
  path,
  icon: Icon,
  isSelected,
  textColor = blackColor,
}) => {
  return (
    <Button
      variant="text"
      sx={{
        width: '100%',
        borderRight: isSelected ? `2px solid ${secondaryMain}` : '',
        borderRadius: 0,
        padding: 2,
        paddingLeft: 4,
        color: textColor,
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontWeight: isSelected ? 700 : 400,
      }}
      startIcon={<Icon />} // Render the icon component here
    >
      {text}
      {path === '#notifications' && (
        <Box
          sx={{
            backgroundColor: primaryMain,
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            ml: 1,
          }}
        />
      )}
    </Button>
  );
};

export default MainMenuItem;