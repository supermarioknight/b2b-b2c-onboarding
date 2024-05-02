import { toast as reactToastify, ToastOptions } from "react-toastify";
import { AlertProps, Typography } from "@mui/material";

function Alert(props: AlertProps) {
  return <Alert elevation={6} variant="filled" {...props} />;
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
    reactToastify.error(
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
