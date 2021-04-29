import axios from "axios";
import React, { Component } from "react";

export default class TodayBody extends Component {
  state = {
    hello_world: "Not Connected",
  };

  fetchHelloWorld = () => {
    axios.get("/hello_world").then((serverResponse) => {
      this.setState({ hello_world: serverResponse.data });
    });
  };

  render() {
    return (
      <div>
        {this.state.hello_world}
        <br />
        <button onClick={this.fetchHelloWorld}>Fetch!</button>
      </div>
    );
  }
}
