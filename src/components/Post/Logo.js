import React from "react"

const Logo = ({ imageUrl }) => (
  <div className="logo">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
  </div>
)

export default Logo
