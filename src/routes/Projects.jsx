import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Projects.css";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div>
      <Navbar />
      <section className="mt-3">
        <div className="container mam">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center mt-3 mb-3">
                <h1 data-aos="zoom-in">Company Projects</h1>
              </div>
            </div>
          </div>
          <table class="table mt-3 mb-5 col-sm-12 table-borderless">
            <thead className="table-primary">
              <tr>
                <th>Project Name</th>
                <th>Client</th>
                <th>Contract Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Oda Bultum University</td>
                <td>Ministry of Education</td>
                <td>30 Million Birr</td>
                <td>
                  <Link
                    className="btn btb3 btn-primary text-light"
                    to="/project/oda_bultum"
                  >
                    Read More
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Addis ketema Housing</td>
                <td>Housing Development</td>
                <td>20 Million Birr</td>
                <td>
                  <button className="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </td>
              </tr>
              <tr>
                <td>Oda Bultum University</td>
                <td>Ministry of Education</td>
                <td>5 Million Birr</td>
                <td>
                  <button className="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </td>
              </tr>
              <tr>
                <td>Bulehora University</td>
                <td>Ministry of Education</td>
                <td>30 Million Birr</td>
                <td>
                  <button className="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </td>
              </tr>
              <tr>
                <td>ODA BULTUM UNIVERSITY</td>
                <td>Ministry of Education</td>
                <td>30 Million Birr</td>
                <td>
                  <button className="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </td>
              </tr>
              <tr>
                <td>ODA BULTUM UNIVERSITY</td>
                <td>Ministry of Education</td>
                <td>30 Million Birr</td>
                <td>
                  <button className="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </td>
              </tr>
              <tr>
                <td>ODA BULTUM UNIVERSITY</td>
                <td>Ministry of Education</td>
                <td>30 Million Birr</td>
                <td>
                  <button className="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </td>
              </tr>
              <tr>
                <td>ODA BULTUM UNIVERSITY</td>
                <td>Ministry of Education</td>
                <td>30 Million Birr</td>
                <td>
                  <button className="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </td>
              </tr>
              <tr>
                <td>ODA BULTUM UNIVERSITY</td>
                <td>Ministry of Education</td>
                <td>30 Million Birr</td>
                <td>
                  <button className="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </td>
              </tr>
              <tr>
                <td>ODA BULTUM UNIVERSITY</td>
                <td>Ministry of Education</td>
                <td>30 Million Birr</td>
                <td>
                  <button className="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </td>
              </tr>
              <tr>
                <td>ODA BULTUM UNIVERSITY</td>
                <td>Ministry of Education</td>
                <td>30 Million Birr</td>
                <td>
                  <button className="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </td>
              </tr>
              <tr>
                <td>ODA BULTUM UNIVERSITY</td>
                <td>Ministry of Education</td>
                <td>30 Million Birr</td>
                <td>
                  <button className="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </td>
              </tr>
              <tr>
                <td>ODA BULTUM UNIVERSITY</td>
                <td>Ministry of Education</td>
                <td>30 Million Birr</td>
                <td>
                  <button className="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </td>
              </tr>
              <tr>
                <td>ODA BULTUM UNIVERSITY</td>
                <td>Ministry of Education</td>
                <td>30 Million Birr</td>
                <td>
                  <button className="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </td>
              </tr>
              <tr>
                <td>ODA BULTUM UNIVERSITY</td>
                <td>Ministry of Education</td>
                <td>30 Million Birr</td>
                <td>
                  <button className="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </td>
              </tr>
              <tr>
                <td>ODA BULTUM UNIVERSITY</td>
                <td>Ministry of Education</td>
                <td>30 Million Birr</td>
                <td>
                  <button className="btn btb3 btn-primary text-light">
                    Read More
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
