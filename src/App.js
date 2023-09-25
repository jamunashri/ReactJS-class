import React, { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import LoginPage from "./ClassLogin";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import RouterHome from "./RouterHome";
import HOC from "./hocCmponent";
import ListProduct from "./ListProduct";
import POSTAPI from "./POSTAPI";

const App = () => {
  const { navigate } = useNavigate();
  const [name, setName] = useState("Jamuna");
  setTimeout(() => {
    setName("Jamuunashri");
  }, [3000]);

  return (
    <>
      {/* <Link to="/google">Google </Link>
      <Routes>
        <Route exact path="/" element={<HOC childElement={<LoginPage />} />} />
        <Route
          exact
          path="/home"
          element={<HOC childElement={<RouterHome />} />}
        />
      </Routes> */}
      <POSTAPI />
    </>
  );
};

export default App;

{
  /* <HOC childElement={<Login />} /> */
}

// GET

// POST - Create API

// eg: Login, Register

// Login =>

// {
//   username: "iamjamunashri@gmail.com",
//   password: "Jamuna"
// }

// axios.post('apiURL',{
//   username: "iamjamunashri@gmail.com",
//   password: "Jamuna"
// }).then(res => {
//   console.log(res)
// }).catch(err => console.log(err))
