import React from "react";
import { useState } from "react";
import ChildClass from "./childClass";

const ParentFun = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <ChildClass num={count} updateNum={setCount} />
    </>
  );
};

export default ParentFun;
