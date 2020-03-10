import React from "react"
import styled from "styled-components"

const MissingTeams = ({ data }) => (
  <Wrapper>
    <div className="header">
      <h1>Les Absents</h1>
    </div>
    <div className="content">
      <ul>
        {data &&
          data.length &&
          data.map((team, i) => <li key={i}>{team.name}</li>)}
      </ul>
    </div>
  </Wrapper>
)

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    padding: 1rem;
    min-height: 80px;
    align-items: center;
    background-color: #ffffff;
    box-shadow: rgb(201, 211, 223) 0px 1px 4px;

    h1 {
      flex: 1;
    }
  }

  .content {
    flex: 1;
    display: flex;
    color: #54677a;
    align-items: center;
    justify-content: center;

    ul {
      margin: 0 3em;
      font-size: 1.5em;
    }
  }
`

export default MissingTeams
