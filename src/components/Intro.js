import React from "react"

const Intro = ({ started, onClick }) => (
  <div className={`intro${started ? " hidden" : ""}`}>
    <h1 data-h1="Stand up">Stand up</h1>
    <h2>standup.fabrique.social.gouv.fr</h2>
    <button onClick={onClick}>Commencer</button>
  </div>
)

export default Intro
