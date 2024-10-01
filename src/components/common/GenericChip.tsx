import { Chip, styled } from "@mui/material";
import { getCategoryDetails } from "../../data/categories";
import { ColorPaletteType } from "../../types/types";

interface GenericChipProps {
  category: string;
  sizeChip?: "large" | "small"
}

const GenericChip = ({ category, sizeChip = "small" }: GenericChipProps) => {

  const { color: categoryColor, icon: CategoryIcon } = getCategoryDetails(category)

  return (
    <ChipCategory
      icon={< CategoryIcon />}
      label={category}
      size="small"
      categoryColor={categoryColor}
      sizeChip={sizeChip}
    />
  );
};
export default GenericChip;

const ChipCategory = styled(Chip)<{ categoryColor: ColorPaletteType, sizeChip: "large" | "small" }>(({ categoryColor, sizeChip }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 5,
  backgroundColor: categoryColor[50],
  border: `1px solid ${categoryColor[700]}`,

  ".MuiChip-label": {
    fontSize: sizeChip === "small" ? 10 : 12,
    fontWeight: 700,
    color: categoryColor[700],
  },

  ".MuiChip-icon": {
    width: sizeChip === 'small' ? 14 : 16,
    height: "auto",
    color: categoryColor[700],
  },
}));
