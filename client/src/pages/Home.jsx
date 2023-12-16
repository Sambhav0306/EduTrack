import Banner from "../components/Banner";
import CourseCard from "../components/CourseCard";
import classes from "../styles/Home.module.css";

const Home = () => {
	return (
		<div className={classes.content}>
			<Banner className={classes.banner} />
			<div className={classes.courses}>
				<CourseCard className={classes.gradient1} link="/dsa" />
				<CourseCard className={classes.gradient2} link="/os" />
				<CourseCard className={classes.gradient3} link="/cn" />
				<CourseCard className={classes.gradient4} link="/sd" />
				<CourseCard className={classes.gradient5} link="/dbms" />
			</div>
		</div>
	);
};

export default Home;
