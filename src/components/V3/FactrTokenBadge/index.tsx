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
    background = '#F8F9FC'
}) => {
    return (
        <Box display="flex" width={'100%'} alignItems="center" justifyContent="center" padding={6} sx={{ backgroundColor: "white" }}>
            <Box display="flex" width="120px" height="152px" flexDirection="column" alignItems="center" justifyContent="center" sx={{ backgroundColor: background, borderRadius: "8px" }} >
                {icon}
                <Typography variant="body2" color="textPrimary" fontWeight={600}>
                    {name}
                </Typography>
                <Typography variant="body2" color="textPrimary" fontSize="13px">
                    {percentage}
                </Typography>
            </Box>
        </Box >
    );
};

export default FactrTokenBadge;
