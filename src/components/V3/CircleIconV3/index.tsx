import React from 'react';
import { CoinsStacked01 } from '@untitled-ui/icons-react';
import { Box } from '@mui/material';

interface CircleIconProps {
    width?: string,
    height?: string,
    borderRadius?: '50%',
    backgroundColor?: string;
    icon?: React.ReactElement;
}

const CircleIconV3: React.FC<CircleIconProps> = ({
    width = 88,
    height = 88,
    borderRadius = '50%',
    backgroundColor = '#EFEFFD',
    icon = <CoinsStacked01 style={{ width: 40, height: 40, color: '#5A5BEB' }} />,
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