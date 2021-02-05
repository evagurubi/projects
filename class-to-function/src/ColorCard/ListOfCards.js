import React, { useState, useEffect } from "react";
import Card from "./Card.js";
import colors from "../data/colors.json";

function CardList(props) {
  const [results, setResult] = useState([]);

  useEffect(() => {
    if (results !== props.search) {
      const results = colors.filter(
        (color) =>
          color.name.includes(props.search) || color.hex.includes(props.search)
      );
      setResult(results);
    }
  }, [props.search, results]);

  return (
    <div className="container">
      {results.map((color, index) => (
        <Card key={index} color={color} />
      ))}
    </div>
  );
}

export default CardList;
