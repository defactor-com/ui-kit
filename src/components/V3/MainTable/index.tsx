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
import { CustomTooltip } from '../../CustomTooltip';

export interface Header {
    name: string;
    alignment: 'left' | 'center' | 'right';
    tooltip?: boolean;
    tooltipMessage?: string;
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
        },
        {
            id: '2',
            asset_name: 'Sample Asset 2',
            symbol: 'SA2',
            type: 'ERC-3643',
            price: '2000',
            supply: 300,
            status: 'draft',
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
                            >
                                {header.name}
                                {header.tooltip && header.tooltipMessage && (
                                    <CustomTooltip tooltipText={header.tooltipMessage} />
                                )}
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
                                ) : header.name !== 'Actions' ? (
                                    <TableCell
                                        key={header.name}
                                        align={header.alignment}
                                        sx={{
                                            borderBottom: `1px solid ${theme.palette.grey[300]}`,
                                        }}
                                    >
                                        {(row as Record<string, any>)[
                                            header.name
                                                .toLowerCase()
                                                .replace(/ /g, '_')
                                                .replace('%', 'percent')
                                        ] || 'N/A'}
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
