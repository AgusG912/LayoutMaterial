import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useUserStore } from "./useUserStore";

export const useScreenUser = () => {
  
    //* What is this?
    // The prefers-color-scheme CSS media feature is used to detect if a user has requested light or dark color themes.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme#embedded_elements

    // 1. Here we are taking the default value from the user's browser.
    const { matches: userDarkTheme } = window.matchMedia('(prefers-color-scheme: dark)');

    // 2. Get config from GUI and store. 
    const theme = useTheme();                                      // Get Breakpoint config in the main theme and palette colors.
    const { themeUI } = useUserStore();                            // Get value from the store, specifically the user's theme preference.

    /*
        3. Define an array `mqs` that contains numerical values and textual (string) representations
           of breakpoints as defined in the main theme. Each entry consists of: 
            
            A. A boolean value indicating whether the current screen width matches the specific breakpoint using `useMediaQuery`.
                https://mui.com/material-ui/react-use-media-query/

            B. The string representation of the breakpoint ('xl', 'lg', 'md', 'sm', 'xs'). 

            C. A numerical value associated with each breakpoint. (5 for 'xl', 4 for 'lg', 3 for 'md', 2 for 'sm', 1 for 'xs').

    */
    const mqs = [
        [ useMediaQuery(theme.breakpoints.only('xl')), 'xl', 5 ],
        [ useMediaQuery(theme.breakpoints.only('lg')), 'lg', 4 ],
        [ useMediaQuery(theme.breakpoints.only('md')), 'md', 3 ],
        [ useMediaQuery(theme.breakpoints.only('sm')), 'sm', 2 ],
        [ useMediaQuery(theme.breakpoints.only('xs')), 'xs', 1 ]
    ]

    // 3.1. Filter and return values from breakpoint actually.
    const result = mqs.filter((mq) => mq[0] === true);

    // 3.2. Breakpoint is value in string, breakpointValue is a number from sequence
    const breakpoint = result[0][1];
    const breakpointValue = result[0][2];

    /* 

        4. Here, the information from themeUI that comes from the store is being used, and it is preconfigured
           by default to 'system'. This involves a check using prefers-color-scheme to return the user's default 
           setting. Once the session is started, it will take the user’s default setting.

           * "Information to keep in mind
           It is likely that this information can be persistent or stored in a database, allowing the user’s preset 
           value to be retained and avoiding the need to reset the theme when switching computers.
    
    */

    const userConfigTheme = themeUI === 'system'
                                    ? ( userDarkTheme ? 'dark' : 'light' )
                                    : ( themeUI )

    // The next step is to take the information from the currently used theme to return the palette values in the form of an object.
    const { palette } = theme;

    const breakpointX = window.innerWidth;
    const breakpointY = window.innerHeight;

    return {
        // "Properties associated with breakpoints.
        breakpoint,             //String: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
        breakpointValue,        //Number:    1 |    2 |    3 |    4 |   5
        breakpointX,            //Number:   Resolution X
        breakpointY,            //Number:   Resolution Y

        // "Prop from theme user.
        themeUI,
        userConfigTheme,
        palette,

    };
}
