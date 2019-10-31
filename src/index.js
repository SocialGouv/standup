import React from "react";
import ReactDOM from "react-dom";
import KeyboardEventHandler from "react-keyboard-event-handler";

import startups from "./startups.yml";
import Slide from "./components/Slide";
import BottomBar from "./components/BottomBar";

import "./styles.css";

const StandupIntro = ({ onClick }) => (
  <div className="text-center">
    <h1
      className="text-intro"
      data-h1="Stand up"
      style={{ marginTop: "30%", fontSize: "10em" }}
    >
      Stand up
    </h1>
    <h3 style={{ color: "#999" }}>standup.fabrique.social.gouv.fr</h3>
    <BottomBar style={{}} buttonText="commencer" />
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
    const prevIndex = Math.max(-1, this.state.index - 1);
    if (prevIndex !== this.state.index) {
      this.setState(curState => ({
        index: Math.max(-1, curState.index - 1)
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
    const startup =
      this.state.index > -1 && this.props.startups[this.state.index];
    const nextStartup =
      this.state.index > -1 &&
      this.state.index < this.props.startups.length - 1 &&
      this.props.startups[this.state.index + 1];
    return (
      <div className="container" onClick={this.next}>
        <KeyboardEventHandler
          handleKeys={["left", "right", "space"]}
          onKeyEvent={this.onKeyEvent}
        />
        {this.state.index === -1 ? (
          <StandupIntro onClick={this.next} />
        ) : (
          <Slide {...startup} buttonText={nextStartup && nextStartup.titre} />
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Standup startups={startups} />, rootElement);
