import React from "react";
import ReactImageAppear from "react-image-appear";
import { Card, CardBody, Row, Col } from "reactstrap";

import Timer from "./Timer";
import Counter from "./Counter";
import BottomBar from "./BottomBar";

const Slide = ({
  titre,
  description,
  image,
  url,
  kpis,
  html,
  timeout,
  buttonText,
  entries
}) => (
  <React.Fragment>
    <Row>
      <Col>
        <h1 className="display-4" style={{ lineHeight: 2 }}>
          {titre}
        </h1>
      </Col>
      <Col className="text-right" lg={3}>
        <Timer
          render={({ elapsed }) => (
            <Counter seconds={elapsed} timeout={timeout} />
          )}
        />
      </Col>
    </Row>
    <p className="h3" dangerouslySetInnerHTML={{ __html: description }}></p>
    <hr style={{ margin: "20px 0" }} />
    <Row style={{ justifyContent: "center" }}>
      {kpis &&
        Object.keys(kpis).map(k => (
          <Col xs={4} className="text-center">
            <Card className="text-center">
              <div className="display-4 ">{kpis[k]}</div>
              <CardBody style={{ padding: 10 }}>
                <strong>{k}</strong>
              </CardBody>
            </Card>
          </Col>
        ))}
    </Row>
    {image && (
      <Row>
        <Col>
          <Card
            className="image-appear"
            style={{ marginTop: 20, display: "block" }}
          >
            <ReactImageAppear
              key={image}
              src={image}
              alt={titre}
              animation="fadeIn"
              animationDuration="0.3s"
              showLoader={false}
              placeholder
            />
          </Card>
        </Col>
      </Row>
    )}
    {entries && (
      <ul className="h3" style={{ marginTop: 30 }}>
        {entries.map(e => (
          <li key={e} style={{ margin: "30px 0" }}>
            {e}
          </li>
        ))}
      </ul>
    )}
    {html && (
      <p
        className="h3"
        style={{ margin: "20px 0" }}
        dangerouslySetInnerHTML={{ __html: html }}
      ></p>
    )}
    {!image && !html && !entries && (
      <div className="h1 text-center" style={{ color: "#999", marginTop: 250 }}>
        En construction
      </div>
    )}
    {buttonText && <BottomBar buttonText={buttonText} />}
  </React.Fragment>
);

export default Slide;
