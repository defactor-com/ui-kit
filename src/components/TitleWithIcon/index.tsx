import React from 'react';
import { Box, Typography } from '@mui/material';
import DashboardIcon from '../Icons/v2/dashboardIcon';

export interface TitleWithIconProps {
    image?: React.ElementType;
    label: string;
    color: string;
    colorIcon?: string;
}

export const TitleWithIcon: React.FC<TitleWithIconProps> = ({
    image: IconComponent = DashboardIcon,
    label = "Title",
    color = "#000000", //Temporarily until the designer updates the palette
    colorIcon = "#000000",  //Temporarily until the designer updates the palette
}) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', color: colorIcon }}>
                <IconComponent colorIcon={colorIcon} />
                <Typography variant='subtitle1' fontSize={'16px'} fontWeight={700} color={color} sx={{ marginLeft: '8px' }}>
                    {label} {/** Styles Temporarily until the designer updates the palette */}
                </Typography>
            </Box>
        </Box>
    );
};

TitleWithIcon.displayName = 'TitleWithIcon';

export default TitleWithIcon;
