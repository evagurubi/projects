import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

function Card (props) {
  Div = styled.div`
    width: 100%;
    height: 150px;
    border: 1px solid black;
    box-shadow: 2px 2px 5px #000000;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) =>
      props.theme.backgroundColor === "#000000" ? "white" : "black"};
  `;

  /*componentWillMount() {
    Div.defaultProps = {
      theme: { color: 0xffffff, backgroundColor: "#fff" },
    };
  }*/

  
    const theme = {
      backgroundColor: props.color.hex,
    };
    return (
      <ThemeProvider theme={theme}>
        <Div>
          <h1>{props.color.name}</h1>
        </Div>
      </ThemeProvider>
    );
}

export default Card;
