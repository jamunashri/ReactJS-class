import React from "react";

const Child = (props) => {
  let { num, updateNum } = props; //destructurinng
  // console.log(props.num, props.updateNum, "props"); //normal
  return (
    <>
      Count {num}
      <button onClick={() => updateNum(num + 1)}>+</button>
      <button onClick={() => updateNum(num - 1)}>-</button>
    </>
  );
};

export default Child;

// Functional

// Props => props.value
// desctructuring let {num} = props
// let [num] = props

// 2 Component

// parent = fun, child = fun - done
// parent =class, child = fun - done
// parent = fun, child = class - done
// parent = class, child = class => Task
