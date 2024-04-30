import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  BarChartIcon,
  ClockIcon,
  DollarIcon,
  HappyEmojiIcon,
  MapIcon,
  StackIcon,
} from "../../assets/icons/svg/Icons.tsx";

const InfoList = () => {
  return (
    <div>
      <Typography variant="h2" sx={{ paddingBottom: 4 }}>
        Fieldwork is the leading sales tool for your HVAC business.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ paddingBottom: 3 }}>
            For Business Owners
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <StackIcon />
              </ListItemIcon>
              <ListItemText primary="Standardizes how your technicians sell in the field." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MapIcon />
              </ListItemIcon>
              <ListItemText primary="Turns best practices from your top performers into a guide for your low performers." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Increases business performance, sales efficiency, and transparency." />
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} md={6} sx={{ paddingLeft: 7 }}>
          <Typography variant="h4" sx={{ paddingBottom: 3 }}>
            For Field Technicians
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <ClockIcon />
              </ListItemIcon>
              <ListItemText primary="Reduces the time and effort to create proposals on the spot." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HappyEmojiIcon />
              </ListItemIcon>
              <ListItemText primary="Builds a greater trust with customers through beautiful proposal presentations." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DollarIcon />
              </ListItemIcon>
              <ListItemText primary="Increases replacement ticket sizes by 20% or more*." />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default InfoList;
