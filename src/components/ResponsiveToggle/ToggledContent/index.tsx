import React from 'react';
import { Box } from '@mui/material';
import { StatsBox } from '../StatsBox';
import { myStatsInfo } from '../StatsBox/mock';

export interface ToggledContentProps {
    XsWidth?: string;
    MdWidth?: string;
    title?: string;
    value?: string;
    tooltipText?: string;
    unit?: string;
}

export const ToggledContent: React.FC<ToggledContentProps> = ({
    XsWidth = "100%",
    MdWidth = "212px"
}) => (
    <>
        {[myStatsInfo.slice(0, 2), myStatsInfo.slice(2)].map((group, groupIndex) => (
            <Box
                key={groupIndex}
                sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        lg: 'row'
                    },
                    gap: 2,
                    pt: { xs: 3, lg: 0 },
                    width: '100%'
                }}
            >
                {group.map((stat, index) => (
                    <StatsBox
                        key={index}
                        XsWidth={XsWidth}
                        MdWidth={MdWidth}
                        title={stat.title}
                        value={stat.value}
                        tooltipText={stat.tooltipText}
                        unit={stat.unit}
                    />
                ))}
            </Box>
        ))}
    </>
);
