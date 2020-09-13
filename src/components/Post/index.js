import React from "react"
import ReactMarkdown from "react-markdown"

import Header from "./Header"
import KPIs from "./KPIs"

const Post = ({ data }) => (
  <div className="post">
    <Header team={data.team} />
    <KPIs kpis={data.kpis} />
    <div className="cards">
      {data.priorities && (
        <div className="card">
          <h3>Priorités:</h3>
          <div className="markdown-body">
            <ReactMarkdown source={data.priorities} />
          </div>
        </div>
      )}
      {data.term && (
        <div className="card">
          <h3>Echéances / Evénements:</h3>
          <div className="markdown-body">
            <ReactMarkdown source={data.term} />
          </div>
        </div>
      )}
      {data.needs && (
        <div className="card">
          <h3>Besoins:</h3>
          <div className="markdown-body">
            <ReactMarkdown source={data.needs} />
          </div>
        </div>
      )}
    </div>
  </div>
)

export default Post
