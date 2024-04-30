import {
  Box,
  Button,
  Checkbox,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import TextInput from "../../components/input/TextInput.tsx";

const SignupForm = () => {
  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h2" sx={{ paddingBottom: 3 }}>
        Join Fieldwork
      </Typography>
      <form style={{ height: "100%" }}>
        <Grid
          container
          spacing={2}
          style={{ height: "100%" }}
          direction="column"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <TextInput fullWidth inputLabel="Company name" variant="outlined" />
          </Grid>

          <Grid item container spacing={2} xs={12}>
            <Grid item xs={6}>
              <TextInput fullWidth inputLabel="First name" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <TextInput fullWidth inputLabel="Last name" variant="outlined" />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              inputLabel="Email address"
              variant="outlined"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              inputLabel="Phone number"
              variant="outlined"
              type="tel"
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              fullWidth
              inputLabel="Password"
              variant="outlined"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Checkbox />{" "}
              <Typography>
                I agree to Fieldwork’s <Link>Terms of Service</Link>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Create Account
            </Button>
            <Typography>
              Already have an account? <Link>Sign in </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default SignupForm;
