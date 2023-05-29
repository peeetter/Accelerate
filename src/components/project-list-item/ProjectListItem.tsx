import React, { useState } from "react";
import { Project } from "../../pages/avrop";
import "./ProjectListItem.scss";
import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import AllowRemote from "../allow-remote/AllowRemote";
import { format } from "date-fns";
import { navigate } from "@reach/router";
import { Link } from "gatsby";
import swedish from "date-fns/locale/sv";
import { formatDateMonth } from "../../utils/date";

type Props = {
  project: Project;
};

const ProjectListItem = ({ project }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  return (
    <>
      <tr className="project-list-item-row">
        <td className="project-item-td-city">
          <div className="project-list-item-row-content">
            <div className="project-list-item-row-title">
              <Link
                className="project-item-button-link"
                to={"/ost?id=" + project.cinodeId}
                target="_blank"
              >
                {project.title}
              </Link>
            </div>
            <div className="project-item-row-2">
              <div className="project-item-row-2-1">
                <div className="project-item-row-2-1-calendar">
                  <CalendarDaysIcon className="calendar-icon" />
                </div>
                <div className="project-item-row-2-1-calendar-2">
                  <p className="date-text">
                    {project.startDate === null
                      ? ""
                      : format(new Date(project.startDate), "yyyy-MM-dd")}
                    {project.endDate === null
                      ? " tills vidare"
                      : " - " + format(new Date(project.endDate), "yyyy-MM-dd")}
                  </p>
                </div>
              </div>
              {project.allowRemote && <AllowRemote />}
            </div>
          </div>
        </td>
        <td className="project-item-td-city">
          {project.city !== null && project.city !== "" ? project.city : "n/a"}
        </td>
        <td className="project-item-td-created">
          {formatDateMonth(project.announcedDate)}
        </td>
        <td className="project-item-td-deadline">
          {formatDateMonth(project.deadlineDate)}
        </td>
      </tr>
    </>
  );
};

export default ProjectListItem;

/*
export type Project = {
  cinodeId: number;
  description: String;
  title: String;
  allowRemote: Boolean;
  startDate: Date;
  endDate: Date;
  city: String;
  displayName: String;
};*/
