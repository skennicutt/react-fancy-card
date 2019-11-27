import * as React from "react";
import styled, { keyframes } from "styled-components";

const stroke = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
`;

const StyledCheckmark = styled.svg`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 3;
  stroke: #fff;
  stroke-miterlimit: 10;
  margin: 10% auto;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: fill 0.4s ease-in-out 0.4s forwards,
    scale 0.3s ease-in-out 0.9s both;
`;

const CheckmarkCircle = styled.circle`
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 3;
  stroke-miterlimit: 10;
  stroke: #fff;
  fill: none;
  animation: ${stroke} 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
`;

const CheckmarkCheck = styled.path`
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: ${stroke} 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
`;

function FancyCheckMark(props) {
  return (
    <StyledCheckmark viewBox="0 0 52 52">
      <CheckmarkCircle cx="26" cy="26" r="25" fill="none" />
      <CheckmarkCheck fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
    </StyledCheckmark>
  );
}

export default FancyCheckMark;
