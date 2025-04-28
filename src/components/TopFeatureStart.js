import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopFeatureStart = ({ features }) => {
  return (
    <section className="container-fluid top-feature py-5 pt-lg-0">
      <div className="container py-5 pt-lg-0">
        <div className="row gx-0">
          {features.map((feature) => (
            <div key={feature.heading} className="col-lg-4 wow fadeIn">
              <div
                className="bg-white shadow d-flex align-items-center h-100 px-5"
                style={{ minHeight: "160px" }}
              >
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
                    <FontAwesomeIcon
                      icon={feature.icon}
                      className="text-primary"
                    />
                  </div>
                  <div className="ps-3">
                    <h4>{feature.heading}</h4>
                    <span>{feature.subHeading}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopFeatureStart;
