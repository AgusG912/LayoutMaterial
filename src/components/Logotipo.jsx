import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import laptopOrDesktop from '../assets/images/layoutMain.png';
import { useScreenUser } from '../hooks';

export const Logotipo = () => {
  
  const { breakpointValue } = useScreenUser();
  
  return (
    <Box component='div' sx={{ display: 'flex', alignItems:'center', paddingLeft: { xs: '16px', md:'0px' }}}>
      
      <Link to='/' className='linkToMain'>
        <img src={ laptopOrDesktop } alt='LayoutLogo' width={50} height={50} />               
      </Link>
      
      { breakpointValue >= 2 
        ? ( <Typography component='h1' variant="h5" sx={{ flexGrow: 1, ml:1}}>LayoutMaterialUI</Typography> )
        : ( <Typography component='h1' variant="h5" sx={{ flexGrow: 1, ml:1}}>LayoutMui</Typography> )
      }

    </Box>
  )
}
