import classes from "./CourseCard.module.css";

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
		</div>
	);
};

export default CourseCard;
