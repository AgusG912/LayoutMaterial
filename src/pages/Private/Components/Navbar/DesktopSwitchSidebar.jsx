import Box from "@mui/material/Box";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Logotipo } from "../../../../components";
import { useUiStore } from "../../../../hooks";

export const DesktopSwitchSidebar = ({ breakpointValue }) => {

    const { sideBarMinWidth, toggleDesktopSidebar, setToggleDesktopSidebar } = useUiStore();

  return (
    <Box component='div' sx={{ display:'flex' }}>

        { 
            breakpointValue > 2 && (
                <Box component='div' className="boxCenterCol" sx={{ width: sideBarMinWidth }}>
                    <IconButton 
                        aria-label="Switch Sidebar" 
                        color="inherit"
                        size="large"
                        onClick={ setToggleDesktopSidebar }
                        >
                        { 
                            toggleDesktopSidebar 
                                ? <MenuOpenIcon fontSize="inherit" titleAccess='Cerrar menú' /> 
                                : <MenuIcon fontSize="inherit" titleAccess='Abrir menú' />
                        }
                    </IconButton>
                </Box>
            )    
        }

        <Logotipo />
    </Box>
  )
}