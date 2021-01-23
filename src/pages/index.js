import Header from "@components/Header"
import Intro from "@components/Intro"
import Slider from "@components/Slider"
import Posts from "@lib/posts"
import Teams from "@lib/teams"
import { IndexProvider } from "@utils/index"
import { SlidesProvider } from "@utils/slides"
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

export async function getServerSideProps() {
  const teams = await Teams()
  const posts = await Posts()
  return { props: { posts, teams } }
}

export default Page
