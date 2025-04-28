import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const BaseFooter = () => {
  return (
    <React.Fragment>
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Our Office</h4>
              <p className="mb-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-3" />
                123 Street, New York, USA
              </p>
              <p className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="me-3" />
                +012 345 67890
              </p>
              <p className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                info@example.com
              </p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  href=""
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  href=""
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  href=""
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a
                  className="btn btn-square btn-outline-light rounded-circle me-2"
                  href=""
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Services</h4>
              <Link className="btn btn-link" href="/services">
                <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                Landscaping
              </Link>
              <Link className="btn btn-link" href="/services">
                <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                Pruning plants
              </Link>
              <Link className="btn btn-link" href="/services">
                <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                Urban Gardening
              </Link>
              <Link className="btn btn-link" href="/services">
                <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                Garden Maintenance
              </Link>
              <Link className="btn btn-link" href="/services">
                <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                Green Technology
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Quick Links</h4>
              <Link className="btn btn-link" href="/about">
                <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                About Us
              </Link>
              <Link className="btn btn-link" href="/about">
                <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                Contact Us
              </Link>
              <Link className="btn btn-link" href="/about">
                <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                Our Services
              </Link>
              <Link className="btn btn-link" href="/about">
                <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                Terms & Condition
              </Link>
              <Link className="btn btn-link" href="/about">
                <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                Support
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-4">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className="position-relative w-100">
                <input
                  className="form-control bg-light border-light w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      {/* <!-- Copyright Start --> */}
      <div className="container-fluid copyright py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom" href="#">
                Gardener
              </a>
              , All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              {/* <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
              Designed By{" "}
              <a className="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Copyright End --> */}
    </React.Fragment>
  );
};

export default BaseFooter;
