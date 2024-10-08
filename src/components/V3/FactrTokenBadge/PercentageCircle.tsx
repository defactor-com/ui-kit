import React from 'react';
import { Box } from '@mui/material';

interface PercentageCircleProps {
    icon?: React.ReactElement;
    percentage: string;
}

const PercentageCircle: React.FC<PercentageCircleProps> = ({ icon, percentage }) => {
    const value = parseFloat(percentage);
    const radius = 28.5;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
        <Box position="relative" display="flex" justifyContent="center" alignItems="center">
            <svg width="61" height="61">
                <g transform="rotate(-90 30.5 30.5)">
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
                </g>
            </svg>
            <Box
                position="absolute"
                top="50%"
                left="50%"
                pt={0.65}
                sx={{ transform: 'translate(-50%, -50%)' }}
            >
                {icon}
            </Box>
        </Box>
    );
};

export default PercentageCircle;
