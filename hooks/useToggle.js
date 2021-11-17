import { useState } from "react"

export default function useToggle(initialState = false) {
    const [state, setState] = useState(initialState)
    const handleToggle = () => setState(!state)
    return [state, handleToggle]
}