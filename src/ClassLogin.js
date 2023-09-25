import React from "react";
import { withRouter } from "react-router-dom";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: ""
    };
  }
  onLogin = () => {
    console.log("Hi");
    if (this.state.username === "admin" && this.state.password === "admin") {
      this.setState({
        message: "Login Success"
      });
      console.log(this.props, "this.props");
      window.history.pushState({}, undefined, "/home"); //syntax for changing the route to /home
    } else {
      this.setState({
        message: "Login Failure"
      });
    }
  };
  render() {
    console.log(this.state.username, "user", this.state.password, "password");
    return (
      <div>
        <input
          type="text"
          placeholder="User Name"
          id="name"
          value={this.state.username}
          autoComplete="off"
          onChange={(e) => {
            console.log(e);
            this.setState({
              username: e.target.value
            });
            //this.setState({
            //     count: this.state.count - 1
            //   })
          }}
        />{" "}
        <br></br>
        <input
          type="password"
          placeholder="Password"
          id="name"
          autoComplete="off"
          value={this.state.password}
          onChange={(e) => {
            console.log(e);
            this.setState({
              password: e.target.value
            });
          }}
        />
        <input
          type="submit"
          value="Submit"
          id="button"
          onClick={() => this.onLogin()}
        />
        <div> {this.state.message} </div>
      </div>
    );
  }
}
// const Login = withRouter(LoginPage);
export default LoginPage;
