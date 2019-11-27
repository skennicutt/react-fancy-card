import * as React from "react";
import styled, { ThemeContext } from "styled-components";
import Octicon, { Pencil, Mail, Trashcan } from "@primer/octicons-react";
import CardActionButton from "./CardActionButton";
import CardOverlay, { CardOverlayDisplayType } from "./CardOverlay";
import FancyCheckMark from "./FancyCheckMark";

interface IProps {
  children?: string | React.ReactElement | React.ReactElement[];
}

const StyledCard = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.backgroundColor};
  max-width: 30rem;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 0 0.8rem 0.1rem ${props => props.theme.colorAccentDropShadow},
    0 20px 30px -10px ${props => props.theme.colorAccentInnerShadow};
`;

const StyledCardOverlay = styled.div`
  &.hidden {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 1;
    transform: translate(0px, 300px);
    background: rgba(0, 0, 0, 0);
  }

  &.hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transform: translate(0px, 200px);
    background: linear-gradient(
      rgba(255, 143, 178, 0.7) 0%,
      rgba(167, 151, 255, 0.7) 25%,
      /* Middle Color */ rgba(167, 151, 255, 0.7) 50%,
      /* First color */ rgba(0, 0, 0, 0.1) 79%,
      /* Gets above the action bar */ rgba(0, 0, 0, 0) 80%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

const StyledContent = styled.div`
  margin: 10px;
`;

const StyledActionBar = styled.div`
  display: flex;
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 1);
  border-top: 1px solid #e0e0e0;
`;

const StyledOverlayContent = styled.div`
  margin: 10px;
  text-align: center;
  h3 {
    color: white;
  }
`;

function Card(props) {
  const { children } = props;
  const [overlayDisplayState, setOverlayDisplayState] = React.useState(
    "hidden" as CardOverlayDisplayType
  );
  const [acceptMouseEvents, setAcceptMouseEvents] = React.useState(true);
  const [overlayDisplayContent, setOverlayDisplayContent] = React.useState(
    null as JSX.Element
  );
  const themeContext = React.useContext(ThemeContext);

  const simpleOverlayContent = (text: string) => (
    <StyledOverlayContent>
      <h3>{text}</h3>
    </StyledOverlayContent>
  );

  const workingOverlayContent = (text: string) => (
    <StyledOverlayContent>
      <h3>{text}</h3>
    </StyledOverlayContent>
  );

  const completedOverlayContent = (text: string) => (
    <StyledOverlayContent>
      <FancyCheckMark />
      <h3>{text}</h3>
    </StyledOverlayContent>
  );

  const failureOverlayContent = (text: string) => (
    <StyledOverlayContent>
      <h3>{text}</h3>
    </StyledOverlayContent>
  );

  return (
    <StyledCard>
      <StyledContent>{children}</StyledContent>
      <CardOverlay display={overlayDisplayState}>
        {overlayDisplayContent}
      </CardOverlay>
      <StyledActionBar>
        <CardActionButton
          icon={Mail}
          onHover={isHovering => {
            if (acceptMouseEvents) {
              setOverlayDisplayContent(
                isHovering ? simpleOverlayContent("Share Now") : null
              );
              setOverlayDisplayState(isHovering ? "hover" : "hidden");
            }
          }}
          onClickUp={() => {
            if (acceptMouseEvents) {
              setAcceptMouseEvents(false);
              setOverlayDisplayContent(workingOverlayContent("Sharing Report"));
              setOverlayDisplayState("full");
              // Ugly as hell, works for a demo
              setTimeout(() => {
                setOverlayDisplayContent(
                  completedOverlayContent("Your report has been shared!")
                );
                setTimeout(() => {
                  setAcceptMouseEvents(true);
                  setOverlayDisplayState("hidden");
                }, 2000);
              }, 2000);
            }
          }}
          onClickDown={() => {
            if (acceptMouseEvents) {
              setOverlayDisplayState("hold");
            }
          }}
        />
        <CardActionButton
          icon={Pencil}
          onHover={isHovering => {
            if (acceptMouseEvents) {
              setOverlayDisplayContent(
                isHovering ? simpleOverlayContent("Edit Report") : null
              );
              setOverlayDisplayState(isHovering ? "hover" : "hidden");
            }
          }}
          onClickUp={() => {
            if (acceptMouseEvents) {
              setOverlayDisplayContent(workingOverlayContent("Editing Report"));
              setOverlayDisplayState("full");
            }
          }}
          onClickDown={() => {
            if (acceptMouseEvents) {
              setOverlayDisplayState("hold");
            }
          }}
        />
        <CardActionButton
          icon={Trashcan}
          onHover={isHovering => {
            if (acceptMouseEvents) {
              setOverlayDisplayContent(
                isHovering ? simpleOverlayContent("Delete Report") : null
              );
              setOverlayDisplayState(isHovering ? "hover" : "hidden");
            }
          }}
          onClickUp={() => {
            if (acceptMouseEvents) {
              setOverlayDisplayContent(
                workingOverlayContent("Deleting Report")
              );
              setOverlayDisplayState("full");
            }
          }}
          onClickDown={() => {
            if (acceptMouseEvents) {
              setOverlayDisplayState("hold");
            }
          }}
        />
      </StyledActionBar>
    </StyledCard>
  );
}

export default Card;
