import React, { useState } from "react"
import fetch from "isomorphic-unfetch"
import styled from "styled-components"
import Slide from "../src/components/Slide"
import Intro from "../src/components/Intro"
import Control from "../src/components/Control"
import KeyHandler, { KEYPRESS } from "react-key-handler"

const Page = ({ teams, posts }) => {
  const [index, setIndex] = useState(0)
  const [post, setPost] = useState(posts[0])
  const [started, setStarted] = useState(false)

  const previous = () => {
    if (index - 1 < 0) return
    setIndex(index - 1)
    setPost(posts[index - 1])
  }

  const next = () => {
    if (index + 1 > posts.length - 1) return
    setIndex(index + 1)
    setPost(posts[index + 1])
  }

  const onKeyEvent = event => {
    event.preventDefault()
    if (event.code === "Space" || event.code === "Right") {
      next()
    } else if (event.code === "Left") {
      previous()
    }
  }

  const getTeam = slug => teams.find(team => slug === team.slug)

  return (
    <>
      {started ? (
        posts && posts.length ? (
          <>
            <KeyHandler
              code={["Space"]}
              keyEventName={KEYPRESS}
              onKeyHandle={onKeyEvent}
            />
            <Slide post={post} team={getTeam(post.team_slug)} />
            {index > 0 && <Control type="previous" handler={previous} />}
            {index < posts.length - 1 && <Control type="next" handler={next} />}
          </>
        ) : (
          <NoDataWrapper className="card">
            <h1>Pas de données !</h1>
          </NoDataWrapper>
        )
      ) : (
        <>
          <KeyHandler
            code={["Space"]}
            keyEventName={KEYPRESS}
            onKeyHandle={() => setStarted(true)}
          />
          <Intro started={started} onClick={() => setStarted(true)} />
        </>
      )}
    </>
  )
}

Page.getInitialProps = async ({ req }) => {
  let teamsUrl = "/api/teams"
  let postsUrl = "/api/posts"

  if (req) {
    teamsUrl = `http://localhost:${req.socket.localPort}${teamsUrl}`
    postsUrl = `http://localhost:${req.socket.localPort}${postsUrl}`
  }

  const teams = await (await fetch(teamsUrl)).json()
  const posts = await (await fetch(postsUrl)).json()

  return { teams, posts }
}

const NoDataWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Page
