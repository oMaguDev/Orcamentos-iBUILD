import { createGlobalStyle, ThemeConsumer, ThemeProvider } from 'styled-components'
import { ActiveIndexProvider } from '../contexts/activeIndex'
// import '../styles/globals.css'
import Head from 'next/head'
import { SimulationDataContextProvider } from '../contexts/SimulationData'
import { SimulationStatusContextProvider } from '../contexts/SimulationStatus'
import { UserContextProvider } from '../contexts/UserContext'


const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        padding: 0;
        background: #fff;
        color: #54596c;
        font-family: urw-din, sans-serif;
        height: 100%;
    }
    
    #__next {
        height: 100%;
    }

    .MuiStepIcon-root.MuiStepIcon-active {
        color: #7dd23a !important;
    }

    .MuiStepIcon-root.MuiStepIcon-completed {
        color: #7dd23a !important;
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
            green: '#7dd23a',
            lightGreen: '#BDE4A7',
            fadedGreen: 'rgba(125, 210, 58, 0.5)',
            fadedLightGreen: 'rgba(189, 228, 167, 0.4)',
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
            <Head>
                <title>Orçamento Express | iBuild </title>
            </Head>
            <GlobalStyle />
            <UserContextProvider>
                <SimulationDataContextProvider>
                    <SimulationStatusContextProvider>
                        <ActiveIndexProvider>
                            <ThemeProvider theme={theme}>
                                <Component {...pageProps} />
                            </ThemeProvider>
                        </ActiveIndexProvider>
                    </SimulationStatusContextProvider>
                </SimulationDataContextProvider>
            </UserContextProvider>
        </>
    )
}

export default MyApp
