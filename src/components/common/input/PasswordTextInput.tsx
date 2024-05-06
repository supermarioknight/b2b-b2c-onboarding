import { ComponentProps, useState } from "react";
import ValidTextInput from "./ValidTextInput.tsx";
import { IconButton, InputAdornment } from "@mui/material";
import { EyeIcon, EyeSlashIcon } from "../../../assets/icons/svg/Icons.tsx";
import { Control, FieldValues, FormState, Path } from "react-hook-form";
import TextInput, { TextInputProps } from "./TextInput.tsx";

export interface ValidInputProps<T extends FieldValues>
  extends ComponentProps<typeof TextInput> {
  control: Control<T>;
  formState: FormState<FieldValues>;
  apiError?: Array<{ field: Path<T>; message: string }>;
}

const PasswordTextInput = <T extends FieldValues>({
  control,
  formState,
  apiError,
}: ValidInputProps<T> & TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ValidTextInput
      control={control}
      name={"password" as Path<T>}
      formState={formState}
      fullWidth
      inputLabel="Password"
      type={showPassword ? "text" : "password"}
      apiError={apiError}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordTextInput;
