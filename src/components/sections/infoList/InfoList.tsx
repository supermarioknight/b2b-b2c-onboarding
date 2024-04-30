import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

interface InfoListProps {
  title?: string;
  list: Array<{ icon: React.ReactNode; text: string }>;
}

const InfoList: React.FC<InfoListProps> = ({ title, list }) => {
  return (
    <div>
      {title ? (
        <Typography variant="h4" sx={{ paddingBottom: 3 }}>
          {title}
        </Typography>
      ) : null}

      <List>
        {list.map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default InfoList;
