import React from "react"
import Counter from "./Counter"
import styled from "styled-components"

const Extra = ({ data }) => (
  <Wrapper>
    <ul>
      {data.entries &&
        data.entries.length &&
        data.entries.map((entry, i) => (
          <li key={i}>
            <p dangerouslySetInnerHTML={{ __html: entry }}></p>
          </li>
        ))}
    </ul>
  </Wrapper>
)

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    margin: 0 3em;
    font-size: 1.5em;
  }
`

export default Extra
