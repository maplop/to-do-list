import { CategoryType } from "../types/types";
import { lsKeys } from "../utils/lskeys";

export const getCategories = (): CategoryType[] => {
  const categories = localStorage.getItem(lsKeys.CATEGORIES);
  return categories ? (JSON.parse(categories) as CategoryType[]) : [];
};
