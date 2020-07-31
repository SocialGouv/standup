import React from "react"
import Post from "./Post"
import Extra from "./Extra"
import MissingTeams from "./MissingTeams"

const Slide = ({ id, data, sliding, children }) => {
  return (
    <div id={id} className="slide" key={data.team_slug}>
      <h1 className={`title ${sliding ? "hidden" : ""}`}>
        {data.team && data.mood} {data.title}
      </h1>

      <div className="content">
        {data.team ? (
          <Post data={data} />
        ) : data.teams ? (
          <MissingTeams teams={data.teams} />
        ) : (
          <Extra data={data} />
        )}
      </div>
      {children}
    </div>
  )
}

export default Slide
