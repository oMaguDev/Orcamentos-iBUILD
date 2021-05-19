import { createGlobalStyle, ThemeConsumer, ThemeProvider } from 'styled-components'
// import '../styles/globals.css'


const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
        background: #e5e5e5;
        color: #5e03c5;
        font-family: 'Poppins', sans-serif;
    }

    .MuiStepIcon-root.MuiStepIcon-active {
        color: #5e03c5 !important;
    }

    .MuiStepIcon-root.MuiStepIcon-completed {
        color: #5e03c5 !important;
    }
`

const theme = {
    colors: {
        primary: {
            purple: '#5e03c5',
            purplePink: '#8b008b',
        },
        text: {
            title: '#ff1b5f', // '#bd1245', // '#b93f64' // 
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
