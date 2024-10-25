import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { CircleIconV3 } from '../CircleIconV3'
import { CoinsStacked01 } from '@untitled-ui/icons-react';

export interface EmptyTableProps {
    title?: string;
    description?: string;
    backgroundColor?: string;
    height?: string;
    width?: string;
    maxWidth?: string;
    gap?: number;
    padding?: number;
    display?: string;
    flexDirection?: string;
    textAlign?: string;
    alignItems?: string;
    justifyContent?: string;
}

export const EmptyTableV3: React.FC<EmptyTableProps> = ({
    title = 'Lorem ipsum dolor sit amet consectetur',
    description = 'Lorem ipsum dolor sit amet consectetur. Ultrices hendrerit fringilla et rhoncus elit dolor.',
    backgroundColor = '#ffffff',
    height = '420px',
    width = "100%",
    maxWidth = '1164px',
    gap = 3,
    padding = 2,
    display = 'flex',
    flexDirection = 'column',
    textAlign = 'center',
    alignItems = 'center',
    justifyContent = 'center'

}) => {
    const theme = useTheme()

    return (
        <Box
            sx={{
                display: display,
                flexDirection: flexDirection,
                textAlign: textAlign,
                alignItems: alignItems,
                justifyContent: justifyContent,
                gap: gap,
                backgroundColor: backgroundColor,
                height: height,
                width: width,
                maxWidth: maxWidth,
                p: padding
            }}
        >
            <CircleIconV3
                backgroundColor="#EFEFFD"
                icon={<CoinsStacked01 style={{ width: 40, height: 40, color: '#5A5BEB' }} />}
            />
            <Typography variant='h6' maxWidth='550px' fontWeight={700}>
                {title}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    maxWidth: '80%',
                }}
            >
                <Typography variant='body1' maxWidth='350px' sx={{ color: theme.palette.grey[400] }}>

                    {description}
                </Typography>
            </Box>
        </Box >
    )
}