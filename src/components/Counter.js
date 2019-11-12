import React from "react";

import { formatSeconds } from "./formatSeconds";

const Counter = ({ seconds, timeout = 4 }) => (
  <div
    className="display-1"
    style={{ color: (seconds > timeout && "#b00") || "#999" }}
  >
    {formatSeconds(seconds)}
  </div>
);

export default Counter;
