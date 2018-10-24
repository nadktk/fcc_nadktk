const Number = props => {
  const idArray = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];
  return (
    <button
      id={idArray[props.id]}
      onClick={() => props.display(props.id)}
      className="number"
      style={props.style}
    >
      {props.id}
    </button>
  );
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      line2: "",
      line1: "0",
      calculated: false,
      lastOperation: ""
    }
  }
  
  // numbers buttons function 
  number = val => {
    this.soundPlay();
    if (this.state.line1 == "0" || this.state.calculated )
      this.setState({
        line1: val,
        calculated: false,
        lastOperation: ''
      });
    else if (this.state.line1.length <= 20)  
        this.setState({
          line1: this.state.line1 + val,
          calculated: false
        });    
  }; // end of numbers buttons

  // operators buttons function   
  operator = val => {
    this.soundPlay();
    if (this.state.line2 == "") 
      this.setState({
        line2: this.state.line1 + val,
        calculated: true
      });
    else {
      let result;
      if (this.state.calculated) result = this.state.line2.substr(0, this.state.line2.length-3);
      else result = Math.round(1000000000000 * eval(this.state.line2 + this.state.line1)) / 1000000000000;
      this.setState({
          line1: result,
          line2: result + val,
          calculated: true
      });
    } 
  };  // end of operators buttons function 

  // equal button function
  equals = () => {
    this.soundPlay();
    if (this.state.lastOperation != "") {
      let result = this.state.line1 + this.state.lastOperation;
      result = Math.round(1000000000000 * eval(result)) / 1000000000000;
      this.setState({ 
        line2: "",
        line1: result,
        calculated: true
      });
    }
    else {
      let operation = "";
      let result = Math.round(1000000000000 * eval(this.state.line2+this.state.line1)) /
        1000000000000;
      result.toString();
      operation = (this.state.line2+this.state.line1)
        .split(" ")
        .slice(-2)
        .join(" ");
      this.setState({
        line2: "",
        line1: result,
        calculated: true,
        lastOperation: operation
      });
    }
  }; // end of equal button function

  // decimal button function 
  decimal = () => {  
    this.soundPlay();
    if (this.state.calculated) 
      this.setState({
        line1: "0.",
        calculated: false
      });
    else {
      let current = this.state.line1;
      if (!current.includes(".")) {
        this.setState({ line1: current + '.' });
      }
    }
  };

  soundPlay = () => {
     let sound = document.getElementById("sound");
     sound.currentTime = 0;
     sound.play();
  }

  render() {     
    let display = this.state.line2.replace(/\//, '÷').replace(/\*/, '×'); 
    return (
      <div className="container">
      
        <div className={"display"}>
          <p className="small">{display}</p>
          <p id="display">{this.state.line1}</p>
        </div>

        <button
          id="clear"
          onClick={() => {
            this.soundPlay();
            this.setState({ line2: "", line1: "0", lastOperation: "" });
          }}
          style={{ "grid-column": "1 / 4" }}
        >
          C
        </button>

        <button id="divide" onClick={() => this.operator(" / ")}>
          ÷
        </button>

        <Number id="7" display={this.number} />
        <Number id="8" display={this.number} />
        <Number id="9" display={this.number} />

        <button id="multiply" onClick={() => this.operator(" * ")}>
          ×
        </button>

        <Number id="4" display={this.number} />
        <Number id="5" display={this.number} />
        <Number id="6" display={this.number} />

        <button id="add" onClick={() => this.operator(" + ")}>
          +
        </button>

        <Number id="1" display={this.number} />
        <Number id="2" display={this.number} />
        <Number id="3" display={this.number} />

        <button id="subtract" onClick={() => this.operator(" - ")}>
          -
        </button>

        <Number
          id="0"
          display={this.number}
          style={{ "grid-column": "1 / 2" }}
        />
        <button id="decimal" onClick={this.decimal} className="number">
          .
        </button>
        <button
          id="equals"
          onClick={this.equals}
          style={{ "grid-column": "3 / 5" }}
        >
          =
        </button>

        <audio
            className="clip"
src="https://raw.githubusercontent.com/nadktk/fcc_nadktk/master/calculator/audio/sound3.mp3"
            id="sound"
            preload="true"
          />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("calculator"));