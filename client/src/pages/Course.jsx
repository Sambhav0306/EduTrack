import { useParams } from "react-router-dom";
import classes from "../styles/Course.module.css";
import Topics from "../components/Course/Topics";
import Modules from "../components/Course/Modules";
import Status from "../components/Course/Status";
import Card from "../components/UI/Card";

const Course = () => {
	const params = useParams();

	return (
		<main>
			<div className={classes.header}>
				<Card className={classes.left}>
					<h2>Operating System</h2>
				</Card>
				<Status className={classes.right} />
			</div>
			<div className={`${classes.content}`}>
				<Modules className={classes.left} />
				<Topics className={classes.right} />
			</div>
		</main>
	);
};

export default Course;
