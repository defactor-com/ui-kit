import React, { ReactNode } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import DocIcon from '../Icons/v2/docIcon';


export interface MainCardProps {
    title: string;
    description: string;
    onSelect?: () => void;
    icon: ReactNode;
    backgroundColor?: string;
}

export const MainCard: React.FC<MainCardProps> = ({
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
                maxWidth: '400px'
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
                    <Typography variant="caption" sx={{ color: '#7c7c7e' }}>{/** Temporarily until the designer updates the palette */}
                        {description}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
