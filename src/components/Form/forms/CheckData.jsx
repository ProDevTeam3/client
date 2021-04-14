import React from "react";
import {objectToArray, elementCheck} from '../helpers/summaryHelpers'

const CheckData = (props) => {

  const propsArrayOfTwo = objectToArray(props)

  return(
    <div className="Summary">
      {propsArrayOfTwo.map(elem => elementCheck(elem[0], elem[1]))}
    </div>
    
  );

};
export default CheckData;


