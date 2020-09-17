import Navigation from "@components/Navigation"
import Slide from "@components/Slide"
import { useIndex } from "@utils/index"
import { debounce } from "lodash"
import React, { useEffect, useRef } from "react"

const Slider = () => {
  const slidesEl = useRef(null)
  const [{ slides }, dispatch] = useIndex()

  const slideTo = (index) => {
    document.querySelector("#slide-" + index).scrollIntoView({
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const el = slidesEl?.current

    const onSlide = debounce((event) => {
      dispatch({ name: "stopSliding" })
      const scrollPosition = event.target.scrollLeft
      const scrollWidth = event.target.scrollWidth
      const index = scrollPosition
        ? Math.round((scrollPosition * slides.length) / scrollWidth)
        : 0
      dispatch({ index, name: "update" })
    }, 100)

    const handler = (event) => {
      dispatch({ name: "startSliding" })
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
        <Navigation handler={slideTo} />
      </div>
    </div>
  )
}

export default Slider
