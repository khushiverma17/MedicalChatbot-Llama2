import React from "react";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import VerifiedUserTwoToneIcon from "@mui/icons-material/VerifiedUserTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
const Services=()=>{
  return<>
   <div className="cards">
        <div className="page-section py-3 mt-md-n5 custom-index">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4 py-3 py-md-0">
                <div className="card-service">
                  <div className="circle-shape bg-secondary text-white">
                    <span
                      className=" p-2"
                      style={{
                        border: "2px solid black",
                        borderRadius: "100%",
                        backgroundColor: "red",
                        fontSize: "larger",
                      }}
                    >
                      <QuestionAnswerIcon className="fs-3 bg-none" />
                    </span>
                  </div>
                  <p>
                    <span>Chat</span> with a doctors
                  </p>
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card-service wow fadeInUp">
                  <div className="circle-shape bg-primary text-white">
                    <span
                      className="p-2"
                      style={{
                        border: "2px solid black",
                        borderRadius: "100%",
                        backgroundColor: "blue",
                        fontSize: "larger",
                      }}
                    >
                      <VerifiedUserTwoToneIcon className="fs-3 bg-none" />
                    </span>
                  </div>
                  <p>
                    <span>One</span>-Health Protection
                  </p>
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card-service">
                  <div className="circle-shape bg-accent text-white">
                    <span
                      className="p-2"
                      style={{
                        border: "2px solid black",
                        borderRadius: "100%",
                        backgroundColor: "indigo",
                        fontSize: "larger",
                      }}
                    >
                      <FavoriteTwoToneIcon />
                    </span>
                  </div>
                  <p>
                    <span>One</span>-Health Pharmacy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
}
export default Services