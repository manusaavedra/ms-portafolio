import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function useDarkMode() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true);
  }, [])

  const switchTheme = () => {
    if (isMounted)
      setTheme(theme === "light" ? "dark" : "light")
    
  }

  return [switchTheme, theme, isMounted]
}