import { Chip, styled } from "@mui/material";
import { getCategoryDetails } from "../../data/categories";
import { ColorPaletteType } from "../../types/types";

interface GenericChipProps {
  category: string;
  sizechip?: "large" | "small"
}

const GenericChip = ({ category, sizechip = "small" }: GenericChipProps) => {

  const { color: categorycolor, icon: CategoryIcon } = getCategoryDetails(category)

  return (
    <ChipCategory
      icon={< CategoryIcon />}
      label={category}
      size="small"
      categorycolor={categorycolor}
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
