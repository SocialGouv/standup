import React from "react"
import Post from "./Post"
import Footer from "./Footer"
import Default from "./Default"
import styled from "styled-components"

const Slide = ({ data, team, nextTeam, selected }) => (
  <Wrapper
    key={data.team_slug}
    className={`slide${selected ? " selected" : ""}`}
  >
    {team ? <Post data={data} team={team} /> : <Default data={data} />}
    {nextTeam && <Footer team={nextTeam} />}
  </Wrapper>
)

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export default Slide
