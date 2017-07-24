import React, { Component } from "react";

import DisplayComponent from "./DisplayComponent";
import ChildComponent from "./ChildComponent";

export default class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    //we are really in a *bind* here.... :)
    //fix it...

    //state lives here
    this.state = {
      whatToSay: "",
      whatWasSaid: ""
    };
  }
  handleInput(e) {
    e.preventDefault();
    //set the state on input change
    this.setState({ whatToSay: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    //check console to see if firing
    console.log("fired");
    //set the state for props and for value (prevents output from appearing when typing)
    this.setState({
      whatToSay: this.state.whatToSay,
      whatWasSaid: this.state.whatToSay
    });
    //clear our input by resetting state
    this.setState({ whatToSay: "" });
  }
  render() {
    return (
      <div>
        <div>
          <input
            onChange={this.handleInput}
            type="text"
            placeholder="Say It, Don't Spray It!"
          />
        </div>
        <div>
          <ChildComponent onClick={this.handleSubmit} />
          <DisplayComponent sayWhat={this.state.whatWasSaid} />
        </div>
      </div>
    );
  }
}
