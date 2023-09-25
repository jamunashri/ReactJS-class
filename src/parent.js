import React, { useState } from "react";
import Child from "./child";

const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <Child num={count} updateNum={setCount} />
      </div>
    </>
  );
};

export default Parent;

// useState =>count, setCount

// Parent - functions, count
// |
// child
// |
// UI
