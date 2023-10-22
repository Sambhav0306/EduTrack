import React from 'react'
import classes from './MainNav.module.css'
const MainNav = () => {
	return <nav className={classes.nav}>
		<div className={`${classes.left} ${classes.common}`}>
			    <a href="#">Home</a>
			    <a href="#">About Us</a>
			    <a href="#">Contact</a>
		</div>
		<div className={`${classes.mid} ${classes.common}`}>
			<a href="#">
			<div className={classes.logo}>
				{/* <img src=""/> */}
			</div>
			<h2 >EduTrack</h2>
			</a>
		</div>
		<div className={`${classes.right} ${classes.common}`}>
			<button>Sign In</button>
		</div>
	</nav>
};
export default MainNav;
