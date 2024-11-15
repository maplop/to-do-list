import { useState } from "react";
import { colorCollection, ColorType } from "../../data/colorColection";
import { iconsColection } from "../../data/iconsColection";
import React from "react";
import { CategoryType } from "../../types/types";
import { lsKeys } from "../../utils/lskeys";
import { useNotification } from "../../hooks/useNotification";

export const useCategoryVew = () => {
  const { notify } = useNotification();

  const [openCategoryModal, setOpenCategoryModal] = useState<boolean>(false);

  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryColor, setCategoryColor] = useState<ColorType>(
    colorCollection[0].color
  );
  const [categoryIcon, setCategoryIcon] =
    useState<keyof typeof iconsColection>("category");

  const handleCategoryName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
  };

  const handleCategoryColor = (color: ColorType) => {
    setCategoryColor(color);
  };

  const handleCategoryIcon = (iconId: keyof typeof iconsColection) => {
    setCategoryIcon(iconId);
  };

  const createCategory = (category: CategoryType) => {
    const categories = JSON.parse(
      localStorage.getItem(lsKeys.CATEGORIES) || "[]"
    ) as CategoryType[];

    const categoryExists = categories.some(
      (category) => category.name === categoryName
    );

    if (!categoryExists) {
      const newCategory: CategoryType = {
        name: category.name,
        color: category.color,
        icon: category.icon,
      };

      categories.push(newCategory);
      localStorage.setItem(lsKeys.CATEGORIES, JSON.stringify(categories));

      console.log("Category created successfully", newCategory);
      notify("success", "Category created successfully.");
    } else {
      console.log("NEw category --- ");
      console.log("The category already exiist");
      notify("error", "The category already exiist.");
    }
  };

  return {
    openCategoryModal,
    setOpenCategoryModal,
    categoryName,
    handleCategoryName,
    categoryColor,
    handleCategoryColor,
    categoryIcon,
    handleCategoryIcon,
    createCategory,
  };
};
