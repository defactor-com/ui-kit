import React from "react";
import clsx from "clsx";

import { Point } from "../Point";
import { Container } from "../Container";
import { CardContainer } from "../CardContainer";
import lendIcon from "../../../public/assets/lending.svg";
import dolarIcon from "../../../public/assets/dolar-icon.svg";
import { FluctuationComponent } from "../FluctuationComponent";

export type RightContainerItem = {
  label: string;
  value: number | string;
};

export type BottomContainerItem = {
  label: string;
  value: number;
  fluctuation: string;
};

export type formatValueType = (value: number, options?: Intl.NumberFormatOptions) => string;

export type IDashboard = {
  content: React.ReactNode;
  colors: string[];
  currency: string;
  fontFamily?: string;
  rightLabel: string;
  titleGraphic: string;
  totalValueLocked: number;
  bottomLabel: string;
  bottomContainerItems: BottomContainerItem[];
  rightContainerItems: RightContainerItem[];
  formatValue: formatValueType;
};

const BottomContainer = ({
  bottomLabel,
  bottomContainerItems,
  colors,
  formatValue,
  fontFamily,
}: {
  bottomLabel: string;
  bottomContainerItems: BottomContainerItem[];
  colors: string[];
  formatValue: formatValueType;
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
          <CardContainer
            key={`bottom-item-${index}`}
            externalStyles="dashboard-bottom-flat-containers"
            content={
              <div className="flex-column-direction">
                <span
                  className={clsx("flex-center", "variant-body1")}
                  style={{ fontFamily }}
                >
                  <Point color={colors[index % colors.length]} /> {item.label}
                </span>
                <div className="flat-body-container">
                  <div className="flex-column-direction">
                    <span className="variant-h3" style={{ fontFamily }}>
                      {formatValue(item.value)}
                    </span>
                  </div>
                  <FluctuationComponent label={item.fluctuation} />
                </div>
              </div>
            }
          />
        ))}
      </div>
    </>
  );
};

const RightContainer = ({
  rightLabel,
  rightContainerItems,
  formatValue,
  fontFamily,
}: {
  rightLabel: string;
  rightContainerItems: RightContainerItem[];
  formatValue: formatValueType;
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
          <CardContainer
            key={`right-item-${index}`}
            externalStyles="dashboard-right-flat-containers"
            content={
              <div>
                <span className="variant-body1" style={{ fontFamily }}>
                  {item.label}
                </span>
                <div className="margin-top">
                  <span className="variant-h3" style={{ fontFamily }}>
                    {typeof item.value === "string"
                      ? item.value
                      : formatValue(item.value)}
                  </span>
                </div>
              </div>
            }
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
  formatValue = (value) => value.toLocaleString("en-US"),
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
                  {formatValue(totalValueLocked, { style: "decimal" })}
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
                formatValue={formatValue}
                colors={colors}
                fontFamily={fontFamily}
              />
            )}
          </div>
        </div>
        <RightContainer
          rightContainerItems={rightContainerItems}
          rightLabel={rightLabel}
          formatValue={formatValue}
          fontFamily={fontFamily}
        />
      </div>
    }
  />
);
