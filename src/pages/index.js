import React, { useState } from "react"

import Intro from "@/components/Intro"
import Main from "@/components/Main"

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
