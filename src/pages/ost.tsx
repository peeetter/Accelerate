import { useForm } from "@formspree/react";
import format from "date-fns/format";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { ApplyForAssignmentForm } from "../components/assignment-apply/ApplyForAssignmentForm";
import { Header } from "../components/Header";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { FlexContainer } from "../components/FlexContainer/FlexContainer";

export type ProjectWithDescription = {
  cinodeId: number;
  deadlineDate: Date | undefined;
  description: String;
  title: String;
  allowRemote: Boolean;
  startDate: Date | undefined;
  endDate: Date | undefined;
  displayName: String;
  city: String;
};

const ProjectPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const [state, handleSubmit, resetForm] = useForm("xgebqden");
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const notify = () =>
    toast.success("Tack! Vi hör av oss snart", {
      duration: 3500,
    });

  useEffect(() => {
    if (state.succeeded) {
      closeModal();
      notify();
      resetForm();
    }
  }, [state.succeeded]);

  const getIdParameters = () => {
    const params = new URLSearchParams(location.search);
    const param = params.get("id");
    return param;
  };
  const [project, setProject] = useState<ProjectWithDescription>();
  const [selectedFile, setSelectedFile] = useState();
  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getAssignment/" + getIdParameters())
      .then((response) => response.json())

      .then((data) => {
        console.log(data);

        setProject(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="project-page">
        <div className="link-back">
          <div className="arrowlink-back-icon">
            <ArrowLeftIcon className="left-icon" />
          </div>
          <div>
            <Link to={"/avrop"}>Tillbaka</Link>
          </div>
        </div>

        <div className="project-page-columns">
          <div className="project-page-column-1">
            <div className="project-page-assignment">
              <div className="published">
                <span className="published-span">Publicerad:</span>{" "}
                <span className="published-span-date">7 mars</span>
              </div>
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
          <div className="project-page-column-2">
            <div className="project-page-facts">
              <div className="project-page-facts-content">
                <label className="project-page-apply-header">
                  Sök uppdraget
                </label>
                <div className="project-page-apply-content-apply">
                  <FlexContainer flexDirection="column">
                    <label className="label-apply" htmlFor="name">
                      Namn
                    </label>
                    <input
                      id="name"
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
                  <label className="label-apply">CV</label>{" "}
                  <FlexContainer>
                    <input
                      name="upload"
                      type="file"
                      onChange={handleFileChange}
                    ></input>
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
                  <h4>Intresserad av detta uppdrag?</h4>
                  <div className="project-page-apply-content-deadline">
                    {project?.deadlineDate !== undefined
                      ? "Deadline: " +
                        format(new Date(project.deadlineDate), "yyyy-MM-dd")
                      : ""}
                  </div>
                  <div>
                    <p>
                      <h4>Har du frågor?</h4>
                      Skicka ett mail till accelerate@forefront.se
                    </p>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ApplyForAssignmentForm
          onOutsideClick={closeModal}
          formSpreeState={state}
          handleSubmit={handleSubmit}
        />
      )}
      <Toaster />
    </>
  );
};

export default ProjectPage;
