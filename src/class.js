import React from "react";

class ClassExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {}
  componentDidUpdate() {}

  render() {
    return (
      <>
        Count {this.state.count}
        <div>
          <button
            onClick={() =>
              this.setState({
                count: this.state.count + 1
              })
            }
          >
            +
          </button>
          <button
            onClick={() =>
              this.setState({
                count: this.state.count - 1
              })
            }
          >
            -
          </button>
        </div>
      </>
    );
  }
}

export default ClassExample;

// class className extends React.Component {

// }

// props = its also a state but it will be passed one component
// to another component

// state = it storing the value, but used inn one particular componennt

// super => this represents tp use the particular state, props
// render => it will call the render function everytime while running/reloading
