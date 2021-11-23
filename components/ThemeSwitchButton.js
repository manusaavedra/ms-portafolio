import { useEffect } from "react"
import useDarkMode from "../hooks/useDarkMode.js"

export default function ThemeSwitchButton() {

    const [switchTheme, theme, isMounted] = useDarkMode()

    const toggleTheme = () => {
        switchTheme()
    }

    return (
        <button className="button-theme" onClick={toggleTheme}>
            {theme ===  "dark" ? "🌞": "🌛"}
        </button>
    )
}