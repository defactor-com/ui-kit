import React from 'react';
import { Box, Typography } from '@mui/material';
import EthFactrIcon from '../../Icons/v3/ethFactrIcon'; // Adjusted import path

export interface FactrTokenBadgeProps {
    icon?: React.ReactElement;
    name?: string;
    percentage?: string;
    background?: string;
}

const FactrTokenBadge: React.FC<FactrTokenBadgeProps> = ({
    icon = <EthFactrIcon />,
    name = 'Ethereum',
    percentage = '50%',
    //background = '#F8F9FC'
    background = 'red'
}) => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" sx={{ backgroundColor: background }} >
            {icon}
            <Typography variant="body2" color="textPrimary" fontWeight={600}>
                {name}
            </Typography>
            <Typography variant="body2" color="textPrimary" fontSize={'13px'}>
                {percentage}
            </Typography>
        </Box>
    );
};

export default FactrTokenBadge;
