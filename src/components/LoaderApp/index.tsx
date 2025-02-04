import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const LoaderApp = ({
  image,
  title,
}: {
  title?: string | undefined;
  image: string | StaticImport;
}) => {
  return (
    <Box
      width="100%"
      height="90vh"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Box
        width="auto"
        height="auto"
        sx={{
          animation: "rotate 2.5s infinite",
          "@keyframes rotate": {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
        }}
      >
        <Image priority alt="Logo" width={100} height={100} src={image} />
      </Box>
      <Typography
        sx={{
          color: "black",
          fontWeight: "bold",
          fontSize: { xs: "90px", md: "100px" },
        }}
      >
        {title || "defactor"}
      </Typography>
    </Box>
  );
};
