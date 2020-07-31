import { debounce } from "lodash"
import React, { useState, useRef, useEffect } from "react"

import Slide from "components/Slide"
import { useIndex } from "utils/index"
import Navigation from "components/Navigation"

const Slider = () => {
  const slidesEl = useRef(null)
  const scrollPositionRef = useRef()
  const [{ slides }, dispatch] = useIndex()
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
      dispatch("stopSliding")
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
      dispatch("startSliding")
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
          <Slide key={i} data={slide} id={`slide-${i}`} />
        ))}
        <Navigation handler={slideTo}></Navigation>
      </div>
    </div>
  )
}

export default Slider
