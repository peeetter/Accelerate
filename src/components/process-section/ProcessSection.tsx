import React from "react";
import "./ProcessSection.scss";
import ContentContainer from "../ContentContainer/ContentContainer";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import FadeIn from "../fade-in/FadeIn";
interface Props {
  openModal: () => void;
}
export const ProcessSection: React.FC<Props> = ({ openModal }) => {
  return (
    <div id="process-section-anchor" className="process-section-wrapper">
      <div className="process-section-background" />
      <ContentContainer className="process-section">
        <h2>Så fungerar Accelerate</h2>
        <div className="process-section-list">
          <Item
            number={1}
            header="Din profil – dina behov"
            text="Registrera dig så vi vet att du finns, vad du kan, vad du vill göra och när."
          />
          <Item
            number={2}
            header="Rätt erbjudande"
            text="När vi har skapat kontakt skickar vi relevanta förfrågningar till dig. När rätt uppdrag dyker upp stämmer vi av kring presentationer, intervjuer, referenser, pris och erbjudanden."
          />
          <Item
            number={3}
            header="Uppdrag och uppföljning "
            text="Väl ute i uppdrag jobbar vi i nära kontakt med kontinuitet för att följa upp att allt känns rätt för dig."
          />
          <FlexContainer
            justifyContent="center"
            alignItems="center"
            margin="16px 0 0 0"
          >
            <button onClick={openModal}>KOM IGÅNG</button>
          </FlexContainer>
        </div>
      </ContentContainer>
    </div>
  );
};

interface ItemProps {
  number: number;
  header: string;
  text: string;
}

const Item: React.FC<ItemProps> = ({ number, header, text }) => (
  <FlexContainer className="item">
    <span className="item-number">{number}</span>
    <FlexContainer flexDirection="column">
      <h3 className="item-header">{header}</h3>
      <p className="item-text">{text}</p>
    </FlexContainer>
  </FlexContainer>
);
