import React from "react";
import contactStyles from "../Styles/contact.module.css";
import saptarshiPic from "./assets/Saptarshi.jpeg";
import VedaantPic from "./assets/Vedaant.jpeg";

function Contact() {
  const contacts = [
    {
      Name: "Saptarshi Acharya",
      img: saptarshiPic,
      Phone: "+916291506490",
    },
    {
      Name: "Vedaant Kumar",
      img: VedaantPic,
      Phone: "+919812370346",
    },
  ];

  return (
    <div className={contactStyles.contact}>
      <h1>Contact Us</h1>

      <div className={contactStyles.contactContainer}>
        <div className={contactStyles.cardCarousal}>
          {contacts.map((contact, index) => (
            <div className={contactStyles.card} key={index}>
              <h2>{contact.Name}</h2>
              <p><b>{contact.Phone}</b></p>
              <img src={contact.img} className={contactStyles.Image} alt="" />
            </div>
          ))}
        </div>
      </div>

    
    </div>
  );
}

export default Contact;
