import fetch from "isomorphic-unfetch"
import styled from "styled-components"
import React, { useState, useRef, useEffect } from "react"

import extraSlides from "../slides.yml"
import Slide from "../components/Slide"
import Intro from "../components/Intro"
import Control from "../components/Control"

const Page = ({ teams, posts }) => {
  const getTeam = slug => teams.find(team => slug === team.slug)
  const getMissingTeams = () => teams.filter(team => getPosts(team))
  const filterPosts = posts => posts.filter(post => getTeam(post.team_slug))
  const getPosts = team => !posts.find(post => post.team_slug === team.slug)

  const slides = [...filterPosts(posts), getMissingTeams(), ...extraSlides]

  const pageRef = useRef()
  const [index, setIndex] = useState(0)
  const [slide, setSlide] = useState(slides[0])
  const [started, setStarted] = useState(false)

  useEffect(() => pageRef.current.focus(), [pageRef])

  const previous = () => {
    if (index - 1 < 0) return
    setIndex(index - 1)
    setSlide(slides[index - 1])
  }

  const next = () => {
    if (index + 1 > slides.length - 1) return
    setIndex(index + 1)
    setSlide(slides[index + 1])
  }

  const start = () => {
    setStarted(true)
    pageRef.current.focus()
  }

  const onKeyDown = ({ key }) => {
    if (!started && key === " ") {
      start()
    } else if (started && (key === " " || key === "ArrowRight")) {
      next()
    } else if (started && key === "ArrowLeft") {
      previous()
    }
  }

  const getNextTeam = () => getTeam(slides[index + 1]?.team_slug)

  return (
    <div
      tabIndex={0}
      role="button"
      ref={pageRef}
      className="slides"
      onKeyDown={onKeyDown}
    >
      {started ? (
        slides && slides.length ? (
          <>
            <Slide
              data={slide}
              nextTeam={getNextTeam()}
              team={getTeam(slide.team_slug)}
            />
            {index > 0 && <Control type="previous" handler={previous} />}
            {index < slides.length - 1 && (
              <Control type="next" handler={next} />
            )}
          </>
        ) : (
          <NoDataWrapper className="card">
            <h1>Pas de données !</h1>
          </NoDataWrapper>
        )
      ) : (
        <>
          <Intro started={started} onClick={start} />
        </>
      )}
    </div>
  )
}

export async function getServerSideProps({ req }) {
  const baseUrl = `http://localhost:${req.socket.localPort}`

  const teams = await (await fetch(`${baseUrl}/api/teams`)).json()
  const posts = await (await fetch(`${baseUrl}/api/posts`)).json()

  return { props: { teams, posts } }
}

const NoDataWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Page
