import React from "react";

import { SmallProfileImage } from "../SmallProfileImage";

export interface IPreviewProfile {
  label?: string;
  image?: string;
  bgColor?: string;
  imgChild?: React.ReactElement;
}

export const PreviewProfile: React.FC<IPreviewProfile> = ({
  label,
  image,
  bgColor,
  imgChild,
}) => (
  <div className="preview-profile-container">
    <SmallProfileImage image={image} bgColor={bgColor} imgChild={imgChild} />
    <span className="label-space">{label}</span>
  </div>
);
