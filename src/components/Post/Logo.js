import React from "react"

const Logo = ({ imageUrl }) => (
  <div className="logo">
    <div
      className="image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
  </div>
)

export default Logo
