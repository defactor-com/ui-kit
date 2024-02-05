import React from "react";

import { Container } from "../Container";
import { FlatContainer } from "../FlatContainer";
import Graphic, { GraphicDataType } from "../Graphic";
import dolarIcon from "../../../public/assets/dolar-icon.svg";
import { FluctuationComponent } from "../FluctuationComponent";
import { Point } from "../Point";

export type IDashboard = {
  color: string;
  currency: string;
  data: GraphicDataType[] | undefined;
};

export const Dashboard = ({ color, data, currency }: IDashboard) => (
  <Container
    content={
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <div
          style={{
            borderRight: "solid 1px rgba(0, 0, 0, 0.20)",
            padding: "8px 24px 8px 8px ",
            width: "100%",
          }}
        >
          <div style={{ height: "100%", width: "100%", paddingRight: "24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <img src={dolarIcon} alt="currency icon" />
              <span
                style={{ fontSize: "20px", fontWeight: 700, marginLeft: "8px" }}
              >
                Total Value Locked
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                marginBottom: "24px",
              }}
            >
              <span style={{ fontSize: "34px", fontWeight: 700 }}>
                888888888888
              </span>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#7C7D7E",
                  paddingBottom: "4px",
                }}
              >
                USDC
              </span>
            </div>
            <Graphic color={color} data={data} currency={currency} />
            <div
              style={{
                width: "100%",
                display: "flex",
                marginTop: "16px",
                justifyContent: "space-between",
              }}
            >
              <FlatContainer
                externalStyles="dashboard-bottom-flat-containers"
                content={
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 16,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Point color={color} /> Asset Received
                    </span>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "8px",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#211F23",
                          }}
                        >
                          20000.00
                        </span>
                        <span
                          style={{
                            fontSize: "16px",
                            fontWeight: 400,
                            color: "#7C7D7E",
                          }}
                        >
                          {currency}
                        </span>
                      </div>
                      <FluctuationComponent label="+3.4%" />
                    </div>
                  </div>
                }
              />
              <FlatContainer
                externalStyles="dashboard-bottom-flat-containers"
                content={
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 16,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Point color={color} /> Asset Received
                    </span>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "8px",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#211F23",
                          }}
                        >
                          20000.00
                        </span>
                        <span
                          style={{
                            fontSize: "16px",
                            fontWeight: 400,
                            color: "#7C7D7E",
                          }}
                        >
                          {currency}
                        </span>
                      </div>
                      <FluctuationComponent label="+3.4%" />
                    </div>
                  </div>
                }
              />
              <FlatContainer
                externalStyles="dashboard-bottom-flat-containers"
                content={
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 16,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Point color={color} /> Asset Received
                    </span>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "8px",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span
                          style={{
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#211F23",
                          }}
                        >
                          20000.00
                        </span>
                        <span
                          style={{
                            fontSize: "16px",
                            fontWeight: 400,
                            color: "#7C7D7E",
                          }}
                        >
                          {currency}
                        </span>
                      </div>
                      <FluctuationComponent label="+3.4%" />
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: "16px" }}>
          <span>Pools</span>
          <FlatContainer
            externalStyles="dashboard-right-flat-containers"
            content={
              <div style={{ minWidth: "260px" }}>
                <span>Active Loans</span>
                <div>
                  <span>1,200.00</span>
                  <span>USDC</span>
                </div>
              </div>
            }
          />
          <FlatContainer
            externalStyles="dashboard-right-flat-containers"
            content={
              <div style={{ minWidth: "260px" }}>
                <span>Active Loans</span>
                <div>
                  <span>1,200.00</span>
                  <span>USDC</span>
                </div>
              </div>
            }
          />
          <FlatContainer
            externalStyles="dashboard-right-flat-containers"
            content={
              <div style={{ minWidth: "260px" }}>
                <span>Active Loans</span>
                <div>
                  <span>1,200.00</span>
                  <span>USDC</span>
                </div>
              </div>
            }
          />
        </div>
      </div>
    }
  />
);

export default Dashboard;
