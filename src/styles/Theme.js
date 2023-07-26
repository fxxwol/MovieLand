
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#02c342'
        },
        secondary: {
            main: '#141516ec'
        },
        opacity: {
            main: '#212f218e'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 320,
            md: 480,
            lg: 720,
            xl: 1200,
        },
    }
});

export const breakpoints = {
    mobile: `(min-width: 320px)`,
    mobileL: `(min-width: 480px)`,
    tablet: `(min-width: 720px)`,
        desktop: `(min-width: 1200px)`,
}