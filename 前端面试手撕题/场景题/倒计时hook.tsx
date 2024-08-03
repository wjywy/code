import { useState, useRef, useEffect } from "react"

export const useCount = (number: number) => {
    const [count, setCount] = useState(number)

    const timerRef = useRef<number>()

    const reset = () => {
        setCount(number)
    }

    useEffect(() => {
        timerRef.current = window.setInterval(() => {
            setCount((count) => count - 1)
        }, 1000)

        return () => {
            clearInterval(timerRef.current)
        }
    } ,[count])

    useEffect(() => {
        if (count === 0) {
            clearInterval(timerRef.current)
        }
    })

    return [count, reset] as const
}