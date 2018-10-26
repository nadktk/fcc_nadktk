var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var Break = function Break(props) {
  return (
    React.createElement("div", { className: "inc-dec" },
      React.createElement("div", { id: "break-label" }, "Break length:",
        " ",
        React.createElement("span", { id: "break-length", className: "num" },
          props.length),
        " ", "minutes"),


      React.createElement("button", {
          id: "break-decrement",
          className: "change",
          onClick: function onClick() {
            props.changeTime("-", "Break");
          } }, "-"),



      React.createElement("button", {
          id: "break-increment",
          className: "change",
          onClick: function onClick() {
            props.changeTime("+", "Break");
          } }, "+")));





};

var Session = function Session(props) {
  return (
    React.createElement("div", { className: "inc-dec" },
      React.createElement("div", { id: "session-label" }, "Session length:",
        " ",
        React.createElement("span", { id: "session-length", className: "num" },
          props.length),
        " ", "minutes"),


      React.createElement("button", {
          className: "change",
          id: "session-decrement",
          onClick: function onClick() {
            props.changeTime("-", "Session");
          } }, "-"),



      React.createElement("button", {
          className: "change",
          id: "session-increment",
          onClick: function onClick() {
            props.changeTime("+", "Session");
          } }, "+")));





};var

Pomodoro = function (_React$Component) {_inherits(Pomodoro, _React$Component);
  function Pomodoro(props) {_classCallCheck(this, Pomodoro);var _this = _possibleConstructorReturn(this, (Pomodoro.__proto__ || Object.getPrototypeOf(Pomodoro)).call(this,
    props));_this.









    changeTime = function (sign, stateToUpdate) {
      if (
      sign === "-" && _this.state[stateToUpdate.toLowerCase()] === 1 ||
      sign === "+" && _this.state[stateToUpdate.toLowerCase()] === 60 ||
      _this.state.running)

      return;
      var value = _this.state[stateToUpdate.toLowerCase()] +=
      sign === "+" ? 1 : -1,
      timerValue = value * 60000;
      var newState = _defineProperty({},
      stateToUpdate.toLowerCase, value);

      if (_this.state.phase === stateToUpdate) newState.timer = timerValue;
      _this.setState(newState);
    };_this.

    currTime = function () {
      var min = Math.floor(_this.state.timer / 60000);
      var sec = Math.floor(_this.state.timer % 60000) / 1000;
      return (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
    };_this.

    run = function () {
      if (_this.state.running) {
        clearInterval(_this.countdown);
        _this.setState({ running: false });
        return;
      }
      clearInterval(_this.countdown);
      _this.countdown = setInterval(_this.timerFunc, 1000);
      _this.setState({
        running: true });

    };_this.

    timerFunc = function () {
      if (_this.state.timer === 0 && _this.state.phase === "Session") {
        _this.soundPlay();
        _this.setState({
          phase: "Break",
          timer: _this.state.break * 60000 });

        return;
      }
      if (_this.state.timer === 0 && _this.state.phase === "Break") {
        _this.soundPlay();
        _this.setState({
          phase: "Session",
          timer: _this.state.session * 60000 });

        [];
        return;
      }
      _this.setState({ timer: _this.state.timer - 1000 });
    };_this.

    reset = function () {
      _this.soundStop();
      clearInterval(_this.countdown);
      _this.setState({
        break: 5,
        session: 25,
        running: false,
        timer: 1500000,
        phase: "Session" });

    };_this.

    soundPlay = function () {
      var sound = document.getElementById("beep");
      sound.currentTime = 0;
      sound.play();
    };_this.

    soundStop = function () {
      var sound = document.getElementById("beep");
      sound.pause();
      sound.currentTime = 0;
    };_this.state = { break: 5, session: 25, timer: 1500000, running: false, phase: "Session" };return _this;}_createClass(Pomodoro, [{ key: "render", value: function render()

    {
      console.log(this.state.running);
      return (
        React.createElement("div", { className: "container" },
          React.createElement(Session, { length: this.state.session, changeTime: this.changeTime }),

          React.createElement(Break, { length: this.state.break, changeTime: this.changeTime }),

          React.createElement("div", { id: "timer-label" }, this.state.phase),

          React.createElement("div", { className: "screen", id: "time-left" },
            this.currTime()),


          React.createElement("button", { id: "start_stop", onClick: this.run },
            this.state.running ? "Pause" : "Start"),


          React.createElement("button", { id: "reset", onClick: this.reset }, "Reset"),



          React.createElement("audio", {
            src: "https://raw.githubusercontent.com/nadktk/fcc_nadktk/master/pomodoro/audio/beep.mp3",
            id: "beep",
            preload: "true" })));



    } }]);return Pomodoro;}(React.Component);


ReactDOM.render(React.createElement(Pomodoro, null), document.getElementById("app"));