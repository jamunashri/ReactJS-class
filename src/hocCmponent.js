import React from "react";

const HOC = (props) => {
  const { childElement } = props;
  return (
    <>
      Header
      <div> {childElement} </div>
      Footer
    </>
  );
};

export default HOC;
