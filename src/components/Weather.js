import React from "react"
import { Cloud, CloudLightning, Sun } from "react-feather"

const Weather = ({ status }) => {
  const size = 40
  const mapping = {
    average: <Cloud className="icon-cloud" size={size} />,
    bad: <CloudLightning className="icon-rain" size={size} />,
    good: <Sun className="icon-sun" size={size} />
  }

  return <div className="weather">{mapping[status]}</div>
}

export default Weather
