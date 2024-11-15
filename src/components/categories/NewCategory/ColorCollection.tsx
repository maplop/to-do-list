import { Box, styled, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { colorCollection, ColorType } from "../../../data/colorColection";

interface ColorCollectionProps {
  handleCategoryColor: (color: ColorType) => void
  closePopover: () => void
}

const ColorCollection = ({ handleCategoryColor, closePopover }: ColorCollectionProps) => {
  return (
    <WrapperColorCollection>
      <Typography
        variant='body1'
        sx={{ textAlign: 'left', fontWeight: 600 }}>
        Select a color
      </Typography>
      <Grid container spacing={2}>
        {colorCollection.map((color) => (
          <Grid size={3} key={color.id}>
            <Color color={color.color} onClick={() => {
              handleCategoryColor(color.color)
              closePopover()
            }} />
          </Grid>
        ))}
      </Grid>
    </WrapperColorCollection>
  )
}
export default ColorCollection

const WrapperColorCollection = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: "16px",
  width: '220px',
  padding: '16px',
}))

const Color = styled(Box)<{ color: ColorType }>(({ color }) => ({
  width: 32,
  height: 32,
  borderRadius: 4,
  backgroundColor: color[500],
  cursor: 'pointer'
}))

