import fetch from "isomorphic-unfetch"
import React, { useState, useRef, useEffect } from "react"

import Intro from "@components/Intro"
import Header from "@components/Header"
import Slider from "@components/Slider"
import { IndexProvider } from "@utils/index"
import { SlidesProvider } from "@utils/slides"

const Page = ({ teams, posts }) => {
  const pageRef = useRef()
  const [started, setStarted] = useState(false)
  const onKeyDown = ({ key }) => !started && key === " " && setStarted(true)

  useEffect(() => pageRef?.current?.focus(), [])

  return (
    <>
      {started ? (
        <SlidesProvider teams={teams} posts={posts}>
          <IndexProvider>
            <Header />
            <Slider />
          </IndexProvider>
        </SlidesProvider>
      ) : (
        <div tabIndex={0} role="button" ref={pageRef} onKeyDown={onKeyDown}>
          <Intro started={started} onClick={() => setStarted(true)} />
        </div>
      )}
    </>
  )
}

export async function getServerSideProps({ req }) {
  const baseUrl = `http://localhost:${req.socket.localPort}`
  const teams = await (await fetch(`${baseUrl}/api/teams`)).json()
  console.log("INDEX teams", teams)
  const posts = await (await fetch(`${baseUrl}/api/posts`)).json()
  console.log("INDEX posts", posts)
  return { props: { teams, posts } }
}

export default Page
