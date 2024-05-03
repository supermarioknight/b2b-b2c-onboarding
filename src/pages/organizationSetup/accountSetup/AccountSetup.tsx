import {
  List,
  ListItem,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import Button from "../../../components/common/button/Button.tsx";

const AccountSetup = () => {
  return (
    <div>
      <Typography variant="h2">Welcome to Fieldwork, Tim!</Typography>
      <Typography variant="body1">
        Begin by setting up your account. It will take about 10 minutes to
        complete.
      </Typography>
      <List>
        <StyledListItem>
          <NumberCircle>1</NumberCircle>
          <ListItemText primary="Company Details" />
        </StyledListItem>
        <StyledListItem>
          <NumberCircle>2</NumberCircle>
          <ListItemText primary="Personal Details" />
        </StyledListItem>
        <StyledListItem>
          <NumberCircle>3</NumberCircle>
          <ListItemText primary="Invite Team" />
        </StyledListItem>
      </List>
      <Button variant="contained">Begin Setup</Button>
    </div>
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

const StyledListItem = styled(ListItem)({
  paddingBottom: 8,
});
