import React from "react"

const KPIs = ({ kpis }) => (
  <div className="kpis">
    {kpis &&
      kpis.map &&
      kpis.map((kpi, i) => (
        <React.Fragment key={i}>
          {kpi.value && (
            <div className="kpi">
              <h3 className="value">{kpi.value}</h3>
              <div className="name">{kpi.name}</div>
            </div>
          )}
        </React.Fragment>
      ))}
  </div>
)

export default KPIs
