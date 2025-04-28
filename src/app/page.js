import React from "react";
import HeaderCarousel from "@/components/HeaderCarousel";
import TopFeatureStart from "@/components/TopFeatureStart";
import HomeAbout from "@/components/HomeAbout";
import Facts from "@/components/Facts";
import HomeFeatures from "@/components/HomeFeatures";
import Services from "@/components/Services";
import {
  carouselData,
  topFeatureData,
  factsData,
  servicesData,
} from "@/data/HomePage";

export default function Home() {
  return (
    <React.Fragment>
      <HeaderCarousel items={carouselData} />
      <TopFeatureStart features={topFeatureData} />
      <HomeAbout />
      <Facts facts={factsData} />
      <HomeFeatures />
      <Services services={servicesData} />
    </React.Fragment>
  );
}
