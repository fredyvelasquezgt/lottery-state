import React, { Component } from "react";
import "./App.css";
import Lottery from "./Lottery";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Ball num={17} />
      </div>
    );
  }
}

export default App;
