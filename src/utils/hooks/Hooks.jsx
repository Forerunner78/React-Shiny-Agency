import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

export function useTheme() {
    const { theme } = useContext(ThemeContext)
    return { theme }
}
