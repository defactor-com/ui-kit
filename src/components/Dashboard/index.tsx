import React from "react";
import clsx from "clsx";

import DollarIcon from "../../../public/assets/dollar-icon.svg";
import { CardComponent } from "../CardComponent";
import { Container } from "../Container";

import {
  IDashboard,
  IBottomContainer,
  IRightContainer,
} from "./DashboardTypes";

const BottomContainer = ({
  bottomContainerItems,
  bottomLabel,
  colors = [],
  fontFamily,
  icon,
}: IBottomContainer) => {
  return (
    <>
      <div className={clsx("flex-center", "margin-top-high")}>
        <div className="pools-icon-container">
          {icon && typeof icon === "string" ? (
            <img
              src={icon}
              alt={`${bottomLabel} icon`}
              className="menu-option-icon"
            />
          ) : (
            icon
          )}
        </div>
        <span className="variant-h3" style={{ fontFamily }}>
          {bottomLabel}
        </span>
      </div>
      <div className="footer-container-dashboard">
        {(bottomContainerItems || []).map((item, index) => (
          <CardComponent
            key={`bottom-item-${index}`}
            externalStyles={clsx(
              "dashboard-bottom-flat-containers",
              item.externalStyles
            )}
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
    </>
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
              "dashboard-right-flat-containers",
              item.externalStyles
            )}
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
  rightContainerItems = [],
  totalValueLocked,
  titleGraphic,
  bottomLabel,
  fontFamily,
  rightLabel,
  bottomIcon,
  rightIcon,
  currency,
  currencyIcon = DollarIcon,
  content,
  colors,
}: IDashboard) => (
  <Container
    content={
      <div className="dashboard-container">
        <div className="graphic-container">
          <div className="graphic-container-internal">
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
                  className={clsx("variant-body2", "padding-bottom-medium")}
                  style={{ fontFamily }}
                >
                  {currency}
                </span>
              </div>
            )}
            {content}
            {bottomLabel && bottomContainerItems.length > 0 && (
              <BottomContainer
                bottomContainerItems={bottomContainerItems}
                bottomLabel={bottomLabel}
                fontFamily={fontFamily}
                icon={bottomIcon}
                colors={colors}
              />
            )}
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
