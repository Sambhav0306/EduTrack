import classes from '../styles/About.module.css'; 
import fb from "../assets/facebook-ico.svg";
import tt from "../assets/twitter-ico.svg";
const About = () => {
	return <div className={classes.about}>
		<div className={classes.info}>
			<h3>Who are we</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum velit quam veritatis doloribus non impedit fuga error consectetur nobis, quo tempora repellat magni unde ea tenetur et! Harum, aperiam blanditiis ullam quasi sed minima atque dolorem accusamus optio earum dolore animi? Eius aliquid modi id suscipit reiciendis, veritatis adipisci.</p>
		</div>
		<div className={classes.team}>
			<div className={classes.rs}>
				<div className={classes.image}>{/* <img src=""/> */}</div>
				<div className={classes.content}>Radheshyam Soni</div><div className={classes.role}>Role, in a sentence</div>
				<div className={classes.socialmedia}>
						<a href="#" target="_blank">
							<img src={fb} alt="" />
						</a>
						<a href="#" target="_blank">
							<img src={tt} alt="" />
						</a>
					</div>
			</div>
			<div className={classes.sv}>
				<div className={classes.image}>{/* <img src=""/> */}</div>
				<div className={classes.content}>Shaurya Verma</div><div className={classes.role}>Role, in a sentence</div>
				<div className={classes.socialmedia}>
						<a href="#" target="_blank">
							<img src={fb} alt="" />
						</a>
						<a href="#" target="_blank">
							<img src={tt} alt="" />
						</a>
					</div>
			</div>
			<div className={classes.sm}>
				<div className={classes.image}>{/* <img src=""/> */}</div>
				<div className={classes.content}>Sambhav Mehta</div><div className={classes.role}>Role, in a sentence</div>
				<div className={classes.socialmedia}>
						<a href="#" target="_blank">
							<img src={fb} alt="" />
						</a>
						<a href="#" target="_blank">
							<img src={tt} alt="" />
						</a>
					</div>
			</div>
			<div className={classes.ty}>
				<div className={classes.image}>{/* <img src=""/> */}</div>
				<div className={classes.content}>Tarun</div><div className={classes.role}>Role, in a sentence</div>
				<div className={classes.socialmedia}>
						<a href="#" target="_blank">
							<img src={fb} alt="" />
						</a>
						<a href="#" target="_blank">
							<img src={tt} alt="" />
						</a>
					</div>
			</div>
		</div>
	</div>;
};

export default About;
