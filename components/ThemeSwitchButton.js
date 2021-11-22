import { useEffect } from "react"
import useDarkMode from "../hooks/useDarkMode.js"

export default function ThemeSwitchButton() {

    const [switchTheme, theme, isMounted] = useDarkMode()

    if (!isMounted) return null

    const toggleTheme = () => {
        switchTheme()
    }

    return (
        <button onClick={toggleTheme}>
            {theme ===  "dark" ? "🌞": "🌛"}
        </button>
    )
}