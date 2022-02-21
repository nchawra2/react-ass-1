import React from "react";
import './funcComp.css'


const FuncComp = () => {
  return (
    <div className="comp1">
      <h1>This is created using Functional Component</h1>
      <p>This is using external CSS</p>
      <p style={{ color : 'blue'}}>This is using inline CSS</p>
    </div>
  );
};

export default FuncComp;
