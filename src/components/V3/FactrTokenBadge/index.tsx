import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
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

export interface Header {
    name: string;
    alignment: 'left' | 'center' | 'right';
}

export interface FactrTokenBadgeProps {
    showActions?: boolean;
    headers?: Header[];
    rows?: Array<Record<string, any>>;
}

const FactrTokenBadge: React.FC<FactrTokenBadgeProps> = ({
    showActions = true,
    headers = [
        { name: 'Asset Name', alignment: 'left' },
        { name: 'Symbol', alignment: 'left' },
        { name: 'Type', alignment: 'left' },
        { name: 'Price', alignment: 'left' },
        { name: 'Supply', alignment: 'left' },
        { name: 'Status', alignment: 'left' },
        showActions && { name: 'Actions', alignment: 'center' },
    ].filter((header): header is Header => header !== false),
    rows = [
        {
            id: '1',
            asset_name: 'Sample Asset 1',
            asset_symbol: 'SA1',
            asset_type: 'ERC-20',
            price: '1000',
            supply: 500,
            status: 'mined',
        },
        {
            id: '2',
            asset_name: 'Sample Asset 2',
            asset_symbol: 'SA2',
            asset_type: 'ERC-3643',
            price: '2000',
            supply: 300,
            status: 'draft',
        },
    ],
}) => {
    const theme = useTheme();

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
                            >
                                {header.name}
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
                            <TableCell
                                component='th'
                                scope='row'
                                sx={{ borderBottom: `1px solid ${theme.palette.grey[300]}` }}
                            >
                                {row.asset_name}
                            </TableCell>
                            <TableCell
                                align='left'
                                sx={{ borderBottom: `1px solid ${theme.palette.grey[300]}` }}
                            >
                                {row.asset_symbol}
                            </TableCell>
                            <TableCell
                                align='left'
                                sx={{ borderBottom: `1px solid ${theme.palette.grey[300]}` }}
                            >
                                {row.asset_type}
                            </TableCell>
                            <TableCell
                                align='left'
                                sx={{
                                    whiteSpace: 'nowrap',
                                    borderBottom: `1px solid ${theme.palette.grey[300]}`,
                                }}
                            >
                                {row.price.toLocaleString()}
                            </TableCell>
                            <TableCell
                                align='left'
                                sx={{
                                    whiteSpace: 'nowrap',
                                    borderBottom: `1px solid ${theme.palette.grey[300]}`,
                                }}
                            >
                                {row.supply.toLocaleString()}
                            </TableCell>
                            <TableCell
                                align='left'
                                sx={{
                                    whiteSpace: 'nowrap',
                                    maxWidth: '40px',
                                    borderBottom: `1px solid ${theme.palette.grey[300]}`,
                                }}
                            >
                                <Chip
                                    label={row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                                    sx={{
                                        backgroundColor: row.status === 'mined' ? theme.palette.success.main : theme.palette.warning.main,
                                        color: theme.palette.common.white,
                                    }}
                                />
                            </TableCell>
                            {showActions && (
                                <TableCell align='center' sx={{ width: '90px' }}>
                                    <IconButton>
                                        <MoreHorizIcon />
                                    </IconButton>
                                </TableCell>
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FactrTokenBadge;
