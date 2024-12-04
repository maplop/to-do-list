import { useCallback, useState } from "react";
import { colorCollection, ColorType } from "../../data/colorColection";
import { iconsColection } from "../../data/iconsColection";
import { CategoryType } from "../../types/types";
import { lsKeys } from "../../utils/lskeys";
import { useNotification } from "../../hooks/useNotification";
import { useAuth } from "../../hooks/useAuth";
import { v4 as uuidv4 } from "uuid";

export const useCategoryVew = () => {
  const { user } = useAuth();
  const { notify } = useNotification();

  const [openCategoryModal, setOpenCategoryModal] = useState<boolean>(false);
  const [category, setCategory] = useState<CategoryType>({
    id: "",
    name: "",
    color: colorCollection[0].color,
    icon: "category",
    user: user?.user || "",
  });

  const handleCategoryNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setCategory((prevCategory) => ({ ...prevCategory, name: value }));
  };

  const handleCategoryColorChange = (color: ColorType) => {
    setCategory((prevCategory) => ({ ...prevCategory, color: color }));
  };

  const handleCategoryIconChange = (icon: keyof typeof iconsColection) => {
    setCategory((prevCategory) => ({ ...prevCategory, icon: icon }));
  };

  const handleEditCategory = (category: CategoryType) => {
    setCategory(category);
    setOpenCategoryModal(true);
  };

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      const categories = JSON.parse(
        localStorage.getItem(lsKeys.CATEGORIES) || "[]"
      ) as CategoryType[];
      const categoryIndex = categories.findIndex((c) => c.id === category.id);
      if (categoryIndex === -1) {
        const newCategory: CategoryType = {
          ...category,
          id: uuidv4(),
          user: user?.user || "",
        };
        categories.push(newCategory);
        notify("success", "Category created successfully.");
      } else {
        categories[categoryIndex] = { ...category };
        notify("success", "Category updated successfully.");
      }
      localStorage.setItem(lsKeys.CATEGORIES, JSON.stringify(categories));
      setOpenCategoryModal(false);
      resetValue();
    },
    [category, notify, user]
  );

  const resetValue = () => {
    setCategory({
      id: "",
      name: "",
      color: colorCollection[0].color,
      icon: "category",
      user: user?.user || "",
    });
  };

  return {
    openCategoryModal,
    setOpenCategoryModal,
    category,
    handleCategoryNameChange,
    handleCategoryColorChange,
    handleCategoryIconChange,
    handleEditCategory,
    handleSubmit,
    resetValue,
  };
};
