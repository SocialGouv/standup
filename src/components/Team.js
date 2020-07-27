import React from "react"
import styled from "styled-components"

const Team = ({ team }) => (
  <Wrapper>
    <div
      className="image"
      style={{ backgroundImage: `url(${team.avatarUrl})` }}
    />
    <div className="members">
      {team.members.nodes.map(member => (
        <div className="member" key={member.login}>
          <div
            className="avatar"
            style={{ backgroundImage: `url(${member.avatarUrl})` }}
          />
        </div>
      ))}
    </div>
  </Wrapper>
)

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  overflow: auto;
  margin: 1rem 1rem 0 1rem;

  .image {
    flex: 1;
    margin: 4px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    box-shadow: 1px 1px 6px -6px rgba(0, 0, 0, 1);
  }

  .members {
    flex: 1;
    display: grid;
    grid-gap: 0.5rem;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(4, 1fr);

    .member {
      display: flex;
      justify-content: center;

      .avatar {
        width: 3rem;
        height: 3rem;
        min-width: 3rem;
        min-height: 3rem;
        border-radius: 50%;
        background-size: cover;
        background-color: #ffffff;
        background-repeat: no-repeat;
        background-position: center center;
      }
    }
  }
`

export default Team
