import styled from "styled-components"
import React, { useState, useEffect, useRef } from "react"

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
  const [count, setCount] = useState(start)

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
    <Wrapper
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 4rem;
  margin: 0 2rem;
  color: #c7c7c7;

  &.blink {
    animation: blinker 1s linear infinite;
  }

  &.blink,
  &.overdue {
    color: #b00;
  }

  &.warning {
    color: #e8998b;
  }

  &.ontime {
    color: inherit;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`

export default Counter
