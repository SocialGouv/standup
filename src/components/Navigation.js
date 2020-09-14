import { useIndex } from "@utils/index"
import React from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

const Navigation = ({ handler }) => {
  const [{ index, isSliding, slides }] = useIndex()
  const previousSlide = slides[index - 1]
  const nextSlide = slides[index + 1]

  return (
    <div className={`navigation ${isSliding ? "hidden" : ""}`}>
      <div className="previous">
        {previousSlide && (
          <div
            tabIndex={0}
            role="button"
            onClick={() => handler(index - 1)}
            onKeyPress={() => handler(index - 1)}
          >
            <ChevronLeft />
            {previousSlide.title}
          </div>
        )}
      </div>
      <div className="paging">
        {index + 1} / {slides.length}
      </div>
      <div className="next">
        {nextSlide && (
          <div
            tabIndex={0}
            role="button"
            onClick={() => handler(index + 1)}
            onKeyPress={() => handler(index + 1)}
          >
            <span>{nextSlide.title}</span>
            <ChevronRight />
          </div>
        )}
      </div>
    </div>
  )
}

export default Navigation
