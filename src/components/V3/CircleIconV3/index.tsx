import React from 'react';
import { CoinsStacked01 } from '@untitled-ui/icons-react';
import { Box } from '@mui/material';

interface CircleIconProps {
    width?: string;
    height?: string;
    borderRadius?: string;
    backgroundColor?: string;
    icon?: React.ReactElement;
}

const CircleIconV3: React.FC<CircleIconProps> = ({
    width = '88px',
    height = '88px',
    borderRadius = '50%',
    backgroundColor = '#EFEFFD',
    icon = <CoinsStacked01 style={{ width: '40px', height: '40px', color: '#5A5BEB' }} />,
}) => {
    return (
        <Box
            sx={{
                width: width,
                height: height,
                borderRadius: borderRadius,
                backgroundColor: backgroundColor,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {icon}
        </Box>
    );
};

export default CircleIconV3;
