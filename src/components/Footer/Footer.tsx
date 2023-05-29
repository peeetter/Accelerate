import React, { FunctionComponent } from "react";
import Location from "../../images/location.svg";
import "./Footer.scss";

const Footer: FunctionComponent = () => {
  return (
    <div className="footer">
      <div className="footer-background" />
      <div className="footer-content">
        <div className="footer-column">
          <div>
            <span className="header">Om oss</span>
          </div>
          <span className="text">Org.nr: 556&zwj;852&zwj;-&zwj;1529</span>
          <span className="text">Forefront Accelerate AB</span>
          <span className="text">Holländargatan 13</span>
          <span className="text">111 36 Stockholm</span>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Forefront+Consulting+Group/@59.3367441,18.0603169,15z/data=!4m2!3m1!1s0x0:0xc140ccc3e9a1762b?sa=X&ved=2ahUKEwjVsoHf7OD2AhWfRfEDHYL7A6YQ_BJ6BAg1EAU"
          >
            <span className="text">
              <img src={Location} alt="Location" /> Hitta oss
            </span>
          </a>
        </div>
        <div className="footer-column">
          <div>
            <span className="header">Kontakt</span>
          </div>
          <span className="text">+46 (0)8 410 600 00</span>
          <span className="text">accelerate@forefront.se</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
