import {
  Box,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Button from "../../components/common/button/Button.tsx";
import { useForm } from "react-hook-form";
import {
  BaseOrganizationSchema,
  OrganizationDetailsRequest,
} from "../../schemas/organization-schema.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import ValidTextInput from "../../components/common/input/ValidTextInput.tsx";
import LoadingButton from "../../components/common/button/LoadingButton.tsx";
import { theme } from "../../theme.ts";
import Logo from "../../components/common/logo/Logo.tsx";

const CompanyDetails = () => {
  const { control, handleSubmit, formState } =
    useForm<OrganizationDetailsRequest>({
      resolver: zodResolver(BaseOrganizationSchema),
    });

  const submitCompanyDetails = (data) => {};

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box pb={6} pl={3}>
        <Logo />
      </Box>
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#FFF",
          padding: 3,
          boxShadow:
            "0px 2px 8px -2px rgba(21, 21, 21, 0.08), 0px 12px 16px -4px rgba(21, 21, 21, 0.08)",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <List>
            <StyledListItem>
              <NumberCircle>1</NumberCircle>
              <ListItemText>
                <Typography variant="titleLg">Company Details</Typography>
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <NumberCircle>2</NumberCircle>
              <ListItemText>
                <Typography variant="titleLg">Personal Details</Typography>
              </ListItemText>
            </StyledListItem>
            <StyledListItem>
              <NumberCircle>3</NumberCircle>
              <ListItemText>
                <Typography variant="titleLg">Invite Team</Typography>
              </ListItemText>
            </StyledListItem>
          </List>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: 400 }}>
            <Title variant="h2" paddingBottom={0}>
              Let’s start with some basic info about Winters
            </Title>
            <form
              style={{ height: "100%", marginTop: 24 }}
              onSubmit={handleSubmit(submitCompanyDetails)}
            >
              <Grid
                container
                spacing={3}
                style={{ height: "100%" }}
                direction="column"
                justifyContent="center"
              >
                <Grid item xs={12}>
                  <ValidTextInput
                    control={control}
                    name="organizationName"
                    formState={formState}
                    fullWidth
                    inputLabel="Company name"
                    variant="outlined"
                    size="small"
                  />
                </Grid>

                <Grid item xs={12}>
                  <ValidTextInput
                    control={control}
                    name="organizationAddress.street"
                    formState={formState}
                    fullWidth
                    inputLabel="Company address"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item container xs={12} spacing={1}>
                  <Grid item xs={12} md={4}>
                    <ValidTextInput
                      control={control}
                      name="organizationAddress.city"
                      formState={formState}
                      fullWidth
                      inputLabel="City"
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <ValidTextInput
                      control={control}
                      name="organizationAddress.state"
                      formState={formState}
                      fullWidth
                      inputLabel="State"
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <ValidTextInput
                      control={control}
                      name="organizationAddress.zip"
                      formState={formState}
                      fullWidth
                      inputLabel="Zip"
                      variant="outlined"
                      size="small"
                    />
                  </Grid>
                </Grid>

                <Grid item xs={12}>
                  <ValidTextInput
                    control={control}
                    name="organizationPhone"
                    formState={formState}
                    fullWidth
                    inputLabel="Company phone number"
                    variant="outlined"
                    size="small"
                  />
                </Grid>

                <Grid item xs={12}>
                  <ValidTextInput
                    control={control}
                    name="numberOfEmployees"
                    formState={formState}
                    fullWidth
                    inputLabel="Number of employees"
                    variant="outlined"
                    size="small"
                  />
                </Grid>

                <Grid item xs={12} textAlign="right">
                  <LoadingButton
                    type="submit"
                    color="secondary"
                    variant="contained"
                  >
                    Next
                  </LoadingButton>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>

        <Box>
          <Button variant="contained" color="info">
            Save & Exit setup
          </Button>
        </Box>
      </Box>
      <Typography mt={3} textAlign="center">
        Need Help? <Link>Contact Fieldwork</Link>
      </Typography>
    </Box>
  );
};

export default CompanyDetails;

const NumberCircle = styled("span")({
  width: 24,
  height: 24,
  borderRadius: "50%",
  backgroundColor: "#374151",
  color: "#FFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 8,
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 21,
});

const Title = styled(Typography)({
  paddingBottom: 8,
});

const StyledListItem = styled(ListItem)({
  display: "flex",
  alignItems: "center",
  paddingBottom: 8,
});
