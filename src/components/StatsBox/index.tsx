import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

import { CustomTooltip } from '../CustomTooltip'

export interface StatsBoxProps {
    width?: string | number
    title: string
    value: string | number
    tooltipText: string
    unit: string | null
}

export const StatsBox: React.FC<StatsBoxProps> = ({
    width,
    title,
    value,
    tooltipText,
    unit
}) => {
    return (
        <Box
            sx={{
                width: {
                    md: '100%',
                    lg: width
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: {
                        md: '100%',
                        lg: width
                    }
                }}
            >
                <Typography variant='body2'>{title}</Typography>
                <CustomTooltip tooltipText={tooltipText} />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'baseline',
                    mt: 0.5
                }}
            >
                <Typography variant='subtitle1' fontWeight={700} sx={{ mr: 0.5 }}>
                    {value}
                </Typography>
                <Typography fontSize={14} fontWeight={700} color='#A8B0B6'>
                    {unit}
                </Typography>
            </Box>
            <Divider sx={{ mt: 1.5 }} />
        </Box>
    )
}
