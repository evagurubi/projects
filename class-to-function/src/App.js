import React, { Component } from "react";
import {useState} from "react";
import "./App.css";
import CardList from "./ColorCard/ListOfCards.js";
import Searchbar from "./Searchbar/Searchbar.js";

function App () {

  const [search, setSearch] = useState("")
  
  /*componentDidMount() {
    document.addEventListener("click", this.welcome);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.welcome);
  }

  welcome = () => {
    alert("Hello!");
  };*/

      return (
      <div>
        <Searchbar search={setSearch} />
        <CardList search={search} />
      </div>
    );

}

export default App;
