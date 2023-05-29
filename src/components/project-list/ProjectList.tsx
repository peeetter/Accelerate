import React from "react";
import { Project } from "../../pages/avrop";
import ProjectListItem from "../project-list-item/ProjectListItem";
import "./ProjectList.scss";

type Props = {
  projects: Project[];
};

const ProjectList = ({ projects }: Props) => {
  return (
    <div className="project-list-div">
      <table className="project-list-table">
        <tr className="project-list-table-header">
          <th align="left">
            <h4 className="project-list-table-th">Uppdrag</h4>
          </th>
          <th align="left">
            <h4 className="project-list-table-th">Plats</h4>
          </th>
          <th align="left">
            <h4 className="project-list-table-th">Skapad</h4>
          </th>
          <th align="left">
            <h4 className="project-list-table-th">Deadline</h4>
          </th>
        </tr>
        {projects.map((p) => (
          <ProjectListItem key={p.cinodeId} project={p} />
        ))}
      </table>
    </div>
  );
};

export default ProjectList;
