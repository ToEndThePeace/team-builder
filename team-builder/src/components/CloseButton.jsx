import React from "react";
import styled from "styled-components";

export default function CloseButton(props) {
  const { closeHandler } = props;
  return (
    <StyledButton onClick={closeHandler}>
      &times;
    </StyledButton>
  )
}

const StyledButton = styled.div`
  position: absolute;
  top: 4px;
  right: 7px;
  font-size: 1.5rem;
  line-height: 1.5rem;
  cursor: pointer;
`;