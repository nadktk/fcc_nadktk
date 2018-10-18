const displayBackground = {
  piano: { background: "linear-gradient(165deg, #937ff0, #da8cd6, #eb4a96)" },
  drums: { background: "linear-gradient(165deg, #4d75a6, #4bc2a2, #5a9092)" },
  animals: { background: "linear-gradient(165deg, #fa81ac, #d998a0, #d8665b)" }
};

const padButtons = [
  {
    letter: "Q",
    keyCode: 81,
    piano: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/piano/a1.mp3",
      title: "piano Q"
    },
    drums: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/drums/drums1.mp3",
      title: "drums Q"
    },
    animals: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/animals/bear.mp3",
      title: "bear"
    }
  },
  {
    letter: "W",
    keyCode: 87,
    piano: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/piano/a1s.mp3",
      title: "piano W"
    },
    drums: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/drums/drums2.mp3",
      title: "drums W"
    },
    animals: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/animals/goat.mp3",
      title: "goat"
    }
  },
  {
    letter: "E",
    keyCode: 69,
    piano: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/piano/b1.mp3",
      title: "piano E"
    },
    drums: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/drums/drums3.mp3",
      title: "drums E"
    },
    animals: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/animals/cat.mp3",
      title: "cat"
    }
  },
  {
    letter: "A",
    keyCode: 65,
    piano: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/piano/c1.mp3",
      title: "piano A"
    },
    drums: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/drums/drums4.mp3",
      title: "drums A"
    },
    animals: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/animals/dog.mp3",
      title: "dog"
    }
  },
  {
    letter: "S",
    keyCode: 83,
    piano: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/piano/c1s.mp3",
      title: "piano S"
    },
    drums: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/drums/drums5.mp3",
      title: "drums S"
    },
    animals: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/animals/lion.mp3",
      title: "lion"
    }
  },
  {
    letter: "D",
    piano: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/piano/c2.mp3",
      title: "piano D"
    },
    keyCode: 68,
    drums: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/drums/drums6.mp3",
      title: "drums D"
    },
    animals: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/animals/elephant.mp3",
      title: "elephant"
    }
  },
  {
    letter: "Z",
    piano: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/piano/d1.mp3",
      title: "piano Z"
    },
    keyCode: 90,
    drums: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/drums/drums7.mp3",
      title: "drums Z"
    },
    animals: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/animals/pig.mp3",
      title: "pig"
    }
  },
  {
    letter: "X",
    piano: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/piano/d1s.mp3",
      title: "piano X"
    },
    keyCode: 88,
    drums: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/drums/drums8.mp3",
      title: "drums X"
    },
    animals: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/animals/horse.mp3",
      title: "horse"
    }
  },
  {
    letter: "C",
    keyCode: 67,
    piano: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/piano/e1.mp3",
      title: "piano C"
    },
    drums: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/drums/drums9.mp3",
      title: "drums C"
    },
    animals: {
      soundUrl:
        "https://raw.githubusercontent.com/nadktk/nadiia-katkova/master/animals/wolf.mp3",
      title: "wolf"
    }
  }
];

/*** Power switch ***/
const Switch = props => {
  return (
    <div style={{ "justify-self": "start" }}>
      <div className="toggle" onClick={props.switchPower}>
        <div className={props.power ? "toggle-on" : "toggle-off"} />
      </div>
      <div className="ctrl-status">{props.power ? "ON" : "OFF"}</div>
    </div>
  );
};

/*** Display component ***/
const Display = props => {
  if (props.power) // power is on
    return (
      <div className="display" style={displayBackground[props.data.mode]}>
        <div className="message" id="display">
          {props.data.message}
        </div>
        <div className="data-left">{"power on"}</div>
        <div className="data-right">{props.data.mode + " mode"}</div>
      </div>
    );
  return ( //power is off
    <div className="display off">
      <div className="message" id="display">
        {props.data.message}
      </div>
    </div>
  );
};

/*** Change machine's mode buttons ***/
const ModeButton = props => {
  let styles = {};
  if (props.currentMode === props.modeName)
    styles = displayBackground[props.modeName];
  if (props.power) // power is on
    return (
      <button
        className="switch-mode"
        style={styles}
        onClick={() => props.changeMode(props.modeName)}
      >
        {props.modeName}
      </button>
    ); 
  //power is off
  return <button className="button switch-mode">{props.modeName}</button>;  
};

/*** Sound Buttons Component ***/
class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyValue["keyCode"]) this.playSound();
  }
  
  playSound = e => {
    let thisSound = document.getElementById(this.props.keyValue["letter"]);
    let thisButton = document.getElementById(
      this.props.keyValue["letter"] + "-button"
    );
    thisSound.currentTime = 0;
    thisSound.volume = parseInt(this.props.volume) / 100;
    thisSound.play();
    this.props.display(this.props.keyValue[this.props.mode].title);
    thisButton.style.background = "#7077a1";
    setTimeout(() => (thisButton.style.background = "#485178"), 150);
  }
     
  render() {
    if (this.props.power) { // power is on
      return (
        <button
          className="drum-pad"
          id={this.props.keyValue["letter"] + "-button"}
          onClick={this.playSound}
        >
          {this.props.keyValue["letter"]}
          <audio
            className="clip"
            src={this.props.keyValue[this.props.mode].soundUrl}
            id={this.props.keyValue["letter"]}
            preload
          />
        </button>
      );
    }
    return ( // power is off
      <button id={this.props.keyValue["letter"] + "-button"}>
        {this.props.keyValue["letter"]}
      </button>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "let's play",
      volume: "50",
      power: true,
      mode: "drums"
    };
  }

  switchPower = () => {
    let message = this.state.power ? "power off" : "let's play";
    this.setState({ power: !this.state.power });
    this.displayMessage(message);
  };

  displayMessage = val => {
    this.setState({ message: val });
  };

  changeMode = val => {
    this.setState({ mode: val, message: val + " mode" });
  };

  volumeControl = e => {
    if (this.state.power) {
      this.setState({
        volume: e.target.value,
        message: "volume: " + e.target.value
      });
    }
  };

  render() {
    let displayData = { message: this.state.message, mode: this.state.mode };
    return (
      <div>
        <Display power={this.state.power} data={displayData} />
        <div className="container">
          <Switch power={this.state.power} switchPower={this.switchPower} />
          <div className="volume-bar">
            <input type="range" min="0" max="100" step="1" value={this.state.volume} onChange={this.volumeControl} />
            <div className="ctrl-status">{(this.state.power) ? "Volume: " + this.state.volume + "%" : " "}</div>
          </div>
          <hr />
          {padButtons.map(key => {
            return (
              <Pad
                keyValue={key}
                power={this.state.power}
                display={this.displayMessage}
                mode={this.state.mode}
                volume={this.state.volume}
              />
            );
          })}
          <hr />
          <ModeButton
            power={this.state.power}
            currentMode={this.state.mode}
            modeName="piano"
            changeMode={this.changeMode}
          />
          <ModeButton
            power={this.state.power}
            currentMode={this.state.mode}
            modeName="drums"
            changeMode={this.changeMode}
          />
          <ModeButton
            power={this.state.power}
            currentMode={this.state.mode}
            modeName="animals"
            changeMode={this.changeMode}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("drum-machine"));