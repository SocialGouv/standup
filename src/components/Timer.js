import React from "react";

class Timer extends React.Component {
  state = {
    start: null
  };
  componentDidMount() {
    this.setState({
      start: new Date()
    });
    this.interval = setInterval(this.tick, 1000);
  }
  tick = () => {
    this.forceUpdate();
  };
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentWillReceiveProps() {
    this.setState({
      start: new Date()
    });
  }
  render() {
    const elapsed =
      (this.state.start &&
        parseInt(
          (new Date().getTime() - this.state.start.getTime()) / 1000,
          10
        )) ||
      0;
    return this.props.render({
      elapsed
    });
  }
}

export default Timer;
