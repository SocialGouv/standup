import React from "react"

import Post from "@components/Post"
import Extra from "@components/Extra"
import { useIndex } from "@utils/index"
import Missing from "@components/Missing"

const Slide = ({ id, data }) => {
  const [{ isSliding }] = useIndex()

  return (
    <div id={id} className="slide" key={data.team_slug}>
      <h1 className={`title ${isSliding ? "hidden" : ""}`}>
        {data.team && data.mood} {data.title}
      </h1>

      <div className="content">
        {data.team ? (
          <Post data={data} />
        ) : data.teams ? (
          <Missing teams={data.teams} />
        ) : (
          <Extra data={data} />
        )}
      </div>
    </div>
  )
}

export default Slide
