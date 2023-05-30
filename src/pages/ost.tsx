import { useForm } from "@formspree/react";
import format from "date-fns/format";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { ApplyForAssignmentForm } from "../components/assignment-apply/ApplyForAssignmentForm";
import { Header } from "../components/Header";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { FlexContainer } from "../components/FlexContainer/FlexContainer";
import ProjectPageColumn1 from "../components/project-page-column-1/ProjectPageColumn1";
import ProjectPageColumn2 from "../components/project-page-column-2/ProjectPageColumn2";

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
  // const [state, handleSubmit, resetForm] = useForm("xgebqden");
  const [state, handleSubmit, resetForm] = useForm("mknyvnlp");
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
          <ProjectPageColumn1 project={project} />
          <ProjectPageColumn2
            handleFileChange={handleFileChange}
            project={project}
            openModal={openModal}
          />
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default ProjectPage;
