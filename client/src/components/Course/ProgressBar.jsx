import classes from "./ProgressBar.module.css";

const ProgressBar = (props) => {
	return (
		<div className={`${classes.container} ${props.className}`}>
			<div className={classes.progress}>
				<span>DIFFICULTY</span>
				<span>59/71</span>
			</div>
		</div>
	);
};

export default ProgressBar;
