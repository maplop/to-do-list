import { CategoryType } from "../types/types";
import { colorCollection } from "./colorColection";

export const defaultCategories: CategoryType[] = [
  {
    name: "Work",
    color: colorCollection[1].color,
    icon: "work",
  },
  {
    name: "Fitness",
    color: colorCollection[2].color,
    icon: "fitness",
  },
  {
    name: "Personal",
    color: colorCollection[0].color,
    icon: "person",
  },
  {
    name: "Shopping",
    color: colorCollection[3].color,
    icon: "shopping",
  },
  {
    name: "Travel",
    color: colorCollection[4].color,
    icon: "plane",
  },
];
