import { CategoryType } from "../types/types";
import { lsKeys } from "../utils/lskeys";

export const getCategories = (user: string | undefined): CategoryType[] => {
  const categories = localStorage.getItem(lsKeys.CATEGORIES);
  if (!categories) {
    return [];
  }

  const allCategories = JSON.parse(categories) as CategoryType[];
  return allCategories.filter((category) => category.user === user);
};
