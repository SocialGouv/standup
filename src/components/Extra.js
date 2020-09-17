import React from "react"

const Extra = ({ data }) => (
  <div className="extra">
    <ul>
      {data.entries &&
        data.entries.length &&
        data.entries.map((entry, i) => (
          <li key={i}>
            <p dangerouslySetInnerHTML={{ __html: entry }} />
          </li>
        ))}
    </ul>
  </div>
)

export default Extra
