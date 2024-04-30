import { InputLabel, TextField, Typography } from "@mui/material";
import { ComponentProps } from "react";

// interface TextInputProps extends ComponentProps<typeof TextField> {}
interface TextInputProps extends ComponentProps<typeof TextField> {
  inputLabel?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  inputLabel,
  name,
  label,
  ...props
}) => {
  return (
    <>
      {!label && inputLabel ? (
        <InputLabel shrink={false} htmlFor={name} sx={{ paddingBottom: 0.75 }}>
          <Typography variant="body2">{inputLabel}</Typography>
        </InputLabel>
      ) : null}
      <TextField {...props} />
    </>
  );
};
export default TextInput;
