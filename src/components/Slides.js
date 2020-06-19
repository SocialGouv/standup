import React, { useState, useEffect } from "react"
import Slide from "components/Slide"

import { useIndex } from "utils/index"

const Control = ({ action }) => (
  <div
    tabIndex={0}
    role="button"
    onClick={action}
    onKeyPress={action}
    className={`control ${action.name}`}
  >
    {action.name}
  </div>
)

const Slides = ({ teams = [], data = [] }) => {
  // const [index, setIndex] = useState(0)
  console.log("Slides", teams, data)

  const [index, dispatch] = useIndex()
  console.log("SLIDES index", index)

  // const previous = () => index && setIndex(index - 1)
  const getTeam = slug => teams.find(team => slug === team.slug)
  // const getNextTeam = () => getTeam(data[index + 1]?.team_slug)
  // const next = () => index < data.length - 1 && setIndex(index + 1)

  useEffect(() => {
    window.location.hash = "#slide-" + index
    // return () => {
    //   console.log("cleanup")
    // }
  }, [index])

  return (
    <div className="slider">
      {/* <Control action={previous} /> */}
      <Control action={() => dispatch("previous")} />
      <div className="slides">
        {data.map((slide, i) => (
          <Slide
            key={i}
            data={slide}
            id={`slide-${i}`}
            // nextTeam={getNextTeam()}
            team={getTeam(slide.team_slug)}
          />
        ))}
      </div>
      {/* <Control action={next} /> */}
      <Control action={() => dispatch("next")} />
    </div>
  )
}

export default Slides
