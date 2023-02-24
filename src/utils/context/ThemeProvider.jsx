import { createContext } from "react"
import { useState, useContext } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    )
}

export const SurveyContext = createContext()

export const SurveyProvider = ({ children }) => {
    const [answers, setAnswers] = useState({})
    const saveAnswers = (newAnswers) => {
        setAnswers({ ...answers, ...newAnswers })
    }

    return (
        <SurveyContext.Provider value={{ answers, saveAnswers }}>
            {children}
        </SurveyContext.Provider>
    )
}

// useContext est un hook qui permet de se brancher 
// depuis un composant enfant qui a été wrappé par un Provider
// et donc d’accéder simplement au state partagé.
// Dans ce case, useTheme permet d'accéder
// au state theme et toggleTheme mis en place dans
// le provider parent
export function useTheme() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return { theme, toggleTheme }
}