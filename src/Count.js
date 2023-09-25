import "./styles.css";

import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(1);
  // var name = "Keerthana";
  // if (name === "Keerthana" && count === 2) {
  //   setTimeout(() => {
  //     setCount(5);
  //   }, 1000);
  // }

  return (
    <div className="App">
      Count {count}
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}

// State management  in Functional compoonent

// state => its a variable that only accessible  inside the
// compoonent

// useState - import {useState} from "react"

// initialize

//   const [stateValue,updateFunction] =useState(initialValue)

// return (<> {stateValue}</>)

// max count exceeds -> error

// Counter Application

// UI

// Count {countValue}

// two buttons +, -

//  + it adds the count value  as 1
//  - it subtract the counnt valuue as  1

// btn clikc => onClick()

//<button onClick={() => functionCall()}>Sum</button>

// functionName()
// onClick={() => functionCall()}
