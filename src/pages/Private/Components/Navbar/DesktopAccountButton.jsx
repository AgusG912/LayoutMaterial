import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DesktopAccountMenu } from "./";

export const DesktopAccountButton = () => {

    /*
        "Here the state for anchorEl is being created to handle it directly through the props. 
        If done through the store, it throws a serialization error because it is a complex state.
        We do not want to disable Redux's default middlewares to maintain good development practices.

        "It is worth noting that the official Material-UI Menu documentation states that it should
        be done under the following code. However, it has been modified to make the code much cleaner 
        and more visually appealing.
    */

    const [anchorEl, setAnchorEl] = useState(null);
    const toggleAccountMenu = Boolean( anchorEl );

    const openMenu = (event) => {
        setAnchorEl( event.currentTarget )
    }

    const closeMenu = () => {
        setAnchorEl( null )
    }

  return (
    <>
        <Tooltip title='Configuración de la cuenta'>
            <IconButton
                size="large"
                color="inherit"
                onClick={ openMenu }
                aria-haspopup='true'
                aria-controls={ toggleAccountMenu ? 'accountMenu' : undefined }
                aria-expanded={ toggleAccountMenu ? 'true' : undefined }
            >
                <AccountCircleIcon fontSize="inherit" />
            </IconButton>
        </Tooltip>
        
        <DesktopAccountMenu anchorEl={anchorEl} open={toggleAccountMenu} onClose={closeMenu} />
    </>
  )
}