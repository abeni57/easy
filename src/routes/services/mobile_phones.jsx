import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../styles/mobile_phones.css";

const Mobile_phones = () => {
  return (
    <div>
      <Navbar />
      <section className="mt-3 sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center mt-3 mb-5">
                <h1 data-aos="zoom-in" className="Title">
                  Mobile Phones & Tablets
                </h1>
              </div>
            </div>
          </div>
        
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Mobile_phones;
