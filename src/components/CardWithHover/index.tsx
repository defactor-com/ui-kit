import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import DocIcon from '../Icons/v2/docIcon';

export interface CardWithHoverProps {
    title: string;
    description: string;
    onSelect?: () => void;
    icon: React.ReactNode;
    backgroundColor?: string;
}

export const CardWithHover: React.FC<CardWithHoverProps> = ({
    title,
    description,
    onSelect,
    icon = <DocIcon />,
    backgroundColor = '#ffffff'
}) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                borderRadius: '16px',
                background: backgroundColor || theme.palette.background.default,
                padding: 2,
                cursor: 'pointer',
                maxWidth: '400px',
                '&:hover': { boxShadow: theme.shadows[3] }
            }}
            onClick={onSelect}
        >
            <Box display="flex" flexDirection="column" justifyContent="space-between" height={154}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    {icon}
                </Box>
                <Box>
                    <Typography variant="body1" fontWeight={500}>
                        {title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#7c7c7e' }}>
                        {description}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
