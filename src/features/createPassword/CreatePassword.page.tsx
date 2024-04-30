import { Container, Grid } from "@mui/material";
import InfoList from "../../components/infoList/InfoList.tsx";
import PasswordForm from "./form/PasswordForm.tsx";

const CreatePassword = () => {
  const createPassword = () => {};
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
          <PasswordForm onCreatePassword={createPassword} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreatePassword;
