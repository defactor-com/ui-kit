import { useCallback, useState } from "react";

import { WalletContainerCallbacks, WalletContainerData } from "./WalletTypes";

const useWalletContainer = (
  address: `0x${string}` | undefined
): [WalletContainerData, WalletContainerCallbacks] => {
  const [isAddressCopied, setIsAddressCopied] = useState(false);
  const handleAddressCopy = useCallback(() => {
    if (address) {
      navigator.clipboard.writeText(address);
      setIsAddressCopied(true);
    }
  }, [address]);

  const formatAddress = (
    address: `0x${string}` | undefined | string
  ): string => {
    return address
      ? `${address?.substring(0, 10)}...${address?.substring(
          address?.length - 4
        )}`
      : "";
  };

  return [
    { isAddressCopied },
    {
      handleAddressCopy,
      formatAddress,
    },
  ];
};

export default useWalletContainer;
