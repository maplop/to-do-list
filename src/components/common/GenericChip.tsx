import { Chip, styled } from "@mui/material";
import { ColorPaletteType } from "../../types/types";
import { CategoryType } from "../../types/types";
import { iconsColection } from "../../data/iconsColection";

interface GenericChipProps {
  category: CategoryType;
  sizechip?: "large" | "small"
}



const GenericChip = ({ category, sizechip = "small" }: GenericChipProps) => {

  const CategoryIcon = iconsColection[category.icon]

  return (
    <ChipCategory
      icon={<CategoryIcon />}
      label={category.name}
      size="small"
      categorycolor={category.color}
      sizechip={sizechip}
    />
  );
};
export default GenericChip;

const ChipCategory = styled(Chip)<{ categorycolor: ColorPaletteType, sizechip: "large" | "small" }>(({ categorycolor, sizechip }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 5,
  backgroundColor: categorycolor[50],
  border: `1px solid ${categorycolor[700]}`,

  ".MuiChip-label": {
    fontSize: sizechip === "small" ? 10 : 12,
    fontWeight: 700,
    color: categorycolor[700],
  },

  ".MuiChip-icon": {
    width: sizechip === 'small' ? 14 : 16,
    height: "auto",
    color: categorycolor[700],
  },
}));
