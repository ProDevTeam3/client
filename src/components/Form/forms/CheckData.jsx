import React from "react";

const CheckData = (props) => {
  return <div>{JSON.stringify(props, null, 2)}</div>;
};
export default CheckData;
