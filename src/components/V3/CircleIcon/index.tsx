import React from 'react';
import { CoinsStacked01 } from '@untitled-ui/icons-react';
import { Box } from '@mui/material';

const CircleIcon = ({ backgroundColor = '#EFEFFD' }) => {
    return (
        <Box
            sx={{
                width: 88,
                height: 88,
                borderRadius: '50%',
                backgroundColor,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CoinsStacked01 style={{ width: 40, height: 40, color: '#5A5BEB' }} />
        </Box>
    );
};

export default CircleIcon;
