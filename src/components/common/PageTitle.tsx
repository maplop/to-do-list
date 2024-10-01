import { Typography } from "@mui/material"

interface TitlePageProps {
  title: string
}


const PageTitle = ({ title }: TitlePageProps) => {
  return (
    <Typography variant="h5" sx={{ fontWeight: 600 }} >{title}</Typography>
  )
}
export default PageTitle