"use client";

import React from "react";
import { Parallax } from "react-parallax";
import AnimatedCounter from "./AnimatedCounter";

const Facts = ({ facts }) => {
  return (
    <Parallax
      className="container-fluid facts my-5 py-5"
      bgImage="images/carousel-1.jpg"
      bgImageAlt="the cat"
      strength={500}
      bgStyle={{ opacity: 0.5, background: "rgba(15, 66, 41, 0.6)" }}
      blur={{ min: 0, max: 5 }}
    >
      <div className="container py-5">
        <div className="row g-5">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="col-sm-6 col-lg-3 text-center fadeIn"
            >
              <h1 className="display-4 text-white">
                <AnimatedCounter target={fact.count} duration={2000} />
              </h1>
              <span className="fs-5 fw-semi-bold text-light">{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Parallax>
  );
};

export default Facts;
