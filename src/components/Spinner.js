import React from "react"
import RingLoader from "react-spinners/RingLoader"

const Spinner = () => (
  <div className="spinner">
    <RingLoader color={"#dfe2e5"} loading={true} size={300} />
  </div>
)

export default Spinner
