import clsx from "clsx";
import React from "react";
import { Button } from "@mui/material";

import { IMenuOption } from "./MenuOptionTypes";
import Image from "next/image";

export const MenuOption: React.FC<IMenuOption> = React.memo(
  ({ text, color, icon, isSelected, fontFamily, ...props }: IMenuOption) => (
    <Button
      sx={{
        padding: 2,
        fontSize: 14,
        width: "100%",
        borderRadius: 0,
        flexDirection: {
          xs: "column",
          md: "row",
        },
        textTransform: "none",
        textDecoration: "none",
        fontFamily: fontFamily,
        justifyContent: "flex-start",
        fontWeight: isSelected ? 700 : 400,
        borderRight: {
          xs: "none",
          md: isSelected ? `2px solid ${color}` : "none",
        },
        backgroundColor: isSelected ? "#f8f9fc" : "#fff",
        color: window.innerWidth < 912 && isSelected ? color : "#211F23",
      }}
      startIcon={
        icon && typeof icon === "string" ? (
          <Image src={icon} width={24} height={24} alt={text || ""} />
        ) : (
          icon
        )
      }
      {...props}
    >
      {text}
    </Button>
  )
);
