import useDarkMode from "../hooks/useDarkMode.js"
import {CgSun, CgMoon} from  'react-icons/cg'

export default function ThemeSwitchButton() {

    const [switchTheme, theme, isMounted] = useDarkMode()

    if (!isMounted) return null

    return (
        <button className="button-theme" onClick={switchTheme}>
            {theme ===  "dark" ? <CgSun size={16} />: <CgMoon size={16} />}
        </button>
    )
}