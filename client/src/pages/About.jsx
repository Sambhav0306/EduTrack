import classes from '../styles/About.module.css'; 
const About = () => {
	return <div className={classes.about}>
		<div className={classes.info}>
			<h3>Who are we</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum velit quam veritatis doloribus non impedit fuga error consectetur nobis, quo tempora repellat magni unde ea tenetur et! Harum, aperiam blanditiis ullam quasi sed minima atque dolorem accusamus optio earum dolore animi? Eius aliquid modi id suscipit reiciendis, veritatis adipisci.</p>
		</div>
		<div className={classes.team}>
			<div className={classes.rs}>
				<div className={classes.image}>{/* <img src=""/> */}</div>
				<div className={classes.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aperiam?</div>
			</div>
			<div className={classes.sv}>
				<div className={classes.image}>{/* <img src=""/> */}</div>
				<div className={classes.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aperiam?</div>
			</div>
			<div className={classes.sm}>
				<div className={classes.image}>{/* <img src=""/> */}</div>
				<div className={classes.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aperiam?</div>
			</div>
			<div className={classes.ty}>
				<div className={classes.image}>{/* <img src=""/> */}</div>
				<div className={classes.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aperiam?</div>
			</div>
		</div>
	</div>;
};

export default About;
