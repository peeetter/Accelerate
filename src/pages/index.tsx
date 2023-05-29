import { useForm } from "@formspree/react";
import * as React from "react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import { AboutUsSection } from "../components/about-us-section/AboutUsSection";
import { ContactForm } from "../components/contact-form/ContactForm";
import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header";
import { HowWeWorkSection } from "../components/how-we-work-section/HowWeWorkSection";
import { LandingSection } from "../components/landing-section/LandingSection";
import { ProcessSection } from "../components/process-section/ProcessSection";
import { UspSection } from "../components/usp-section/UspSection";
import Projects from "./avrop";

const IndexPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const [state, handleSubmit, resetForm] = useForm("mknyvnlp");

  const [showProjects, setShowProjects] = useState<boolean>(false);

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

  return (
    <main>
      <Helmet>
        <title>Välj din väg framåt - Accelerate</title>
      </Helmet>
      <Header />

      <>
        <LandingSection
          openModal={openModal}
          setShowProjects={setShowProjects}
        />
        <ProcessSection openModal={openModal} />
        <UspSection />
        <AboutUsSection />
        <HowWeWorkSection />
        <Footer />
      </>

      {isModalOpen && (
        <ContactForm
          onOutsideClick={closeModal}
          formSpreeState={state}
          handleSubmit={handleSubmit}
        />
      )}
      <Toaster />
    </main>
  );
};

export default IndexPage;
