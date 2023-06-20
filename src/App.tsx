import React, { Children } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/props/Greet";
import { Status } from "./components/props/Status";
import { Heading } from "./components/props/Heading";
import { Oscar } from "./components/props/Oscar";
import { ButtonOnClick } from "./components/props/ButtonOnClick";
import { Container } from "./components/props/Container";
import { Counter } from "./components/state/Counter";
import { User } from "./components/context/User";
import { UserContext, UserContextProvider } from "./components/context/UserContext";
import { Toast } from "./components/templateLiteals/Toast";

function App() {
  //it is logic part where data manupulation happend
  return (
    //it is Ui part where after logic part end according to it it return ui part in form of jsx.
    <div className="App">
      {/* COMMENT:: Props Component */}
      <Greet name="Bhanja" age={25} />
      {/* {Greet({ name: "shirshak", age: 25 })} */}

      <Status status="success" />

      <Heading>Hello</Heading>

      <Oscar>
        <Heading>Oscar goes to Dicaprio</Heading>
      </Oscar>

      <ButtonOnClick handleClick={(event, id) => console.log("clicked", event, id)} />
      {/* {Heading({ children: "hello" })} */}
      {/* {Oscar({ children: <Heading>Oscar goes to Dicaprio</Heading> })} */}

      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <Counter />

      {/* Context  */}
      <UserContextProvider>
        <User />
      </UserContextProvider>

      <Toast position="center" />
    </div>
  );
}

export default App;
