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
  networkSelected,
  networksAssets,
  textFieldLabel,
  networksList,
  onChange,
  onClick,
}: IMultiChainSelector) => (
  <Autocomplete
    multiple
    id="chain-selector"
    onChange={onChange}
    disableCloseOnSelect
    options={networksList}
    sx={{ width: "200px" }}
    getOptionLabel={(option) => option?.name}
    renderOption={(_props, state, { selected }) => (
      <Box display="flex" alignItems="center" onClick={onClick}>
        <Checkbox
          checked={selected}
          icon={<CheckBoxOutlineBlankIcon />}
          checkedIcon={<CheckBoxIcon color="secondary" />}
        />
        <Box mr={1} display="flex" alignItems="center">
          <img
            width={24}
            height={24}
            alt="Network icon"
            src={networksAssets[state.chainId].logo}
          />
        </Box>
        <Typography variant="body1">{state.name}</Typography>
      </Box>
    )}
    renderInput={(params) => (
      <Box display="flex" alignItems="center">
        <TextField
          {...params}
          variant="outlined"
          label={textFieldLabel}
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
