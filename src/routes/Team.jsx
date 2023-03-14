import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Team.css";
import img from "../img/dad.jpg";

const Team = () => {
  return (
    <div>
      <Navbar />
      <section className="mb-5">
        <div className="container mam">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center mt-3 mb-3">
                <span data-aos="zoom-in">
                  <span className="teamT">Our </span>
                  <span className="teamT1">Team</span>
                </span>
              </div>
            </div>
          </div>
          <div className="row gy-4 mt-3">
            <div
              data-aos="slide-right"
              data-aos-once="true"
              className="col-12 col-md-6 col-xl-3 col-lg-3"
            >
              <div className="img-area">
                <img src={img} alt="" />
                <div className="img-text">
                  <h3>Bogale Tesema</h3>
                  <h5>General Manager</h5>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-left"
              data-aos-once="true"
              className="col-12 fm2 col-md-6 col-xl-3 col-lg-3"
            >
              <div className="img-area">
                <img src={img} alt="" />
                <div className="img-text">
                  <h3>Mekuria Tessema</h3>
                  <h5>Project Manager</h5>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-right"
              data-aos-once="true"
              className="col-12 fm1 col-md-6 col-xl-3 col-lg-3"
            >
              <div className="img-area">
                <img src={img} alt="" />
                <div className="img-text">
                  <h3>Alemayehu Dinku</h3>
                  <h5>Construction supervisor & Office engineer</h5>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-left"
              data-aos-once="true"
              className="col-12 fm1 col-md-6 col-xl-3 col-lg-3"
            >
              <div className="img-area">
                <img src={img} alt="" />
                <div className="img-text">
                  <h3>Samson Bogale</h3>
                  <h5>Project Engineer</h5>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-right"
              data-aos-once="true"
              className="col-12 col-md-6 col-xl-3 col-lg-3"
            >
              <div className="img-area">
                <img src={img} alt="" />
                <div className="img-text">
                  <h3>Yodit Getenet</h3>
                  <h5>Administration and Finance</h5>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-left"
              data-aos-once="true"
              className="col-12 fm2 col-md-6 col-xl-3 col-lg-3"
            >
              <div className="img-area">
                <img src={img} alt="" />
                <div className="img-text">
                  <h3>Kindualem Mola</h3>
                  <h5>Employee supervisor</h5>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-right"
              data-aos-once="true"
              className="col-12 fm1 col-md-6 col-xl-3 col-lg-3"
            >
              <div className="img-area">
                <img src={img} alt="" />
                <div className="img-text">
                  <h3>Biniam Wegayehu</h3>
                  <h5>Site Engineer</h5>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-left"
              data-aos-once="true"
              className="col-12 fm1 col-md-6 col-xl-3 col-lg-3"
            >
              <div className="img-area">
                <img src={img} alt="" />
                <div className="img-text">
                  <h3>Mekuria Teklu</h3>
                  <h5>Site Forman</h5>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-right"
              data-aos-once="true"
              className="col-12 col-md-6 col-xl-3 col-lg-3"
            >
              <div className="img-area">
                <img src={img} alt="" />
                <div className="img-text">
                  <h3>Daniel Asrat</h3>
                  <h5>General Forman</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Team;
