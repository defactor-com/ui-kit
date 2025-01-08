import { Alert, Snackbar } from "@mui/material";
import React from "react";

interface UseMessage {
  messageData: { message: string; severity: "success" | "error" | "warning" | "info" } | null;
  setMessageData: (data: null) => void;
}

interface SnackbarV3Props {
  useMessage: UseMessage;
}

const SnackbarV3: React.FC<SnackbarV3Props> = ({ useMessage }) => {
  const { messageData, setMessageData } = useMessage;

  return (
    <>
      {messageData && (
        <Snackbar
          open={!!messageData}
          autoHideDuration={5000}
          onClose={() => setMessageData(null)}
          sx={{ borderRadius: "16px", pl: "180px" }}
        >
          <Alert
            onClose={() => setMessageData(null)}
            severity={messageData.severity}
            variant="filled"
            sx={{
              width: "100%",
              borderRadius: "16px",
              pr: 2,
              pl: 2,
              pt: 1,
              pb: 1,
            }}
          >
            {messageData.message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default SnackbarV3;
