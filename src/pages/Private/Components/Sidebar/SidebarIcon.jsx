import ListIcon from '@mui/icons-material/List';
import LinkIcon from '@mui/icons-material/Link';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import PaymentsIcon from '@mui/icons-material/Payments';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

/* 
  * Default line from new options.

  { id === '' && <NEWSVG titleAccess={ name } />}

*/
export const SidebarIcon = ({ id='', name='' }) => {
  return (
    <>
        { id === 'home' && <AccountBalanceWalletIcon titleAccess={ name } />}
        { id === 'transfers' && <ListIcon titleAccess={ name } />}
        { id === 'transactions' && <SyncAltIcon titleAccess={ name } />}
        { id === 'paymentLink' && <LinkIcon titleAccess={ name } />}
        { id === 'services' && <PaymentsIcon titleAccess={ name } />}
        { id === 'credit' && <CreditCardIcon titleAccess={ name } />}
        { id === 'income' && <RequestQuoteIcon titleAccess={ name } />}
    </>
  )
}