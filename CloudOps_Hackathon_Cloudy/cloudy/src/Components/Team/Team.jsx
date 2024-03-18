import React, { useEffect, useRef } from "react";
import teamStyles from "../Styles/Team.module.css";
import profilePic1 from "./assets/Aditya Kushwaha Linkedin.jpg";
import profilePic2 from "./assets/Yeyati Linkedin.jpg";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { useDraggable } from "react-use-draggable-scroll";

gsap.registerPlugin(ScrollTrigger);

const Courses = [
  {
    id: 1,
    img: profilePic1,
    name: "Aditya Kushwaha",
    details: "Details speaker 1",
  },
  {
    id: 2,
    img: profilePic2,

    name: "Yeyati Prasher",
    details: "Details speaker 2",
  },

 
];

function Course() {
  const headingRef = useRef(null);
  const cardRef = useRef(null);
  const CardwrapperRef = useRef();
  const { events } = useDraggable(CardwrapperRef);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      {
        autoAlpha: 0,
        y: 10,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.inOut",
        y: 0,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className={teamStyles.speakers} id="speakers">
      <div className={teamStyles.sectionWrapper}>
        <div className={teamStyles.headingSpeakers} ref={headingRef}>
          <h1>
            "Voices That <span className={teamStyles.span}>Inspire:</span>
            <br /> Meet the Speakers Who Will Ignite Your Passion
            <br /> and Spark Your Imagination"
          </h1>
        </div>
        <div className={teamStyles.card_gallery_wrap}>
          <div
            ref={CardwrapperRef}
            className={teamStyles.card_carousel}
            {...events}
          >
            {Courses.map((course) => (
              <div className={teamStyles.card} key={course.id}>
                <h2>{course.name}</h2>
                <img className={teamStyles.Image} src={course.img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Course;
