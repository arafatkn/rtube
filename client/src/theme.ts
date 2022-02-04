import {createTheme} from "@mui/material/styles";
import {red} from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#556CD6',
        },
        secondary: {
            main: '#19857B',
        },
        error: {
            main: red.A400,
        }
    }
})