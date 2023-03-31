import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Homepage from './pages/Home/Homepage'
import Footer from './components/Footer/Footer'
import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider, SurveyProvider } from './utils/context/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <ThemeProvider>
                <SurveyProvider>
                    <GlobalStyle />
                    <Homepage />
                    <Footer />
                </SurveyProvider>
            </ThemeProvider>
        </BrowserRouter>
    </>
)
