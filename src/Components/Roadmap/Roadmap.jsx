import React from "react";
import RoadmapStyles from "../Styles/Roadmap.module.css";
import RoadmapPic from "./Assets/pic.png";

function Roadmap() {
  return (
    <>
      <div className={RoadmapStyles.roadmapSection}>
        <div className={RoadmapStyles.sectionBody}>
          <div className={RoadmapStyles.title}>
            Every Great Project Starts with a Roadmap
          </div>
          <div className={RoadmapStyles.left}>
            <h1>Roadmap</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate quas nulla magnam aut quibusdam, soluta praesentium
              porro rem, aliquam ea dolorem consectetur amet aspernatur dolorum
              repellendus saepe nam deleniti natus veniam quia vel numquam
              harum, dolor commodi. Sint libero aut rerum aliquam, quod
              voluptatem ipsum totam dolor aperiam, eum quos!
            </p>
          </div>
          <div className={RoadmapStyles.right}>
            <img src={RoadmapPic} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Roadmap;
