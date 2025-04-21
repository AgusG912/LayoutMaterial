import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";



export const TitleView = ({ title='' }) => {
  return (
    <Box component='div' className="boxCenterRow">
        <Typography variant="h5">
            { title }
        </Typography>
    </Box>
  )
}