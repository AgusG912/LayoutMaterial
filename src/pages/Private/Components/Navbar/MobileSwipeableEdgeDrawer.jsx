import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useAuthStore, useScreenUser, useUiStore } from "../../../../hooks";
import { MobileSwipeableEdgeButton } from "./";
import SwipeIcon from '@mui/icons-material/Swipe';
import { userAccountMenu } from "../../../../models";

const drawerBleeding = 56;

// "This component is rendered in the application layout as it needs to have a high 
//  hierarchy to be able to overlap the entire user screen.
export const MobileSwipeableEdgeDrawer = () => {

  const { startLogout } = useAuthStore();
  const { palette } = useScreenUser();
  const { toggleMobileAccountMenu, openSwipeableDrawer, closeSwipeableDrawer } = useUiStore();

  return (
    <SwipeableDrawer 
      anchor="bottom"

      // "The transition set below targets the dark background that blocks the main use of the 
      //  application, and the drawerBleeding refers to the edges of the swipeable drawer of Material UI
      transitionDuration={ 300 }
      disableSwipeToOpen={ true }
      swipeAreaWidth={ drawerBleeding }

      // "These are the store functions that manage the state of the swipeable drawer.
      open={ toggleMobileAccountMenu }
      onOpen={ openSwipeableDrawer }
      onClose={ closeSwipeableDrawer }
      
      /*
       
        * ModalProps 
            Is the background configuration that blocks direct interaction with the 
            application once the menu is opened. This property has a modified z-index because the 
            navbar has a higher one. It was necessary for this modal to be the highest in the 
            application to improve the user interface and completely block the system functionality. 

        * PaperProps:
            "Underwent a modification so that the dark mode of Material UI does not create 
            an extra paper and add a default background image. Therefore, it is removed to maintain 
            a custom design.
      
      */
      ModalProps={{ keepMounted: true, sx:{ zIndex:1300, } }}
      PaperProps={{ sx:{ backgroundColor:'transparent', backgroundImage: 'none' } }}
    >
      

      {/* 

        "The following box contains all the configuration and styles of the modal, which includes 
        the buttons, the swipe menu, and the various details that make the modal look like a mobile 
        application. 

      */}
        <Box component='div' 
          className="SwipeableEdgeDrawerBox"
          sx={{
            height: `calc(356px - ${ drawerBleeding }px)`,
            backgroundColor: 'custom.accountMenuMobile',
            border: `0.667px solid ${ palette.text.divider }`,
            borderTopRightRadius: '15px',
            borderTopLeftRadius: '15px',
            top: -drawerBleeding,
            paddingLeft: '24px',
            paddingRight: '24px',
            paddingTop: '20px',
            paddingBottom: '72px',
            overflow:'visible',
          }}>


          {/* "These are the details of the user interface where the swipe animation and puller are added to reference a mobile device menu. */}
            <Box className='boxCenterCol'> <Box component='div' className="SwipeableEdgeDrawerPuller"></Box> </Box>
            <Box className='boxCenterCol swipeTutorial'> <SwipeIcon /> </Box>

          <Box component='div'>
            <Box component='div' sx={{ paddingTop:'15px', display:'flex', overflowX:'auto' }}>
              
              {/* "Menu options with swipeable edge buttons */}
                <MobileSwipeableEdgeButton { ...userAccountMenu.PROFILE }  firstItem />
                <MobileSwipeableEdgeButton { ...userAccountMenu.INBOX } />
                <MobileSwipeableEdgeButton { ...userAccountMenu.SETTINGS } />
                <MobileSwipeableEdgeButton name="Cerrar sesión" id="logout" lastItem handleLogout={ startLogout } />
            
            </Box>
          </Box>
            
        </Box>
    </SwipeableDrawer>
  )
}