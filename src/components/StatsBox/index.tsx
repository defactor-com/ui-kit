import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

import { CustomTooltip } from '../CustomTooltip'

export interface StatsBoxProps {
    XsWidth?: string | number
    MdWidth?: string | number
    title: string
    value: string | number
    tooltipText: string
    unit: string | null
}

export const StatsBox: React.FC<StatsBoxProps> = ({
    XsWidth,
    MdWidth,
    title,
    value,
    tooltipText,
    unit
}) => {
    return (
        <Box
            sx={{
                width: {
                    xs: XsWidth,
                    md: MdWidth
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
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
                    mt: 0.6
                }}
            >
                <Typography variant='subtitle1' fontWeight={700} sx={{ mr: 0.5 }}>
                    {value}
                </Typography>
                <Typography fontSize={14} fontWeight={700} color='#A8B0B6'>
                    {unit}
                </Typography>
            </Box>
            <Divider sx={{ mt: 2.5 }} />
        </Box>
    )
}
