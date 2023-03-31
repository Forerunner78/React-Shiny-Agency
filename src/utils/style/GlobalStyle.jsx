import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../hooks/Hooks'
import colors from './colors'

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
        background-color: ${(props) =>
            props.isDarkMode ? '#2F2E41' : 'white'};
        margin: 20px;
    }
    .active{
        background-color: ${colors.primary};
        color: ${colors.backgroundLight};
    }
`

function GlobalStyle() {
    const { theme } = useTheme()
    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
