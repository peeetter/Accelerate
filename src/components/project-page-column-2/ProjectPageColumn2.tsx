import { format } from "date-fns";
import React from "react";
import { ProjectWithDescription } from "../../pages/ost";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import "./ProjectPageColumn2.scss";

type Props = {
  project: ProjectWithDescription | undefined; //Här fel
  handleFileChange: (event: any) => void;
  openModal: () => void;
};

const ProjectPageColumn2 = ({
  project,
  handleFileChange,
  openModal,
}: Props) => {
  const functionToSetFileName = () => {
    const actualBtn = document.getElementById("upload-real-btn");

    const newBtn = document.getElementById("file-chosen");

    let ost = document.getElementById("upload-real-btn")?.onchange;
    console.log(actualBtn);
  };

  return (
    <div className="project-page-column-2">
      {functionToSetFileName()}
      <div className="project-page-facts">
        <div className="project-page-facts-content">
          {/* <label className="project-page-apply-header">Sök uppdraget</label> */}
          <h3>Sök uppdraget</h3>
          <div className="project-page-apply-content-apply">
            <FlexContainer flexDirection="column">
              <label className="label-apply" htmlFor="name">
                Namn
              </label>
              <input id="name" type="name" name="name" required autoFocus />
            </FlexContainer>
          </div>
          <div className="project-page-apply-content-apply">
            <FlexContainer flexDirection="column">
              <label className="label-apply" htmlFor="email">
                Email
              </label>
              <input id="email" type="email" name="email" required />
            </FlexContainer>
          </div>
          <div className="project-page-apply-content-apply">
            <FlexContainer flexDirection="column">
              <label className="label-apply" htmlFor="tel">
                Telefon
              </label>
              <input id="tel" type="tel" name="tel" required />
            </FlexContainer>
          </div>
          <div className="project-page-apply-content-apply">
            {/* <label className="label-apply">CV</label>{" "} */}
            <label htmlFor="upload" className="label-apply">
              CV
            </label>{" "}
            <FlexContainer>
              <input
                name="upload"
                id="upload-real-btn"
                type="file"
                onChange={handleFileChange}
                hidden
              ></input>

              <label htmlFor="upload-real-btn" className="upload-btn">
                Bläddra
              </label>
              <span id="file-chosen">No file chosend</span>
            </FlexContainer>
          </div>
          <div className="project-page-apply-content-apply">
            <FlexContainer flexDirection="column">
              <label className="label-apply" htmlFor="message">
                Meddelande
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Beskriv kort varför du passar för uppdraget"
                required
                rows={3}
              />
            </FlexContainer>
          </div>
          <div className="project-page-apply-content-apply">
            <button onClick={openModal}>Ansök</button>
          </div>
        </div>
      </div>
      <div className="project-page-apply">
        <div className="project-page-apply-content">
          <div className="project-page-apply-content-content">
            <h3>Ytterliggare frågor?</h3>
            Skicka ett mail till accelerate@forefront.se
            <div className="project-page-apply-content-deadline">
              {project?.deadlineDate !== undefined
                ? "Deadline: " +
                  format(new Date(project.deadlineDate), "yyyy-MM-dd")
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageColumn2;
function functionToSetFileName(): React.ReactNode {
  throw new Error("Function not implemented.");
}
