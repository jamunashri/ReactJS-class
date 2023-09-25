import React from "react";
import ChildFun from "./ChildFun";

class ParentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <>
        <div>
          <ChildFun
            num={this.state.count}
            updateNum={(num) =>
              this.setState({
                count: num
              })
            }
          />
        </div>
      </>
    );
  }
}

export default ParentClass;

// child - UI
// parent - state, update Fun
