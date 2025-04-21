import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


export const WelcomeCaption = ({ userName='', lastLogin }) => {
  return (
    <Box>
        <Typography variant="h4" >
            Hola, { userName }.
        </Typography>
        <Typography component='p' 
            sx={{
                fontSize: { xs:'14px', sm:'1rem' }
            }}>
            Tu última conexión fue el&nbsp;
            {   
                new Intl.DateTimeFormat('es', {
                    year: 'numeric', month: 'long', weekday: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true
                }).format( lastLogin )
            }
        </Typography>
    </Box>
  )
}