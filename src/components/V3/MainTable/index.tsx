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
        { name: 'Asset Name', alignment: 'left' },
        { name: 'Symbol', alignment: 'left' },
        { name: 'Type', alignment: 'left' },
        { name: 'Price', alignment: 'left' },
        { name: 'Supply', alignment: 'left' },
        { name: 'Status', alignment: 'left' },
    ];

    const headers = propHeaders ?? (showActions
        ? [...defaultHeaders, { name: 'Actions', alignment: 'center' }]
        : defaultHeaders);

    const defaultRows = [
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
                                header.name !== 'Actions' ? (
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
