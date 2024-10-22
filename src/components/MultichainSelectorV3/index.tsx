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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { IMultiChainSelector, NetworksDataType } from "./MultiChainSelectorTypesV3";

export const MultichainSelectorV3: React.FC<IMultiChainSelector & { disabled?: boolean }> = ({
  networkSelected,
  networksAssets,
  textFieldLabel,
  networksList,
  fontFamily,
  onClick,
  color,
  disabled = false, // Add disabled prop
}) => {
  const renderValue = (selected: NetworksDataType[]) => (
    <Box display="flex" flexWrap="wrap">
      <Typography mr={2} variant="body2" fontWeight={500} color={"#606060"}>
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
        opacity: disabled ? 0.7 : 1,
        pointerEvents: disabled ? "none" : "auto",
      }}
    >
      <Select
        multiple
        value={networkSelected}
        id="multichain-selector"
        sx={{
          height: 32,
          bgcolor: 'white',
          borderRadius: "30px",
          borderColor: "rgba(189, 189, 189, 0.5)",
          '& .MuiSelect-icon': {
            color: "black",
            transform: "scale(0.8)"
          },
        }}
        IconComponent={ExpandMoreIcon}
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
        disabled={disabled}
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
