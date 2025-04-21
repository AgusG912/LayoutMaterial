import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import { useUiStore } from "../../../../hooks";
import { SidebarIcon } from "../Sidebar";


export const MobileMenuItem = ({id, name, path, activeMenu = false}) => {

  const { setToggleMobileMenu } = useUiStore();

  return (
    <>
      <ListItem sx={{ padding:0, marginTop: '10px' }} className={ activeMenu ? 'MobileMenuItem' : '' }>
        <Link to={ path } style={{ display:'flex', flexGrow: 1 }} onClick={ setToggleMobileMenu }>
          <ListItemButton sx={{ minHeight: '68px', borderRadius: '5px' }}>

                <ListItemIcon sx={{ display:'flex', flexDirection:'row', justifyContent:'center' }}>
                    <SidebarIcon id={ id } name={ name } />
                </ListItemIcon>

                <Container disableGutters>
                    <Typography sx={{ fontSize:{xs:'20px'}, color:'text.inverse' }}> { name } </Typography>
                </Container>

          </ListItemButton>
        </Link>
      </ListItem>

      <Divider className={ activeMenu ? 'MobileMenuItem' : '' }/>
    </>
  )
}