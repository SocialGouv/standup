import { debounce } from "lodash"
import React, { useState, useRef, useEffect } from "react"

import Slide from "components/Slide"
import { useIndex } from "utils/index"
import { useSlides } from "utils/slides"
// import Controls from "components/Controls"
import Navigation from "components/Navigation"

const Slider = () => {
  const slides = useSlides()
  const slidesEl = useRef(null)
  const [, dispatch] = useIndex()
  const scrollPositionRef = useRef()
  const [sliding, setSliding] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const slideTo = index => {
    document.querySelector("#slide-" + index).scrollIntoView({
      behavior: "smooth"
    })
  }

  useEffect(() => {
    scrollPositionRef.current = scrollPosition
  })

  useEffect(() => {
    const el = slidesEl?.current

    const onSlide = debounce(event => {
      setSliding(false)
      const currentPosition = event.target.scrollLeft
      const previousPosition = scrollPositionRef.current
      if (currentPosition > previousPosition) {
        dispatch("next")
      } else if (currentPosition < previousPosition) {
        dispatch("previous")
      }
      setScrollPosition(currentPosition)
    }, 100)

    const handler = event => {
      setSliding(true)
      onSlide(event)
    }

    el?.focus()
    el?.addEventListener("scroll", handler)

    return () => el?.removeEventListener("scroll", handler)
  }, [slidesEl, dispatch])

  return (
    <div className="slider">
      <div tabIndex="-1" ref={slidesEl} className="slides">
        {slides.map((slide, i) => (
          <Slide key={i} data={slide} id={`slide-${i}`} sliding={sliding}>
            {/* <Controls
              index={i}
              sliding={sliding}
              handler={slideTo}
              maxIndex={slides.length - 1}
            /> */}
          </Slide>
        ))}
        <Navigation sliding={sliding} handler={slideTo}></Navigation>
      </div>
    </div>
  )
}

export default Slider
