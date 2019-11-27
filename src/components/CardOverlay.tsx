import * as React from "react";
import styled from "styled-components";

export type CardOverlayDisplayType = "hidden" | "hover" | "hold" | "full";

interface IProps {
  children?: string | React.ReactElement | React.ReactElement[];
  display: CardOverlayDisplayType;
}

const StyledCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(
    rgba(255, 143, 178, 0.7) 0%,
    rgba(167, 151, 255, 0.7) 25%,
    rgba(167, 151, 255, 0.7) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  transform: translate(0px, 300px);
  transition-timing-function: ease;
  transition-duration: 0.5s;
  transition-property: transform, background;

  &.hidden {
    transform: translate(0px, 300px);
    transition-timing-function: ease;
    transition-duration: 0.5s;
    transition-property: transform, background;
  }

  &.hover {
    transform: translate(0px, 200px);
    transition-timing-function: ease;
    transition-duration: 0.5s;
    transition-property: transform, background;
  }

  &.hold {
    transform: translate(0px, 150px);
    background: linear-gradient(
      rgba(255, 143, 178, 0.9) 0%,
      rgba(167, 151, 255, 0.9) 25%,
      rgba(167, 151, 255, 0.9) 50%,
      rgba(0, 0, 0, 0) 100%
    );
    transition-timing-function: ease;
    transition-duration: 0.5s;
    transition-property: transform, background;
  }

  &.full {
    transform: translate(0px, 0px);
    background: linear-gradient(
      rgba(255, 143, 178, 0.95) 0%,
      rgba(167, 151, 255, 0.95) 50%,
      rgba(167, 151, 255, 0.95) 100%
    );
    transition-timing-function: ease;
    transition-duration: 0.5s;
    transition-property: transform, background;
  }
`;

function CardOverlay(props: IProps) {
  const { children, display } = props;
  return <StyledCardOverlay className={display}>{children}</StyledCardOverlay>;
}

export default CardOverlay;
