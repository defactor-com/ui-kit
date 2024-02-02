import React, { ChangeEvent } from "react";

import { Container } from "../Container";
import Graphic from "../Graphic";

export type IDashboard = {
  value: string | number | readonly string[] | undefined;
  type?: React.HTMLInputTypeAttribute | undefined;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
};

export const Dashboard = ({ value, type, onChange }: IDashboard) => (
  <Container
    content={
      <div style={{ display: "flex", height: "400px", width: "100%" }}>
        <div
          style={{
            borderRight: "solid 1px rgba(0, 0, 0, 0.20)",
            height: "100%",
            width: "100%",
          }}
        >
          <div style={{ height: "100%", width: "100%" }}>
            <Graphic />
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    }
  />
);

export default Dashboard;
