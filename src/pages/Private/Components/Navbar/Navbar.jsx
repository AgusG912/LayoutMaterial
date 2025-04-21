import Box from '@mui/material/Box';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { useScreenUser, useUiStore } from "../../../../hooks";
import { DesktopAccountButton, DesktopEmailBadgeButton, DesktopSwitchSidebar, MobileGroupButton, MobileMenuContainer } from "./";
import { useEffect } from 'react';

export const Navbar = () => {

  const { toggleMobileMenu, toggleMobileAccountMenu, setCloseMobileMenu, closeSwipeableDrawer } = useUiStore();
  const { palette, breakpointValue } = useScreenUser();


  useEffect(() => {
    if( breakpointValue > 2 && toggleMobileMenu === true ) { setCloseMobileMenu() }
    if( breakpointValue > 2 && toggleMobileAccountMenu === true ) { closeSwipeableDrawer() }

  }, [breakpointValue])
  

  return (
    <>
    <AppBar position="sticky"
      sx={{ 
        width:'100%', 
        height:80, 
        borderBottom: `1px solid`, 
        borderBottomColor: 'custom.border',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}>
      
        <Toolbar disableGutters sx={{ background: `${ palette.custom.navbar }` }}>
          <Container disableGutters maxWidth='xl' 
            sx={{ 
              paddingRight: { xs: '16px', md:'24px' },
              minHeight: '80px', 
              display:'flex', 
              justifyContent:'space-between', 
              alignItems:'center'
            }}>
              
              {/* 
               *  "The following component includes the toggle sidebar which is rendered when the breakpointValue is greater than 2.
              */}

                <DesktopSwitchSidebar breakpointValue={ breakpointValue } />
              
              {/*
               * "The following conditional changes the rendering of the different breakpoints.
              */}

              { 
                breakpointValue > 2
                  ? 
                    (
                      <Box component='div' className="boxCenterRow">
                        <DesktopEmailBadgeButton />
                        <DesktopAccountButton />
                      </Box>
                    )
                  : ( <MobileGroupButton /> )
              }

          </Container>
        </Toolbar>
        <MobileMenuContainer />
    </AppBar>
    
    
    </>
  );
}
