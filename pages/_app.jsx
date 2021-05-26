import { createGlobalStyle, ThemeConsumer, ThemeProvider } from 'styled-components'
// import '../styles/globals.css'


const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
        background: #fff;
        color: #54596c;
        font-family: 'Poppins', sans-serif;
    }

    .MuiStepIcon-root.MuiStepIcon-active {
        color: chartreuse !important;
    }

    .MuiStepIcon-root.MuiStepIcon-completed {
        color: chartreuse !important;
    }
`

const theme = {
    colors: {
        primary: {
            purple: '#5c14d3',
            darkPurple: '#360062',
            purplePink: '#8b008b',
            pink: '#fb1d47',
            lightGrey: '#ebeaf1',
            green: 'chartreuse',
        },
        text: {
            title: '#ff1b5f', // '#bd1245', // '#b93f64' // 
            main: '#54596c',
            neutral200: '#c5cee0',
            neutral400: '#7e8aa4',
            neutral600: '#333A46',
            white: '#fff'
        },
        button: {
            primary: '#5e03c5',
            secondary: '#8b008b'
        },
    },
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.16)',
}

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
