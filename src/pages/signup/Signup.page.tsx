import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import SignupForm from "./form/SignupForm.tsx";
import InfoList from "../../components/sections/infoList/InfoList.tsx";
import {
  businessOwnerListData,
  fieldTechniciansListData,
} from "../../mockData/infoListData.tsx";
import { useSignup } from "../../services/auth/useSignup.ts";
import { RegisterOrganizationRequest } from "../../schemas/organization-schema.ts";
import { routes } from "../../constants/routes.ts";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { isPending, mutateAsync, error } = useSignup();
  const signup = (data: RegisterOrganizationRequest) => {
    mutateAsync(data)
      .then(() => {
        navigate(routes.signIn);
      })
      .catch(console.error);
  };

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
