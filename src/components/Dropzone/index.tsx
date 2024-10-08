import React, { useCallback } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDropzone, FileWithPath } from "react-dropzone";
import AddFilesIcon from "../Icons/v2/addFilesIcon";

export interface DropzoneProps {
  uploadText: string;
  dragText: string;
  fileTypesText: string;
  borderColor?: string;
  textColor?: string;
  iconColor?: string;
  fileSizeLimitText?: string;
  label?: string;
}

export const Dropzone: React.FC<DropzoneProps> = (props) => {
  const theme = useTheme();

  const {
    uploadText = "Upload a file",
    dragText = "or drag and drop",
    fileTypesText = "PDF, DOC, JPG up to ",
    borderColor = theme.palette.grey[300],
    textColor = theme.palette.text.secondary,
    iconColor = theme.palette.grey[500],
    fileSizeLimitText = "10MB",
    label = "Label",
  } = props;

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    acceptedFiles.forEach(file => {
      console.log("Accepted file path: ", file.path);
      console.log("Accepted file name: ", file.name);
      console.log("Accepted file size: ", file.size);
      console.log("Accepted file type: ", file.type);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <Typography
        variant="caption"
        sx={{ opacity: 0.5, color: theme.palette.text.primary }}
      >
        {label}
      </Typography>
      <Box
        {...getRootProps()}
        sx={{
          border: `2px dashed ${borderColor}`,
          textAlign: "center",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
          color: textColor,
        }}
      >
        <input {...getInputProps()} />
        <AddFilesIcon
          width={48}
          height={48}
          color={iconColor}
        />
        <Typography
          variant="body2"
          sx={{ fontWeight: 500, color: textColor }}
        >
          <Typography
            component="span"
            variant="body2"
            sx={{ fontWeight: 500, color: theme.palette.primary.main, mr: 0.5 }}
          >
            {uploadText}
          </Typography>
          <Typography
            component="span"
            variant="body2"
            sx={{ fontWeight: 500, color: theme.palette.text.primary }}
          >
            {dragText}
          </Typography>
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: textColor }}
        >
          {`${fileTypesText} ${fileSizeLimitText}`}
        </Typography>
      </Box>
    </>
  );
};
