import React from "react";
import Box from "@mui/material/Box";
import ConnectWalletButton from "./ConnectWalletBtn";

const WalletSelectorV3: React.FC = () => {
  return (
    <Box>
      <ConnectWalletButton
        btnText="Connect Wallet"
        handleClick={() => console.log("Wallet button clicked")}
      />
    </Box>
  );
};

export default WalletSelectorV3;
