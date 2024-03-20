import React from "react";
import AboutStyles from "../Styles/About.module.css";
import Pic from "./assets/pic.png";

function About() {
  return (
    <>
      <div className={AboutStyles.aboutSection}>
        <div className={AboutStyles.sectionBody}>
          <div className={AboutStyles.left}>
            <h1>What is Cloudy</h1>
            <p>
              Cloudy is not just a workshop, it's a transformative learning
              experience that delves deep into cloud operations. Throughout
              Cloudy, you'll explore Linux basics, Git and GitHub for version
              control, deployment strategies, proxy server fundamentals, Docker
              essentials, and cloud integration. This workshop is all about
              hands-on learning and practical skills that you can immediately
              apply. By the end of Cloudy, you'll have the knowledge and
              confidence to set up your own virtual "drive" in the cloud, a
              secure and accessible storage space for your files and data. Join
              us for this enriching adventure and elevate your expertise in
              cloud operations with Cloudy!
            </p>
          </div>
          <div className={AboutStyles.right}>
            <img src={Pic} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
