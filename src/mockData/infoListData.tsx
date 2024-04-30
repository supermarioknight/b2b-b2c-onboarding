import {
  BarChartIcon,
  ClockIcon,
  DollarIcon,
  HappyEmojiIcon,
  MapIcon,
  StackIcon,
} from "../assets/icons/svg/Icons.tsx";

export const businessOwnerListData = {
  title: "For Business Owners",
  list: [
    {
      icon: <StackIcon />,
      text: "Standardizes how your technicians sell in the field.",
    },
    {
      icon: <MapIcon />,
      text: "Turns best practices from your top performers into a guide for your low performers.",
    },
    {
      icon: <BarChartIcon />,
      text: "Increases business performance, sales efficiency, and transparency.",
    },
  ],
};

export const fieldTechniciansListData = {
  title: "For Field Technicians",
  list: [
    {
      icon: <ClockIcon />,
      text: "Reduces the time and effort to create proposals on the spot.",
    },
    {
      icon: <HappyEmojiIcon />,
      text: "Builds a greater trust with customers through beautiful proposal presentations.",
    },
    {
      icon: <DollarIcon />,
      text: "Increases replacement ticket sizes by 20% or more*.",
    },
  ],
};
