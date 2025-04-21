import IconButton from "@mui/material/IconButton"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import PersonIcon from '@mui/icons-material/Person';
import Logout from "@mui/icons-material/Logout";
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";
import { useUiStore } from "../../../../hooks";

export const MobileSwipeableEdgeButton = ({ name='', id='', path='', firstItem=false, lastItem=false, handleLogout }) => {

    const { closeSwipeableDrawer } = useUiStore();
  
  return (

    /* 
        "The following box serves the function of storing the icons for the mobile version 
        and also sets a margin for the first and last element, centering them according to 
        the user's viewport. 
    */
   
        <Box component='div' 
            sx={{ 
                marginLeft: firstItem ? 'calc(50vw - 125px)' : 0,
                marginRight: lastItem ? 'calc(50vw - 125px)' : '250px',
            }}>
            
            <Link to={ path }>
                <Box component='div' className="boxCenterCol" sx={{ width: '200px'}} onClick={ closeSwipeableDrawer }>
                    <IconButton aria-label={ name } size="large" onClick={ handleLogout }>
                    
                        {/* "Here we are setting the order and the different icons for each menu option. */}
                            { id === 'profile' && <PersonIcon sx={{ width: '60px', height: '60px' }} /> }
                            { id === 'inbox' && <EmailIcon sx={{ width: '60px', height: '60px' }} /> }
                            { id === 'settings' && <SettingsIcon sx={{ width: '60px', height: '60px' }}  /> }
                            { id === 'logout' && <Logout sx={{ width: '60px', height: '60px' }} color="error" /> }

                    </IconButton>
                    <Typography component='p' variant="h5"> { name } </Typography>
                </Box>
            </Link>

        </Box>
  )
}