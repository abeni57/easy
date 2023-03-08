import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/NavbarFooter.css";
import "../styles/Contact.css";
import { useForm } from "react-hook-form";

const Contact = () => {
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
      <section className="mb-5">
        <div className="container mam6">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center mt-3 mb-3">
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

export default Contact;
