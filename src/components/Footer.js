import React from "react"
import styled from "styled-components"

const Footer = ({ team }) =>
  console.log("TEAM", team) || (
    <Wrapper className="footer">
      <div className="team">{team.name}</div>
    </Wrapper>
  )

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  background-color: #ffffff;
  box-shadow: rgb(201, 211, 223) 0px 1px 4px;

  .team {
    position: relative;
    padding-left: 20px;

    &::before {
      left: 0;
      content: "\\279C";
      position: absolute;
    }
  }
`

export default Footer
