import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { CoinsStacked01 } from '@untitled-ui/icons-react'


export const EmptyTable: React.FC = () => {
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
            <CoinsStacked01
                color={theme.palette.secondary.main}
                width={44}
                height={44}
            />
            <Typography variant='h6' fontWeight={700}>
                No assets to display
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    maxWidth: '80%',
                }}
            >
                <Typography variant='body1' sx={{ color: theme.palette.grey[400] }}>

                    You can create a new asset from existing community templates or by creating your own template first.
                </Typography>
            </Box>
        </Box>
    )
}

export default EmptyTable
