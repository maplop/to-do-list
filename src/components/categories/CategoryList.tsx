import Grid from '@mui/material/Grid2';
import CategoryItem from "./CategoryItem"
import { getCategories } from '../../api/category';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';


const CategoryList = () => {
  const categories = getCategories()
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
            <CategoryItem category={category} />
          </Grid>
        ))
      )}
    </Grid>
  )
}
export default CategoryList
