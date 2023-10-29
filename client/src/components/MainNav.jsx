import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNav.module.css";
const MainNav = () => {
	return (
		<nav className={classes.nav}>
			<div className={classes.left}>
				<NavLink
					to="/"
					className={({ isActive }) => (isActive ? classes.active : undefined)}
					end
				>
					Home
				</NavLink>
				<NavLink
					to="/about"
					className={({ isActive }) => (isActive ? classes.active : undefined)}
				>
					About Us
				</NavLink>
				<NavLink
					to="/contact"
					className={({ isActive }) => (isActive ? classes.active : undefined)}
				>
					Contact
				</NavLink>
			</div>
			<div className={classes.mid}>
				<NavLink to="/">
					<div className={classes.logo}>{/* <img src=""/> */}</div>
					<h1>EduTrack</h1>
				</NavLink>
			</div>
			<div className={classes.right}>
				<button>Sign In</button>
			</div>
		</nav>
	);
};
export default MainNav;
