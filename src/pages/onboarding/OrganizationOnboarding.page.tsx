import {
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import Button from "../../components/common/button/Button.tsx";

const AccountSetup = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/*Logo*/}
      <Box pb={6} pl={3}>
        <Typography variant="h3">Fieldwork</Typography>
      </Box>
      {/*White Box*/}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#FFF",
          padding: 3,
          boxShadow:
            "0px 2px 8px -2px rgba(21, 21, 21, 0.08), 0px 12px 16px -4px rgba(21, 21, 21, 0.08)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Box sx={{ position: "absolute", top: 24, right: 24 }}>
          <Button variant="contained" color="info">
            Exit setup
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: 400 }}>
            <Title variant="h2">Welcome to Fieldwork, Tim!</Title>
            <Typography variant="bodyLg" mb={3}>
              Begin by setting up your account. It will take about 10 minutes to
              complete.
            </Typography>
            <Box py={3}>
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
            <Button variant="contained" fullWidth>
              Begin Setup
            </Button>
          </Box>
        </Box>
      </Box>
      {/*Footer*/}
      <Typography mt={3} textAlign="center">
        Need Help? <Link>Contact Fieldwork</Link>
      </Typography>
    </Box>
  );
};
export default AccountSetup;

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
