import React from "react";
import clsx from "clsx";
import { Box } from "@mui/material";

import { Container } from "../Container";
import { CardComponent } from "../CardComponent";
import DollarIcon from "../../../public/assets/dollar-icon.svg";

import {
  IDashboard,
  IHeaderContainer,
  IRightContainer,
} from "./DashboardTypes";

const HeaderContainer = ({
  bottomContainerItems,
  colors = [],
  fontFamily,
}: IHeaderContainer) => {
  const getPaddingComponent = (index: number): string => {
    if (index === 0) return "dashboard-header-containers-start";
    else if (index === bottomContainerItems.length - 1)
      return "dashboard-header-containers-end";

    return "dasbohard-header-containers-padding";
  };

  return (
    <div className="header-container-dashboard">
      {(bottomContainerItems || []).map((item, index) => (
        <CardComponent
          key={`bottom-item-${index}`}
          externalStyles={clsx(getPaddingComponent(index), item.externalStyles)}
          optionalStyles={item.optionalStyles}
          value={item.value}
          label={item.label}
          fontFamily={fontFamily}
          fluctuation={item.fluctuation}
          infoTooltip={item.infoTooltip}
          hoverBehavior={item.hoverBehavior}
          fluctuationValue={item.fluctuationValue}
          color={item.color || colors[index % colors.length]}
        />
      ))}
    </div>
  );
};

const RightContainer = ({
  rightContainerItems,
  rightLabel,
  fontFamily,
  icon,
}: IRightContainer) => {
  return (
    <div className="pools-container">
      <div className="flex-center">
        <div className="pools-icon-container">
          {icon && typeof icon === "string" ? (
            <img
              src={icon}
              alt={`${rightLabel} icon`}
              className="menu-option-icon"
            />
          ) : (
            icon
          )}
        </div>
        <span className="variant-h3" style={{ fontFamily }}>
          {rightLabel}
        </span>
      </div>
      <div className="pools-body-container">
        {(rightContainerItems || []).map((item, index) => (
          <CardComponent
            key={`right-item-${index}`}
            externalStyles={clsx(
              index === rightContainerItems.length - 1
                ? "border-botton-last-container"
                : "",
              "dashboard-right-flat-containers",
              item.externalStyles
            )}
            optionalStyles={item.optionalStyles}
            value={item.value}
            label={item.label}
            color={item.color}
            fontFamily={fontFamily}
            fluctuation={item.fluctuation}
            infoTooltip={item.infoTooltip}
            hoverBehavior={item.hoverBehavior}
            fluctuationValue={item.fluctuationValue}
          />
        ))}
      </div>
    </div>
  );
};

export const Dashboard = ({
  bottomContainerItems = [],
  currencyIcon = DollarIcon,
  rightContainerItems = [],
  multichainSelector,
  totalValueLocked,
  titleGraphic,
  bottomLabel,
  fontFamily,
  rightLabel,
  bottomIcon,
  rightIcon,
  currency,
  content,
  colors,
}: IDashboard) => (
  <Container
    externalStyles="dashboard-container-styles"
    content={
      <div className="dashboard-container">
        <div className="graphic-container">
          <div className="graphic-container-internal">
            <div>
              <Box
                mb={2}
                sx={{
                  display: { xs: "flex", sm: "none" },
                  justifyContent: "center",
                }}
              >
                {multichainSelector}
              </Box>
              <div className="dashboard-title-styles">
                <Box>
                  {titleGraphic && (
                    <div className="graphic-header">
                      {currencyIcon && typeof currencyIcon === "string" ? (
                        <img src={currencyIcon} alt="currency icon" />
                      ) : (
                        currencyIcon
                      )}
                      <span
                        className={clsx("variant-h3", "margin-left")}
                        style={{ fontFamily }}
                      >
                        {titleGraphic}
                      </span>
                    </div>
                  )}
                  {totalValueLocked && (
                    <div className="total-value-container">
                      <span className="variant-h1" style={{ fontFamily }}>
                        {totalValueLocked}
                      </span>
                      <span
                        className={clsx(
                          "variant-body2",
                          "padding-bottom-medium"
                        )}
                        style={{ fontFamily }}
                      >
                        {currency}
                      </span>
                    </div>
                  )}
                </Box>
                <Box mb={2} sx={{ display: { xs: "none", sm: "block" } }}>
                  {multichainSelector}
                </Box>
              </div>
              {bottomLabel && bottomContainerItems.length > 0 && (
                <>
                  <HeaderContainer
                    bottomContainerItems={bottomContainerItems}
                    bottomLabel={bottomLabel}
                    fontFamily={fontFamily}
                    icon={bottomIcon}
                    colors={colors}
                  />
                </>
              )}
            </div>
            {content}
          </div>
        </div>
        <RightContainer
          rightContainerItems={rightContainerItems}
          rightLabel={rightLabel}
          fontFamily={fontFamily}
          icon={rightIcon}
        />
      </div>
    }
  />
);
