import React from "react"
import styled from "styled-components"

const MissingTeams = ({ teams }) => (
  <Wrapper>
    <ul>
      {teams &&
        teams.length &&
        teams.map((team, i) => <li key={i}>{team.name}</li>)}
    </ul>
  </Wrapper>
)

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  color: #54677a;
  align-items: center;
  justify-content: center;

  ul {
    margin: 0 3em;
    font-size: 1.5em;
  }
`

export default MissingTeams
