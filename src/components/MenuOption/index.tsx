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
        color: "#211F23",
        flexDirection: "row",
        textTransform: "none",
        textDecoration: "none",
        fontFamily: fontFamily,
        borderRight: {
          xs: "none",
          md: isSelected ? `2px solid ${color}` : "none",
        },
        borderLeft: {
          xs: isSelected ? `2px solid ${color}` : "none",
          md: "none",
        },
        justifyContent: "flex-start",
        fontWeight: isSelected ? 700 : 400,
        backgroundColor: isSelected ? "#f8f9fc" : "#fff",
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
