import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Logout from "@mui/icons-material/Logout";
import PersonIcon from '@mui/icons-material/Person';
import ListItemIcon  from "@mui/material/ListItemIcon";
import SettingsIcon from '@mui/icons-material/Settings';
import { PrivateRoutes } from "../../../../models";
import { useAuthStore } from "../../../../hooks/useAuthStore";

export const DesktopAccountMenuItem = ({ close }) => {

  const { startLogout } = useAuthStore();

  return (
    <Box component='div' sx={{ minWidth: '220px' }}>
        
        <MenuItem onClick={ close } className="fadeInTopMenuItem" sx={{ padding: 0 }}>
          <Link to={ PrivateRoutes.PROFILE } style={{ display:'flex', flexGrow:1, padding: '6px 16px' }}>
            <ListItemIcon> <PersonIcon /> </ListItemIcon>
              Perfil
          </Link>
        </MenuItem>

        <Divider className="fadeInTopMenuItem" />

        <MenuItem onClick={ close } className="fadeInTopMenuItem" sx={{ padding: 0, marginBottom: '8px' }}>
          <Link to={ PrivateRoutes.SETTINGS } style={{ display:'flex', flexGrow:1, padding: '6px 16px' }}>
            <ListItemIcon> <SettingsIcon /> </ListItemIcon>
              Configuración
          </Link>
        </MenuItem>

        <MenuItem onClick={ () => { close(); startLogout(); } } className="fadeInTopMenuItem">
          <ListItemIcon> <Logout /> </ListItemIcon>
            Cerrar sesión
        </MenuItem>
    </Box>
  )
}