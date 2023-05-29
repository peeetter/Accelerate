import React from "react";
import "./HowWeWorkSection.scss";
import ContentContainer from "../ContentContainer/ContentContainer";

export const HowWeWorkSection = () => {
  return (
    <ContentContainer>
      <div id="how-we-work-anchor" className="how-we-work-section-wrapper">
        <h2>Om Accelerate</h2>
        <p className="qoute">
          <i>
            ”Allt fler väljer idag att köra eget, det är en trend som varat de
            senaste tio åren och förväntas hålla i sig. Vi tror på ett ekosystem
            där vi jobbar tillsammans för att skapa värde. För att lösa
            kundernas utmaningar behöver fokus ligga på människors engagemang,
            kompetens och känsla av sammanhang, inte anställningsform.” Leyla
            Scheiber, VD Accelerate
          </i>
        </p>
        <p className="item">
          Vi erbjuder enmansbolag och nischbolag ett nytt sammanhang där
          missionen är tydlig; att göra småföretagandet för tech-konsulter mer
          utvecklande genom att kombinera rätt uppdrag med relevant
          kompetensutveckling med hjälp av utbildning, moderna tekniker och
          närhet till kund.
        </p>
      </div>
    </ContentContainer>
  );
};
interface ReasonProps {
  header: string;
  body: string;
  image: string;
}
const Reason: React.FC<ReasonProps> = ({ header, body, image }) => (
  <div className="reason">
    <img src={image} alt={header} />
    <h4>{header}</h4>
    <p>{body}</p>
  </div>
);
