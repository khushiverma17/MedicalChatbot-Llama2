import React from "react";
import { Link } from "react-router-dom";
import doct from "../assets/images/bg-doctor.png";

const Doctor = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <h1>
                Welcome to Your Health <br />
                Center
              </h1>
              <p className="text-grey fs-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Accusantium aperiam earum ipsa
                eius, inventore nemo labore eaque porro consequatur ex
                aspernatur. Explicabo, excepturi accusantium! Placeat voluptates
                esse ut optio facilis!
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More
              </Link>
            </div>
            <div className="col-lg-6 col-md-12 image" data-wow-delay="400ms">
              <div className="img-place ">
                <img src={doct} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Doctor;
