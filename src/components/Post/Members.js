import React from "react"

const Members = ({ members }) => (
  <div className="members">
    {members.nodes.map((member) => (
      <div className="member" key={member.login}>
        <div
          className="avatar"
          style={{ backgroundImage: `url(${member.avatarUrl})` }}
        />
      </div>
    ))}
  </div>
)

export default Members
