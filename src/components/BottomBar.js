import React from "react";
import { Button } from "reactstrap";

const BottomBar = ({ style, buttonText, onClick }) => (
  <div class="fixed-bottom text-center" style={style}>
    <Button
      size="lg"
      outline
      color="primary"
      onClick={onClick}
      style={{ margin: "20px auto", minWidth: 300, fontSize: "2em" }}
    >
      > {buttonText}
    </Button>
  </div>
);

export default BottomBar;
