import React from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

import useIndex from "@/utils/index"
import useSlides from "@/utils/slides"

const Navigation = () => {
  const [index] = useIndex()
  const { slides = [] } = useSlides()
  const nextSlide = slides[index + 1]
  const previousSlide = slides[index - 1]

  const slideTo = (index) => {
    document.querySelector("#slide-" + index).scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <div className="navigation">
      <div className="previous">
        {previousSlide && (
          <div
            tabIndex={0}
            role="button"
            onClick={() => slideTo(index - 1)}
            onKeyPress={() => slideTo(index - 1)}
          >
            <ChevronLeft />
            {previousSlide.team?.name || previousSlide.title}
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
            onClick={() => slideTo(index + 1)}
            onKeyPress={() => slideTo(index + 1)}
          >
            <span>{nextSlide.team?.name || nextSlide.title}</span>
            <ChevronRight />
          </div>
        )}
      </div>
    </div>
  )
}

export default Navigation
