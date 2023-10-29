import classes from "./Banner.module.css";

const Banner = (props) => {
	return (
		<div className={`${classes.banner} ${props.className}`}>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est minima vel
				repudiandae, explicabo doloribus quam, ullam alias, assumenda obcaecati
				vitae eaque expedita ipsum a?
			</p>
		</div>
	);
};

export default Banner;
