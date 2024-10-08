import React from 'react';
import { Box } from '@mui/material';
import { EthFactrIcon } from '../../Icons/v3/ethFactrIcon';

interface PercentageCircleProps {
    percentage: string;
}

const PercentageCircle: React.FC<PercentageCircleProps> = ({ percentage }) => {
    const value = parseFloat(percentage);
    const radius = 28.5; // Radius to fit the 61px circle
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
        <Box position="relative" display="flex" justifyContent="center" alignItems="center">
            <svg width="61" height="61">
                <circle
                    cx="30.5"
                    cy="30.5"
                    r={radius}
                    stroke="#E6E6E6"
                    strokeWidth="3"
                    fill="none"
                />
                <circle
                    cx="30.5"
                    cy="30.5"
                    r={radius}
                    stroke="#5F66FF"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
                />
            </svg>
            <Box
                position="absolute"
                top="50%"
                left="50%"
                pt={0.5}
                sx={{ transform: "translate(-50%, -50%)" }}
            >
                <EthFactrIcon width={49} height={49} />
            </Box>
        </Box>
    );
};

export default PercentageCircle;
