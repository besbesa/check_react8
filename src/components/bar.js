import React from 'react';
import { Progress } from 'reactstrap';

const Bar = (props) => {
  return (
    <div>
    <p>{props.name}</p>
      <Progress value={props.value}  />
    </div>
  );
};

export default Bar;

