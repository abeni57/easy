import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About1 from "../javascripts/About1";
import "../styles/About.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="mb-5">
        <div className="container mam1">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center mt-3 mb-5">
                <h1 data-aos="zoom-in" className="teamT1">
                  About us
                </h1>
              </div>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <p data-aos="slide-right" data-aos-once="true">
                Bogale Tesema Building Contractor (BTBC) is a private owned and
                operates company; registered under the commercial low of
                Ethiopia and according to the professional requirements of the
                Ministry of Woks and Urban Development and working on the
                construction field for more than 30 years Initially registered
                and licensed as building contractor, the firm is currently
                upgraded itself and licensed as BC grade 4 level and on a
                process of upgrading to BC grade 3 construction company.
              </p>
              <p data-aos="slide-left" data-aos-once="true" className="pt-3">
                Since its inception as a construction firm in 1990 (European
                Colander), it has successfully completed several major
                contracts, such as works including building, bridges, dams, town
                water supply systems, spring capping, asphalt and earth road
                construction and major maintenance works for both government and
                private establishments.
              </p>
              <p data-aos="slide-right" data-aos-once="true" className="pt-3">
                The company is Managed by Mr. Bogale Tesema , a civil engineer
                with extensive knowledge and experience in engineering
                construction and project management skills in different
                projects, the firm is:
              </p>
              <ul className="pt-2 lil">
                <li>
                  <p data-aos="flip-up" data-aos-once="true">
                    <i className="fas fa-check-circle"></i>&nbsp;&nbsp;&nbsp;
                    Equipped with sound management and technical team supported
                    by various types and sizes of construction equipment and
                    facility.
                  </p>
                </li>
                <li>
                  <p data-aos="flip-up" data-aos-once="true">
                    <i className="fas fa-check-circle"></i>&nbsp;&nbsp;&nbsp;
                    Engaged in the management and construction of buildings for
                    commercial, residential and government enterprises.
                  </p>
                </li>
                <li>
                  <p data-aos="flip-up" data-aos-once="true">
                    <i className="fas fa-check-circle"></i>&nbsp;&nbsp;&nbsp;
                    Obtain contracts through competitive tender and Invitations.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <div className="text-center mt-3 mb-5">
                <h1 data-aos="zoom-in" className="teamT1">
                  Company philosophy
                </h1>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 PiE col-md-6 col-lg-6 col-xl-6">
              <div className="PiE1" data-aos="slide-right" data-aos-once="true">
                <About1 />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
              <p data-aos="slide-right" data-aos-once="true" className="mt-3">
                The firm believes the foundation of its success lies in a
                commitment to understanding and meeting client’s requirements
                for high standard workmanship, safety, on-time delivery, and
                value -for-money.
              </p>
              <p data-aos="slide-left" data-aos-once="true" className="mt-3">
                Its prime aim is the successful completion of all contracts with
                the highest professional standard, workmanship ethics and on
                schedule delivery. To this end, the firm
              </p>
              <ul className="pt-2 lil">
                <li>
                  <p data-aos="flip-up" data-aos-once="true">
                    <i className="fas fa-check-circle"></i>&nbsp;&nbsp;&nbsp;
                    Recognizes the value of professional management, safety
                    standards and environmental quality of construction
                  </p>
                </li>
                <li>
                  <p data-aos="flip-up" data-aos-once="true">
                    <i className="fas fa-check-circle"></i>&nbsp;&nbsp;&nbsp;
                    Place considerable emphasis and importance on proper
                    planning, procurement and coordination of information,
                    materials, and resources as well as integration of the
                    services to ensure sustainability of projects.
                  </p>
                </li>
                <li>
                  <p data-aos="flip-up" data-aos-once="true">
                    <i className="fas fa-check-circle"></i>&nbsp;&nbsp;&nbsp;
                    The Basic Aim of the company is to build quality and durable
                    structures upgrading the construction technology and
                    printing our company’s name on our successful projects.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
