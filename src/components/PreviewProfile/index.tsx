import React from "react";

import { SmallProfileImage } from "../SmallProfileImage";

export interface IPreviewProfile {
  label?: string;
  image?: string;
  bgColor?: string;
  fontSize?: string;
  imageSize?: string;
  fontWeight?: number;
  fontFamily?: string;
  imgChild?: React.ReactElement;
}

export const PreviewProfile = ({
  label,
  image,
  bgColor,
  imgChild,
  fontSize,
  imageSize,
  fontWeight,
  fontFamily,
}: IPreviewProfile) => (
  <div className="preview-profile-container">
    <SmallProfileImage
      image={image}
      size={imageSize}
      bgColor={bgColor}
      imgChild={imgChild}
    />
    <span
      className="label-space"
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        fontFamily: fontFamily,
      }}
    >
      {label}
    </span>
  </div>
);
