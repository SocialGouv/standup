import Extra from "@components/Extra"
import Missing from "@components/Missing"
import Post from "@components/Post"
import Weather from "@components/Weather"
import React from "react"

const Slide = ({ id, data }) => (
  <div id={id} className="slide" key={data.team_slug}>
    <h1 className="title">
      <Weather status={data.mood} />
      {data.team?.name || data.title}
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

export default Slide
