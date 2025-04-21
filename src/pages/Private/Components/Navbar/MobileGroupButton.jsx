import Grid2 from "@mui/material/Grid2";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useUiStore } from "../../../../hooks";
import { MobileSwitchToggleMenu } from "./";

export const MobileGroupButton = () => {
  
  //Use global store to change toggle menu
  
  const { setToggleMobileMenu, openSwipeableDrawer } = useUiStore();

  return (
    
    <Grid2 container spacing={1}>

      <Grid2 size={6} width={48}>
        <IconButton 
            size="large"
            color="inherit"
            aria-label="Logout"
            onClick={ openSwipeableDrawer }
            >
              <AccountCircleIcon fontSize="inherit" />
        </IconButton>
      </Grid2>

      <Grid2 size={6} display='flex' justifyContent='center' alignItems='center' width={48}>
        <IconButton
            size="large"
            color="inherit"
            aria-label="Menu"
            onClick={ setToggleMobileMenu }
            >
              <MobileSwitchToggleMenu />
        </IconButton>
      </Grid2>
    </Grid2>
    
  )
}
