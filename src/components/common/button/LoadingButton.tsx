import { ComponentProps } from "react";
import MUILoadingBtn from "@mui/lab/LoadingButton";
import { styled } from "@mui/material";

export interface ButtonProps extends ComponentProps<typeof MUILoadingBtn> {}

const StyledLoadingButton = styled(MUILoadingBtn)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  "&:disabled": {
    backgroundColor: theme.palette.primary.main,
  },
  "& .MuiCircularProgress-root": {
    width: "24px",
    height: "24px",
  },
}));

const LoadingButton: React.FC<ButtonProps> = ({ ...props }) => {
  return <StyledLoadingButton variant="contained" color="primary" {...props} />;
};

export default LoadingButton;
