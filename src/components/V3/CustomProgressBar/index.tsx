import React from 'react';
import { Box, Typography } from '@mui/material';

interface CustomProgressBarProps {
    progress: number;
}

export const CustomProgressBar: React.FC<CustomProgressBarProps> = ({ progress }) => {
    return (
        <Box display="flex" alignItems="center" width="100%" height="100%">
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: 12,
                    backgroundColor: '#EFEFF3',
                    borderRadius: '4.5px',
                    flexGrow: 1,
                }}
                aria-describedby="progress-bar"
                aria-busy={progress < 100}
            >
                <Box
                    sx={{
                        width: `${progress}%`,
                        height: '100%',
                        backgroundColor: '#5F66FF',
                        borderRadius: '4.5px',
                    }}
                />
            </Box>

            <Typography
                variant="caption"
                fontWeight={700}
                pl={1}
                color={"#7A7B7D"}
            >
                {progress}%
            </Typography>
        </Box>
    );
};
