import React from "react";
import "./AboutUsSection.scss";
import ImgBig from "../../images/about_us_big.png";
import ContentContainer from "../ContentContainer/ContentContainer";

export const AboutUsSection = () => {
  return (
    <div id="aboutus-section-anchor" className="aboutus-section-wrapper">
      <div className="aboutus-section-background" />
      <ContentContainer>
        <div className="aboutus-section">
          <h2>Vi är Accelerate</h2>
          <div className="content">
            <div>
              <img src={ImgBig} alt="Picture of the team" className="big-pic" />
            </div>
            <div className="content-right-side">
              <h3>Team</h3>
              <div className="ball"></div>
              <p>
                <b>Petter Lindström - </b>har delar av hjärtat i Berlin och
                andra i Norrköping. Utöver detta har han flera års erfarenhet av
                systemutveckling och konsultande.
              </p>
              <p>
                <b>Nicklas Norin - </b>med en förkärlek till båtliv och Mallis
                har Nicklas också drivit flera andra bolag inom
                IT-konsultsektorn. 
              </p>
              <p>
                <b>Leyla Schreiber - </b>systemvetare med flera år i
                konsultbranschen som älskar att skratta och äta gott. 
              </p>

              <div className="contact-us-container">
                <a
                  className="button-inverted"
                  href="mailto:accelerate@forefront.se"
                >
                  KONTAKTA OSS
                </a>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};
