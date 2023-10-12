import React from "react"
import ReactMarkdown from "react-markdown"

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
      {data.markdown && <ReactMarkdown>{data.markdown}</ReactMarkdown>}
    </ul>
  </div>
)

export default Extra
