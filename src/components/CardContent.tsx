import * as React from "react";
import styled from "styled-components";

const StyledCardContent = styled.div`
  p {
    margin-top: 0.2rem;
    font-size: 0.8rem;
  }

  h5 {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const StyledCardContentHeader = styled.div`
  display: flex;
  margin-top: 0.2rem;
`;

const StyledCardContentSubject = styled.h3`
  align-self: stretch;
  flex: 2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 3rem;
  margin-top: 0;
  margin-bottom: 0;
`;

const StyledCardContentScheduledTime = styled.div`
  align-self: flex-end;
  margin-top: 0;
  text-align: right;

  h5 {
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    font-size: 0.8rem;
    line-height: 0.8rem;
  }
`;

const StyledMessage = styled.div`
  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const StyledMessageOverview = styled.div``;

const StyledRecipientList = styled.div``;

function CardContent(props) {
  return (
    <StyledCardContent>
      <StyledCardContentHeader>
        <StyledCardContentSubject aria-label="Subject">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </StyledCardContentSubject>
        <StyledCardContentScheduledTime aria-label="Next Scheduled Send Time">
          <h5>Sends next on</h5>
          <p>12:00 PM MST</p>
          <p>2019/11/11</p>
        </StyledCardContentScheduledTime>
      </StyledCardContentHeader>
      <StyledMessage>
        <h5 id="message">Message</h5>
        <p aria-labelledby="message">
          Spicy jalapeno bacon ipsum dolor amet biltong salami aute corned beef
          capicola sunt. Beef veniam est beef ribs pancetta tempor spare ribs
          pig filet mignon dolor laboris aliquip tri-tip ipsum in. Sed shank
          dolor adipisicing, cupim aliquip non cupidatat dolore. Velit cupidatat
          tongue boudin ribeye. Do incididunt beef ribs, brisket spare ribs
          hamburger laboris aliquip velit. Labore turkey ipsum sint tri-tip, ut
          filet mignon shank magna tempor culpa brisket.
        </p>
      </StyledMessage>
      <StyledMessageOverview>
        <h5 id="reportSchedule">Report Schedule</h5>
        <p aria-labelledby="reportSchedule">
          Sends every Mon, Weds, Thurs, and Friday every 3rd week.
        </p>
      </StyledMessageOverview>
      <StyledRecipientList>
        <h5 id="recipients">Sent To</h5>
        <p aria-labelledby="recipients">
          stephen.kennicutt@test.testy.com{" "}
          <a href="some reference here">+4 more...</a>
        </p>
      </StyledRecipientList>
    </StyledCardContent>
  );
}

export default CardContent;
