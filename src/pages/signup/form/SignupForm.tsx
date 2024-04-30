import { Box, Button, Grid, Link, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { signupSchema, SignupSchema } from "./signupSchema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import ValidTextInput from "../../../components/common/input/ValidTextInput.tsx";
import PasswordTextInput from "../../../components/common/input/PasswordTextInput.tsx";
import Checkbox from "../../../components/common/checkbox/Checkbox.tsx";

interface SignupFormProps {
  onSignup: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
  const { control, handleSubmit, formState } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
  });
  return (
    <Paper sx={{ padding: 6, boxShadow: 0 }}>
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
              name="company"
              formState={formState}
              fullWidth
              inputLabel="Company name"
              variant="outlined"
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
              />
            </Grid>
            <Grid item xs={6}>
              <ValidTextInput
                control={control}
                name="lastName"
                formState={formState}
                fullWidth
                inputLabel="Last name"
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
            />
          </Grid>
          <Grid item xs={12}>
            <ValidTextInput
              control={control}
              name="phoneNumber"
              formState={formState}
              fullWidth
              inputLabel="Phone number"
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordTextInput formState={formState} control={control} />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              {/*<Controller*/}
              {/*  control={control}*/}
              {/*  name="agree"*/}
              {/*  render={({ field: { onChange, value } }) => (*/}
              {/*    <Checkbox checked onChange={onChange} value={value} />*/}
              {/*  )}*/}
              {/*/>*/}
              <Checkbox checked />
              <Typography>
                I agree to Fieldwork’s <Link>Terms of Service</Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth type="submit">
              Save password
            </Button>
            <Typography mt={3} textAlign="center">
              Already have an account? <Link>Sign in </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default SignupForm;
