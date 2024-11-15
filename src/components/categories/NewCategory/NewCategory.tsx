import React from "react"
import { Box, Button, styled, TextField, Typography } from "@mui/material"
import GenericModal from "../../common/GenericModal"
import { grey } from "@mui/material/colors"
import ColorCollection from "./ColorCollection"
import IconCollection from "./IconCollection"
import { useNewCategory } from "./useNewCategory"
import GenericPopover from "../../common/GenericPopover"
import { ColorType } from "../../../data/colorColection"
import CategoryItem from "../CategoryItem"
import { CategoryType } from "../../../types/types"
import { iconsColection } from "../../../data/iconsColection"

interface NewCategoryProps {
  openModal: boolean,
  handleClose: () => void,
  categoryName: string,
  handleCategoryName: (event: React.ChangeEvent<HTMLInputElement>) => void,
  categoryColor: ColorType
  handleCategoryColor: (color: ColorType) => void
  categoryIcon: keyof typeof iconsColection,
  handleCategoryIcon: (iconId: keyof typeof iconsColection) => void
  createCategory: (category: CategoryType) => void
}


const NewCategory = (
  {
    openModal,
    handleClose,
    categoryName,
    handleCategoryName,
    categoryColor,
    handleCategoryColor,
    categoryIcon,
    handleCategoryIcon,
    createCategory
  }: NewCategoryProps) => {

  const {
    anchorEl,
    openPopover,
    closePopover,
    isOpen,
  } = useNewCategory();

  const CategoryIcon = iconsColection[categoryIcon]

  console.log("Category name --- ", categoryName)

  return (
    <>
      <GenericModal open={openModal} handleClose={handleClose} >
        <>
          <Box mb={2}>
            <Typography variant='h5' color='primary' sx={{ fontWeight: 700, textAlign: 'left' }}>
              Add Category
            </Typography>
          </Box>
          <ModalContent>
            <TextField
              id="outlined-basic"
              size="small"
              fullWidth
              label="Category name"
              variant="outlined"
              value={categoryName}
              name="categoryName"
              onChange={handleCategoryName}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
              <ColorPickerWrapper>
                <WrapperIcon color={categoryColor} onClick={(e) => openPopover(e, 'icon')}>
                  <CategoryIcon />
                </WrapperIcon>
                <Label>category icon</Label>
              </ColorPickerWrapper>
              <ColorPickerWrapper>
                <Box onClick={(e) => openPopover(e, 'color')}>
                  <ColorPicker color={categoryColor} />
                </Box>
                <Label>category color</Label>
              </ColorPickerWrapper>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <Typography sx={{ textAlign: 'left', fontSize: 14, fontWeight: 600, color: grey[600] }}>Preview</Typography>
              <CategoryItem category={{ name: categoryName, color: categoryColor, icon: categoryIcon }} />
            </Box>
            <Box mt={1} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                variant='contained'
                type='submit'
                onClick={() => createCategory(
                  {
                    name: categoryName,
                    color: categoryColor,
                    icon: categoryIcon
                  }
                )} >
                Add
              </Button>
            </Box>
          </ModalContent>
        </>
      </GenericModal>
      <GenericPopover
        open={isOpen('color')}
        anchorEl={anchorEl}
        onClose={closePopover}>
        <ColorCollection handleCategoryColor={handleCategoryColor} closePopover={closePopover} />
      </GenericPopover>
      <GenericPopover
        open={isOpen('icon')}
        anchorEl={anchorEl}
        onClose={closePopover}>
        <IconCollection handleCategoryIcon={handleCategoryIcon} closePopover={closePopover} />
      </GenericPopover>

    </>
  )
}
export default NewCategory

const ModalContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: 320
}))

const ColorPickerWrapper = styled(Box)(() => ({
  display: 'flex',
  gap: '6px',
  alignItems: 'center',
}))

const ColorPicker = styled(Box)<{ color: ColorType }>(({ color }) => ({
  minWidth: 36,
  height: 36,
  borderRadius: 4,
  backgroundColor: color[500],
  cursor: 'pointer'
}))

const WrapperIcon = styled(Box)<{ color: ColorType }>(({ color }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 38,
  height: 38,
  border: `2px solid ${color[500]}`,
  borderRadius: 4,
  cursor: 'pointer',

  svg: {
    height: '24px',
    color: color[500],
  },
}));

const Label = styled(Typography)(() => ({
  fontSize: 14,
  fontWeight: 500,
  color: grey[600]
}))