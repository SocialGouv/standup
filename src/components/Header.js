import React from "react"
import Counter from "./Counter"

const Header = ({ team }) => (
  <div className="header">
    <div className="title">
      <h1>{team.name}</h1>
      <h2>{team.description}</h2>
    </div>
    <Counter start={0} />
  </div>
)

export default Header
