import React from "react";

export interface IContainer {
  content: React.ReactNode;
  optionalStyles?: React.CSSProperties;
  externalStyles?: string;
}
