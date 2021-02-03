import React, { Component } from "react";
import styled from "styled-components";
import {useState} from "react";

function Searchbar (props) {
  const [inputText, setInputText] = useState("");

  /*Input = styled.input`
    margin: 10px auto;
    background: linear-gradient(
      90deg,
      rgba(3, 4, 147, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    color: yellow;
  `;*/

  

  const onChangeHandler = (event) => {
        setInputText(event.target.value );
  };

  
    return (
      <div>
        <input value= {inputText}
        onChange={onChangeHandler} autoFocus />
      </div>
    );
  
}

export default Searchbar;
