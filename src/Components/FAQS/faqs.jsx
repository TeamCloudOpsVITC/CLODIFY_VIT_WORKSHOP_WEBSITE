// import React from "react";
// import FaqStyles from "../Styles/faqs.module.css";

// function FAQSection() {
//   return (
//     <>
//       <div className={FaqStyles.faqSection}>
//         <div className={FaqStyles.sectionBody}>
//           <div className={FaqStyles.title}>
//             <h1>FaqSection</h1>
//           </div>
//           <div className={FaqStyles.faqContainer}>
//             <div className={FaqStyles.left}>
//               <p>What is This hackathon all about?</p>
//             </div>
//             <div className={FaqStyles.right}>
//               <p className={FaqStyles.question}>
//                 What is This hackathon all about?
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default FAQSection;

import FaqData from 'react-faq-component';

function FAQSection() {
const styles = {
  bgColor: " black", 
  titleTextColor: "#2795EB",
  rowTitleColor: "white",
  rowContentColor: 'orange',
  arrowColor: "#2795EB",
};

const data = {
  title: "FAQ",
  rows: [
    {
      title: "Is prior experience in cloud operations required to attend the workshop?",
      content: "No, the workshop is designed for beginners and does not require any prior experience in cloud operations. It is a great opportunity to learn the fundamentals from scratch."
    },
    {
      title: "What should I bring to the workshop?",
      content: "Please bring a laptop with a stable internet connection. Ensure that you have Docker installed on your laptop prior to the workshop. It would also be helpful to have a text editor and GIT installed."
    },
    {
      title: "Can I ask questions during the workshop?",
      content: "Yes, the workshop will include hands-on exercises to help you apply the concepts you learn."
    },
    {
      title: "Will there be a certificate provided for attending the workshop?",
      content: "Yes, a certificate of participation will be provided to all workshop attendees."
    },
    {
      title: "What is the date and venue of the workshop?",
      content: "The workshop is scheduled for March 23, 2024, in the AB-1 505. A participation fee of 80 is required to attend the workshop, and there is a prize money of 500rs. Join us for this exciting opportunity to learn and compete!"
    }
  
  ]
}

const faqContainerStyle = {
  width: '80%', // Adjust this value to increase or decrease the width
  height: '380px',
  margin:'95px auto',
};

return (
  <div style={faqContainerStyle}>
    <h2 className="section-title"></h2>
    <div className="faq-style-wrapper">
      <FaqData data={data}  styles={styles} />
    </div>
  </div>
);
}

export default FAQSection;
