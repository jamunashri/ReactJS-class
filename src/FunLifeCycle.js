import React, { useEffect, useState } from "react";

const FunLifeCycle = () => {
  const [name, setName] = useState("JAmunas");
  // Mmounting state
  useEffect(() => {
    console.log("Mounting state");
  }, []);
  // Updating state
  useEffect(() => {
    console.log("Updating state");
    if (name) {
      setTimeout(() => {
        setName("Jamuna upddated");
      }, 5000);
    }
  }, [name]);
  // Un Mounring state
  useEffect(() => {
    return () => {
      console.log("un mounting");
    };
  }, []);
  return (
    <>
      {name}
      <button onClick={() => setName("Jamunashri")} />
    </>
  );
};
export default FunLifeCycle;
