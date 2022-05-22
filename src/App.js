import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Navbar from "./components/navs/navbar";
import Matchs from "./components/matchs_day/matchs";
import News from "./components/news/news";
import { Routes, BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar>
      </Navbar>
    </Router>
  );
}

export default App;
