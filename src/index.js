import React from "react";
import ReactDOM from "react-dom";
import KeyboardEventHandler from "react-keyboard-event-handler";

import "./styles.css";
import startups from "./startups.json";

const pad = num => (num < 10 ? "0" + num : num);

const formatSeconds = seconds => {
  let minutes = 0,
    secs = 0;
  if (seconds > 60) {
    minutes = Math.floor(seconds / 60);
    secs = seconds - minutes * 60;
  } else {
    secs = seconds;
  }
  return `${pad(minutes)}:${pad(secs)}`;
};

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
        parseInt((new Date().getTime() - this.state.start.getTime()) / 1000)) ||
      0;
    return this.props.render({
      elapsed
    });
  }
}

const StandupIntro = ({ onClick }) => (
  <div>
    <h1>STAND-UP</h1>
    <a href="#" className="start-button" onClick={onClick}>
      COMMENCER
    </a>
  </div>
);

class Standup extends React.Component {
  state = {
    index: -1
  };
  next = () => {
    const nextIndex = Math.min(
      this.props.startups.length - 1,
      this.state.index + 1
    );
    if (nextIndex !== this.state.index) {
      this.setState(curState => ({
        index: Math.min(this.props.startups.length - 1, curState.index + 1)
      }));
    }
  };
  prev = () => {
    const prevIndex = Math.max(0, this.state.index - 1);
    if (prevIndex !== this.state.index) {
      this.setState(curState => ({
        index: Math.max(0, curState.index - 1)
      }));
    }
  };
  onKeyEvent = key => {
    console.log(key);
    if (key === "left") {
      this.prev();
    } else if (key === "right") {
      this.next();
    } else if (key === "space") {
      this.next();
    }
  };
  render() {
    if (this.state.index === -1) {
      return <StandupIntro onClick={this.next} />;
    }
    const startup = this.props.startups[this.state.index];
    const nextStartup =
      this.state.index < this.props.startups.length - 1 &&
      this.props.startups[this.state.index + 1];
    return (
      <div className="container" onClick={this.next}>
        <KeyboardEventHandler
          handleKeys={["left", "right", "space"]}
          onKeyEvent={this.onKeyEvent}
        />

        <h2 className="timed-slide__title">{startup.titre}</h2>
        <h3 className="timed-slide__subtitle">{startup.description}</h3>
        <Timer
          render={({ elapsed }) => (
            <Counter seconds={elapsed} timeout={startup.timeout} />
          )}
        />
        {nextStartup && (
          <div className="next-slide">Suivant : {nextStartup.titre}</div>
        )}
      </div>
    );
  }
}
const Counter = ({ seconds, timeout = 4 }) => (
  <div className={`elapsed-time ${(seconds > timeout && "ending-soon") || ""}`}>
    {formatSeconds(seconds)}
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Standup startups={startups} />, rootElement);
