import React from "react";
import classes from "./Footer.module.css";
import fb from "../assets/facebook-ico.svg";
import tt from "../assets/twitter-ico.svg";
import gh from "../assets/github-ico-light.svg";
import ist from "../assets/instagram-ico.svg";
import ln from "../assets/linkedin-ico.svg";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.links}>
        <div className={classes["links-div"]}>
          <h3>Menu</h3>
          <a href="/client/src/pages/About.jsx">
            <p>About</p>
          </a>
          <a href="/client/src/pages/Course.jsx">
            <p>Courses</p>
          </a>
          <a href="/client/src/pages/Contact.jsx">
            <p>Contact</p>
          </a>
        </div>
        <div className={classes["links-div"]}>
          <h3>Resources</h3>
          <a href="#">
            <p>DSA</p>
          </a>
          <a href="#">
            <p>Blogs</p>
          </a>
          <a href="#">
            <p>ETC</p>
          </a>
        </div>
        <div className={classes["links-div"]}>
          <h3>Follow Us</h3>
          <div className={classes["socialmedia"]}>
            <a href="">
              <img src={fb} alt="" />
            </a>
            <a href="">
              <img src={tt} alt="" />
            </a>
            <a href="">
              <img src={ln} alt="" />
            </a>
            <a href="">
              <img src={gh} alt="" />
            </a>
          </div>
        </div>
        <div className={classes.divider} />
        <div className={classes["links-div"]}>
          <h1>EduTrack </h1>
        </div>
        <hr></hr>
      </div>
      <div className={classes.copyright}>
        <div>@{new Date().getFullYear()} EduTrack || All right reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
