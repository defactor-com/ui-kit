import React from "react";
import {
  Box,
  Checkbox,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

import { IMultiChainSelector } from "./MultiChainSelectorTypes";

export const MultichainSelector = ({
  variant = "outlined",
  networkSelected,
  networksAssets,
  textFieldLabel,
  networksList,
  fontFamily,
  onChange,
  onClick,
  color,
}: IMultiChainSelector) => (
  <Autocomplete
    multiple
    id="chain-selector"
    disableCloseOnSelect
    options={networksList}
    getOptionLabel={(option) => option?.name}
    onChange={(_, selectedValue) => onChange(_, selectedValue)}
    sx={{ width: { sm: "210px", xs: "100%" }, fontFamily: fontFamily }}
    renderOption={(_props, state, { selected }) => (
      <Box
        display="flex"
        alignItems="center"
        onClick={() => onClick(state, selected)}
      >
        <Checkbox
          checked={
            !!networkSelected.find((net) => net.chainId === state.chainId)
          }
          checkedIcon={<CheckBoxIcon sx={{ color: color }} />}
          icon={<CheckBoxOutlineBlankIcon />}
        />
        <Box mr={1} display="flex" alignItems="center">
          <img
            width={24}
            height={24}
            alt="Network icon"
            src={networksAssets[state.chainId].logo}
          />
        </Box>
        <Typography variant="body1" fontFamily={fontFamily}>
          {state.name}
        </Typography>
      </Box>
    )}
    renderInput={(params) => (
      <Box display="flex" alignItems="center">
        <TextField
          {...params}
          variant={variant}
          label={textFieldLabel}
          sx={{ fontFamily: fontFamily }}
          InputProps={{
            ...params.InputProps,
            startAdornment: networkSelected.map((chain) => (
              <Box
                mr={1}
                display="flex"
                alignItems="center"
                key={chain.chainId}
              >
                <img
                  width={24}
                  height={24}
                  alt="Networ icon"
                  src={networksAssets[chain.chainId]?.logo || ""}
                />
              </Box>
            )),
            disableUnderline: true,
          }}
        />
      </Box>
    )}
    value={networkSelected}
  />
);
