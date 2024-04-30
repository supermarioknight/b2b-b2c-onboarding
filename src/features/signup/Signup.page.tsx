import { Container, Grid } from "@mui/material";
import SignupForm from "./SignupForm.tsx";
import InfoList from "../../components/infoList/InfoList.tsx";

const SignUpPage = () => {
  return (
    <Container maxWidth="lg" style={{ height: "100vh" }}>
      <Grid
        container
        style={{ height: "100%" }}
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} md={7}>
          <InfoList />
        </Grid>
        <Grid item xs={12} md={5}>
          <SignupForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUpPage;
