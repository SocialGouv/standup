import React from "react"
import styled from "styled-components"

const KPIs = ({ kpis }) => (
  <Wrapper className="kpis">
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
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  margin: 0 4rem;
  padding: 0.5rem 0;
  justify-content: center;
  border-bottom: 1px solid #eaeaea;

  .kpi {
    flex: 1;
    text-align: center;
    padding: 0.5rem;
    border-left: 1px solid #ffffff;
    border-right: 1px solid #eaeaea;

    &:first-child {
      border-left: none;
    }

    &:last-child {
      border-right: none;
    }

    .value {
      font-size: 2rem;
      font-weight: bold;
      font-family: "Evolventa";
    }
  }
`

export default KPIs
