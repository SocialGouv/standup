import Header from "@components/Header"
import Intro from "@components/Intro"
import Slider from "@components/Slider"
import { IndexProvider } from "@utils/index"
import { SlidesProvider } from "@utils/slides"
import fetch from "isomorphic-unfetch"
import React, { useState } from "react"

const Page = ({ teams, posts }) => {
  const [started, setStarted] = useState(false)
  const onKeyDown = ({ key }) => !started && key === " " && setStarted(true)

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
        <Intro
          started={started}
          onKeyDown={onKeyDown}
          onClick={() => setStarted(true)}
        />
      )}
    </>
  )
}

export async function getServerSideProps({ req }) {
  const baseUrl = `http://localhost:${req.socket.localPort}`
  const teams = await (await fetch(`${baseUrl}/api/teams`)).json()
  const posts = await (await fetch(`${baseUrl}/api/posts`)).json()
  return { props: { posts, teams } }
}

export default Page
