import { Container, Grid } from "@mui/material";
import SignupForm from "./form/SignupForm.tsx";
import InfoList from "../../components/infoList/InfoList.tsx";

const SignUpPage = () => {
  const signup = () => {};

  return (
    <Container
      maxWidth="lg"
      style={{ height: "100vh", backgroundColor: "#F3F4F6" }}
    >
      <Grid
        container
        style={{ height: "100%" }}
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} md={7} padding={6}>
          <InfoList />
        </Grid>
        <Grid item xs={12} md={5}>
          <SignupForm onSignup={signup} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUpPage;
