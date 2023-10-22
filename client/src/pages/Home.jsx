import Banner from "../components/Banner";
import CourseCard from "../components/CourseCard";
import classes from "../styles/Home.module.css";

const Home = () => {
	return (
		<div className={classes.content}>
			<Banner className={classes.banner} />
			<div className={classes.courses}>
				<CourseCard className={classes.gradient1} />
				<CourseCard className={classes.gradient2} />
				<CourseCard className={classes.gradient3} />
				<CourseCard className={classes.gradient4} />
				<CourseCard className={classes.gradient5} />
			</div>
		</div>
	);
};

export default Home;
