import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
    Box,
    Chip,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { useTheme } from '@mui/material';
import React from 'react';
import { CustomTooltip } from '../../CustomTooltip';
import { CustomProgressBar } from '../CustomProgressBar';

export interface Header {
    name: string;
    alignment: 'left' | 'center' | 'right';
    tooltip?: boolean;
    tooltipMessage?: string;
    icon?: React.ReactElement;
}

export interface MainTableProps {
    showActions?: boolean;
    headers?: Header[];
    rows?: Array<Record<string, any>>;
}

export const MainTable: React.FC<MainTableProps> = ({
    showActions = true,
    headers: propHeaders,
    rows: propRows,
}) => {
    const theme = useTheme();

    const defaultHeaders: Header[] = [
        { name: 'Asset Name', alignment: 'left', tooltip: false },
        { name: 'Symbol', alignment: 'left', tooltip: false },
        { name: 'Type', alignment: 'left', tooltip: false },
        { name: 'Price', alignment: 'left', tooltip: false },
        { name: 'Supply', alignment: 'left', tooltip: false },
        { name: 'Status', alignment: 'left', tooltip: false },
        { name: '% Liquid', alignment: 'left', tooltip: false },
    ];

    const headers = propHeaders ?? (showActions
        ? [...defaultHeaders, { name: 'Actions', alignment: 'center' }]
        : defaultHeaders);

    const defaultRows = [
        {
            id: '1',
            asset_name: 'Sample Asset 1',
            symbol: 'SA1',
            type: 'ERC-20',
            price: '1000',
            supply: 500,
            status: 'mined',
            liquid: <CustomProgressBar progress={50} />
        },
        {
            id: '2',
            asset_name: 'Sample Asset 2',
            symbol: 'SA2',
            type: 'ERC-3643',
            price: '2000',
            supply: 300,
            status: 'draft',
            liquid: <CustomProgressBar progress={50} />
        },
    ];

    const rows = propRows ?? defaultRows;

    return (
        <TableContainer
            component={Paper}
            elevation={0}
            sx={{
                borderRadius: '12px',
                backgroundColor: theme.palette.background.paper,
                overflowY: 'clip',
            }}
        >
            <Table>
                <TableHead
                    sx={{
                        backgroundColor: theme.palette.background.paper,
                        borderBottom: `1px solid ${theme.palette.grey[300]}`,
                    }}
                >
                    <TableRow sx={{ border: 0 }}>
                        {headers.map((header) => (
                            <TableCell
                                key={header.name}
                                align={header.alignment}
                                sx={{
                                    border: 0,
                                    whiteSpace: 'nowrap',
                                    color: theme.palette.grey[400],
                                    fontWeight: '700',
                                }}
                            >     <Box display="flex" alignItems="center" justifyContent="flex-start">

                                    {header.name}
                                    {header.tooltip && header.tooltipMessage && (
                                        <Box display={"flex"}>
                                            <CustomTooltip tooltipText={header.tooltipMessage} />
                                        </Box>
                                    )}
                                    {header.icon && (
                                        <Box display="flex" alignItems="center" justifyContent="center">
                                            {header.icon}
                                        </Box>
                                    )}
                                </Box>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
                                border: 0,
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {headers.map((header) => (
                                header.name === 'Status' ? (
                                    <TableCell
                                        key={header.name}
                                        align={header.alignment}
                                        sx={{
                                            whiteSpace: 'nowrap',
                                            maxWidth: '40px',
                                            borderBottom: `1px solid ${theme.palette.grey[300]}`,
                                        }}
                                    >
                                        <Chip
                                            label={row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                                            sx={{
                                                backgroundColor: row.status === 'mined'
                                                    ? theme.palette.success.main
                                                    : theme.palette.warning.main,
                                                color: theme.palette.common.white,
                                            }}
                                        />
                                    </TableCell>
                                ) : header.name === '% Liquid' ? (
                                    <Box display="flex" alignItems="center" justifyContent="center" width="100%" height="100%" minHeight="68px" maxWidth="141px">

                                        {row.liquid}
                                    </Box>
                                ) : header.name !== 'Actions' ? (
                                    <TableCell
                                        key={header.name}
                                        align={header.alignment}
                                        sx={{
                                            borderBottom: `1px solid ${theme.palette.grey[300]}`,
                                        }}
                                    >
                                        {header.name}
                                    </TableCell>
                                ) : (
                                    showActions && (
                                        <TableCell
                                            key="Actions"
                                            align="center"
                                            sx={{
                                                borderBottom: `1px solid ${theme.palette.grey[300]}`,
                                                width: '90px',
                                            }}
                                        >
                                            <IconButton>
                                                <MoreHorizIcon />
                                            </IconButton>
                                        </TableCell>
                                    )
                                )
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
