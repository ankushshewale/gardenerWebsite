import React from "react";
import { servicesData } from "@/data/HomePage";
import Services from "./../../components/Services";
import PageHeader from "@/components/PageHeader";
const ServicesPage = () => {
  const servicesPageHeader = {
    title: "Our Services",
    breadcrumbs: [
      { label: "Home", link: "/" },
      { label: "Services", active: true },
    ],
  };

  return (
    <>
      <PageHeader pageHeader={servicesPageHeader} />
      <Services services={servicesData} />
    </>
  );
};

export default ServicesPage;
