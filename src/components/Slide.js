import React from "react";
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
  <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
    <Row style={{ flex: "0 0 auto" }}>
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
    <p
      style={{
        borderBottom: "1px solid #efefef",
        flex: "0 0 auto",
        marginBottom: 20,
        paddingBottom: 20
      }}
      className="h3"
      dangerouslySetInnerHTML={{ __html: description }}
    ></p>
    {kpis && (
      <Row style={{ justifyContent: "center", flex: "0 0 auto" }}>
        {Object.keys(kpis).map(k => (
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
    )}
    {image && (
      <Row style={{ flex: "1 0 auto" }}>
        <Col
          className="image-appear"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            display: "block",
            margin: 50
          }}
        ></Col>
      </Row>
    )}
    {entries && (
      <ul className="h3" style={{ marginTop: 30, flex: "1 0 auto" }}>
        {entries.map(e => (
          <li
            key={e}
            style={{ margin: "30px 0" }}
            dangerouslySetInnerHTML={{ __html: e }}
          ></li>
        ))}
      </ul>
    )}
    {html && (
      <p
        className="h3"
        style={{ margin: "20px 0", flex: "1 0 auto" }}
        dangerouslySetInnerHTML={{ __html: html }}
      ></p>
    )}
    {!image && !html && !entries && (
      <div
        className="h1 text-center"
        style={{ flex: "1 0 auto", color: "#999", marginTop: 250 }}
      >
        En construction
      </div>
    )}
    {buttonText && (
      <BottomBar style={{ flex: "0 0 auto" }} buttonText={buttonText} />
    )}
  </div>
);

export default Slide;
