import React from "react";

import { IPoint } from "./PointTypes";

export const Point = ({ color }: IPoint) => (
  <div className="point" style={{ backgroundColor: color }} />
);
