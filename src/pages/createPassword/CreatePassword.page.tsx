import { Container, Grid, Typography } from "@mui/material";
import InfoList from "../../components/sections/infoList/InfoList.tsx";
import PasswordForm from "./form/PasswordForm.tsx";
import {
  businessOwnerListData,
  fieldTechniciansListData,
} from "../../mockData/infoListData.tsx";

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
          <Typography variant="h2" sx={{ paddingBottom: 4 }}>
            Fieldwork is the leading sales tool for your HVAC business.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <InfoList
                title={businessOwnerListData.title}
                list={businessOwnerListData.list}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <InfoList
                list={fieldTechniciansListData.list}
                title={fieldTechniciansListData.title}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <PasswordForm onCreatePassword={createPassword} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreatePassword;
