import { useState } from "react"

export default function useInput (initialValue) {
    
    const [value, setValue] = useState(initialValue)

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const isEmpty = () => {
        return value === ""
    }

    const reset = () => {
        setValue("")
    }

    return {
        value,
        reset,
        isEmpty,
        onChange: handleChange
    }
}