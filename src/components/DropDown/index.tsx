import React, { useEffect, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

import { IDropDownObject } from "./DropDownTypes";
import useDropDownState from "./useDropDownState";

const ITEM_HEIGHT = 37;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const DropDown = ({
  placeholder,
  options,
  onChange,
}: IDropDownObject) => {
  const [{ selectedOptions }, { handleChange }] = useDropDownState({
    onChange,
  });

  return (
    <div>
      <FormControl>
        <Select
          name={placeholder}
          multiple
          displayEmpty
          value={selectedOptions}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em className="help-text">{placeholder}</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          className="dropdown-container"
        >
          <MenuItem disabled value="">
            <em>{placeholder}</em>
          </MenuItem>
          {options.map((name) => (
            <MenuItem key={name} value={name} className="checkBox">
              <Checkbox
                checked={selectedOptions && selectedOptions.indexOf(name) > -1}
              />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
