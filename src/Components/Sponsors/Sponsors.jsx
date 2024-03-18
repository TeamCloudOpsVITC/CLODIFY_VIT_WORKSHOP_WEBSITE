import React from "react";
import SponsorStyles from "../Styles/Sponsors.module.css";
import SponsorPic from "./Assets/pic.png";

function Sponsors() {
  return (
    <>
      <div className={SponsorStyles.sponsorSection}>
        <div className={SponsorStyles.sectionBody}>
          <div className={SponsorStyles.title}>
            <h1>Sponsor and Partners</h1>
          </div>
          <div className={SponsorStyles.Sponsor1}>
            <img src={SponsorPic} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sponsors;
