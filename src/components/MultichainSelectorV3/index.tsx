import React from "react";
import {
  Box,
  Select,
  MenuItem,
  Checkbox,
  Typography,
  FormControl,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

import { IMultiChainSelector, NetworksDataType } from "./MultiChainSelectorTypesV3";

export const MultichainSelectorV3: React.FC<IMultiChainSelector> = ({
  networkSelected,
  networksAssets,
  textFieldLabel,
  networksList,
  fontFamily,
  onClick,
  color,
}) => {
  const renderValue = (selected: NetworksDataType[]) => (
    <Box display="flex" flexWrap="wrap">
      <Typography mr={2} variant="body2" fontWeight={500}>
        {textFieldLabel}
      </Typography>
      {selected.map((value) => (
        <Box mr={0.5} display="flex" alignItems="center" key={value.chainId}>
          <img
            width={20}
            height={20}
            alt={`Network ${value.name} icon`}
            src={networksAssets[value.chainId]?.logo || ""}
          />
        </Box>
      ))}
    </Box>
  );

  return (
    <FormControl
      sx={{
        maxWidth: 240,
        fontFamily,
        width: (networksList.length === 1 ? 160 : 87) * networksList.length,
      }}
    >
      <Select
        multiple
        value={networkSelected}
        id="multichain-selector"
        sx={{
          height: 32,
          borderRadius: "30px",
        }}
        renderValue={renderValue}
        MenuProps={{
          PaperProps: {
            style: {
              maxWidth: 240,
              fontFamily,
              maxHeight: 48 * 4.5 + 8,
              width: (networksList.length === 1 ? 160 : 87) * networksList.length,
            },
          },
        }}
      >
        {networksList.map((chain: NetworksDataType) => (
          <MenuItem key={chain.chainId} sx={{ padding: 0 }}>
            <Box display="flex" alignItems="center" onClick={() => onClick(chain)}>
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon sx={{ color }} />}
                checked={!!networkSelected.find((net) => net.chainId === chain.chainId)}
              />
              <Box mr={1} display="flex" alignItems="center">
                <img
                  width={24}
                  height={24}
                  alt={`Network ${chain.name} icon`}
                  src={networksAssets[chain.chainId]?.logo || ""}
                />
              </Box>
              <Typography variant="body1" fontFamily={fontFamily}>
                {chain.name}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
