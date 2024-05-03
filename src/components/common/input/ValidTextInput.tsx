import TextInput, { TextInputProps } from "./TextInput.tsx";
import {
  Control,
  Controller,
  FieldErrors,
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
  const isNestedObject = name.includes(".");
  const error = isNestedObject
    ? getNestedValue(formState?.errors, name)
    : formState.errors[name];

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
          // error={!!formState.errors[name]}
          error={!!error}
          helperText={error?.message as string}
        />
      )}
    />
  );
};

export default ValidTextInput;

function getNestedValue(obj: FieldErrors<FieldValues>, path: string) {
  const keys = path.split(".");
  let result = obj;

  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = result[key];
    } else {
      return undefined;
    }
  }
  return result;
}
