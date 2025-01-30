import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { CircleIconV3 } from '../CircleIconV3';
import { CoinsStacked01, PlusCircle } from '@untitled-ui/icons-react';
import { Button } from '../../Button';

export interface EmptyTableProps {
    title?: string;
    description?: string;
    backgroundColor?: string;
    titleColor?: string;
    descColor?: string;
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
    icon?: React.ReactElement;
    showBtn?: boolean;
    btnIcon?: React.ReactElement;
    btnBgColor?: string;
    btnOnClick?: () => void;
    btnFontSize?: string;
    btnPadding?: string;
    btnLabel?: string;
    btnMt?: string | number;
    iconBgColor?: string;
}

export const EmptyTableV3: React.FC<EmptyTableProps> = ({
    title = 'Lorem ipsum dolor sit amet consectetur',
    description = 'Lorem ipsum dolor sit amet consectetur. Ultrices hendrerit fringilla et rhoncus elit dolor.',
    backgroundColor = '#ffffff',
    titleColor,
    descColor,
    height = '420px',
    width = '100%',
    maxWidth = '1164px',
    gap = 3,
    padding = 2,
    display = 'flex',
    flexDirection = 'column',
    textAlign = 'center',
    alignItems = 'center',
    justifyContent = 'center',
    icon = <CoinsStacked01 style={{ width: 40, height: 40, color: '#5A5BEB' }} />,
    iconBgColor,
    btnBgColor,
    btnOnClick,
    showBtn = false,
    btnFontSize = '14px',
    btnIcon = <PlusCircle style={{ width: 24, height: 24 }} />,
    btnPadding,
    btnLabel = "Lorem Ipsum",
    btnMt= 3
}) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display,
                flexDirection,
                textAlign,
                alignItems,
                justifyContent,
                gap,
                backgroundColor,
                height,
                width,
                maxWidth,
                p: padding,
            }}
        >
            <CircleIconV3 backgroundColor={iconBgColor || "#EFEFFD"} icon={icon} />
            <Typography variant="h6" maxWidth="550px" fontWeight={700} sx={{ color: titleColor || theme.palette.text.primary }}>
                {title}
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Box sx={{ display: 'flex', maxWidth: '80%' }}>
                    <Typography variant="body1" maxWidth="350px" sx={{ color: descColor || theme.palette.grey[400] }}>
                        {description}
                    </Typography>
                </Box>
                {showBtn && (
                    <Box sx={{ display: 'flex', maxWidth: '80%', mt: btnMt }}>
                        <Button
                            variant="contained"
                            label={btnLabel}
                            icon={btnIcon}
                            fontSize={btnFontSize}
                            optionalStyles={{
                                padding: btnPadding || theme.spacing(1, 3),
                            }}
                            bgColor={btnBgColor || theme.palette.primary.main}
                            fontFamily={theme.typography.fontFamily}
                            onClick={btnOnClick}
                        />
                    </Box>
                )}
            </Box>

        </Box>
    );
};
