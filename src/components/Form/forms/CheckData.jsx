import { Button } from "@chakra-ui/button";
import React, { useState, useEffect } from "react";
import { objectToArray, elementCheck } from "../helpers/summaryHelpers";

const CheckData = ({ ref }) => {
  const [data, setData] = useState([]);

  const getData = () => {
    setData(objectToArray(ref?.current?.values));
  };

  return (
    <div className="Summary">
      <Button onClick={getData} style={{ marginBottom: 20 }}>
        Wyświetl dane
      </Button>
      {data.map((elem) => elementCheck(elem[0], elem[1]))}
    </div>
  );
};
export default CheckData;
