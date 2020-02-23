import React from "react"
import styled from "styled-components"

const Team = ({ team }) => (
  <Wrapper>
    <div
      className="image"
      style={{ backgroundImage: `url(${team.avatarUrl})` }}
    ></div>
    <div className="members">
      {team.members.nodes.map(member => (
        <div className="member" key={member.login}>
          <div
            className="avatar"
            style={{ backgroundImage: `url(${member.avatarUrl})` }}
          ></div>
          <div className="name">{member.name || member.login}</div>
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
    box-shadow: rgb(201, 211, 223) 0px 1px 4px;
  }

  .members {
    flex: 1;
    margin: 4px;
    display: flex;
    overflow: auto;
    margin-left: 1rem;
    flex-direction: column;

    .member {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;

      &:last-child {
        margin-bottom: 0;
      }

      .avatar {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }

      .name {
        margin-left: 0.5rem;
      }
    }
  }
`

export default Team
