import { RadioGroup, FormControlLabel, Radio, Typography } from "@mui/material";
import React, { ComponentProps } from "react";

export interface RadioGrpProps extends ComponentProps<typeof RadioGroup> {
  title?: string;
}

export interface RadioProps
  extends Omit<ComponentProps<typeof FormControlLabel>, "control"> {}

const RadioGrp: React.FC<RadioGrpProps> = ({ title, ...props }) => {
  return (
    <>
      {title ? <Typography variant="body2">{title}</Typography> : null}
      <RadioGroup {...props}></RadioGroup>
    </>
  );
};

export default RadioGrp;

export const RadioFormControl: React.FC<RadioProps> = ({ ...props }) => {
  return <FormControlLabel {...props} control={<Radio />} />;
};
