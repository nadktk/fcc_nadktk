const Break = props => {
  return (
    <div className="inc-dec">
      <div id="break-label">
        Break length:{" "}
        <span id="break-length" className="num">
          {props.length}
        </span>{" "}
        minutes
      </div>
      <button
        id="break-decrement"
        className="change"
        onClick={() => {
          props.changeTime("-", "Break");
        }}
      >
        -
      </button>
      <button
        id="break-increment"
        className="change"
        onClick={() => {
          props.changeTime("+", "Break");
        }}
      >
        +
      </button>
    </div>
  );
};

const Session = props => {
  return (
    <div className="inc-dec">
      <div id="session-label">
        Session length:{" "}
        <span id="session-length" className="num">
          {props.length}
        </span>{" "}
        minutes
      </div>
      <button
        className="change"
        id="session-decrement"
        onClick={() => {
          props.changeTime("-", "Session");
        }}
      >
        -
      </button>
      <button
        className="change"
        id="session-increment"
        onClick={() => {
          props.changeTime("+", "Session");
        }}
      >
        +
      </button>
    </div>
  );
};

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
      timer: 1500000,
      running: false,
      phase: "Session"
    };
  }

  changeTime = (sign, stateToUpdate) => {
    if (
      (sign === "-" && this.state[stateToUpdate.toLowerCase()] === 1) ||
      (sign === "+" && this.state[stateToUpdate.toLowerCase()] === 60) ||
      this.state.running
    )
      return;
    let value = (this.state[stateToUpdate.toLowerCase()] +=
        sign === "+" ? 1 : -1),
      timerValue = value * 60000;
    let newState = {
      [stateToUpdate.toLowerCase]: value
    };
    if (this.state.phase === stateToUpdate) newState.timer = timerValue;
    this.setState(newState);
  };

  currTime = () => {
    let min = Math.floor(this.state.timer / 60000);
    let sec = Math.floor(this.state.timer % 60000) / 1000;
    return (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
  };

  run = () => {
    if (this.state.running) {
      clearInterval(this.countdown);
      this.setState({ running: false });
      return;
    }
    clearInterval(this.countdown);
    this.countdown = setInterval(this.timerFunc, 1000);
    this.setState({
      running: true
    });
  };

  timerFunc = () => {
    if (this.state.timer === 0 && this.state.phase === "Session") {
      this.soundPlay();
      this.setState({
        phase: "Break",
        timer: this.state.break * 60000
      });
      return;
    }
    if (this.state.timer === 0 && this.state.phase === "Break") {
      this.soundPlay();
      this.setState({
        phase: "Session",
        timer: this.state.session * 60000
      });
      [];
      return;
    }
    this.setState({ timer: this.state.timer - 1000 });
  };

  reset = () => {
    this.soundStop();
    clearInterval(this.countdown);
    this.setState({
      break: 5,
      session: 25,
      running: false,
      timer: 1500000,
      phase: "Session"
    });
  };

  soundPlay = () => {
    let sound = document.getElementById("beep");
    sound.currentTime = 0;
    sound.play();
  };

  soundStop = () => {
    let sound = document.getElementById("beep");
    sound.pause();
    sound.currentTime = 0;
  };

  render() {
    console.log(this.state.running);
    return (
      <div className="container">
        <Session length={this.state.session} changeTime={this.changeTime} />

        <Break length={this.state.break} changeTime={this.changeTime} />

        <div id="timer-label">{this.state.phase}</div>

        <div className="screen" id="time-left">
          {this.currTime()}
        </div>

        <button id="start_stop" onClick={this.run}>
          {this.state.running ? "Pause" : "Start"}
        </button>

        <button id="reset" onClick={this.reset}>
          Reset
        </button>

        <audio
          src="https://raw.githubusercontent.com/nadktk/fcc_nadktk/master/pomodoro/audio/beep.mp3"
          id="beep"
          preload="true"
        />
      </div>
    );
  }
}

ReactDOM.render(<Pomodoro />, document.getElementById("app"));
