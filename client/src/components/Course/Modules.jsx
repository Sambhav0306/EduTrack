import Card from "../UI/Card";
import classes from "./Modules.module.css";

const Modules = (props) => {
	return (
		<Card className={`${props.className} ${classes.card}`}>
			<h3 className={`${classes.module} ${classes.bg1}`}>Module 1</h3>
			<h3 className={`${classes.module} ${classes.bg2}`}>Module 1</h3>
			<h3 className={`${classes.module} ${classes.bg1}`}>Module 1</h3>
			<h3 className={`${classes.module} ${classes.bg2}`}>Module 1</h3>
			<h3 className={`${classes.module} ${classes.bg1}`}>Module 1</h3>
			<h3 className={`${classes.module} ${classes.bg2}`}>Module 1</h3>
			<h3 className={`${classes.module} ${classes.bg1}`}>Module 1</h3>
			<h3 className={`${classes.module} ${classes.bg2}`}>Module 1</h3>
		</Card>
	);
};

export default Modules;
