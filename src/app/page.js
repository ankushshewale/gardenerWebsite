import HeaderCarousel from "@/components/HeaderCarousel";
import React from "react";

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

  return (
    <React.Fragment>
      <HeaderCarousel items={carouselData} />
    </React.Fragment>
  );
}
