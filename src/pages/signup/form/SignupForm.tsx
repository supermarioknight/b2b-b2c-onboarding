import { Box, Grid, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ValidTextInput from "../../../components/common/input/ValidTextInput.tsx";
import PasswordTextInput from "../../../components/common/input/PasswordTextInput.tsx";
import Checkbox from "../../../components/common/checkbox/Checkbox.tsx";
import { Link } from "react-router-dom";
import {
  RegisterOrganizationRequest,
  RegisterOrganizationSchema,
} from "../../../schemas/organization-schema.ts";
import React from "react";
import LoadingButton from "../../../components/common/button/LoadingButton.tsx";
import { routes } from "../../../constants/routes.ts";

interface SignupFormProps {
  onSignup: (data: RegisterOrganizationRequest) => void;
  isLoading: boolean;
  error?: Array<{ field: string; message: string }>;
}

const SignupForm: React.FC<SignupFormProps> = ({
  onSignup,
  isLoading,
  error,
}) => {
  const { control, handleSubmit, formState } =
    useForm<RegisterOrganizationRequest>({
      resolver: zodResolver(RegisterOrganizationSchema),
    });
  return (
    <Paper
      sx={{
        padding: {
          xs: 2,
          sm: 3,
          md: 6
        },
        boxShadow:
          "0px 2px 8px -2px rgba(21, 21, 21, 0.08), 0px 12px 16px -4px rgba(21, 21, 21, 0.08)",
      }}
    >
      <Typography variant="h2" sx={{ paddingBottom: 3 }}>
        Join Fieldwork
      </Typography>
      <form style={{ height: "100%" }} onSubmit={handleSubmit(onSignup)}>
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
              name="organizationName"
              formState={formState}
              fullWidth
              inputLabel="Company name"
              variant="outlined"
              apiError={error}
            />
          </Grid>

          <Grid item container spacing={2} xs={12}>
            <Grid item xs={6}>
              <ValidTextInput
                control={control}
                name="firstName"
                formState={formState}
                fullWidth
                inputLabel="First name"
                apiError={error}
              />
            </Grid>
            <Grid item xs={6}>
              <ValidTextInput
                control={control}
                name="lastName"
                formState={formState}
                fullWidth
                inputLabel="Last name"
                apiError={error}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <ValidTextInput
              control={control}
              name="email"
              formState={formState}
              fullWidth
              inputLabel="Email address"
              type="email"
              apiError={error}
            />
          </Grid>
          <Grid item xs={12}>
            <ValidTextInput
              control={control}
              name="phone"
              formState={formState}
              fullWidth
              inputLabel="Phone number"
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordTextInput
              formState={formState}
              control={control}
              apiError={error}
            />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Checkbox checked />
              <Typography>
                I agree to Fieldwork’s <Link>Terms of Service</Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <LoadingButton type="submit" loading={isLoading} fullWidth>
              Create Account
            </LoadingButton>
            <Typography mt={3} textAlign="center">
              Already have an account? <Link to={routes.signIn}>Sign in </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default SignupForm;
