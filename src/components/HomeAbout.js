import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faUsers } from "@fortawesome/free-solid-svg-icons";

const HomeAbout = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-end">
            <div className="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
              <Image
                src={"/images/about.jpg"}
                layout="responsive"
                width={282}
                height={564}
                className="img-fluid rounded"
                alt="Home About"
              />
            </div>
            <div className="col-lg-6 col-md-7 wow fadeInUp" data-wow-delay="0.3s">
              <h1 className="display-1 text-primary mb-0">25</h1>
              <p className="text-primary mb-4">Year of Experience</p>
              <h1 className="display-5 mb-4">We Make Your Home Like A Garden</h1>
              <p className="mb-4">
                Experience nature at home with our thoughtfully designed green
                spaces. We create lush, vibrant environments where you can
                unwind, rejuvenate, and reconnect with the beauty of the
                outdoors.
              </p>
              <a className="btn btn-primary py-3 px-4" href="">
                Explore More
              </a>
            </div>
            <div className="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
              <div className="row g-5">
                <div className="col-12 col-sm-6 col-lg-12">
                  <div className="border-start ps-4">
                    <FontAwesomeIcon
                      icon={faAward}
                      className="fa-3x text-primary mb-3"
                    />
                    <h2 className="mb-3">Award Winning</h2>
                    <span>
                      Recognized for outstanding quality and creativity,
                      delivering results that consistently exceed expectations.
                    </span>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-12">
                  <div className="border-start ps-4">
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="fa-3x text-primary mb-3"
                    />
                    <h2 className="mb-3">Dedicated Team</h2>
                    <span>
                      A passionate team of professionals committed to bringing
                      your vision to life with care, skill, and attention to
                      detail.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
