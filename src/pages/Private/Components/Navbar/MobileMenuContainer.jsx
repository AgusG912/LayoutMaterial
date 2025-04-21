import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Container from "@mui/material/Container";
import { userMenu } from "../../../../models";
import { useAuthStore, useUiStore } from "../../../../hooks";
import { MobileMenuItem } from "./";

export const MobileMenuContainer = () => {

  const { userAuth } = useAuthStore();
  const { toggleMobileMenu } = useUiStore();

  return (
    <Box component='nav' className={ `headerMobileNav ${ toggleMobileMenu ? 'headerMobileNavOpen' : '' }` }>
      <Container maxWidth='xl' className="headerMobileNavContainer" 
        sx={{ 
          pl:'24px', 
          pr:'24px', 
          backgroundColor: 'custom.menu',
          //*                                           // Hide scrollbar
          '::-webkit-scrollbar': { display: 'none' },   // - Chrome, Safari and Opera.
          msOverflowStyle: 'none',                      // - IE and Edge
          scrollbarWidth: 'none',                       // - Firefox

        }}>
        <Box component='div' className={ ` ${ toggleMobileMenu ? 'headeMobileNavMenu' : '' }`}>
            <List sx={{ width: '100%' }}>
                {
                  userMenu
                    .filter( options => options.rolAccess.includes( userAuth.rol ) )
                      .map( menuBasedOnRole => (
                        <MobileMenuItem key={ menuBasedOnRole.id } { ...menuBasedOnRole } activeMenu={ toggleMobileMenu }/>
                      ))
                }
            </List>

        </Box>
      </Container>
    </Box>
  )
}
