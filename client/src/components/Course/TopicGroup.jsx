import classes from "./TopicGroup.module.css";
import ProgressBar from "./ProgressBar";
import Card from "../UI/Card";
import Topic from "./Topic";

const TopicGroup = (props) => {
	return (
		<Card className={classes.card}>
			<ProgressBar className={classes.progress} />
			<div className={classes.topics}>
				<Topic />
				<Topic />
				<Topic />
			</div>
		</Card>
	);
};

export default TopicGroup;
