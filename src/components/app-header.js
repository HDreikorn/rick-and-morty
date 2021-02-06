import React from "react";
import mrP from "../assets/mr_p.png";
import rm from "../assets/rick-and-morty.png";
import "../App.css";

export default function AppHeader() {
  return (
    <header className="App-header">
      <img src={rm} alt="Rick and Morty" className="RM-Header"></img>
      <div className="Sub-Header">
        <h1>Track Your Episodes</h1>
        <img src={mrP} alt="Mr. Poopybutthole Rick and Morty"></img>
      </div>
    </header>
  );
}
