import {
  Grid,
  // Link,
  Paper,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ValidTextInput from "../../../components/common/input/ValidTextInput.tsx";
import {
  SignInRequest,
  SignInSchema,
} from "../../../schemas/organization-schema.ts";
import { Link } from "react-router-dom";
import React from "react";
import LoadingButton from "../../../components/common/button/LoadingButton.tsx";
import PasswordTextInput from "../../../components/common/input/PasswordTextInput.tsx";
import RadioGrp, {
  RadioFormControl,
} from "../../../components/common/radio/Radio.tsx";
import { routes } from "../../../constants/routes.ts";

interface SignupFormProps {
  onSignIn: (data: SignInRequest) => void;
  isLoading: boolean;
}

const SignInForm: React.FC<SignupFormProps> = ({ onSignIn, isLoading }) => {
  const { control, handleSubmit, formState, register } = useForm<SignInRequest>(
    {
      resolver: zodResolver(SignInSchema),
      defaultValues: {
        signInFor: "organization",
      },
    }
  );

  console.log(formState.defaultValues, formState.errors, "formState");

  return (
    <Paper sx={{ padding: 6, boxShadow: 0 }}>
      <Typography variant="h2" sx={{ paddingBottom: 3 }}>
        Welcome to Fieldwork!
      </Typography>
      <form style={{ height: "100%" }} onSubmit={handleSubmit(onSignIn)}>
        <Grid
          container
          spacing={2}
          style={{ height: "100%" }}
          direction="column"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <ValidTextInput
              control={control}
              name="email"
              formState={formState}
              fullWidth
              inputLabel="Email address"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordTextInput formState={formState} control={control} />
          </Grid>
          <Grid item xs={12}>
            <Controller
              control={control}
              name="signInFor"
              render={({ field }) => (
                <RadioGrp
                  {...field}
                  row
                  title="Signin For"
                  aria-labelledby="sigin-options"
                >
                  <RadioFormControl label="Organization" value="organization" />
                  <RadioFormControl value="user" label="User" />
                </RadioGrp>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <LoadingButton type="submit" loading={isLoading} fullWidth>
              Login
            </LoadingButton>
            <Typography mt={3} textAlign="center">
              Don't have an account? <Link to={routes.signUp}>Sign up </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default SignInForm;
