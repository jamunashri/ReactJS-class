import React, { useState } from "react";
import axios from "axios";

// username: 'kminchelle',
// password: '0lelplR',
const POSTAPI = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const onLogin = () => {
    if (username && password) {
      axios
        .post(
          "https://dummyjson.com/auth/login",
          {
            username: username,
            password: password
          }
          // {
          //   firstName: 'Jamunashri',
          //   lastName: 'S',
          //   age: 23,
          //   /* other user data */
          // }
        )
        .then((res) => {
          console.log(res);
          if (res.data) {
            setMessage("Login Success");
          } else {
            setMessage("Login Failure");
          }
        })
        .catch((err) =>
          setMessage("Something went wrong! please try again later")
        );
    } else {
      setMessage("Please enter the username and password");
    }
  };
  return (
    <>
      Username
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      password
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <button type="submit" onClick={() => onLogin()}>
          submit{" "}
        </button>
      </div>
      {message && <span style={{ color: "red" }}>{message} </span>}
    </>
  );
};

export default POSTAPI;

// Task

// API End point : "https://dummyjson.com/users/add"

// {
//   firstName: firstName,
//   lastName: lastName,
//   age: age
// }

// res.data => User Created

// catch => Something went wrong!
