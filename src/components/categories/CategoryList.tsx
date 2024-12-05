import Grid from '@mui/material/Grid2';
import CategoryItem from "./CategoryItem"
import { getCategories } from '../../api/category';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { CategoryType } from '../../types/types';
import { useAuth } from '../../hooks/useAuth';

interface CategoryListProps {
  handleEditCategory: (category: CategoryType) => void
}

const CategoryList = ({ handleEditCategory }: CategoryListProps) => {
  const { user } = useAuth()
  const categories = getCategories(user?.user)
  return (
    <Grid container spacing={1}>
      {categories.length === 0 ? (
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 200,
          }}
        >
          <Typography variant="h6" color={grey[400]}>There are no categories to show :(</Typography>
        </Box>
      ) : (
        categories.map((category, index) => (
          <Grid size={6} key={index}>
            <CategoryItem category={category} handleEditCategory={handleEditCategory} />
          </Grid>
        ))
      )}
    </Grid>
  )
}
export default CategoryList
