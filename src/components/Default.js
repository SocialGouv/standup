import React from "react"
import styled from "styled-components"

const Default = ({ data }) => (
  <Wrapper>
    <h1>{data.title}</h1>
    <div className="content">
      <ul>
        {data.entries &&
          data.entries.length &&
          data.entries.map((entry, i) => (
            <li key={i}>
              <p dangerouslySetInnerHTML={{ __html: entry }}></p>
            </li>
          ))}
      </ul>
    </div>
  </Wrapper>
)

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h1 {
    display: flex;
    padding: 1rem;
    background-color: #ffffff;
    box-shadow: rgb(201, 211, 223) 0px 1px 4px;
  }

  .content {
    flex: 1;
    color: #54677a;

    ul {
      margin: 3em;
      font-size: 2em;
    }
  }
`

export default Default
