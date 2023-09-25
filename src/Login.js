import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const navigate = useNavigate();
  // useNavigate = custom hook
  const onLogin = () => {
    // username= admin
    // passwordd = admin
    if (userName === "admin" && password === "admin") {
      console.log("Login success");
      setUserMessage("Login success");
      navigate("/home");
      // if (customeer) {
      //   navigate("/home");
      // } else {
      //   navigate("/homeComponent");
      // }
    } else {
      console.log("Login Failure");
      setUserMessage("Login Failure");
      setUserName("");
      setPassword("");
    }
  };
  useEffect(() => {
    if (userMessage) {
      setTimeout(() => {
        setUserMessage("");
      }, [3000]);
    }
  }, [userMessage]);
  return (
    <div className="styles">
      <h2>Member Login</h2>

      <input
        type="text"
        placeholder="User Name"
        id="name"
        value={userName}
        onChange={(e) => {
          console.log(e);
          setUserName(e.target.value);
        }}
      />
      <br></br>
      <input
        type="password"
        placeholder="Password"
        id="name"
        value={password}
        onChange={(e) => {
          console.log(e);
          setPassword(e.target.value);
        }}
      />
      <br></br>
      <input
        type="submit"
        value="Submit"
        id="button"
        onClick={() => onLogin()}
      />
      <br />
      <div>{userMessage}</div>
    </div>
  );
};
export default Login;

// Event Listeners/Handlers

// UI -

// onClick => onClick of the buttton
// onChange => input the text/date
// onBlur => focus will be changed
// onMouseOver => based on the mouseevent
// onHover => hovering on the particular div

// onClick - onClick = {() => eventName}

// button, div

// onChange - onChange={(event) => console.log(event)}

// event.target.type

// onBlur = {() => event()}

// onMouseOVer = {() => event()}
// onHover = {() => event()}
