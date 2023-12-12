import classes from "./Topic.module.css";

const Topic = (props) => {
	return (
		<div className={classes.topic}>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid enim
				accusamus minus.
			</p>
			<a href="#" target="_blank">
				VIDEO
			</a>
			<select name="" id="">
				<option value="0">Pending</option>
				<option value="1">Finished</option>
				<option value="2">Revisit</option>
			</select>
		</div>
	);
};

export default Topic;
