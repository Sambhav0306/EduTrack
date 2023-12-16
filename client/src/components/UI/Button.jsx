import { Link } from "react-router-dom";
import classes from "./Button.module.css";

const Button = (props) => {
	if (props.link) {
		return (
			<Link to={props.link} className={classes.btn}>
				{props.children}
			</Link>
		);
	}

	return (
		<button className={classes.btn} type={props.type} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;
