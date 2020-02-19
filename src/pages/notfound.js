import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class NotFound extends Component {
  state = {
    counter: 7
  };

  componentDidMount = () => {
    const intervalId = setInterval(this.countdown, 1000);
    this.setState({ intervalId });
  };

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  };
  countdown = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h1>
          This way{" "}
          <code style={{ color: "#cba" }}>{this.props.location.pathname}</code>{" "}
          is to nowhere...
        </h1>
        <p> Redirect to homepage in {this.state.counter} seconds </p>
        {!this.state.counter && <Redirect to="/" />}
        <img
          src="https://kszk.vot.pl/deadend.jpg"
          className="card-img-top"
          alt="They map"
        />
      </div>
    );
  }
}

export default NotFound;
