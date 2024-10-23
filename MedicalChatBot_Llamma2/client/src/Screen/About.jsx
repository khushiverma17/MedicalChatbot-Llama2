import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import doct_img from "../assets/images/doctors/doctor_1.jpg";
import doctor1 from "../assets/images/doctors/doctor_1.jpg";
import doctor2 from "../assets/images/doctors/doctor_2.jpg";
import doctor3 from "../assets/images/doctors/doctor_3.jpg";
import Services from "../components/Services";
import Footer from "../components/Footer";
const About = () => {
  const doctors = [doctor1, doctor2, doctor3];
  const name = ["Dr. Stein Albert", "Dr. Alexa Melvin", "Dr. Rebecca Steffany"];
  console.log(doctors[0]);
  return (
    <>
      <Navbar />
      <Hero para="Home/About" title="AboutUs" />
      <Services />
      <div className="page-section">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 wow fadeInUp">
              <h1 className="text-center mb-3">
                Welcome to Your Health Center
              </h1>
              <div className="text-lg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt neque sit, explicabo vero nulla animi nemo quae
                  cumque, eaque pariatur eum ut maxime! Tenetur aperiam maxime
                  iure explicabo aut consequuntur. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nesciunt neque sit, explicabo
                  vero nulla animi nemo quae cumque, eaque pariatur eum ut
                  maxime! Tenetur aperiam maxime iure explicabo aut
                  consequuntur.
                </p>
                <p>
                  Expedita iusto sunt beatae esse id nihil voluptates magni,
                  excepturi distinctio impedit illo, incidunt iure facilis
                  atque, inventore reprehenderit quidem aliquid recusandae.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium quod ad sequi atque accusamus deleniti placeat
                  dignissimos illum nulla voluptatibus vel optio, molestiae
                  dolore velit iste maxime, nobis odio molestias!
                </p>
              </div>
            </div>
            <div className="col-lg-10 mt-5">
              <h1 className="text-center mb-5">Our Doctors</h1>
              <div className="row d-flex justify-content-center">
                {doctors.map((doctor, index) => (
                  <div className="col-md-12 col-lg-4" key={index}>
                    <div className="card" style={{ width: "18rem" }}>
                      <img src={doctor} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{name[index]}</h5>
                        <p className="card-text"></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;
