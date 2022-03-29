import React, { useState, useEffect } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      message: "",
    };
  }

  handleUserName(name) {
    this.setState({ username: name });
  }

  handleMsg(message) {
    this.setState({ message: message });
  }

  handleClick = async () => {
    const params = {
      username: this.state.username,
    };
    await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((data) => {
        this.handleMsg(data.msg);
      });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="username">username </label>
          <input
            type="text"
            name="username"
            onChange={(e) => {
              this.handleUserName(e.target.value);
            }}
          />
        </form>

        <div>
          <label htmlFor="output:">response </label>
          <p>{this.state.message}</p>
        </div>

        <button onClick={this.handleClick}>Submit</button>

        <p>
          README: Must Press Submit Button! Correct Input is Ethan and Correct output is Pham
        </p>
      </div>
    );
  }
}

export default App;
