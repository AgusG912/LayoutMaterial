import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useScreenUser, useUiStore } from "../../../hooks";
import { MobileSwipeableEdgeDrawer, Navbar } from "../Components/Navbar";
import { Sidebar } from "../Components/Sidebar";
import { Wrapper } from "./Wrapper";

export const LayoutDashboard = () => {
  
  const { breakpointValue } = useScreenUser();
  const { sideBarPosition, drawerWidth, toggleMobileAccountMenu } = useUiStore();
  

  return (
    <>
      {/* "This component is located here because it needs to be rendered overlaid on top of the UI. */}
        { toggleMobileAccountMenu && <MobileSwipeableEdgeDrawer /> } 
      
      
      <Wrapper>
        <Navbar />
        
        {/* "This conditional checks the sidebar configuration and whether it should be displayed depending on the user's screen (Breakpoint). */}
          { breakpointValue > 2 && ( <Sidebar drawerWidth={ drawerWidth } side={ sideBarPosition } /> ) }
        
        {/* "This is the main container where the size of the sidebar is checked, and based on that, padding is added to center the layout content. */}
          <Box component='main' 
            sx={{ 
              flexGrow: 1, 
              paddingLeft: breakpointValue > 2 ? (sideBarPosition === 'left' ? drawerWidth : '0px') : 0,
              paddingRight: breakpointValue > 2 ? (sideBarPosition === 'right' ? drawerWidth : '0px') : 0,
            }}>
              
              <Container maxWidth='xl' sx={{ paddingTop: '24px', overflowX:'hidden' }}>
                <Outlet />
              </Container>
          </Box>
      </Wrapper>
    </>
  )
}

export default LayoutDashboard;