

/**
 * Definition of the default color palette in Material UI v6.1.8.
 * 
 * This object contains all available color palette options.
 * You can use these values to customize the components in your application.
 * 
 * - primary: Main color used in the interface.
 * - secondary: Secondary color used for accents and highlighted elements.
 * - error: Color used to indicate errors.
 * - warning: Color used for alerts and warnings.
 * - info: Color used for information and messages.
 * - success: Color used to indicate success and positive outcomes.
 * - background: Background colors of the application.
 * - text: Colors used for text.
 */

export const light = {
    mode: "light",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
      contrastText: "#fff",
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
      contrastText: "#fff",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
      contrastText: "#fff",
    },
    info: {
      main: "#0288d1",
      light: "#03a9f4",
      dark: "#01579b",
      contrastText: "#fff",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#fff",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161",
    },
    contrastThreshold: 3,
    text: {
      primary: "#010001",
      secondary: "#7B7A7A",
      disabled: "rgba(0, 0, 0, 0.38)",
      divider: "#EBEAEB",
      inverse: '#010001' // custom
    },
    background: {
        //* This is color component layout (Appbar, Drawer, etc...)
        // Default: Is background for all app.
        // Paper:   Is background for layout components Mui.
        paper: '#fff', // Edited                    || ORIGINAL VALUE = #fff
        default: '#EAEAEB', // Edited               || ORIGINAL VALUE = #fff

    },
    custom: {                                                       //* CUSTOM THEME COLORS
        navbar: '#030A8C',                                          // NAVBAR COLOR
        border: '#EBEAEB',                                          // BORDER BOTTOM FROM NAVBAR.
        menu: '#DADADA',                                            // DESKTOP VERSION FROM SIDEBAR AND MENU HAMBURGER TO VERSION MOBILE.
        accountMenu: '#fff',                                        // DESKTOP VERSION FROM ACCOUNT MENU
        badge: '#ffb0e7',                                           // DESKTOP VERSION COLOR FROM INBOX ICON NEW
        accountMenuMobile: '#DBE3F5',                               // MOBILE SWIPEABLEDRAWER
        authCard: '#F7F6F9',
        loginButton: '#030A8C',
        loginButtonHover: '#020873',
        registerButton: '#029244',
        registerButtonHover: '#0c844a',
        card: '#fff',
    }
};
  

/********************************************************************************************/
/*                                                                                          */
/* The following object represents the dark color schema of the Material UI color palette   */                 
/*                                                                                          */
/********************************************************************************************/

export const dark = {
    mode: 'dark',
    common: {
        black: "#000",
        white: "#fff"
    },
    primary: {
        main: "#90caf9",
        light: "#e3f2fd",
        dark: "#42a5f5",
        contrastText: "rgba(0, 0, 0, 0.87)"
    },
    secondary: {
        main: "#ce93d8",
        light: "#f3e5f5",
        dark: "#ab47bc",
        contrastText: "rgba(0, 0, 0, 0.87)"
    },
    error: {
        main: "#f44336",
        light: "#e57373",
        dark: "#d32f2f",
        contrastText: "#fff"
    },
    warning: {
        main: "#ffa726",
        light: "#ffb74d",
        dark: "#f57c00",
        contrastText: "rgba(0, 0, 0, 0.87)"
    },
    info: {
        main: "#29b6f6",
        light: "#4fc3f7",
        dark: "#0288d1",
        contrastText: "rgba(0, 0, 0, 0.87)"
    },
    success: {
        main: "#66bb6a",
        light: "#81c784",
        dark: "#388e3c",
        contrastText: "rgba(0, 0, 0, 0.87)"
    },
    grey: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#eeeeee",
        300: "#e0e0e0",
        400: "#bdbdbd",
        500: "#9e9e9e",
        600: "#757575",
        700: "#616161",
        800: "#424242",
        900: "#212121",
        A100: "#f5f5f5",
        A200: "#eeeeee",
        A400: "#bdbdbd",
        A700: "#616161"
    },
    contrastThreshold: 3,
    text: {
        primary: "#fff",
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)",
        divider: "rgba(255, 255, 255, 0.12)"
    },
    background: {
        //* This is color component layout (Appbar, Drawer, etc...)
        // Default: Is background for all app.
        // Paper:   Is background for layout components Mui.
        paper: '#11167e', // Edited                 || ORIGINAL VALUE = #121212
        default: '#080D15', // Edited               || ORIGINAL VALUE = #121212

    },
    custom: {                                                       //* CUSTOM THEME COLORS
        navbar: '#00094B',                                          // NAVBAR COLOR
        border: 'rgba(255, 255, 255, 0.12)',                        // BORDER BOTTOM FROM NAVBAR.
        menu: '#0D111D',                                            // DESKTOP VERSION FROM SIDEBAR AND MENU HAMBURGER TO VERSION MOBILE.
        accountMenu: '#282828',                                     // DESKTOP VERSION FROM ACCOUNT MENU
        badge: '#ffb0e7',                                           // DESKTOP VERSION COLOR FROM INBOX ICON NEW
        accountMenuMobile: '#101010',                               // MOBILE SWIPEABLEDRAWER
        authCard: '#101524',
        loginButton: '#587bba',
        loginButtonHover: '#496392',
        registerButton: '#029244',
        registerButtonHover: '#0c844a',
        card: '#262A33',
    }
};
