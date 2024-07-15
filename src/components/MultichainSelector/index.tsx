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

import {
  IMultiChainSelector,
  NetworksDataType,
} from "./MultiChainSelectorTypes";

export const MultichainSelector = ({
  networkSelected,
  networksAssets,
  textFieldLabel,
  networksList,
  fontFamily,
  onChange,
  onClick,
  color,
}: IMultiChainSelector) => (
  <FormControl
    sx={{
      fontFamily: fontFamily,
      width: 90 * networksList.length,
    }}
  >
    <Select
      multiple
      sx={{
        height: 40,
        borderRadius: "30px",
      }}
      className="selector"
      value={networkSelected}
      id="multichain-selector"
      onChange={(selectedValue) => onChange(selectedValue.target.value)}
      renderValue={(selected) => (
        <Box display="flex" flexWrap="wrap">
          {selected.map((value) => (
            <Box mr={1} display="flex" alignItems="center" key={value.chainId}>
              <img
                width={24}
                height={24}
                alt={`Networt ${value.name} icon`}
                src={networksAssets[value.chainId]?.logo || ""}
              />
            </Box>
          ))}
          <Typography ml={1} variant="body1" fontWeight={700}>
            {textFieldLabel}
          </Typography>
        </Box>
      )}
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: 48 * 4.5 + 8,
            width: 90 * networksList.length,
          },
        },
      }}
    >
      {networksList.map((chain: NetworksDataType) => (
        <MenuItem>
          <Box
            display="flex"
            alignItems="center"
            onClick={() => onClick(chain)}
          >
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon sx={{ color: color }} />}
              checked={
                !!networkSelected.find((net) => net.chainId === chain.chainId)
              }
            />
            <Box mr={1} display="flex" alignItems="center">
              <img
                width={24}
                height={24}
                alt={`Networt ${chain.name} icon`}
                src={networksAssets[chain.chainId].logo}
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
