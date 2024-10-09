import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import CircleIcon from '../CircleIcon'
import { CoinsStacked01 } from '@untitled-ui/icons-react';

interface EmptyTableProps {
    title?: string;
    description?: string;
}

export const EmptyTable: React.FC<EmptyTableProps> = ({
    title = 'No assets to display',
    description = 'You can create a new asset from existing community templates or by creating your own template first.'
}) => {
    const theme = useTheme()

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 3,
                backgroundColor: "#ffffff",
                height: "420px",
                width: "100%",
                maxWidth: "1164px"
            }}
        >
            <CircleIcon
                backgroundColor="#EFEFFD"
                icon={<CoinsStacked01 style={{ width: 40, height: 40, color: '#5A5BEB' }} />}
            />
            <Typography variant='h6' fontWeight={700}>
                {title}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    maxWidth: '80%',
                }}
            >
                <Typography variant='body1' sx={{ color: theme.palette.grey[400] }}>

                    {description}
                </Typography>
            </Box>
        </Box >
    )
}

export default EmptyTable
