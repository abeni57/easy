import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../styles/Service.css";

const Service = () => {
  return (
    <div>
      <Navbar />
      <section className="mt-5 mb-5 mat1">
        <div className="container mam3">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center mt-3 mb-5">
                <h1 data-aos="zoom-in" className="teamT">
                  Our Service
                </h1>
              </div>
            </div>
          </div>

          <div class="row gy-4 serbices">
            <div
              data-aos="slide-right"
              data-aos-once="true"
              class="col-12 col-md-6 col-sm-6 col-xl-4 col-lg-4"
            >
              <div class="card text-dark text-center pb-2">
                <div class="card-body">
                  <i class="fas fa-laptop"></i>
                  <h3 class="card-title">Laptops & Computers</h3>
                  <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <Link
                    class="btn btb3 btn-primary text-light"
                    to="/services/office_building"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-down"
              data-aos-once="true"
              class="col-12 col-md-6 sm2 col-sm-6 col-xl-4 col-lg-4"
            >
              <div class="card text-dark text-center pb-2">
                <div class="card-body">
                  <i class="fas fa-phone"></i>
                  <h3 class="card-title">Mobile Phones & Tablets </h3>
                  <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button class="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-left"
              data-aos-once="true"
              class="col-12 col-md-6 col-sm-6 sm2 col-xl-4 col-lg-4"
            >
              <div class="card text-dark text-center pb-2">
                <div class="card-body">
                  <i class="fas fa-camera"></i>
                  <h3 class="card-title">Photo & Video Cameras</h3>
                  <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button class="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-right"
              data-aos-once="true"
              class="col-12 col-md-6 col-sm-6 col-xl-4 sm1 col-lg-4">
              <div class="card text-dark text-center pb-2">
                <div class="card-body">
                  <i class="fas fa-network-wired"></i>
                  <h3 class="card-title">Networking Products</h3>
                  <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button class="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-right"
              data-aos-once="true"
              class="col-12 col-md-6 col-sm-6 col-xl-4 sm1 col-lg-4">
              <div class="card text-dark text-center pb-2">
                <div class="card-body">
                  <i class="fas fa-keyboard"></i>
                  <h3 class="card-title">Computer Accessories</h3>
                  <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button class="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-right"
              data-aos-once="true"
              class="col-12 col-md-6 col-sm-6 col-xl-4 sm1 col-lg-4">
              <div class="card text-dark text-center pb-2">
                <div class="card-body">
                  <i class="fas fa-print"></i>
                  <h3 class="card-title">Printer & Scanners</h3>
                  <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button class="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-up"
              data-aos-once="true"
              className="col-12 col-md-6 col-sm-6 sm1 sm2 col-xl-4 col-lg-4"
            >
              <div className="card text-dark text-center pb-2">
                <div className="card-body">
                  <i className="fas fa-spa"></i>
                  <h3 className="card-title">Health & Beauty</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button className="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div
              data-aos="slide-up"
              data-aos-once="true"
              class="col-12 col-md-6 col-sm-6 sm1 sm2 col-xl-4 col-lg-4"
            >
              <div class="card text-dark text-center pb-2">
                <div class="card-body">
                  <i class="fas fa-blender"></i>
                  <h3 class="card-title">Kitchen Appliances</h3>
                  <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button class="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div
              data-aos="slide-right"
              data-aos-once="true"
              class="col-12 pl-4 col-md-6 col-sm-6 col-xl-4 col-lg-4"
            >
              <div class="card w1 text-dark text-center pb-2">
                <div class="card-body">
                  <i class="fas fa-building"></i>
                  <h3 class="card-title">Building Materials</h3>
                  <p class="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci eligendi modi temporibus alias iste. Accusantium?
                  </p>
                  <button class="btn btb3 btn-primary text-light">
                    Read More
                  </button>
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

export default Service;
