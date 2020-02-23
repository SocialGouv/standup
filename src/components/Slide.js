import React from "react"
import KPIs from "./KPIs"
import Team from "./Team"
import Header from "./Header"
import styled from "styled-components"
import ReactMarkdown from "react-markdown"

const Slide = ({ post, team, selected }) => (
  <Wrapper
    key={post.team_slug}
    className={`slide${selected ? " selected" : ""}`}
  >
    <Header team={team} mood={post.mood} />
    <KPIs kpis={post.kpis} />
    <div className="content">
      <div className="left">
        <Team team={team} />
        <div className="card">
          <h3>Besoins:</h3>
          <div className="markdown-body">
            <ReactMarkdown source={post.needs} />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="card">
          <h3>Priorités:</h3>
          <div className="markdown-body">
            <ReactMarkdown source={post.priorities} />
          </div>
        </div>
        <div className="card">
          <h3>Echéances / Evénements:</h3>
          <div className="markdown-body">
            <ReactMarkdown source={post.term} />
          </div>
        </div>
      </div>
    </div>
  </Wrapper>
)

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  .content {
    flex: 1;
    display: flex;
    overflow: auto;

    .left,
    .right {
      flex: 1;
      display: flex;
      overflow: auto;
      flex-direction: column;
      border-top: 1px solid #ffffff;

      .card {
        flex: 1;
        display: flex;
        overflow: auto;
        border-radius: 4px;
        flex-direction: column;
        margin: 1rem 1rem 0 1rem;
        background-color: #ffffff;
        box-shadow: rgb(201, 211, 223) 0px 1px 4px;

        &:last-child {
          margin-bottom: 1rem;
        }

        h3 {
          padding: 0.2rem 0.5rem;
          background-color: #e3d0cc;
        }

        .markdown-body {
          flex: 1;
          padding: 1rem;
          overflow: auto;
        }
      }
    }

    .left {
      margin: 0 0 1rem 4rem;
      border-right: 1px solid #eaeaea;
    }

    .right {
      margin: 0 4rem 1rem 0;
      border-left: 1px solid #ffffff;
    }
  }
`

export default Slide
