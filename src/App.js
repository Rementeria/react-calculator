import React from "react";
import Calculator from "./components/Calculator";
//import "./App.css";

function App() {
  return (
    <div className="container text-center">
      <>
        <h1 className="h1 mt-5">Calculator</h1>
        <p className="lead">
          Created to qualify for "Entry" position at 23People
        </p>
      </>
      <>
        <Calculator initialValue={"0"} />
      </>
    </div>
  );
}

export default App;
