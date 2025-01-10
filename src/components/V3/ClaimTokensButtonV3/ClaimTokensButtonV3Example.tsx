import React from "react";
import ClaimTokensButtonV3 from ".";


export const ClaimTokensButtonV3Example: React.FC = () => {
  const claimFaucetTokens = async (userAddress: string, chainId: number) => {
    console.log(
      `Demo: claimFaucetTokens called with address: ${userAddress}, chainId: ${chainId}`
    );
    return { success: true, res: { msg: "Demo tokens claimed successfully!" } };
  };

  const useMessage = () => {
    return {
      setMessageData: (data: {
        message: string;
        severity: "success" | "error";
      }) => {
        console.log(
          `Demo: message - ${data.message}, severity - ${data.severity}`
        );
      },
    };
  };

  const web3AccountHook = () => ({
    isConnected: true,
    address: "0x1234567890abcdef1234567890abcdef12345678",
    chainId: 1,
  });

  return (
    <ClaimTokensButtonV3
      claimButtonText="Claim Tokens"
      errorClaimingTokensText="Error claiming tokens"
      claimFaucetTokens={claimFaucetTokens}
      useMessage={useMessage}
      web3AccountHook={web3AccountHook}
    />
  );
};
