import { Container, Grid, Typography } from "@mui/material";
import InfoList from "../../components/sections/infoList/InfoList.tsx";
import {
  businessOwnerListData,
  fieldTechniciansListData,
} from "../../mockData/infoListData.tsx";
import { SignInRequest } from "../../schemas/organization-schema.ts";
import SigninForm from "./form/SigninForm.tsx";
import { useSignIn } from "../../services/auth/useSignIn.ts";
import { useGetOrganizationDetails } from "../../services/organization/useGetOrganizationDetails.ts";
import { useState } from "react";

const SignInPage = () => {
  const { isPending, mutateAsync } = useSignIn();
  const [orgId, setOrgId] = useState(null);
  const { isLoading, data } = useGetOrganizationDetails(orgId, {
    enabled: !!orgId,
  });

  const signIn = (data: SignInRequest) => {
    mutateAsync(data)
      .then((response) => {
        const orgId =
          response?.UserAttributes?.find(
            (attr) => attr?.Name === "custom:organizationId"
          )?.value ?? null;
        if (orgId) {
          setOrgId(orgId);
        }
      })
      .catch(console.error);
  };

  console.log(data, 55555555);

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
          <SigninForm onSignIn={signIn} isLoading={isPending || isLoading} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignInPage;
