import React from "react";
import Image from "next/image";
import { alpha } from "@mui/system";
import {
  Box,
  Divider,
  FormControl,
  MenuItem,
  Popover,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";

import { Button } from "../Button";
import { Container } from "../Container";
import { MenuOption } from "../MenuOption";
import desconnetIcon from "../../../public/assets/desconnect-wallet-icon.svg";
import { NetworksDataType } from "../MultichainSelector/MultiChainSelectorTypes";

import { WalletContainerComponent } from "./styles";
import { TokenBalance, WalletContainerProps } from "./WalletTypes";
import useWalletContainer from "./useWalletContainer";

const WalletContainer = ({
  handleFormartCurrency,
  onClickMenuOption,
  configNetworks,
  networksAssets,
  formatCurrency,
  handleLogout,
  userContext,
  handleClose,
  networks,
  anchorEl,
  address,
  onClick,
  labels,
  theme,
  open,
  id,
}: WalletContainerProps): JSX.Element => {
  const [{ isAddressCopied }, { handleAddressCopy, formatAddress }] =
    useWalletContainer(address);

  return (
    <WalletContainerComponent>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClose={handleClose}
      >
        <Container
          externalStyles={"container-wallet-mobile-styles"}
          content={
            <Box minWidth="250px">
              {address && (
                <>
                  <Box
                    bgcolor={theme.palette.background.default}
                    flexDirection="column"
                    alignItems="center"
                    display="flex"
                    paddingY={2}
                    mb={2}
                  >
                    <Image
                      src={
                        networksAssets[userContext.networkConnected.chainId]
                          ?.logo
                      }
                      alt="Logo chain"
                      height={32}
                      width={32}
                    />
                    <Tooltip
                      title={
                        isAddressCopied ? labels.copied : labels.copyToClipboard
                      }
                    >
                      <Typography
                        mt={1}
                        onClick={handleAddressCopy}
                        color={theme.palette.text.secondary}
                        sx={{
                          ...theme.typography.body1,
                          cursor: "pointer",
                          fontWeight: 500,
                        }}
                      >
                        {formatAddress(address)}
                      </Typography>
                    </Tooltip>
                  </Box>
                  <Box mb={1}>
                    <Typography
                      sx={{ ...theme.typography.body1, fontWeight: 500 }}
                    >
                      {labels.balance}
                    </Typography>
                    <Box display="flex" alignItems="end" mt={1}>
                      <Typography
                        sx={{ ...theme.typography.subtitle1, fontWeight: 700 }}
                      >
                        {handleFormartCurrency()}
                      </Typography>
                      <Typography
                        sx={{ ...theme.typography.caption, fontWeight: 700 }}
                        ml={0.5}
                      >
                        {userContext.accountBalance.symbol}
                      </Typography>
                    </Box>
                  </Box>
                  <Box mb={2}>
                    <Typography
                      sx={{ ...theme.typography.body1, fontWeight: 500 }}
                    >
                      {labels.collateralBalance}
                    </Typography>
                    <Box display="flex" alignItems="end" mt={1}>
                      {userContext.accountCollateralBalance.length === 1 ? (
                        <Box display="flex" alignItems="end">
                          <Typography
                            sx={{
                              ...theme.typography.subtitle1,
                              fontWeight: 700,
                            }}
                          >
                            {formatCurrency(
                              userContext.accountCollateralBalance[0].balance,
                              userContext.accountCollateralBalance[0].decimals
                            )}
                          </Typography>
                          <Typography
                            sx={{
                              ...theme.typography.caption,
                              fontWeight: 700,
                            }}
                            ml={0.5}
                            mb={0.5}
                          >
                            {userContext.accountCollateralBalance[0].symbol}
                          </Typography>
                        </Box>
                      ) : (
                        <FormControl fullWidth>
                          <Select
                            variant="filled"
                            id="demo-simple-select"
                            sx={{
                              padding: "0px !important",
                              bgcolor: "#F8F9FC",
                              ".css-d9oaum-MuiSelect-select-MuiInputBase-input-MuiFilledInput-input":
                                {
                                  padding: "8px 4px !important",
                                },
                              ".css-hhbxku-MuiSelect-select-MuiInputBase-input-MuiFilledInput-input":
                                {
                                  padding: "8px 4px !important",
                                },
                              "&::before": {
                                display: "none",
                              },
                              "&::after": {
                                display: "none",
                              },
                              "&:hover": {
                                border: "none",
                              },
                            }}
                            value={userContext.selectedCollateralBalance}
                            renderValue={(selected: TokenBalance) => (
                              <Box
                                display="flex"
                                alignItems="end"
                                key={selected?.address}
                              >
                                <Typography
                                  sx={{
                                    ...theme.typography.subtitle1,
                                    fontWeight: 700,
                                  }}
                                >
                                  {formatCurrency(
                                    selected?.balance,
                                    selected?.decimals
                                  )}
                                </Typography>
                                <Typography
                                  sx={{
                                    ...theme.typography.caption,
                                    fontWeight: 700,
                                  }}
                                  ml={0.5}
                                  mb={0.5}
                                >
                                  {selected?.symbol}
                                </Typography>
                              </Box>
                            )}
                          >
                            {userContext?.accountCollateralBalance.map(
                              (collateral: TokenBalance) => (
                                <MenuItem
                                  key={collateral?.address}
                                  sx={{
                                    backgroundColor:
                                      userContext?.selectedCollateralBalance
                                        ?.address === collateral?.address
                                        ? alpha(theme.palette.primary.main, 0.1)
                                        : "#fff !important",
                                    "&:hover": {
                                      backgroundColor: "#F8F9FC !important",
                                    },
                                  }}
                                >
                                  <Box
                                    display="flex"
                                    alignItems="end"
                                    onClick={() => onClick(collateral)}
                                  >
                                    <Typography
                                      sx={{
                                        ...theme.typography.subtitle1,
                                        fontWeight: 700,
                                      }}
                                    >
                                      {formatCurrency(
                                        collateral.balance,
                                        collateral.decimals
                                      )}
                                    </Typography>
                                    <Typography
                                      sx={{
                                        ...theme.typography.caption,
                                        fontWeight: 700,
                                      }}
                                      ml={0.5}
                                      mb={0.5}
                                    >
                                      {collateral.symbol}
                                    </Typography>
                                  </Box>
                                </MenuItem>
                              )
                            )}
                          </Select>
                        </FormControl>
                      )}
                    </Box>
                  </Box>
                  <Divider />
                </>
              )}
              <Typography
                sx={{ ...theme.typography.body1, fontWeight: 500 }}
                mt={2}
                mb={1}
              >
                {labels.network}
              </Typography>
              <Box mb={4}>
                {networks.map((network) => {
                  const networkAvailable = configNetworks.filter(
                    (net: NetworksDataType) => net.chainId === network.chainId
                  );

                  return networkAvailable.length ? (
                    <MenuOption
                      text={network.name}
                      style={{
                        fontFamily: theme.typography.fontFamily,
                        color: theme.palette.text.primary,
                        padding: theme.spacing(1, 2),
                        flexDirection: "row",
                        borderLeft:
                          userContext?.networkConnected.name === network.name
                            ? `2px solid ${theme.palette.secondary.main}`
                            : "none",
                        backgroundColor:
                          userContext?.networkConnected.name === network.name
                            ? alpha(theme.palette.secondary.main, 0.1)
                            : theme.palette.common.white,
                      }}
                      color={
                        userContext?.networkConnected.name === network.name
                          ? theme.palette.secondary.main
                          : undefined
                      }
                      isSelected={
                        userContext?.networkConnected.name === network.name
                      }
                      icon={
                        <Image
                          width={24}
                          height={24}
                          src={network.logo}
                          alt={`${network.name} logo`}
                        />
                      }
                      onClick={() => onClickMenuOption(network.chainId)}
                    />
                  ) : (
                    <></>
                  );
                })}
              </Box>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Button
                  fontFamily={theme.typography.fontFamily}
                  bgColor={theme.palette.grey[900]}
                  onClick={() => {
                    handleLogout(), handleClose();
                  }}
                  label={labels.disconnect}
                  icon={desconnetIcon}
                  variant="contained"
                />
              </Box>
            </Box>
          }
        />
      </Popover>
    </WalletContainerComponent>
  );
};

export default WalletContainer;
