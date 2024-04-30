import { ComponentProps, useState } from "react";
import ValidTextInput from "./ValidTextInput.tsx";
import { IconButton, InputAdornment } from "@mui/material";
import { EyeIcon } from "../../../assets/icons/svg/Icons.tsx";
import { Control, FieldValues, FormState } from "react-hook-form";
import TextInput, { TextInputProps } from "./TextInput.tsx";

export interface ValidInputProps<T extends FieldValues>
  extends ComponentProps<typeof TextInput> {
  control: Control<T>;
  formState: FormState<FieldValues>;
}

const PasswordTextInput = <T extends FieldValues>({
  control,
  formState,
}: ValidInputProps<T> & TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ValidTextInput
      control={control}
      name="password"
      formState={formState}
      fullWidth
      inputLabel="Password"
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              <EyeIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordTextInput;
