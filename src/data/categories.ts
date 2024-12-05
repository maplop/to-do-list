import { CategoryType } from "../types/types";
import { colorCollection } from "./colorColection";

export const defaultCategories: CategoryType[] = [
  {
    id: "c23f1b4a-7a6c-41d2-b7ef-5d8a6bb93e2a",
    name: "Work",
    color: colorCollection[1].color,
    icon: "work",
    user: "default",
  },
  {
    id: "4d9b8c78-81b9-47f5-9b59-2b4f6a7d8e1c",
    name: "Other",
    color: colorCollection[2].color,
    icon: "category",
    user: "default",
  },
  {
    id: "7e5a9d18-64f1-4a3b-8d7c-3a1e9b4c5e9a",
    name: "Personal",
    color: colorCollection[0].color,
    icon: "person",
    user: "default",
  },
];
