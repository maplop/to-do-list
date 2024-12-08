import { Box, styled, Tooltip, Typography } from "@mui/material"
import { CategoryType } from "../../types/types";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ColorType } from "../../data/colorColection";
import { iconsColection } from "../../data/iconsColection";
import { useState } from "react";
import DeleteConfirmDialog from "../common/DeleteConfirmDialog";

interface CategoryItemProps {
  category: CategoryType,
  handleEditCategory?: (category: CategoryType) => void
  handleDeleteCategory: (categoryId: string) => void
}

const CategoryItem = ({ category, handleEditCategory, handleDeleteCategory }: CategoryItemProps) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false)
  const CategoryIcon = iconsColection[category.icon];

  return (
    <>
      <WrapperItem color={category.color}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <CategoryIcon />
          <Typography sx={{ fontSize: 14, fontWeight: 600 }}>{category?.name}</Typography>
        </Box>
        {category.user !== 'default' && (<WrapperActionButtons>
          <Tooltip title="Edit category" placement="top">
            <WrapperButton onClick={() => handleEditCategory && handleEditCategory(category)}>
              <EditIcon />
            </WrapperButton>
          </Tooltip>
          <Tooltip title="Delete category" placement="top">
            <WrapperButton onClick={() => setOpenDeleteDialog(true)}>
              <DeleteIcon />
            </WrapperButton>
          </Tooltip>
        </WrapperActionButtons>)
        }
      </WrapperItem >
      <DeleteConfirmDialog
        title="Are you sure you want to delete this category?"
        message="  This action cannot be undone. Once deleted, the note will be permanently removed.
            Do you wish to proceed with the deletion?"
        open={openDeleteDialog}
        handleClose={() => setOpenDeleteDialog(false)}
        handleAction={() => handleDeleteCategory(category.id)}
      />
    </>
  )
}
export default CategoryItem

const WrapperItem = styled(Box)<{ color: ColorType }>(({ color }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: 6,
  padding: '6px 10px',
  backgroundColor: color[50],
  border: `1px solid ${color[500]}`,
  fontWeight: 600,
  color: color[500]
}))

const WrapperActionButtons = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  padding: 5,
  borderRadius: 6,
  backgroundColor: 'white'
}))

const WrapperButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 18,
  height: 18,
  borderRadius: 3,
  cursor: 'pointer',
  backgroundColor: theme.palette.info.main,

  '&:nth-of-type(2)': {
    backgroundColor: theme.palette.error.main,
  },

  svg: {
    height: 14,
    color: 'white'
  }
}))