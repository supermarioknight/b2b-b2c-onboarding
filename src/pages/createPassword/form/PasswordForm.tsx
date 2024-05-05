import {
  Box,
  Button,
  Checkbox,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PasswordTextInput from "../../../components/common/input/PasswordTextInput.tsx";
import { PasswordSchema, passwordSchema } from "./passwordSchema.ts";

interface PasswordFormProps {
  onCreatePassword: () => void;
}

const PasswordForm: React.FC<PasswordFormProps> = ({ onCreatePassword }) => {
  const { control, handleSubmit, formState } = useForm<PasswordSchema>({
    resolver: zodResolver(passwordSchema),
  });
  return (
    <Paper sx={{ padding: 6, boxShadow: 0 }}>
      <Typography variant="h2" sx={{ paddingBottom: 3 }}>
        Welcome to Fieldwork!
      </Typography>
      <Typography>
        Please create a password for your account to get started.
      </Typography>
      <form
        style={{ height: "100%" }}
        onSubmit={handleSubmit(onCreatePassword)}
      >
        <Grid
          container
          spacing={2}
          style={{ height: "100%" }}
          direction="column"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <PasswordTextInput formState={formState} control={control} />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Controller
                control={control}
                name="agree"
                render={({ field: { onChange, value } }) => (
                  <Checkbox checked onChange={onChange} value={value} />
                )}
              />
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

export default PasswordForm;
