import React, { useState } from "react";
import "./ApplyForAssignmentForm.scss";
import { FormSpreeState } from "../../types/FormSpreeState";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import OutsideAlerter from "../outside-alerter/OutsideAlerter";
import { animated, config, useSpring } from "react-spring";
import { ValidationError } from "@formspree/react";
import { CloseButton } from "../close-button/CloseButton";
import { Link } from "gatsby";
import { ClipLoader } from "react-spinners";

interface Props {
  onOutsideClick: () => void;
  formSpreeState: FormSpreeState;
  handleSubmit: any;
}

export const ApplyForAssignmentForm: React.FC<Props> = ({
  onOutsideClick,
  formSpreeState,
  handleSubmit,
}) => {
  const [checked, setChecked] = useState(false);
  const [selectedFile, setSelectedFile] = useState();

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const transition = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: 1,
    },
    config: { ...config.stiff, tension: 300 },
  });

  return (
    <animated.div className="contact-form-wrapper" style={transition}>
      <OutsideAlerter outsideClickCallback={onOutsideClick}>
        <form className="content" onSubmit={handleSubmit}>
          <CloseButton onClick={onOutsideClick} />
          <h2>Anmäl</h2>
          <p>Skicka in ditt CV så hör vi av oss!</p>
          <FlexContainer flexDirection="column">
            <label htmlFor="name">Namn</label>
            <input id="name" type="name" name="name" required autoFocus />
          </FlexContainer>

          <FlexContainer flexDirection="column">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required />
          </FlexContainer>
          <ValidationError
            prefix="Email"
            field="email"
            errors={formSpreeState.errors}
          />

          <FlexContainer flexDirection="column">
            <label htmlFor="tel">Telefon</label>
            <input id="tel" type="tel" name="tel" required />
          </FlexContainer>
          <ValidationError
            prefix="Telefon"
            field="tel"
            errors={formSpreeState.errors}
          />

          <FlexContainer flexDirection="column">
            <label htmlFor="message">
              Beskriv kort varför du passar för uppdraget
            </label>
            <textarea id="message" name="message" required rows={3} />
          </FlexContainer>
          <FlexContainer>
            <label htmlFor="fileupload">Ladda upp CV</label>
            <input
              name="upload"
              type="file"
              onChange={handleFileChange}
            ></input>
          </FlexContainer>
          <FlexContainer justifyContent="flex-end">
            <FlexContainer>
              <input
                name="gdpr"
                type="checkbox"
                onChange={() => setChecked((prev) => !prev)}
                checked={checked}
              />
              <label>
                <span onClick={() => setChecked((prev) => !prev)}>
                  Jag godkänner Accelerates{" "}
                </span>
                <Link className="button-link" to={"/gdpr"} target="_blank">
                  GDPR-policy
                </Link>
              </label>
            </FlexContainer>
          </FlexContainer>

          <FlexContainer
            justifyContent="space-between"
            className="button-container"
          >
            <div>
              <button className="button-inverted" onClick={onOutsideClick}>
                STÄNG
              </button>
            </div>

            {formSpreeState.submitting ? (
              <div className="loader-container">
                <ClipLoader size="40px" color={"#a36dc6"} loading={true} />
              </div>
            ) : (
              <button disabled={!checked}>SKICKA</button>
            )}
          </FlexContainer>
        </form>
      </OutsideAlerter>
    </animated.div>
  );
};
