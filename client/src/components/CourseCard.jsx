import classes from "./CourseCard.module.css";
import Button from "./UI/Button";
import ArrowRightIcon from "./Icons/ArrowRightIcon";

const CourseCard = (props) => {
	return (
		<div className={`${classes["course-card"]} ${props.className}`}>
			<div className={classes["course-img"]} />
			<div className={classes.info}>
				<h2>TITLE</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, nemo
					id maiores dolore nobis sapiente eos, facere beatae cum odio, suscipit
					accusantium quae quos voluptatem doloribus ex quo repudiandae fugit
					fugiat voluptates asperiores illo expedita? Labore, aliquid impedit?
					Accusantium, error.
				</p>
			</div>
			<div className={classes.actions}>
				<Button link={props.link}>
					<span>Go to course</span>
					<span className={classes.icon}>
						<ArrowRightIcon />
					</span>
				</Button>
			</div>
		</div>
	);
};

export default CourseCard;
