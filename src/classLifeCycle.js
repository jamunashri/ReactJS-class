import React from "react";

class ClassLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jamuna"
    };
  }
  // mounting

  componentDidMount() {
    console.log("Mounting");
  }
  // Updating
  componentDidUpdate() {
    console.log("Updating");
  }
  // unMMmountingn
  componentWillUnmount() {
    console.log("ComponnentWillUnMMountn");
  }
  render() {
    const { name } = this.state;
    return (
      <>
        {name}
        <button
          onClick={() =>
            this.setState({
              name: "Jamuansbri"
            })
          }
        />
      </>
    );
  }
}

export default ClassLifeCycle;
