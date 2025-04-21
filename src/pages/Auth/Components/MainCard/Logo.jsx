import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import laptopOrDesktop from '../../../../assets/images/layoutMain.png';
import { useScreenUser } from '../../../../hooks';

export const Logo = () => {

  const { breakpointValue } = useScreenUser();

  return (
    <Box component='div' className='boxCenterCol' 
      sx={{ 
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}>

      <Box component='div' className='boxCenterRow'>
        <img src={ laptopOrDesktop } alt='Logotipo Layout' width={75} height={75} />

        { 
          breakpointValue >= 2 
          ? ( <Typography component='h1' variant="h4" sx={{ flexGrow: 1 }}>LayoutMaterialUI</Typography> )
          : ( <Typography component='h1' variant="h4" sx={{ flexGrow: 1 }}>LayoutMui</Typography> )
        }
      </Box>
    </Box>
  )
}