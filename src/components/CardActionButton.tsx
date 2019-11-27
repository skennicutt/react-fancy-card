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
  width: 64px;
  height: 64px;
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const StyledCardActionIcon = styled(Octicon)`
  display: block;
  margin: auto;
  height: 100%;
`;

function CardActionButton(props: IProps) {
  const { icon, onHover, onClickDown, onClickUp } = props;
  return (
    <StyledCardActionButton
      onMouseOut={() => onHover(false)}
      onMouseOver={() => onHover(true)}
      onMouseDown={() => onClickDown()}
      onMouseUp={() => onClickUp()}
    >
      <StyledCardActionIcon size="medium" icon={icon} />
    </StyledCardActionButton>
  );
}

export default CardActionButton;
