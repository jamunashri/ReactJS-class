import React from "react";
import Header from "./Header";

const Home = (props) => {
  const { name } = props;
  console.log("Homme.js");
  return (
    <>
      Welcome to the Home Component
      <Header name={name} />
    </>
  );
};
export default Home;
