import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';


export const LoadingSpin = () => {
  return (
    <Box 
        sx={{ 
            height: '100vh',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',   
        }}>
        
        <CircularProgress color='primary.main' />
    </Box>
  )
}
