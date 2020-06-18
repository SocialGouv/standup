import React from "react"

const Members = ({ team }) => (
  <div className="members">
    {team.members.nodes.map(member => (
      <div className="member" key={member.login}>
        <div
          className="avatar"
          style={{ backgroundImage: `url(${member.avatarUrl})` }}
        ></div>
      </div>
    ))}
  </div>
)

export default Members
