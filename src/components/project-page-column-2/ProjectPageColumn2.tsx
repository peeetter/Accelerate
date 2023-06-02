import { format } from "date-fns";
import React from "react";
import { ProjectWithDescription } from "../../pages/ost";
import { formatDateMonth } from "../../utils/date";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import "./ProjectPageColumn2.scss";

type Props = {
  project: ProjectWithDescription | undefined; //Här fel
  handleFileChange: (event: any) => void;
  openModal: () => void;
  selectedFileName: string;
};

const ProjectPageColumn2 = ({
  project,
  handleFileChange,
  openModal,
  selectedFileName,
}: Props) => {
  return (
    <div className="project-page-column-2">
      <div className="project-page-facts">
        <div className="project-page-facts-content">
          <div className="project-page-apply-content-apply-top">
            <div id="apply-header">
              <h3>Sök uppdraget</h3>
            </div>
            <div id="text-last-day-apply">
              {project?.deadlineDate !== undefined
                ? "Sista ansökningsdag " +
                  formatDateMonth(new Date(project.deadlineDate))
                : ""}
            </div>
          </div>
          <div className="project-page-apply-content-apply">
            <FlexContainer flexDirection="column">
              <label className="label-apply" htmlFor="name">
                Namn:
              </label>
              <input
                id="apply-name"
                type="name"
                name="name"
                required
                autoFocus
              />
            </FlexContainer>
          </div>
          <div className="project-page-apply-content-apply">
            <FlexContainer flexDirection="column">
              <label className="label-apply" htmlFor="email">
                Email:
              </label>
              <input id="apply-email" type="email" name="email" required />
            </FlexContainer>
          </div>
          <div className="project-page-apply-content-apply">
            <FlexContainer flexDirection="column">
              <label className="label-apply" htmlFor="tel">
                Telefon:
              </label>
              <input id="apply-tel" type="tel" name="tel" required />
            </FlexContainer>
          </div>
          <div className="project-page-apply-content-apply">
            <label htmlFor="upload" className="label-apply">
              CV:
            </label>{" "}
            <FlexContainer>
              <input
                name="apply-upload"
                id="upload-real-btn"
                type="file"
                onChange={handleFileChange}
                hidden
              ></input>

              <label htmlFor="upload-real-btn" className="upload-btn">
                Bläddra
              </label>
              {selectedFileName !== "" && (
                <span id="file-chosen">{selectedFileName}</span>
              )}
            </FlexContainer>
          </div>
          <div className="project-page-apply-content-apply">
            <FlexContainer flexDirection="column">
              <label className="label-apply" htmlFor="message">
                Motivering:
              </label>
              <textarea id="apply-message" name="message" required rows={3} />
            </FlexContainer>
            <div className="project-page-apply-content-apply-btn">
              <button onClick={openModal}>Ansök</button>
            </div>
          </div>
        </div>
      </div>
      <div className="project-page-apply">
        <div className="project-page-apply-content">
          <div className="project-page-apply-content-content">
            <h3>Ytterligare frågor?</h3>
            Skicka ett mail till{" "}
            <span id="send-mail-to">accelerate@forefront.se</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageColumn2;
