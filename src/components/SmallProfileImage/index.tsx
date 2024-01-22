import React from "react";

export interface ISmallProfileImage {
  icon?: string;
  size?: string;
  image?: string;
  bgColor?: string;
  imgChild?: React.ReactElement;
}

export const SmallProfileImage = ({
  size,
  image,
  imgChild,
  bgColor = "#F8F9FC",
}: ISmallProfileImage) => (
  <div className="avatar-container">
    <div
      className="avatar-container"
      style={{ backgroundColor: bgColor, width: size, height: size }}
    >
      {image && (
        <img
          src={image}
          alt="avatar"
          className="app-avatar"
          style={{ width: size, height: size }}
        />
      )}
      {imgChild}
    </div>
  </div>
);
