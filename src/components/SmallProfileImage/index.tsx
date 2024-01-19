import React from "react";

export interface ISmallProfileImage {
  icon?: string;
  image?: string;
  bgColor?: string;
  imgChild?: React.ReactElement;
}

export const SmallProfileImage = ({
  image,
  imgChild,
  bgColor = "#F8F9FC",
}: ISmallProfileImage) => (
  <div className="avatar-container">
    <div className="avatar-container" style={{ backgroundColor: bgColor }}>
      {image && <img src={image} className="app-avatar" alt="avatar" />}
      {imgChild}
    </div>
  </div>
);
