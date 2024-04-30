import TextInput, { TextInputProps } from "./TextInput.tsx";
import {
  Control,
  Controller,
  FieldValues,
  FormState,
  Path,
} from "react-hook-form";
import { ComponentProps } from "react";

export interface ValidInputProps<T extends FieldValues>
  extends ComponentProps<typeof TextInput> {
  label?: string;
  control: Control<T>;
  name: Path<T>;
  formState: FormState<FieldValues>;
}

const ValidTextInput = <T extends FieldValues>({
  control,
  formState,
  name,
  ...textInputProps
}: ValidInputProps<T> & TextInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          {...textInputProps}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          error={!!formState.errors[name]}
          helperText={formState.errors[name]?.message as string}
        />
      )}
    />
  );
};

export default ValidTextInput;
