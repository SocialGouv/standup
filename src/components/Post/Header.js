import React from "react"

import Description from "./Description"
import Logo from "./Logo"
import Members from "./Members"

const Header = ({ team }) => (
  <div className="header">
    <Logo imageUrl={team.avatarUrl} />
    <div className="details">
      <Members members={team.members} />
      <Description text={team.description} />
    </div>
  </div>
)

export default Header
