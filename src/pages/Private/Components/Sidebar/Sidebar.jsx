import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { useAuthStore, useScreenUser } from "../../../../hooks";
import { SidebarItem } from "./SidebarItem";
import { userMenu } from "../../../../models";


export const Sidebar = ({ drawerWidth={}, side='left' }) => {

  const { userAuth } = useAuthStore();
  const { palette } = useScreenUser();

 return (
  <Box component='nav' sx={{ width: drawerWidth, flexShrink: { sm: 0 } }}>
    <Drawer variant="permanent" anchor={ side }

      sx={{
        width: drawerWidth,
        transition: 'width 600ms cubic-bezier(0.4, 0, 0.6, 1)',
        flexShrink: 0,
        
        ['& .MuiDrawer-paper']: {
          //*                                           // Hide scrollbar
          '::-webkit-scrollbar': { display: 'none' },   // - Chrome, Safari and Opera.
          msOverflowStyle: 'none',                      // - IE and Edge
          scrollbarWidth: 'none',                       // - Firefox
          
          background: `${ palette.custom.menu }`,
          boxSizing: 'border-box',
          paddingTop: '80px',
          width: drawerWidth,
          transition: 'width 250ms cubic-bezier(0.4, 0, 0.6, 1)',
        }
      }}>
        <List sx={{ drawerWidth }}>
          {
            userMenu
              .filter( options => options.rolAccess.includes( userAuth.rol ) )
                .map( menuBasedOnRole => (
                  <SidebarItem key={ menuBasedOnRole.id } { ...menuBasedOnRole } toggleDesktopSidebar={ drawerWidth } />
                ))
          }
        </List>  

    </Drawer>
  </Box>
 )
}