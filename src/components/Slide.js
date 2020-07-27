import React from "react"
import styled from "styled-components"

import Extra from "./Extra"
import Footer from "./Footer"
import MissingTeams from "./MissingTeams"
import Post from "./Post"

const Slide = ({ data, team, nextTeam, selected }) => (
  <Wrapper
    key={data.team_slug}
    className={`slide${selected ? " selected" : ""}`}
  >
    {team ? (
      <Post data={data} team={team} />
    ) : data.length && data[0].slug ? (
      <MissingTeams data={data} />
    ) : (
      <Extra data={data} />
    )}
    {nextTeam && <Footer team={nextTeam} />}
  </Wrapper>
)

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export default Slide
