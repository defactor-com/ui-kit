"use client";

import { Box, Button, CircularProgress } from "@mui/material";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { memo, useState } from "react";
import React from "react";

export interface ClaimTokensButtonV3Props {
  claimFaucetTokens?: (
    userAddress: string,
    chainId: number
  ) => Promise<{ success: boolean; res: { msg: string } }>;
  useMessage?: () => {
    setMessageData: (data: {
      message: string;
      severity: "success" | "error";
    }) => void;
  };
  claimButtonText?: string;
  errorClaimingTokensText?: string;
}

const defaultClaimFaucetTokens = async (
  userAddress: string,
  chainId: number
) => {
  console.log(
    `Demo claimFaucetTokens called with address: ${userAddress}, chainId: ${chainId}`
  );
  return { success: true, res: { msg: "Demo tokens claimed successfully!" } };
};

const defaultUseMessage = () => {
  return {
    setMessageData: (data: {
      message: string;
      severity: "success" | "error";
    }) => {
      console.log(`Demo message: ${data.message}, Severity: ${data.severity}`);
    },
  };
};

const ClaimTokensButtonV3: React.FC<ClaimTokensButtonV3Props> = ({
  claimFaucetTokens = defaultClaimFaucetTokens,
  useMessage = defaultUseMessage,
  claimButtonText = "Claim Tokens",
  errorClaimingTokensText = "Error claiming tokens",
}) => {
  const { isConnected, address, chainId } = useWeb3ModalAccount();
  const [loading, setLoading] = useState(false);

  const { setMessageData } = useMessage();

  const handleClick = async () => {
    try {
      setLoading(true);
      if (isConnected && address && chainId) {
        const res = await claimFaucetTokens(address, chainId);

        if (res.success === true) {
          setMessageData({
            message: `${res.res.msg}`,
            severity: "success",
          });
          setLoading(false);
        } else {
          setMessageData({
            message: `${res.res.msg}`,
            severity: "error",
          });
          setLoading(false);
        }
      }
    } catch {
      setMessageData({
        message: `${errorClaimingTokensText}`,
        severity: "error",
      });
      setLoading(false);
    }
  };

  return (
    <>
      {isConnected ? (
        <Button
          sx={{ borderRadius: 5, mr: 2 }}
          variant="contained"
          onClick={handleClick}
        >
          <Box sx={{ visibility: loading ? "hidden" : "visible" }}>
            {claimButtonText}
          </Box>
          {loading && (
            <CircularProgress
              size={18}
              sx={{ color: "white", position: "absolute" }}
            />
          )}
        </Button>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(ClaimTokensButtonV3);
