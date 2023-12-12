import classes from "./Status.module.css";
import Card from "../UI/Card";
import ProgressBar from "./ProgressBar";

const Status = (props) => {
	return (
		<Card className={`${props.className} ${classes.card}`}>
			<ProgressBar />
		</Card>
	);
};

export default Status;
