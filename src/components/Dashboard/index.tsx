import React from "react";
import clsx from "clsx";

import { Container } from "../Container";
import lendIcon from "../../../public/assets/lending.svg";
import dolarIcon from "../../../public/assets/dolar-icon.svg";
import { CardComponent } from "../CardComponent";

export type CardItem = {
  label: string;
  value: number | string;
  fluctuation?: string;
  fluctuationValue?: string;
  color?: string;
};

export type IDashboard = {
  content: React.ReactNode;
  colors: string[];
  currency: string;
  fontFamily?: string;
  rightLabel: string;
  titleGraphic: string;
  totalValueLocked: number | string;
  bottomLabel: string;
  bottomContainerItems: CardItem[];
  rightContainerItems: CardItem[];
};

const BottomContainer = ({
  bottomLabel,
  bottomContainerItems,
  colors = [],
  fontFamily,
}: {
  bottomLabel: string;
  bottomContainerItems: CardItem[];
  colors: string[];
  fontFamily?: string;
}) => {
  return (
    <>
      <div className={clsx("flex-center", "margin-top-high")}>
        <div className="pools-icon-container">
          <img width={20} src={lendIcon} alt="lend icon" />
        </div>
        <span className="variant-h3" style={{ fontFamily }}>
          {bottomLabel}
        </span>
      </div>
      <div className="footer-container-dashboard">
        {(bottomContainerItems || []).map((item, index) => (
          <CardComponent
            key={`bottom-item-${index}`}
            externalStyles="dashboard-bottom-flat-containers"
            value={item.value}
            label={item.label}
            fluctuation={item.fluctuation}
            fluctuationValue={item.fluctuationValue}
            fontFamily={fontFamily}
            color={item.color || colors[index % colors.length]}
          />
        ))}
      </div>
    </>
  );
};

const RightContainer = ({
  rightLabel,
  rightContainerItems,
  fontFamily,
}: {
  rightLabel: string;
  rightContainerItems: CardItem[];
  fontFamily?: string;
}) => {
  return (
    <div className="pools-container">
      <div className="flex-center">
        <div className="pools-icon-container">
          <img width={20} src={lendIcon} alt="lend icon" />
        </div>
        <span className="variant-h3" style={{ fontFamily }}>
          {rightLabel}
        </span>
      </div>
      <div className="pools-body-container">
        {(rightContainerItems || []).map((item, index) => (
          <CardComponent
            key={`right-item-${index}`}
            externalStyles="dashboard-right-flat-containers"
            value={item.value}
            label={item.label}
            fontFamily={fontFamily}
            fluctuation={item.fluctuation}
            fluctuationValue={item.fluctuationValue}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export const Dashboard = ({
  bottomLabel,
  bottomContainerItems = [],
  rightContainerItems = [],
  colors,
  currency,
  fontFamily,
  rightLabel,
  titleGraphic,
  totalValueLocked,
  content,
}: IDashboard) => (
  <Container
    content={
      <div className="dashboard-container">
        <div className="graphic-container">
          <div className="graphic-container-internal">
            {titleGraphic && (
              <div className="graphic-header">
                <img src={dolarIcon} alt="currency icon" />
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
                colors={colors}
                fontFamily={fontFamily}
              />
            )}
          </div>
        </div>
        <RightContainer
          rightContainerItems={rightContainerItems}
          rightLabel={rightLabel}
          fontFamily={fontFamily}
        />
      </div>
    }
  />
);
