import React from "react";
import { servicesData } from "@/data/HomePage";
import Services from "./../../components/Services";
import PageHeader from "@/components/PageHeader";
import { servicesPageHeader } from "@/data/HomePage";
const ServicesPage = () => {
  return (
    <>
      <PageHeader pageHeader={servicesPageHeader} />
      <Services services={servicesData} />
    </>
  );
};

export default ServicesPage;
