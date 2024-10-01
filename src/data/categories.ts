import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import WorkIcon from "@mui/icons-material/Work";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CategoryIcon from "@mui/icons-material/Category";
import {
  red,
  blue,
  green,
  purple,
  orange,
  cyan,
  yellow,
} from "@mui/material/colors";

export const categoryMap = {
  Other: { icon: CategoryIcon, color: yellow },
  Personal: { icon: PersonIcon, color: green },
  Work: { icon: WorkIcon, color: blue },
  Events: { icon: EventIcon, color: orange },
  Fitness: { icon: FitnessCenterIcon, color: red },
  Entertainment: { icon: SportsEsportsIcon, color: cyan },
  Travel: { icon: AirplanemodeActiveIcon, color: purple },
} as const;

type CategoryName = keyof typeof categoryMap;

export const getCategoryDetails = (category: string) => {
  return category in categoryMap
    ? categoryMap[category as CategoryName]
    : categoryMap["Other"];
};
