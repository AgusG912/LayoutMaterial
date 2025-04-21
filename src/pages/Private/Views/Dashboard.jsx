import { useUserStore } from "../../../hooks";
import { WelcomeCaption, CardAccountBalance, CardAccountType, CardToolbarAction } from "../Components/View-Dashboard";
import Box from "@mui/material/Box";

export const Dashboard = () => {

  const { fullName, lastLogin, accountBalance } = useUserStore();
  

  return (
    <>
      <WelcomeCaption userName={ fullName } lastLogin={ lastLogin } />

      <Box sx={{ flexGrow: 1 }}>
        <Box component='div'
          sx={{ 
            display:'grid',
            paddingTop: '24px', 
            paddingBottom: '24px',
            gap: { xs:'1rem', md:'1.5rem' },
            gridTemplateColumns: { xs:'minmax(150px, 2fr) minmax(100px, 1fr)', sm:'repeat(2, 1fr)', md:'repeat(3, 1fr)' },
            gridTemplateRows: { xs:'1fr 1fr', md:'auto' },
          }}>

          <Box component='div' sx={{ gridColumn:{ xs: 1 }, gridRow: { xs:1 } }}>
            <CardAccountBalance amount={ accountBalance } />
          </Box>

          <Box component='div' sx={{ gridColumn:{ xs: 1, sm:2 }, gridRow: { xs:2, sm:1 } }}>
            <CardAccountType />
          </Box>

          <Box component='div' sx={{ gridColumn:{ xs: 2, sm:'span 2', md: 3 }, gridRow: { xs:"span 2", md:1 } }}>
            <CardToolbarAction />
          </Box>


        </Box>
      </Box>
    </>
  )
}

export default Dashboard;