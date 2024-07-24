import { useTheme } from "@mui/material/styles";
import { MouseEvent, useState } from "react";

import { WalletSelectorCallbacks, WalletSelectorData } from "./WalletTypes";

const useWalletSelectorHook = (): [
  WalletSelectorData,
  WalletSelectorCallbacks
] => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return [
    { anchorEl, open, id },
    { handleClick, handleClose },
  ];
};

export default useWalletSelectorHook;
