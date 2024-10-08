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
    percentage = '68.41%',
    background = '#F8F9FC'
}) => {
    return (
        <Box display="flex" width="120px" height="152px" flexDirection="column" alignItems="center" justifyContent="center" pt={2} pb={2} sx={{ backgroundColor: background, borderRadius: "8px" }}>
            {icon}
            <Typography variant="body2" color="textPrimary" fontWeight={600} pt={1}>
                {name}
            </Typography>
            <Typography variant="body2" color="textPrimary" fontSize="13px" pt={0.5}>
                {percentage}
            </Typography>
        </Box>
    );
};

export default FactrTokenBadge;
