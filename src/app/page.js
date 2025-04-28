import React from "react";
import HeaderCarousel from "@/components/HeaderCarousel";
import TopFeatureStart from "@/components/TopFeatureStart";
import HomeAbout from "@/components/HomeAbout";
import { faTimes, faUsers, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const carouselData = [
    {
      src: "/images/carousel-1.jpg",
      heading: "Make Your Home Like Garden",
      buttonText: "Explore More",
    },
    {
      src: "/images/carousel-2.jpg",
      heading: "Create Your Own Small Garden At Home",
      buttonText: "Explore More",
    },
  ];

  const topFeatureData = [
    {
      icon: faTimes,
      heading: "No Hidden Cost",
      subHeading:
        "Transparent pricing with no surprise charges or hidden fees.",
    },
    {
      icon: faUsers,
      heading: "Dedicated Team",
      subHeading:
        "Our experienced professionals are committed to your success.",
    },
    {
      icon: faPhone,
      heading: "24/7 Available",
      subHeading:
        "Reach out to us anytime, our support team is always ready.",
    },
  ];
  return (
    <React.Fragment>
      <HeaderCarousel items={carouselData} />
      <TopFeatureStart features={topFeatureData} />
      <HomeAbout />
    </React.Fragment>
  );
}
