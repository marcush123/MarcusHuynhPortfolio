import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { MdOutlineSchool } from "react-icons/md";
import { MdOutlineBuild } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <h3 className="about__subtitle">
              <strong>
                An aspiring Full-stack Developer based in Northern Virginia
              </strong>
            </h3>
            <p>
              As a passionate third-year Computer Science student at Virginia
              Tech, I've established a strong foundation of programming
              concepts, languages, and fundamentals through various coursework
              and personal projects. Additonally, I'm continuously expanding my
              knowledge of front-end and back-end technologies and gaining
              hands-on experience within the field. Beyond coding however, my
              deep interest in technology has lead me to who I am today, someone
              who strives to confront real-world problems with sustainable
              solutions and leave a lasting impact on the industry. With all
              this in mind, I'm determined to become a versatile full-stack
              developer equipped with the agility and adaptability to thrive on
              all fronts of the current and future technological landscape.{" "}
            </p>
            <div className="about__letsTalk">
              <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
