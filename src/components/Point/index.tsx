import React from "react";

export interface IPoint {
  color: string;
}

export const Point = ({ color }: IPoint) => (
  <div className="point" style={{ backgroundColor: color }} />
);
