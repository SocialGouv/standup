import React from "react"

const Control = ({ type, handler, sliding }) => (
  <div
    tabIndex={0}
    role="button"
    onClick={handler}
    onKeyPress={handler}
    className={`control ${type} ${sliding ? "hidden" : ""}`}
  ></div>
)

const Controls = ({ index, maxIndex, sliding, handler }) => (
  <>
    {index > 0 && (
      <Control
        type="previous"
        sliding={sliding}
        handler={() => handler(index - 1)}
      />
    )}
    {index < maxIndex && (
      <Control
        type="next"
        sliding={sliding}
        handler={() => handler(index + 1)}
      />
    )}
  </>
)

export default Controls
