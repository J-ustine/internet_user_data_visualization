import React from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import itGirl from "./assets/it-girl.svg";
import { Funnel } from "./components/Funnel";
import { Bubble } from "./components/Bubble";
import { Gauge } from "./components/Gauge";
import { MapChart } from "./components/Map";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="title">Welcome to The International FemHack Vol.II</h3>
      </header>
      <div className="introduction">
        <img src={itGirl} className="it-girl" alt="girl" />
        <div className="context">
          Since the beginning of the Internet as we know it, the number of users
          consuming digital content online has been growing over time. Every day
          the use of the Internet in people's daily lives surpasses a new
          milestone in history. The Internet has brought hyper-connectivity to
          the world allowing anyone in the world to contact anyone else in the
          world.
        </div>
      </div>
      <Funnel />
      <Gauge />
      <Bubble />
      <MapChart />
    </div>
  );
}

export default App;
