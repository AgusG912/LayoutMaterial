import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


export const CardAccountBalance = ({ amount }) => {
  return (
    <Box component='div'
        sx={{
            width:'100%',
            height: '100%',
            padding: { xs:'16px 20px', sm:'16px 30px' },
            backgroundColor: 'custom.card',
            border: '0.667px solid grey',
            borderRadius: '7px',
            justifyContent: 'space-around',
        }}>
            <Typography variant="h5" sx={{ textAlign: 'left', fontSize:{ xs:'15px', sm:'24px' } }}> 
              Balance
            </Typography>
            <Divider sx={{ marginBottom:'12px' }} />
            <Typography variant="h6" sx={{ textAlign: { xs:'center', sm: 'right'}, textWrap:'nowrap', fontSize:{ xs:'15px', sm:'20px' }  }}> 
                { amount.toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) } USD
            </Typography>
    </Box>
  )
}