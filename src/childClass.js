import React from "react";

class ChildClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props, "this.props");
    let { num, updateNum } = this.props;
    return (
      <>
        Count {num}
        <button onClick={() => updateNum(num + 1)}> + </button>
        <button onClick={() => updateNum(num - 1)}> - </button>
      </>
    );
  }
}

export default ChildClass;
