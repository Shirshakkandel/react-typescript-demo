import React from "react";

type GreetProps = {
  name: string;
  age: number;
};

//use type while building application and
//interface for building library.

const Greet = (props: GreetProps) => {
  //logic part
  let modifiedName = `${props.name} Shree`;
  return (
    //After return it is Ui part which run after logic part.
    <div>
      <p>Welcome to React course {modifiedName} </p>
      <p>How are you {modifiedName} ?</p>
    </div>
  );
};

export default Greet;

//Greet({name:"Bhanja",age:22})
// {name:"Bhanja",{name:"Bhanja"}} => is props which is object that contains name as parameter.
//
