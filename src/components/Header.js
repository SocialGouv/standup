import React from "react"
import Counter from "./Counter"
import styled from "styled-components"

const Header = ({ team, mood }) => (
  <Wrapper className="header">
    <div className="title">
      <h1>
        {mood} {team.name}
      </h1>
      <p>{team.description}</p>
    </div>
    <Counter start={0} />
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  min-height: 80px;
  background-color: #ffffff;
  box-shadow: rgb(201, 211, 223) 0px 1px 4px;

  .title {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      margin: 0;
      font-size: 1.2em;
      font-style: italic;
    }
  }
`

export default Header
