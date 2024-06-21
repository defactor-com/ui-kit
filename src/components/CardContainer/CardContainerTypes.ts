import React from "react";

export interface ICardContainer {
  content: React.ReactNode;
  externalStyles?: string;
  optionalStyles?: React.CSSProperties;
  handleMouseEnter?: (newValue: boolean) => void;
  handleMouseLeave?: (newValue: boolean) => void;
  isPointer?: boolean;
  hoverBehavior?: boolean;
}
