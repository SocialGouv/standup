import React from "react"

const Missing = ({ teams }) => (
  <div className="missing">
    <ul>
      {teams &&
        teams.length &&
        teams.map((team, i) => <li key={i}>{team.name}</li>)}
    </ul>
  </div>
)

export default Missing
