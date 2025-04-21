import { Link } from "react-router-dom"
import Grid2 from "@mui/material/Grid2"
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";


export const ButtonToggleCard = ({ path, label }) => {
  return (
    <Grid2 container sx={{ height:{ xs:'120px', sm:'100px' } }}>
        <Grid2 size={{ xs:12, sm:6 }} sx={{ display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Box component='div' className="boxCenterRow">
                <IconButton aria-label="Google" size="large"> <GoogleIcon titleAccess="Iniciar con Google" /> </IconButton>
                <IconButton aria-label="Microsoft" size="large"> <MicrosoftIcon titleAccess="Iniciar con Microsoft" /> </IconButton>
                <IconButton aria-label="Facebook" size="large"> <FacebookIcon titleAccess="Iniciar con Facebook" /> </IconButton>
            </Box>
        </Grid2>

        <Grid2 size={{ xs:12, sm:6 }} sx={{ display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', fontSize:{xs:'14px', sm:'15px'} }}>
            <Link to={ path }>
                { label }
            
            </Link>
        </Grid2>
    </Grid2>
  )
}