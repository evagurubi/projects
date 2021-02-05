import React, { useState } from "react";
import styled from "styled-components";

function Searchbar(props) {
  const [mySearch, setMySearch] = useState("");

  Input = styled.input`
    margin: 10px auto;
    background: linear-gradient(
      90deg,
      rgba(3, 4, 147, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    color: yellow;
  `;

  /*useEffect(() => {
    if (mySearch !== props.search) props.search({ search: state.search });
  });*/

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
