import Header from "@components/Header"
import Navigation from "@components/Navigation"
import Slide from "@components/Slide"
import useIndex from "@utils/index"
import useSlides from "@utils/slides"
import { debounce } from "lodash"
import React, { useEffect, useRef } from "react"

const Slider = () => {
  const slidesEl = useRef(null)
  const [, setIndex] = useIndex()
  const { slides } = useSlides()
  const { length } = slides

  useEffect(() => setIndex(0), [setIndex])

  useEffect(() => {
    const el = slidesEl?.current

    const onSlide = debounce((event) => {
      const scrollWidth = event.target.scrollWidth
      const scrollPosition = event.target.scrollLeft
      const index = scrollPosition
        ? Math.round((scrollPosition * length) / scrollWidth)
        : 0
      setIndex(index)
    }, 100)

    el?.focus()
    el?.addEventListener("scroll", onSlide)

    return () => el?.removeEventListener("scroll", onSlide)
  }, [slidesEl, setIndex, length])

  return (
    <>
      {slides ? (
        <>
          <Header />
          <div className="slider">
            <div tabIndex="-1" ref={slidesEl} className="slides">
              {slides.map((slide, i) => (
                <Slide key={i} data={slide} id={`slide-${i}`} />
              ))}
              <Navigation />
            </div>
          </div>
        </>
      ) : (
        <div>Loading!!!</div>
      )}
    </>
  )
}

export default Slider
