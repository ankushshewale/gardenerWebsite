import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <React.Fragment>
      {/* <!-- Topbar Start --> */}
      <div className="container-fluid bg-dark text-light px-0 py-2">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center me-4">
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              <span>+012 345 6789</span>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              <span>info@example.com</span>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center mx-n2">
              <span>Follow Us:</span>
              <a className="btn btn-link text-light" href="">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a className="btn btn-link text-light" href="">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a className="btn btn-link text-light" href="">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a className="btn btn-link text-light" href="">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar Start --> */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a
          href="index.html"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h1 className="m-0">Gardener</h1>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="index.html" className="nav-item nav-link active">
              Home
            </a>
            <a href="about.html" className="nav-item nav-link">
              About
            </a>
            <a href="service.html" className="nav-item nav-link">
              Services
            </a>
            <a href="project.html" className="nav-item nav-link">
              Projects
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu bg-light m-0">
                <a href="feature.html" className="dropdown-item">
                  Features
                </a>
                <a href="quote.html" className="dropdown-item">
                  Free Quote
                </a>
                <a href="team.html" className="dropdown-item">
                  Our Team
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="404.html" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <a
            href=""
            className="btn btn-primary py-4 px-lg-4 rounded-0 d-none d-lg-block"
          >
            Get A Quote
            <FontAwesomeIcon icon={faArrowRight} className="ms-3" />
          </a>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </React.Fragment>
  );
};

export default Navbar;
