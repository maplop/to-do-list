import { Box, Divider, IconButton, Stack, styled, Tooltip } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import CategoryList from "./CategoryList"
import PageTitle from "../common/PageTitle"
import { useCategoryVew } from "./useCategoryView";
import NewCategory from "./NewCategory/NewCategory";

const CategoryView = () => {

  const {
    openCategoryModal,
    setOpenCategoryModal,
    category,
    handleCategoryNameChange,
    handleCategoryColorChange,
    handleCategoryIconChange,
    handleEditCategory,
    handleSubmit,
    resetValue,
  } = useCategoryVew()

  return (
    <>
      <Stack
        direction={"row"}
        mb={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }} >
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <PageTitle title="Cetegories" />
        </Stack>
        <Box>
          <Tooltip title="Add Category" placement="left">
            <IconBtn onClick={() => {
              setOpenCategoryModal(true)
              resetValue()
            }}>
              <AddIcon />
            </IconBtn>
          </Tooltip>
        </Box>
      </Stack>
      <Divider />
      <Box mt={2}>
        <CategoryList handleEditCategory={handleEditCategory} />
      </Box>
      <NewCategory
        openModal={openCategoryModal}
        handleClose={() => {
          setOpenCategoryModal(false)
          resetValue()
        }}
        category={category}
        handleCategoryNameChange={handleCategoryNameChange}
        handleCategoryColorChange={handleCategoryColorChange}
        handleCategoryIconChange={handleCategoryIconChange}
        handleSubmit={handleSubmit}
      />
    </>
  )
}
export default CategoryView

const IconBtn = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  ':hover': {
    backgroundColor: theme.palette.primary.dark,
  }
}))

