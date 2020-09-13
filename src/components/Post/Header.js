import Weather from "@components/Weather"
import React from "react"

import Description from "./Description"
import Logo from "./Logo"
import Members from "./Members"

const Header = ({ data }) => {
  const { team, mood } = data

  return (
    <div className="header">
      <Logo imageUrl={team.avatarUrl} />
      <div className="details">
        <Members members={team.members} />
        <Description text={team.description} />
      </div>
      <Weather status={mood} />
    </div>
  )
}

export default Header
