import React, { useState, useEffect, useRef } from "react"

import { useIndex } from "utils/index"

const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => savedCallback.current()
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const Counter = ({ start }) => {
  const [state] = useIndex()
  const [count, setCount] = useState(start)

  useEffect(() => {
    setCount(0)
  }, [state])

  useInterval(() => {
    setCount(count + 1)
  }, 1000)

  const format = count => {
    const dt = new Date(null)
    dt.setSeconds(count)
    const seconds = dt.getSeconds()
    const minutes = dt.getMinutes()
    return `${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div
      className={`
        counter
        ${count > 1 ? " started" : ""}
        ${count > 59 ? " overdue" : ""}
        ${count > 119 ? " blink" : ""}
        ${state.isSliding ? " hidden" : ""}
      `}
    >
      {format(count)}
    </div>
  )
}

export default Counter
