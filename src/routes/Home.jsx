import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/NavbarFooter.css";
import "../styles/Home.css";
import img from "../img/Constr.jpg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert("Thank You for Message");
    reset();
  };
  return (
    <div>
      <Navbar />
      <section className="ConT bg-light">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="d-flex TEXT align-items-center justify-content-center text-center flex-column">
                <h1 data-aos="fade-up" data-aos-anchor=".other-element">
                  BOGALE TESEMA
                </h1>
                <h2 data-aos="fade-in">BUILDING CONTRACTOR</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ma">
        <div className="container mb-5 mt-3 mat">
          <div className="row p-4 gx-5">
            <div className="col-12 col-sm-12 col-lg-6 col-md-6 col-xl-6 imgg">
              <img src={img} alt="" />
            </div>
            <div className="col-12 col-sm-12 col-lg-6 col-md-6 col-xl-6 ma1">
              <h1 data-aos="zoom-in">Why you Choose us?</h1>
              <p className="mb-5" data-aos="slide-up" data-aos-once="true">
                Meri Insurance Brokerage is an industry-leading insurance
                brokerage that offers a comprehensive portfolio of services.
                With its years of experience, extensive network and access to
                top-notch providers, Meri Insurance Brokerage can help you find
                the perfect coverage to meet your needs. Meri’s staff is
                knowledgeable and helpful, which makes the process of finding
                insurance simple and stress-free. If you're looking for quality
                insurance coverage at an affordable price point, Meri Insurance
                Brokerage should be your first choice.
              </p>
              <span data-aos="slide-up" className="btb">
                <Link to="" className="btn btn-primary btb1">
                  Read More
                </Link>
                <Link to="" className="btn btn-primary btb2">
                  Get Started
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5 mat1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center pt-5 pb-5">
                <h1 data-aos="zoom-in">Our Service</h1>
              </div>
            </div>
          </div>
          <div className="row gy-4">
            <div
              data-aos="slide-right"
              data-aos-once="true"
              className="col-12 col-md-6 col-sm-6 col-xl-4 col-lg-4"
            >
              <div className="card text-dark text-center pb-2">
                <div className="card-body">
                  <i className="fas fa-hotel"></i>
                  <h3 className="card-title">Office Building</h3>
                  <p className="lead">
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
              className="col-12 col-md-6 sm2 col-sm-6 col-xl-4 col-lg-4"
            >
              <div className="card text-dark text-center pb-2">
                <div className="card-body">
                  <i className="fas fa-shower"></i>
                  <h3 className="card-title">Public Shower</h3>
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
              data-aos="slide-left"
              data-aos-once="true"
              className="col-12 col-md-6 col-sm-6 sm2 col-xl-4 col-lg-4"
            >
              <div className="card text-dark text-center pb-2">
                <div className="card-body">
                  <i className="fas fa-university"></i>
                  <h3 className="card-title">University</h3>
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
              data-aos="slide-right"
              data-aos-once="true"
              className="col-12 col-md-6 col-sm-6 col-xl-4 sm1 col-lg-4"
            >
              <div className="card text-dark text-center pb-2">
                <div className="card-body">
                  <i className="fas fa-industry"></i>
                  <h3 className="card-title">Industrial Construction</h3>
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
              className="col-12 col-md-6 col-sm-6 sm1 sm2 col-xl-4 col-lg-4"
            >
              <div className="card text-dark text-center pb-2">
                <div className="card-body">
                  <i className="fas fa-network-wired"></i>
                  <h3 className="card-title">Public Infrastructure</h3>
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
              data-aos="slide-left"
              data-aos-once="true"
              className="col-12 pl-4 col-md-6 col-sm-6 col-xl-4 col-lg-4"
            >
              <div className="card w1 text-dark text-center pb-2">
                <div className="card-body">
                  <i className="fas fa-building"></i>
                  <h3 className="card-title">Housing Development</h3>
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
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div className="container mam6">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center mam1 mt-3 mb-3">
                <h1 data-aos="zoom-in">Contact us</h1>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div
              data-aos="slide-right"
              data-aos-once="true"
              className="col-12 Atopic col-md-4 col-sm-4 col-xl-4 col-lg-4 mt-3"
            >
              <h2>
                <i className="fas fa-map-marker-alt"></i>&nbsp;Address
              </h2>
              <p className="lead1">
                Lafto Sub City ,Kebele 20, and House # 850
              </p>
              <h2>
                <i className="fas fa-envelope"></i>&nbsp;Email
              </h2>
              <p className="lead1">
                <a href="mailto:btcon2016@gmail.com">btcon2016@gmail.com</a>
              </p>
              <h2>
                <i className="fas fa-phone"></i>&nbsp;Phone
              </h2>
              <span className="lead1">
                <a href="tel:+251911209528">Mob +251-911209528</a>
              </span>
              <br />
              <span className="lead1">
                <a href="tel:+251911930188">Mob +251-911930188</a>
              </span>
              <br />
              <span className="lead1">
                <a href="tel:+251114160839">Tel +251-114160839</a>
              </span>
            </div>
            <div
              data-aos="slide-left"
              data-aos-once="true"
              className="col-12 col-md-6 Aform col-sm-8 col-xl-8 col-lg-8"
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-light p-4 m-auto"
              >
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        placeholder="Full Name"
                        type="text"
                        {...register("name", {
                          required: "Name is required",
                          minLength: {
                            value: 4,
                            message: "Minimum required length is 4",
                          },
                          pattern: {
                            value: /^[A-z]*$/,
                            message: "Only Letters are allowed",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("name");
                        }}
                      />
                      {errors.name && (
                        <small className="text-danger">
                          {errors.name.message}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        placeholder="Email"
                        type="text"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value:
                              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            message: "Invalid Email format",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("email");
                        }}
                      />
                      {errors.email && (
                        <small className="text-danger">
                          {errors.email.message}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        rows="3"
                        {...register("message", {
                          required: "message is required",
                          minLength: {
                            value: 5,
                            message: "Minimum required length is 5",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("message");
                        }}
                      ></textarea>
                      {errors.message && (
                        <small className="text-danger">
                          {errors.message.message}
                        </small>
                      )}
                    </div>
                  </div>
                  <button
                    className="btn btn-primary btb3 btn-lg btn-block mt-3"
                    type="submit"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
