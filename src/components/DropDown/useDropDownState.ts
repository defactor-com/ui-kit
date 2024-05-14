import { useState, useEffect } from "react";
import { SelectChangeEvent } from "@mui/material/Select";

const useDropDownState = ({ onChange }: { onChange?(): void }) => {
  const [selectedOptions, setSelectedOptions] = useState<Array<string>>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedOptions>) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    if (onChange) onChange();
  }, [selectedOptions]);
  return [{ selectedOptions }, { handleChange }];
};

export default useDropDownState;
