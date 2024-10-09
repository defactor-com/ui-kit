import React from 'react';
import { Box, Typography } from '@mui/material';

interface CustomProgressBarProps {
    progress: number;
}

const CustomProgressBar: React.FC<CustomProgressBarProps> = ({ progress }) => {
    return (
        <Box display="flex" alignItems="center" width="100%">
            {/* Background Bar */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: 12,
                    backgroundColor: '#EFEFF3',
                    borderRadius: '4.5px',
                }}
                aria-describedby="progress-bar"
                aria-busy={progress < 100}
            >
                {/* Filled Progress */}
                <Box
                    sx={{
                        width: `${progress}%`,
                        height: '100%',
                        backgroundColor: '#5F66FF',
                        borderRadius: '4.5px',
                    }}
                />

                {/* Percentage Text */}
                <Typography
                    variant="caption"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: 0,
                        transform: 'translateY(-50%)',
                        fontSize: '0.75rem',
                        color: '#7A7B7D',
                        paddingRight: 8,
                    }}
                >
                    {progress}%
                </Typography>
            </Box>
        </Box>
    );
};

export default CustomProgressBar;
