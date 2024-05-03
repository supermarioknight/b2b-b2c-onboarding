import { useNavigate } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import SignupForm from "./form/SignupForm.tsx";
import InfoList from "../../components/sections/infoList/InfoList.tsx";
import {
  businessOwnerListData,
  fieldTechniciansListData,
} from "../../mockData/infoListData.tsx";
import { useSignup } from "../../services/auth/useSignup.ts";
import { RegisterOrganizationRequest } from "../../schemas/organization-schema.ts";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { isPending, mutateAsync, error } = useSignup();
  const signup = (data: RegisterOrganizationRequest) => {
    mutateAsync(data)
      .then(() => {
        navigate("/signin");
      })
      .catch(console.error);
  };

  return (
    <Container
      maxWidth="lg"
      style={{
        minHeight: "100vh",
        backgroundColor: "#F3F4F6",
        display: "flex",
        alignItems: "center",
      }}
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
          <SignupForm
            onSignup={signup}
            isLoading={isPending}
            error={error?.errors}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUpPage;
