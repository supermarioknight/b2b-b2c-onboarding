import { Button as MUIButton } from "@mui/material";
import { ComponentProps } from "react";

export interface ButtonProps extends ComponentProps<typeof MUIButton> {}

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <MUIButton {...props} />;
};

export default Button;
