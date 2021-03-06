import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./ColorCard/ListOfCards.js";
import Searchbar from "./Searchbar/Searchbar.js";

function App(props) {
  const [search, setSearch] = useState("");
  /*constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    /*setState = setState();
  }*/

  useEffect(() => {
    document.addEventListener("click", welcome);
    return () => {
      document.removeEventListener("click", welcome);
    };
  }, []);

  const welcome = () => {
    alert("Hello!");
  };

  return (
    <div>
      <Searchbar search={setSearch} />
      <CardList search={search} />
    </div>
  );
}

export default App;
