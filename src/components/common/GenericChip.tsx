import { Chip, styled } from "@mui/material";
import CategoryIcon from '@mui/icons-material/Category';
import { blue } from "@mui/material/colors";


const GenericChip = () => {
  return (
    <ChipCategory
      icon={<CategoryIcon />}
      label={"Category"}
      size="small"
    />
  )
}
export default GenericChip

const ChipCategory = styled(Chip)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 5,
  border: `1px solid ${theme.palette.primary.main}`,
  background: blue[50],
  color: theme.palette.primary.main,

  '.MuiChip-label': {
    fontSize: 10,
    fontWeight: 700
  },

  '.MuiChip-icon': {
    width: 12,
    height: 'auto',
    color: theme.palette.primary.main
  }


}))