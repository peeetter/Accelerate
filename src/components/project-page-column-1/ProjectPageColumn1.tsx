import { format } from "date-fns";
import React from "react";
import { ProjectWithDescription } from "../../pages/ost";
import "./ProjectPageColumn1.scss";

type Props = {
  project: ProjectWithDescription | undefined;
};

const ProjectPageColumn1 = ({ project }: Props) => {
  return (
    <div className="project-page-column-1">
      <div className="project-page-assignment">
        <div className="project-page-header">{project?.title}</div>
        <div className="facts-div">
          <div className="facts-div-item">
            <div className="facts-div-item-header">Start</div>
            <div className="facts-div-item-text">
              {project?.startDate === undefined
                ? ""
                : format(new Date(project.startDate), "yyyy-MM-dd")}
            </div>
          </div>
          <div className="facts-div-item">
            <div className="facts-div-item-header">Slutdatum</div>
            <div className="facts-div-item-text">
              {project?.endDate === undefined
                ? " tills vidare"
                : format(new Date(project.endDate), "yyyy-MM-dd")}
            </div>
          </div>
          <div className="facts-div-item">
            <div className="facts-div-item-header">Plats</div>
            <div className="facts-div-item-text">{project?.city}</div>
          </div>
        </div>
        <div className="project-page-assignment-content">
          <div className="description-header">Uppdragsbeskrivning:</div>
          <div className="description-text">{project?.description}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageColumn1;
