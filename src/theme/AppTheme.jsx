import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { themeConfig } from './themeConfig';
import { useScreenUser } from '../hooks';


export const AppTheme = ({ children }) => {

  const { userConfigTheme } = useScreenUser();
  const { lightTheme, darkTheme } = themeConfig();

  const theme = userConfigTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={ theme }>

        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        { children }
    </ThemeProvider>
  )
}
