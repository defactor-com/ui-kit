import React from 'react';
import { Box, Typography } from '@mui/material';
import EthFactrIcon from '../../Icons/v3/ethFactrIcon'; // Adjusted import path

export interface FactrTokenBadgeProps {
    icon?: React.ReactElement;
    name?: string;
    percentage?: string;
}

const FactrTokenBadge: React.FC<FactrTokenBadgeProps> = ({
    icon = <EthFactrIcon />,
    name = 'Ethereum',
    percentage = '50%',
}) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            {icon}
            <Typography variant="subtitle1" color="textPrimary">
                {name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
                {percentage}
            </Typography>
        </Box>
    );
};

export default FactrTokenBadge;
