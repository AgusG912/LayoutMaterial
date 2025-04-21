import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import EmailIcon from '@mui/icons-material/Email';
import IconButton from "@mui/material/IconButton";
import DraftsIcon from '@mui/icons-material/Drafts';
import { useScreenUser, useUserStore } from "../../../../hooks";
import { PrivateRoutes } from "../../../../models";

export const DesktopEmailBadgeButton = () => {

  const { palette } = useScreenUser();
  const { newNotifications, userLocationIsInbox } = useUserStore();

  return (
    
    <Tooltip title='Notificaciones'>
      <Link to={ PrivateRoutes.INBOX } style={{ display: 'flex'}}>
        <IconButton size="large" color="inherit" >
            <Badge variant="dot" invisible={ !newNotifications }
              sx={{ 
                '& .MuiBadge-badge': { 
                  backgroundColor: `${ palette.custom.badge }`,
                } 
              }}>
              
                {
                  userLocationIsInbox ? ( <DraftsIcon /> ) : ( <EmailIcon  /> )
                }
                
            </Badge>
        </IconButton>
      </Link>
    </Tooltip>
    
  )
}