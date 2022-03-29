import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      outMsg: "",
    };
  }

  handleFirstName(name) {
    this.setState({ username: name });
  }

  handleOutput(message) {
    this.setState({ message: message });
  }

  handleButtonClick = async () => {
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
        this.handleOutput(data.msg);
      });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="username">Enter First Name: </label>
          <input
            type="text"
            name="username"
            onChange={(e) => {
              this.handleFirstName(e.target.value);
            }}
          />
        </form>

        <div>
          <label htmlFor="response">output: </label>
          <p>{this.state.message}</p>
        </div>

        <button onClick={this.handleButtonClick}>Submit</button>

        <p>
          README: Must Press Submit Button! Correct Input is Ethan and Correct output is Pham
        </p>
      </div>
    );
  }
}

export default App;
