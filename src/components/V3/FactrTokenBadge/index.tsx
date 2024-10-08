import React from 'react';
import { Box, Typography } from '@mui/material';
import PercentageCircle from './PercentageCircle';
import { EthFactrIcon } from '../../Icons/v3/ethFactrIcon';


export interface FactrTokenBadgeProps {
    icon?: React.ReactElement;
    name?: string;
    percentage?: string;
    background?: string;
}

export const FactrTokenBadge: React.FC<FactrTokenBadgeProps> = ({
    icon = <EthFactrIcon width={49} height={49} />,
    name = 'Ethereum',
    percentage = '68.41%',
    background = '#F8F9FC',
}) => {
    return (
        <Box
            display="flex"
            width="100%"
            maxWidth="140px"
            height="100%"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={3}
            sx={{ backgroundColor: background, borderRadius: '8px' }}
        >
            <PercentageCircle icon={icon} percentage={percentage} />
            <Typography variant="body2" color="textPrimary" fontWeight={600} pt={1}>
                {name}
            </Typography>
            <Typography variant="body2" color="textPrimary" fontSize="13px" pt={0.5}>
                {percentage}
            </Typography>
        </Box>
    );
};

