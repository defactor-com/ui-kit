import React from "react";
import clsx from "clsx";

import { Point } from "../Point";
import { Container } from "../Container";
import { FlatContainer } from "../FlatContainer";
import { GraphicDataType, Graphic, SeriesDataType } from "../Graphic";
import lendIcon from "../../../public/assets/lending.svg";
import dolarIcon from "../../../public/assets/dolar-icon.svg";
import { FluctuationComponent } from "../FluctuationComponent";

export type IDashboard = {
  colors: string[];
  color: string;
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
  label1BottomContainer: string;
  value1BottomContainer: number;
  label2BottomContainer: string;
  value2BottomContainer: number;
  label3BottomContainer: string;
  value3BottomContainer: number;
  fluctuation1BottomContainer: string;
  fluctuation2BottomContainer: string;
  fluctuation3BottomContainer: string;
  data: GraphicDataType[] | undefined;
  series: SeriesDataType[];
};

export const Dashboard = ({
  data,
  series,
  colors,
  color,
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
  label1BottomContainer,
  value1BottomContainer,
  label2BottomContainer,
  value2BottomContainer,
  label3BottomContainer,
  value3BottomContainer,
  fluctuation1BottomContainer,
  fluctuation2BottomContainer,
  fluctuation3BottomContainer,
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
              <span className="variant-h1">{totalValueLocked}</span>
              <span className={clsx("variant-body2", "padding-bottom-medium")}>
                {currency}
              </span>
            </div>
            <Container
              content={
                <>
                  <div
                    className={clsx(
                      "flex-column-direction",
                      "chart-title-container"
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
                    colors={colors}
                    data={data}
                    series={series}
                    currency={currency}
                    fontFamily={fontFamily}
                  />
                </>
              }
            />
            <div className="footer-container-dashboard">
              <FlatContainer
                externalStyles="dashboard-bottom-flat-containers"
                content={
                  <div className="flex-column-direction">
                    <span className={clsx("variant-body1", "flex-center")}>
                      <Point color={colors[0] || color} />{" "}
                      {label1BottomContainer}
                    </span>
                    <div className="flat-body-container">
                      <div className="flex-column-direction">
                        <span className="variant-h3">
                          {value1BottomContainer}
                        </span>
                        <span
                          className={clsx("variant-body2", "margin-top-medium")}
                        >
                          {currency}
                        </span>
                      </div>
                      <FluctuationComponent
                        label={fluctuation1BottomContainer}
                      />
                    </div>
                  </div>
                }
              />
              <FlatContainer
                externalStyles="dashboard-bottom-flat-containers"
                content={
                  <div className="flex-column-direction">
                    <span className={clsx("variant-body1", "flex-center")}>
                      <Point color={colors[1] || color} />{" "}
                      {label2BottomContainer}
                    </span>
                    <div className="flat-body-container">
                      <div className="flex-column-direction">
                        <span className="variant-h3">
                          {value2BottomContainer}
                        </span>
                        <span
                          className={clsx("margin-top-medium", "variant-body2")}
                        >
                          {currency}
                        </span>
                      </div>
                      <FluctuationComponent
                        label={fluctuation2BottomContainer}
                      />
                    </div>
                  </div>
                }
              />
              <FlatContainer
                externalStyles="dashboard-bottom-flat-containers"
                content={
                  <div className="flex-column-direction">
                    <span className={clsx("flex-center", "variant-body1")}>
                      <Point color={colors[2] || color} />{" "}
                      {label3BottomContainer}
                    </span>
                    <div className="flat-body-container">
                      <div className="flex-column-direction">
                        <span className="variant-h3">
                          {value3BottomContainer}
                        </span>
                        <span
                          className={clsx("margin-top-medium", "variant-body2")}
                        >
                          {currency}
                        </span>
                      </div>
                      <FluctuationComponent
                        label={fluctuation3BottomContainer}
                      />
                    </div>
                  </div>
                }
              />
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
            <FlatContainer
              externalStyles="dashboard-right-flat-containers"
              content={
                <div>
                  <span className="variant-body1">{poolsLabel1Container}</span>
                  <div className="margin-top">
                    <span className="variant-h3">{poolsValue1Container}</span>
                    <span
                      className={clsx("variant-body2", "margin-left-medium")}
                    >
                      {currency}
                    </span>
                  </div>
                </div>
              }
            />
            <FlatContainer
              externalStyles="dashboard-right-flat-containers"
              content={
                <div>
                  <span className="variant-body1">{poolsLabel2Container}</span>
                  <div className="margin-top">
                    <span className="variant-h3">{poolsValue2Container}</span>
                    <span
                      className={clsx("variant-body2", "margin-left-medium")}
                    >
                      {currency}
                    </span>
                  </div>
                </div>
              }
            />
            <FlatContainer
              externalStyles="dashboard-right-flat-containers"
              content={
                <div>
                  <span className="variant-body1">{poolsLabel3Container}</span>
                  <div className="margin-top">
                    <span className="variant-h3">{poolsValue3Container}</span>
                    <span
                      className={clsx("variant-body2", "margin-left-medium")}
                    >
                      {currency}
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
