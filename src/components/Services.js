import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Services = ({ services }) => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <p className="fs-5 fw-bold text-primary">Our Services</p>
          <h1 className="display-5 mb-5">Services That We Offer For You</h1>
        </div>
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.title} className="col-lg-4 col-md-6 wow fadeInUp">
              <div className="service-item rounded d-flex h-100">
                <div className="service-img rounded">
                  <Image
                    src={service.image}
                    layout="responsive"
                    loading="lazy"
                    width={550}
                    height={550}
                    className="img-fluid"
                    alt={service.title}
                  />
                </div>
                <div className="service-text rounded p-5">
                  <div className="btn-square rounded-circle mx-auto mb-3">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={64}
                      height={64}
                    />
                  </div>
                  <h4 className="mb-3">{service.title}</h4>
                  <p className="mb-4">{service.description}</p>
                  <a className="btn btn-sm" href="">
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="text-primary me-2"
                    />
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
