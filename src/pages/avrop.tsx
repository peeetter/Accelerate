import { useForm } from "@formspree/react";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import { ContactForm } from "../components/contact-form/ContactForm";
import { Header } from "../components/Header";
import ProjectContainer1 from "../components/project-container-1/ProjectContainer1";
import ProjectList from "../components/project-list/ProjectList";

export type Project = {
  cinodeId: number;
  deadlineDate: Date;
  title: String;
  allowRemote: Boolean;
  startDate: Date | null;
  endDate: Date | null;
  city: string;
  displayName: String;
  announcedDate: Date;
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const openModal = () => setIsModalOpen(true);
  const [state, handleSubmit, resetForm] = useForm("mknyvnlp");
  const closeModal = () => setIsModalOpen(false);
  const [citiesOfWorkplace, setCitiesOfWorkplace] = useState<string[]>([]);
  const [projectsList, setProjectsList] = useState<Project[]>([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/getAllAssignments")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setProjectsList(data);
        let places: string[] = [];
        data.forEach((x: { city: string }) => {
          if (!places.includes(x.city)) {
            places.push(x.city);
          }
        });
        console.log("places:" + places);
        setCitiesOfWorkplace(places);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  {
    /* SELECT */
  }

  let [selectedCity, setSelectecCity] = useState("Välj stad");

  let handleCityChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchValue("");
    setSelectecCity(e.target.value);
    if (e.target.value === "VISA ALLA") {
      setProjectsList(projects);
    } else {
      let projectsInSelectedCity: Project[] = setProjectsToShowInProjectList(
        e.target.value
      );
      setProjectsList(projectsInSelectedCity);
    }
  };

  let setProjectsToShowInProjectList = (
    cityName: React.SetStateAction<string>
  ) => {
    let projectsMatchingCities: Project[] = [];

    projects.forEach((x) => {
      if (x.city === cityName) {
        projectsMatchingCities.push(x);
      }
    });
    return projectsMatchingCities;
  };

  let searchProjects = (searchValue: any) => {
    setSearchValue(searchValue);

    let projectsMatchingCritera: Project[] = [];

    projects.filter((x) => {
      if (
        x.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      ) {
        projectsMatchingCritera.push(x);
      }
      setProjectsList(projectsMatchingCritera);
    });
  };

  return (
    <>
      <Header />
      <div className="project-outer">
        <Helmet>
          <title>Lediga uppdrag</title>
        </Helmet>
        <div className="projectsdiv">
          <h3>Lediga uppdrag</h3>
          <p>Här finns de uppdrag vi just nu söker konsulter till.</p>
          <p>
            Hittar du inget uppdrag som passar dig? Eller vill du få
            uppdragförfrågningar utskickade till dig direkt? <br />
            <u className="link-sign-up" onClick={openModal}>
              Signa upp i vårt nätverk
            </u>{" "}
            så skickar vi ut förfrågningar så fort vi har något som matchar din
            profil.
          </p>
          <div className="projects-container">
            <ProjectContainer1
              citiesOfWorkplace={citiesOfWorkplace}
              searchProjects={searchProjects}
              handleCityChange={handleCityChange}
              searchValue={searchValue}
            />

            <div className="projects-container-2">
              <ProjectList projects={projectsList} />
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ContactForm
          onOutsideClick={closeModal}
          formSpreeState={state}
          handleSubmit={handleSubmit}
        />
      )}
      <Toaster />
    </>
  );
};

export default Projects;
