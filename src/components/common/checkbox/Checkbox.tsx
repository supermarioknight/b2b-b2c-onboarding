import { CheckedIcon } from "../../../assets/icons/svg/Icons.tsx";
import { Checkbox as MUICheckbox } from "@mui/material";
import { ComponentProps } from "react";

export interface CheckboxProps extends ComponentProps<typeof MUICheckbox> {}

const Checkbox: React.FC<CheckboxProps> = ({ ...props }) => {
  return <MUICheckbox {...props} checkedIcon={<CheckedIcon />} disableRipple />;
};

export default Checkbox;
