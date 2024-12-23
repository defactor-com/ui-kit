'use client';

import React from 'react';
import { Button, Link, useTheme } from '@mui/material';
import Image from 'next/image';
import { LinkExternal02 } from '@untitled-ui/icons-react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface ToolItemV3Props {
  item: {
    url: string;
    logo: {
      src: string | StaticImport;
      width: number;
      height: number;
    };
  };
  index: number;
}

export const ToolItemV3: React.FC<ToolItemV3Props> = ({ item, index }) => {
  const theme = useTheme();

  return (
    <Link href={item.url} target="_blank" key={index} sx={{ textDecoration: 'none' }}>
      <Button
        fullWidth
        sx={{
          display: 'flex',
          padding: '16px',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: `1px solid ${theme.palette.grey[200]}`,
          borderRadius: 0,
          minHeight: '53px',
        }}
      >
        <Image
          alt="Tool logo"
          src={item.logo.src}
          width={item.logo.width}
          height={item.logo.height}
        />
        <LinkExternal02
          width={14}
          height={14}
          color={theme.palette.grey[400]}
        />
      </Button>
    </Link>
  );
};
