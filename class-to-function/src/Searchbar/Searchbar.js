import React, { useState, useEffect } from "react";
import styled from "styled-components";
const Input = styled.input`
  margin: 10px auto;
  background: linear-gradient(
    90deg,
    rgba(3, 4, 147, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  color: yellow;
`;

function Searchbar(props) {
  const [mySearch, setMySearch] = useState("");

  useEffect(() => {
    props.search(mySearch);
  }, [mySearch]);

  const onChangeHandler = (event) => {
    setMySearch(event.target.value);
  };

  return (
    <div>
      <Input value={mySearch} onChange={onChangeHandler} autoFocus />
    </div>
  );
}

export default Searchbar;
