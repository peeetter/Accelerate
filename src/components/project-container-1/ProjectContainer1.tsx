import React from "react";
import "./ProjectContainer1.scss";

type Props = {
  citiesOfWorkplace: string[];
  handleCityChange: (e: {
    target: {
      value: React.SetStateAction<string>;
    };
  }) => void;
  searchValue: string;
  searchProjects: (searchValue: any) => void;
  handleShowLatestFilteredBy: (e: {
    target: {
      value: React.SetStateAction<string>;
    };
  }) => void;
};

const ProjectContainer1 = ({
  citiesOfWorkplace,
  searchValue,
  handleCityChange,
  searchProjects,
  handleShowLatestFilteredBy,
}: Props) => {
  return (
    <div className="projects-container-1">
      <div className="projects-container-1-content">
        <div className="projects-container-1-content-child">
          <label className="projects-container-1-header">Sök</label>
          <input
            id="projects-container-1-content-input"
            //placeholder="Java, projekledare etc"
            value={searchValue}
            onChange={(e) => searchProjects(e.target.value)}
          />
        </div>
        <div className="projects-container-1-content-child">
          <label className="projects-container-1-header">Stad</label>
          <select onChange={handleCityChange} className="select-dropdown">
            <option value={"VISA ALLA"}> Visa alla </option>
            {citiesOfWorkplace.map((city) => (
              <option value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className="projects-container-1-content-child">
          <label className="projects-container-1-header">Sortera på</label>
          <select
            onChange={handleShowLatestFilteredBy}
            className="select-dropdown"
          >
            <option selected value={"S"}>
              Senaste publicerade
            </option>
            <option value={"D"}>Deadline</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer1;
