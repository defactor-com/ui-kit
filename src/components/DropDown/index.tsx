import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
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
  fontFamily,
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
          style={{ fontFamily: fontFamily }}
          value={selectedOptions}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <ListItemText
                  primaryTypographyProps={{
                    fontFamily: fontFamily,
                  }}
                  primary={placeholder}
                />
              );
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          className="dropdown-container"
        >
          {options.map((name) => (
            <MenuItem key={name} value={name} className="checkBox">
              <Checkbox
                checked={selectedOptions && selectedOptions.indexOf(name) > -1}
              />
              <ListItemText
                primary={name}
                primaryTypographyProps={{
                  fontFamily: fontFamily,
                }}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
