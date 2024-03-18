import React, { useEffect, useState } from "react";
import Doodle1 from "./assets/Doodle1.png";
import HomeStyles from "../Styles/Home.module.css";

const staticText = "Welcome to ";
const dynamicTexts = ["CloudOps", "Cloudy"];
const dynamicColors = ["orange", "yellow"];

function Home() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const [erasingIndex, setErasingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typingDone) {
        if (erasingIndex < dynamicTexts[currentIndex].length) {
          setDisplayText((prevText) => prevText.slice(0, -1));
          setErasingIndex((prevIndex) => prevIndex + 1);
        } else {
          setCurrentIndex((prevIndex) =>
            prevIndex === dynamicTexts.length - 1 ? 0 : prevIndex + 1
          );
          setTypingIndex(0);
          setErasingIndex(0);
          setTypingDone(false);
          setDisplayText("");
        }
      } else {
        if (typingIndex < dynamicTexts[currentIndex].length) {
          setDisplayText(
            (prevText) => prevText + dynamicTexts[currentIndex][typingIndex]
          );
          setTypingIndex((prevIndex) => prevIndex + 1);
        } else {
          setTypingDone(true);
        }
      }
    }, 300);

    return () => clearInterval(interval);
  }, [typingIndex, typingDone, currentIndex, erasingIndex]);

  return (
    <>
      <div className={HomeStyles.homeSection}>
        <div className={HomeStyles.sectionBody}>
          <div className={HomeStyles.innerBody}>
            <div className={HomeStyles.left}>
              <h1>
                {staticText}
                <span style={{ color: dynamicColors[currentIndex] }}>
                  {displayText}
                </span>
                <span className={HomeStyles.cursor}>
                  {typingDone ? "|" : ""}
                </span>
              </h1>
              <h2>Your Essential Cloud Journey

</h2>
              <p>
              Join us for Cloudy, a comprehensive learning experience crafted to familiarize you with the core principles and techniques of cloud operations. Throughout this workshop, you'll delve into Linux basics, version control using Git and GitHub, deployment strategies, proxy server essentials, Docker fundamentals, and integrating Docker with various cloud platforms. By the workshop's conclusion, you'll be equipped with the knowledge and skills needed to deploy your own cloud server and Dockerized applications. Come and immerse yourself in the world of CloudOps!"


              </p>
              <div className={HomeStyles.homeButtonBody}>
                <div className={HomeStyles.homeButton}>
                  <button className={HomeStyles.joinUs}>
                    Join Us On Whatsapp
                  </button>
                  <button className={HomeStyles.register}>Register</button>
                </div>
              </div>
            </div>
            <div className={HomeStyles.right}>
              <img src={Doodle1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
