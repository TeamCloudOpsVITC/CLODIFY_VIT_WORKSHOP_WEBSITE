import React from "react";
import footerStyles from "../Styles/footer.module.css";

function Footer() {
  return (
    <div className={footerStyles.footer}>
   <footer>
    <center>
    <p>&copy; Copyright <b>Cloudops</b>. All Rights Reserved</p>
    <p>Designed by <b>CloudOps Dev</b> Team </p>
    </center>
   </footer>
   </div>
  );
}

export default Footer;
