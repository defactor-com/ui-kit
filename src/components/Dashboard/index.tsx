import React from "react";
import clsx from "clsx";

import { Point } from "../Point";
import { Container } from "../Container";
import { CardContainer } from "../CardContainer";
import { GraphicDataType, Graphic, SeriesDataType } from "../Graphic";
import lendIcon from "../../../public/assets/lending.svg";
import dolarIcon from "../../../public/assets/dolar-icon.svg";
import { FluctuationComponent } from "../FluctuationComponent";

export type BottomContainerItem = {
  label: string;
  value: number;
  fluctuation: string;
};

export type IDashboard = {
  colors: string[];
  currency: string;
  fontFamily: string;
  poolsLabel: string;
  titleGraphic: string;
  totalValueLocked: number;
  chartSubtitle: string;
  chartDescription: string;
  poolsLabel1Container: string;
  poolsValue1Container: number;
  poolsLabel2Container: string;
  poolsValue2Container: number;
  poolsLabel3Container: string;
  poolsValue3Container: number;
  bottomLabel: string;
  bottomContainerItems: BottomContainerItem[];
  data: GraphicDataType[] | undefined;
  series: SeriesDataType[];
  formatValue: (value: number) => string;
};

export const Dashboard = ({
  data,
  series,
  bottomLabel,
  bottomContainerItems,
  colors,
  currency,
  fontFamily,
  poolsLabel,
  titleGraphic,
  totalValueLocked,
  chartSubtitle,
  chartDescription,
  poolsLabel1Container,
  poolsValue1Container,
  poolsLabel2Container,
  poolsValue2Container,
  poolsLabel3Container,
  poolsValue3Container,
  formatValue = (value) => value.toString(),
}: IDashboard) => (
  <Container
    content={
      <div className="dashboard-container">
        <div className="graphic-container">
          <div className="graphic-container-internal">
            <div className="graphic-header">
              <img src={dolarIcon} alt="currency icon" />
              <span className={clsx("variant-h3", "margin-left")}>
                {titleGraphic}
              </span>
            </div>
            <div className="total-value-container">
              <span className="variant-h1">{formatValue(totalValueLocked)}</span>
              <span className={clsx("variant-body2", "padding-bottom-medium")}>
                {currency}
              </span>
            </div>
            <Container
              externalStyles="chart-container"
              content={
                <>
                  <div
                    className={clsx(
                      "flex-column-direction",
                      "margin-bottom-high"
                    )}
                  >
                    {chartSubtitle && (
                      <span className="variant-h3">{chartSubtitle}</span>
                    )}
                    {chartDescription && (
                      <span className="variant-body2">{chartDescription}</span>
                    )}
                  </div>
                  <Graphic
                    formatValue={formatValue}
                    colors={colors}
                    data={data}
                    series={series}
                    fontFamily={fontFamily}
                  />
                </>
              }
            />
            <hr className="horizontal-line"/>
            {bottomLabel && (
              <div className={clsx("flex-center", "margin-top-high")}>
                <div className="pools-icon-container">
                  <img width={20} src={lendIcon} alt="lend icon" />
                </div>
                <span className="variant-h3">{bottomLabel}</span>
              </div>
            )}
            <div className="footer-container-dashboard">
              {(bottomContainerItems || []).map((item, index) => (
                <CardContainer
                  key={`bottom-item-${index}`}
                  externalStyles="dashboard-bottom-flat-containers"
                  content={
                    <div className="flex-column-direction">
                      <span className={clsx("flex-center", "variant-body1")}>
                        <Point color={colors[index % colors.length]} />{" "}
                        {item.label}
                      </span>
                      <div className="flat-body-container">
                        <div className="flex-column-direction">
                          <span className="variant-h3">
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
          </div>
        </div>
        <div className="pools-container">
          <div className="flex-center">
            <div className="pools-icon-container">
              <img width={20} src={lendIcon} alt="lend icon" />
            </div>
            <span className="variant-h3">{poolsLabel}</span>
          </div>
          <div className="pools-body-container">
            <CardContainer
              externalStyles="dashboard-right-flat-containers"
              content={
                <div>
                  <span className="variant-body1">{poolsLabel1Container}</span>
                  <div className="margin-top">
                    <span className="variant-h3">
                      {formatValue(poolsValue1Container)}
                    </span>
                  </div>
                </div>
              }
            />
            <CardContainer
              externalStyles="dashboard-right-flat-containers"
              content={
                <div>
                  <span className="variant-body1">{poolsLabel2Container}</span>
                  <div className="margin-top">
                    <span className="variant-h3">
                      {formatValue(poolsValue2Container)}
                    </span>
                  </div>
                </div>
              }
            />
            <CardContainer
              externalStyles="dashboard-right-flat-containers"
              content={
                <div>
                  <span className="variant-body1">{poolsLabel3Container}</span>
                  <div className="margin-top">
                    <span className="variant-h3">
                      {formatValue(poolsValue3Container)}
                    </span>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    }
  />
);
