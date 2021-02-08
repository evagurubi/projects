import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import colors from "../data/colors.json";

function CardList(props) {
  const [results, setResult] = useState(colors);
  const [prevSearch, setPrevSearch] = useState("");

  const [currentSearch, setCurrentSearch] = useState();

  useEffect(() => {
    if (prevSearch !== props.search) {
      const results = colors.filter(
        (color) =>
          color.name.includes(props.search) || color.hex.includes(props.search)
      );
      setResult(results);
    }
    setPrevSearch(props.search);
  }, [props.search]);

  /* useEffect(() => {
    const results = colors.filter(
      (color) =>
        color.name.includes(props.search) || color.hex.includes(props.search)
    );
    setResult(results);
  }, []);*/

  return (
    <div className="container">
      {results.map((color, index) => (
        <Card key={index} color={color} />
      ))}
    </div>
  );
}

export default CardList;
