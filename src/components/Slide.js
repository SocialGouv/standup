import React from "react"
import Post from "./Post"
import Extra from "./Extra"
// import Footer from "./Footer"
import styled from "styled-components"
import MissingTeams from "./MissingTeams"

const Slide = ({ id, data, team, nextTeam, selected }) => (
  <Wrapper
    id={id}
    className="slide"
    key={data.team_slug}
    // className={`slide${selected ? " selected" : ""}`}
  >
    {team ? (
      <Post data={data} team={team} />
    ) : data.length && data[0].slug ? (
      <MissingTeams data={data} />
    ) : (
      <Extra data={data} />
    )}
    {/* {nextTeam && <Footer team={nextTeam} />} */}
  </Wrapper>
)

const Wrapper = styled.div`
  flexx: 1;
  displayx: flex;
  flex-directionx: column;
`

export default Slide
