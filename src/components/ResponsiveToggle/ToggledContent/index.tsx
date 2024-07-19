import React from 'react';
import { Box } from '@mui/material';
import { StatsBox } from '../StatsBox';
import { myStatsInfo } from '../StatsBox/mock';

export interface StatInfo {
    title: string;
    value: string;
    tooltipText: string;
    unit: string | null;
}

export interface ToggledContentProps {
    XsWidth?: string;
    MdWidth?: string;
    statsInfo: StatInfo[];
}

export const ToggledContent: React.FC<ToggledContentProps> = ({
    XsWidth = "100%",
    MdWidth = "212px",
    statsInfo = myStatsInfo
}) => (
    <>
        {[statsInfo.slice(0, 2), statsInfo.slice(2)].map((group, groupIndex) => (
            <Box
                key={groupIndex}
                sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        lg: 'row'
                    },
                    gap: 2,
                    pt: 3,
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
