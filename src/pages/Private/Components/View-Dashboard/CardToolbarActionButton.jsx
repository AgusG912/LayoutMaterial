import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LinkIcon from '@mui/icons-material/Link';
import Typography from "@mui/material/Typography";
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export const CardToolbarActionButton = ({ label, showLabel=false, iconElement='', path='' }) => {

  return (
    <Box component='div' sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
      <Link replace to={`/${path}`}>
        <Button sx={{ borderRadius:'7px' }}>
            { iconElement === 'deposit' && <ArrowUpwardIcon titleAccess={`${ label }`} /> }
            { iconElement === 'transactions' && <SyncAltIcon titleAccess={`${ label }`} /> }
            { iconElement === 'paymentLink' && <LinkIcon titleAccess={`${ label }`} /> }
            { iconElement === 'Withdrawal' && <ArrowDownwardIcon titleAccess={`${ label }`} /> }
        </Button>
      </Link>
      <Typography component='p' sx={{ fontSize:{ xs:'11px', sm:'13px', md:'12px', lg:'13px', xl:'16px' } }}>
          { showLabel && label }
      </Typography>
    </Box>
  )
}