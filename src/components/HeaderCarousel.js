"use client";
import React, { useState } from "react";
import Image from "next/image";

const HeaderCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      className="container-fluid p-0 wow fadeIn"
      style={{
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeIn",
      }}
    >
      <div id="header-carousel" className="carousel slide">
        <div className="carousel-inner">
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              src={item.src}
              heading={item.heading}
              buttonText={item.buttonText}
              isActive={index === currentIndex}
            />
          ))}
        </div>

        {/* Prev button */}
        <button
          className="carousel-control-prev"
          type="button"
          onClick={goToPrevious}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Next button */}
        <button
          className="carousel-control-next"
          type="button"
          onClick={goToNext}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

const CarouselItem = ({ src, heading, buttonText, isActive }) => {
  return (
    <div className={`carousel-item ${isActive ? "active" : ""}`}>
      <Image
        className="w-100"
        src={src}
        alt="Image"
        layout="responsive"
        priority={true}
        objectFit="cover"
        width={1920}
        height={1080}
      />
      <div className="carousel-caption">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-1 text-white mb-5 slideInDown">
                {heading}
              </h1>
              <a href="#" className="btn btn-primary py-sm-3 px-sm-4">
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCarousel;
