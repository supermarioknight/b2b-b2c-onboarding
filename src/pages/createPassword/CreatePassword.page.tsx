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
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: 32,
      }}
    >
      <Grid container alignItems="center" spacing={3}>
        <Grid item sx={{ display: { xs: "none",  md:"block" } }} md={7} padding={6}>
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
