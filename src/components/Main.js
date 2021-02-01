import Header from "@components/Header"
import Slider from "@components/Slider"
import Spinner from "@components/Spinner"
import useSlides from "@utils/slides"
import React from "react"

const Main = () => {
  const { slides } = useSlides()
  return (
    <>
      <Header />
      {slides ? <Slider /> : <Spinner />}
    </>
  )
}

export default Main
