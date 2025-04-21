import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { SidebarIcon } from "./";


export const SidebarItem = ({ id='', name='', path='', toggleDesktopSidebar={} }) => {

  return (
      <ListItem>
        <Link to={ path } style={{ display:'flex', flexGrow: 1 }}>
          <ListItemButton 
            sx={{ 
              minHeight: '48px', 
              borderRadius: '5px',
            }}>

              { 
                typeof toggleDesktopSidebar === 'object' ? (
                  <ListItemIcon>
                      <SidebarIcon id={ id } name={ name } />
                  </ListItemIcon>
                ) : ( <SidebarIcon id={ id } name={ name } /> )
              }

              {
                typeof toggleDesktopSidebar === 'object' && (
                  <Container disableGutters sx={{ textWrap:'nowrap' }}>
                    { name }
                  </Container>
                )
              }

          </ListItemButton>
        </Link>
      </ListItem>
  )
}