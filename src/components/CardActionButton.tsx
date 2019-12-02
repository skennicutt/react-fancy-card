import * as React from "react";
import styled, { ThemeContext } from "styled-components";
import Octicon, { Icon } from "@primer/octicons-react";

interface IProps {
  icon: Icon;
  onHover: (isHovering: boolean) => void;
  onClickDown: () => void;
  onClickUp: () => void;
}

const StyledCardActionButton = styled.div`
  height: 64px;
  width: auto;
  flex-grow: 1;
  display: inline-block;
  margin: 0;
  text-align: center;

  &:hover,
  &:focus {
    outline: solid 1px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.1);
  }

  &:active {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const StyledCardActionIcon = styled(Octicon)`
  display: block;
  margin: auto;
  height: 100%;
`;

const isEnterOrSpace = (keyboardEvent: React.KeyboardEvent) => {
  return keyboardEvent.key === "Enter" || keyboardEvent.key === " ";
};

function CardActionButton(props: IProps) {
  const { icon, onHover, onClickDown, onClickUp } = props;
  return (
    <StyledCardActionButton
      role="button"
      aria-pressed="mixed"
      tabIndex={0}
      onMouseOut={() => onHover(false)}
      onMouseOver={() => onHover(true)}
      onBlur={() => onHover(false)}
      onFocus={() => onHover(true)}
      onMouseDown={() => onClickDown()}
      onMouseUp={() => onClickUp()}
      onKeyDown={event => (isEnterOrSpace(event) ? onClickDown() : null)}
      onKeyUp={event => (isEnterOrSpace(event) ? onClickUp() : null)}
    >
      <StyledCardActionIcon size="medium" icon={icon} />
    </StyledCardActionButton>
  );
}

export default CardActionButton;
