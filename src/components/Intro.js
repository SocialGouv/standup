import React, { useRef, useEffect } from "react"

const Intro = ({ started, onClick, onKeyDown }) => {
  const pageRef = useRef()

  useEffect(() => pageRef?.current?.focus(), [])

  return (
    <div
      tabIndex={0}
      role="button"
      ref={pageRef}
      className="wrapper"
      onKeyDown={onKeyDown}
    >
      <div className="background"></div>

      <div className={`intro${started ? " hidden" : ""}`}>
        <h1 data-h1="Stand up">Stand up</h1>
        <h2>LA FABRIQUE NUMERIQUE</h2>
        <button onClick={onClick}>Commencer</button>
      </div>
    </div>
  )
}

export default Intro
