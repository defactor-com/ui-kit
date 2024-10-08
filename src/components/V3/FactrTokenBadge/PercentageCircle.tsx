import React from 'react';
import { Box } from '@mui/material';
import EthFactrIcon from '../../Icons/v3/ethFactrIcon'; // Adjust the import path as needed

interface PercentageCircleProps {
    percentage: string; // percentage as a string like "68.41%"
}

const PercentageCircle: React.FC<PercentageCircleProps> = ({ percentage }) => {
    const value = parseFloat(percentage);
    const radius = 30; // Adjust for your SVG size
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
        <Box display="flex" justifyContent="center" alignItems="center" width={'100%'}>
            <Box position="relative" display="flex" justifyContent="center" alignItems="center">
                <svg width="100" height="100">
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="#E6E6E6" // Background circle color
                        strokeWidth="6"
                        fill="none"
                    />
                    <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="#5F66FF" // Percentage circle color
                        strokeWidth="6"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }} // Animate the circle
                    />
                </svg>
                <EthFactrIcon />
            </Box>
        </Box>
    );
};

export default PercentageCircle;
