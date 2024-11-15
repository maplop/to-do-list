import { Box, styled, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { iconsColection } from "../../../data/iconsColection"
import { grey } from "@mui/material/colors";

interface IconCollectionProps {
  handleCategoryIcon: (iconId: keyof typeof iconsColection) => void
  closePopover: () => void
}


const IconCollection = ({ handleCategoryIcon, closePopover }: IconCollectionProps) => {
  return (
    <WrapperIconCollection>
      <Typography
        variant='body1'
        sx={{ textAlign: 'left', fontWeight: 600 }}>
        Select an icon
      </Typography>
      <Content>
        <Grid container spacing={2}>
          {Object.entries(iconsColection).map(([id, IconComponent]) => {
            return (
              <Grid size={3} key={id}>
                <WrapperIcon onClick={() => {
                  handleCategoryIcon(id);
                  closePopover();
                }}>
                  <IconComponent />
                </WrapperIcon>
              </Grid>
            );
          })}
        </Grid>
      </Content>

    </WrapperIconCollection>
  )
}
export default IconCollection

const WrapperIconCollection = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: "16px",
  width: 250,
  padding: '16px',
}))

const Content = styled(Box)(() => ({
  maxHeight: 225,
  overflowY: 'auto',
}))

const WrapperIcon = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 38,
  height: 38,
  border: `1px solid ${grey[400]}`,
  borderRadius: 4,
  cursor: 'pointer',

  '&:hover svg': {
    transform: 'scale(1.2)',
    transition: 'transform 0.3s ease',
  },

  svg: {
    color: grey[800],
    transition: 'transform 0.3s ease',
  },
}));