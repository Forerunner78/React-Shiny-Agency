import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Homepage from './pages/Home/Homepage'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    * {
		font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
		margin: 0;
    }
	div {
		margin: 20px;
	}
`

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<GlobalStyle />
			<Homepage />
		</BrowserRouter>
	</React.StrictMode>
)