import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Navbar from "./components/navs/navbar";
import Matchs from "./components/matchs_day/matchs";


function App() {
  return (
    <div className="App">
      <header>
          <Navbar/>
      </header>
      <body>
          <Matchs/>
      </body>
    </div>
  );
}

export default App;
