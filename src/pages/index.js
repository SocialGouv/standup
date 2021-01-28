// import Header from "@components/Header"
import Intro from "@components/Intro"
// import Slider from "@components/Slider"
import Main from "@components/Main"
import React, { useState } from "react"

const Page = () => {
  const [started, setStarted] = useState(false)
  const onKeyDown = ({ key }) => !started && key === " " && setStarted(true)

  return (
    <>
      {started ? (
        <Main />
      ) : (
        <Intro
          started={started}
          onKeyDown={onKeyDown}
          onClick={() => setStarted(true)}
        />
      )}
    </>
  )
}

export default Page
