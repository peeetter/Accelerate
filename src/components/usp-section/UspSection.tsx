import React from "react";
import "./UspSection.scss";
import ImgOne from "../../images/2_1.svg";
import ImgTwo from "../../images/2_2.svg";
import ImgThree from "../../images/2_3.svg";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import ContentContainer from "../ContentContainer/ContentContainer";

const HEADER_1 = "Rätt uppdrag";
const HEADER_2 = "Academy";
const HEADER_3 = "Inspirerande sammanhang";

const CONTENT_1 =
  "Med tekniken som möjliggörare bidrar vi till våra kunders affärs- och verksamhetsutveckling. Vi är en nyfiken, modig och oberoende partner som utmanar, navigerar och hjälper våra kunder att förbli relevanta.";

const CONTENT_2 =
  "Tillsammans med Forefront Academy skapar vi möjlighet till förmånlig access till modern kompetensutveckling i form av akademier, utbildningar, certifiering, runda-bordssamtal och seminarier.";
const CONTENT_3 =
  "Vi tror på att träffas och göra saker tillsammans. Gemenskap och erfarenhetsutbyte är viktigt och utvecklande och därför skapar vi mötesplatser och nätverk på olika sätt.";

export const UspSection = () => {
  return (
    <ContentContainer>
      <div id="usp-section-anchor" className="usp-section-wrapper">
        <h2>Varför Accelerate?</h2>

        <div className="usps">
          <Usp header={HEADER_1} body={CONTENT_1} image={ImgOne} />
          <Usp header={HEADER_2} body={CONTENT_2} image={ImgThree} />
          <Usp header={HEADER_3} body={CONTENT_3} image={ImgTwo} />
        </div>

        <div className="usps-mobile">
          <Usp
            header={HEADER_1}
            body={CONTENT_1}
            image={ImgOne}
            isMobile={true}
          />
          <Usp
            header={HEADER_2}
            body={CONTENT_2}
            image={ImgTwo}
            isMobile={true}
          />
          <Usp
            header={HEADER_3}
            body={CONTENT_3}
            image={ImgThree}
            isMobile={true}
            imgClass="smaller-image"
          />
        </div>
      </div>
    </ContentContainer>
  );
};

interface UspProps {
  header: string;
  body: string;
  image: string;
  isMobile?: boolean;
  imgClass?: string;
}
const Usp: React.FC<UspProps> = ({
  header,
  body,
  image,
  isMobile = false,
  imgClass = "",
}) =>
  isMobile ? (
    <div className="usp-mobile">
      <FlexContainer alignItems="center">
        <div className="image-container">
          <img src={image} alt={header} className={imgClass} />
        </div>
        <h4>{header}</h4>
      </FlexContainer>
      <p>{body}</p>
    </div>
  ) : (
    <div className="usp">
      <img src={image} alt={header} />
      <h4>{header}</h4>
      <p>{body}</p>
    </div>
  );
