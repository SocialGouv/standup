import React, { useState } from "react"
import fetch from "isomorphic-unfetch"
import Slide from "../src/components/Slide"
import Intro from "../src/components/Intro"
import KeyHandler, { KEYPRESS } from "react-key-handler"

const Page = ({ posts }) => {
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
    console.log("onKeyEvent")
    if (event.code === "Space" || event.code === "Right") {
      next()
    } else if (event.code === "Left") {
      previous()
    }
  }

  return (
    <>
      {started ? (
        <>
          <KeyHandler
            code={["Space"]}
            keyEventName={KEYPRESS}
            onKeyHandle={onKeyEvent}
          />
          <Slide post={post} />
          <a
            tabIndex="0"
            role="button"
            onClick={previous}
            onKeyPress={previous}
            className="control previous"
          >
            &#60;
          </a>
          <a
            tabIndex="0"
            role="button"
            onClick={next}
            onKeyPress={next}
            className="control next"
          >
            &#62;
          </a>
        </>
      ) : (
        <Intro started={started} onClick={() => setStarted(true)} />
      )}
    </>
  )
}

Page.getInitialProps = async ({ req }) => {
  let url = "/api/posts"

  if (req) {
    const protocol = req.headers["x-forwarded-proto"] || "http"
    url = `${protocol}://${req.headers.host}${url}`
  }

  const posts = await (await fetch(url)).json()

  return { posts }
}

export default Page
