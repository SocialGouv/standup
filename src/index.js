import React from "react";
import ReactDOM from "react-dom";
import KeyboardEventHandler from "react-keyboard-event-handler";
import ReactImageAppear from "react-image-appear";

import "./styles.css";
import startups from "./startups.json";

import { formatSeconds } from "./formatSeconds";

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

const StandupIntro = ({ onClick }) => (
  <div>
    <h1>STAND-UP</h1>
    <button className="start-button" onClick={onClick}>
      COMMENCER
    </button>
  </div>
);

const Slide = ({ titre, description, image, url, timeout, buttonText }) => (
  <React.Fragment>
    <h2 className="timed-slide__title">{titre}</h2>
    <h3
      className="timed-slide__subtitle"
      dangerouslySetInnerHTML={{ __html: description }}
    />
    {url && (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#0091ff",
          fontSize: "1.5em",
          textDecoration: "underline"
        }}
        onClick={e => e.stopPropagation()}
      >
        slides
      </a>
    )}
    {image && (
      <ReactImageAppear
        key={image}
        src={image}
        alt={titre}
        animation="fadeIn"
        animationDuration="0.3s"
        showLoader={false}
      />
    )}
    <Timer
      render={({ elapsed }) => <Counter seconds={elapsed} timeout={timeout} />}
    />
    {buttonText && <div className="next-slide">> {buttonText}</div>}
  </React.Fragment>
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
        <Slide {...startup} buttonText={nextStartup && nextStartup.titre} />
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
