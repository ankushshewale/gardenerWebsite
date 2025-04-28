import React from "react";
import { aboutUsPageHeader, factsData } from "@/data/HomePage";
import PageHeader from "@/components/PageHeader";
import HomeAbout from "@/components/HomeAbout";
import Facts from "@/components/Facts";

const AboutUs = () => {
  return (
    <>
      <PageHeader pageHeader={aboutUsPageHeader} />
      <HomeAbout />
      <Facts facts={factsData} />
    </>
  );
};

export default AboutUs;
