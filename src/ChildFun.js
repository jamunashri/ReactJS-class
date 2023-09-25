import React, { useEffect } from "react";

const ChildFun = (props) => {
  console.log(props, "props");
  let { num, updateNum } = props;
  useEffect(() => {}, []);
  return (
    <>
      Count {num}
      <div>
        <button onClick={() => updateNum(num + 1)}> + </button>
        <button onClick={() => updateNum(num - 1)}> - </button>
      </div>
    </>
  );
};
export default ChildFun;
