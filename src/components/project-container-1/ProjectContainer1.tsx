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
};

const ProjectContainer1 = ({
  citiesOfWorkplace,
  searchValue,
  handleCityChange,
  searchProjects,
}: Props) => {
  return (
    <div className="projects-container-1">
      <div className="projects-container-1-content">
        <div className="projects-container-1-content-child">
          <h4>Sök</h4>
          <input
            placeholder="Java, projekledare etc"
            value={searchValue}
            onChange={(e) => searchProjects(e.target.value)}
          />
        </div>
        <div className="projects-container-1-content-child">
          <h4>Visa enbart viss stad</h4>

          <select onChange={handleCityChange} className="select-dropdown">
            <option value={"VISA ALLA"}> Visa alla </option>

            {citiesOfWorkplace.map((city) => (
              <option value={city}>{city}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer1;
