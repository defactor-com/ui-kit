import React from "react";
import { Story } from "@storybook/react";
import ClaimTokensButtonV3, {
  ClaimTokensButtonV3Props,
} from "../components/V3/ClaimTokensButtonV3";

export default {
  title: "V3/ClaimTokensButtonV3",
  component: ClaimTokensButtonV3,
  argTypes: {
    claimButtonText: { control: "text" },
    errorClaimingTokensText: { control: "text" },
  },
};

const Template: Story<ClaimTokensButtonV3Props> = (args) => (
  <ClaimTokensButtonV3 {...args} />
);

export const Default = Template.bind({});
Default.args = {
  claimButtonText: "Claim Tokens",
  errorClaimingTokensText: "Error claiming tokens",
  claimFaucetTokens: async (userAddress: string, chainId: number) => {
    console.log(
      `Storybook demo: claimFaucetTokens called with address: ${userAddress}, chainId: ${chainId}`
    );
    return { success: true, res: { msg: "Demo tokens claimed successfully!" } };
  },
  useMessage: () => {
    return {
      setMessageData: (data: {
        message: string;
        severity: "success" | "error";
      }) => {
        console.log(
          `Storybook demo: message - ${data.message}, severity - ${data.severity}`
        );
      },
    };
  },
};
