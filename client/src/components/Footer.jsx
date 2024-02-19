import React from "react";
import classes from "./Footer.module.css";
import fb from "../assets/facebook-ico.svg";
import tt from "../assets/twitter-ico.svg";
import ghd from "../assets/github-ico-dark.svg";
import insta from "../assets/instagram-ico.svg";
import ln from "../assets/linkedin-ico.svg";
const Footer = () => {
	return (
		<div className={classes.footer}>
			<div className={classes.links}>
				<div className={classes["links-div"]}>
					<h3>Menu</h3>
					<a href="/about">
						<p>About</p>
					</a>
					<a href="/courses">
						<p>Courses</p>
					</a>
					<a href="/contact">
						<p>Contact</p>
					</a>
				</div>
				<div className={classes["links-div"]}>
					<h3>Resources</h3>
					<a href="#" target="_blank">
						<p>DSA</p>
					</a>
					<a href="#" target="_blank">
						<p>Blogs</p>
					</a>
					<a href="#" target="_blank">
						<p>ETC</p>
					</a>
				</div>
				<div className={classes["links-div"]}>
					<h3>Follow Us</h3>
					<div className={classes["socialmedia"]}>
						<a href="#" target="_blank">
							<img src={fb} alt="" />
						</a>
						<a href="#" target="_blank">
							<img src={tt} alt="" />
						</a>
						<a href="#" target="_blank">
							<img src={ln} alt="" />
						</a>
						<a href="#" target="_blank">
							<img src={ghd} alt="" />
						</a>
						<a href="#" target="_blank">
							<img src={insta} alt="" />
						</a>
					</div>
				</div>
				<div className={classes.divider} />
				<div className={classes.edutrack}>
					<a href="/" className={classes["links-div-logo"]}>
						<div className={classes["logo"]}>{/* <img src=""/> */}</div>
						<h1>EduTrack</h1>
					</a>
					<p>Your Data-Driven Academic Companion and Progress Tracker</p>
				</div>
				<hr />
			</div>
			<div className={classes.copyright}>
				<div>@{new Date().getFullYear()} EduTrack || All right reserved.</div>
			</div>
		</div>
	);
};

export default Footer;
