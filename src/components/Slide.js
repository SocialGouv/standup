import React from "react"
import KPIs from "./KPIs"
import Header from "./Header"

const Slide = ({ post, selected }) => {
  const {
    content: {
      team: team,
      kpis: kpis,
      term: term,
      needs: needs,
      priorities: priorities
    }
  } = post

  return (
    <div className={`slide${selected ? " selected" : ""}`} key={team.slug}>
      <Header team={team} />
      <div className="content">
        <div className="left">
          <KPIs kpis={kpis} />
          <div
            className="image"
            style={{ backgroundImage: `url(${team.avatarUrl})` }}
          ></div>
        </div>
        <div className="right">
          <h3>Priorités:</h3>
          <p>{priorities}</p>
          <h3>Echéances / Evénements:</h3>
          <p>{term}</p>
          <h3>Besoins:</h3>
          <p>{needs}</p>
        </div>
      </div>
    </div>
  )
}

export default Slide
