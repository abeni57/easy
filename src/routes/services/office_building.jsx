import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/office_building.css";

const Office_building = () => {
  return (
    <div>
      <Navbar />
      <section className="mt-3 sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center mt-3 mb-5">
                <h1 data-aos="zoom-in" className="Title">
                  Office Building
                </h1>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-1"></div>
            <div className="col-10">
              <i className="fas fa-arrow-right">
                &nbsp;&nbsp;We do everything possible to satisfy the insurance
                requirements of our clients before all other considerations.
              </i>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-1"></div>
            <div className="col-10">
              <i className="fas fa-arrow-right">
                &nbsp;&nbsp;We examine the type of risks and chose the
                appropriate covers, obtain raw data from customers and fill out
                the complex proposal forms which insurers need in order to
                thoroughly assess the risk they are being asked to underwrite
              </i>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-1"></div>
            <div className="col-10">
              <i className="fas fa-arrow-right">
                &nbsp;&nbsp;We represent the client in the course of negotiating
                insurance cover and serve the client with reasonable
                professional skill in the course of dispensing advice on the
                insurance needs of the client.
              </i>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Office_building;
