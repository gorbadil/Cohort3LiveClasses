import { createTheme } from "@mui/material/styles";
import { pink, deepPurple } from "@mui/material/colors";

export const theme = createTheme({
    components: {},
    palette: {
        primary: {
            main: pink[200],
        },
        error: {
            main: deepPurple[300],
        },
    },
    shape: {
        borderRadius: 20,
    },
});