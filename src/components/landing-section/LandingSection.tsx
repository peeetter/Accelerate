import { Link } from "gatsby";
import React from "react";
import Image from "../../images/hero.png";
import ButtonLink from "../button-link/ButtonLink";
import ContentContainer from "../ContentContainer/ContentContainer";

import "./LandingSection.scss";
interface Props {
  openModal: () => void;
  setShowProjects: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LandingSection: React.FC<Props> = ({
  openModal,
  setShowProjects,
}) => {
  return (
    <ContentContainer className="landing-section-wrapper">
      <div className="landing-section">
        <div className="left-side">
          <h1>Välj din väg framåt</h1>
          <p>
            Vi hjälper mindre tgatsbyech-företag och dig som enmanskonsult ut i
            spännande uppdrag. Din tid är det viktigaste du har. Vårt mål är att
            se till att du utvecklas, trivs och gör det mesta du kan av den
            tiden i din konsultroll. Tillsammans med kunder och nätverk
            utvecklas vi tillsammans och strävar alltid efter de roligaste
            uppdragen och konstant kompetensutveckling. Låt oss ta nästa steg
            tillsammans!
          </p>
          <div className="button-container">
            <button onClick={openModal}>REGISTRERA DIG</button>

            <Link to={"/avrop"}>Våra uppdrag</Link>
            {/* <button
              className="projects"
              onClick={() => setShowProjects((prev) => !prev)}
            >
              VÅRA UPPDRAG
            </button> */}
          </div>
        </div>
        <div className="right-side">
          <img src={Image} alt="Happy lady" className="image-wrapper" />
        </div>
      </div>
    </ContentContainer>
  );
};
