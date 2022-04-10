import "../styles/globals.scss"
import type {AppProps} from "next/app";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@mui/system";

function MyApp({Component, pageProps}: AppProps) {
    const theme = createTheme({
        palette: {
            mode: "dark"
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
