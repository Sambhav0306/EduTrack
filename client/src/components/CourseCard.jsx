import coding from "../assets/coding.jpeg";
import classes from "./CourseCard.module.css";

const CourseCard = (props) => {
	return (
		<div className={`${classes["course-card"]} ${props.className}`}>
			<div className={classes["course-img"]} />
			<div>
				<h2>TITLE</h2>
				<p>
					DESCRIPTION Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Obcaecati sint ab animi maxime deleniti ipsa repudiandae rem hic
					nulla. Explicabo quo deserunt ipsam.
				</p>
			</div>
		</div>
	);
};

export default CourseCard;
