import Slider from "@components/Slider"
import useSlides from "@utils/slides"
import React from "react"

const Main = () => {
  const { slides } = useSlides()
  return <>{slides ? <Slider /> : <div>Loading...</div>}</>
}

export default Main
