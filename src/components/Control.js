import React from "react"
import styled from "styled-components"

const Control = ({ type, handler }) => (
  <Wrapper
    onClick={handler}
    onKeyPress={handler}
    className={`control ${type}`}
  ></Wrapper>
)

const Wrapper = styled.div`
  top: 50%;
  z-index: 2;
  width: 60px;
  height: 60px;
  display: flex;
  color: #e3d0cc;
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 50%;
  position: absolute;
  align-items: center;
  justify-content: center;
  transition: font-size 0.2s;

  &:hover {
    color: #7a5656;
    font-size: 2rem;
  }

  &.next {
    right: 0.5rem;

    &::after {
      content: "\\279C";
      position: absolute;
    }
  }

  &.previous {
    left: 0.5rem;

    &::after {
      content: "\\279C";
      position: absolute;
      transform: rotate(-180deg);
    }
  }
`

export default Control
