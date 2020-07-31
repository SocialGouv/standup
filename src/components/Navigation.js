import React from "react"

import { useIndex } from "utils/index"

const Navigation = ({ handler }) => {
  const [{ index, isSliding, slides }] = useIndex()
  const nextSlide = slides[index + 1]
  const previousSlide = slides[index - 1]

  return (
    <div className={`navigation ${isSliding ? "hidden" : ""}`}>
      <h4 className="previous">
        {previousSlide && (
          <div
            tabIndex={0}
            role="button"
            onClick={() => handler(index - 1)}
            onKeyPress={() => handler(index - 1)}
          >
            <span>{`\u276E`}</span>
            {"\u00A0\u00A0"}
            {previousSlide.title}
          </div>
        )}
      </h4>
      <h4 className="next">
        {nextSlide && (
          <div
            tabIndex={0}
            role="button"
            onClick={() => handler(index + 1)}
            onKeyPress={() => handler(index + 1)}
          >
            {nextSlide.title}
            {"\u00A0\u00A0"}
            <span>{`\u276F`}</span>
          </div>
        )}
      </h4>
    </div>
  )
}

export default Navigation
