import React from "react";

import { SmallProfileImage } from "../SmallProfileImage";

import { IPreviewProfile } from "./PreviewProfileTypes";

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
