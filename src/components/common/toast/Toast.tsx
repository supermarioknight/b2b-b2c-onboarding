import { toast as reactToastify, ToastOptions } from "react-toastify";
import { AlertProps, Typography, Alert as MuiAlert } from "@mui/material";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const toast = {
  success: (message: string, options?: ToastOptions) => {
    reactToastify(
      () => (
        <Alert severity="success" variant="filled">
          <Typography>Success</Typography>
          {message}
        </Alert>
      ),
      options
    );
  },
  error: (message: string, options?: ToastOptions) => {
    reactToastify(
      () => (
        <Alert severity="error" variant="filled">
          <Typography>Error</Typography>
          {message}
        </Alert>
      ),
      options
    );
  },
};

export default toast;
