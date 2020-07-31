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
  const [index] = useIndex()
  const [count, setCount] = useState(start)

  useEffect(() => {
    setCount(0)
  }, [index])

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
      className={`counter${
        count > 120
          ? " blink"
          : count > 90
          ? " overdue"
          : count > 60
          ? " warning"
          : count > 30
          ? " ontime"
          : ""
      }`}
    >
      {format(count)}
    </div>
  )
}

export default Counter
