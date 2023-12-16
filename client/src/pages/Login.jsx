import { useState } from "react";
import Modal from "../components/UI/Modal";
import classes from "../styles/Login.module.css";

const Login = (props) => {
	const [isLogin, setIsLogin] = useState(false);

	const loginStateHandler = () => {
		setIsLogin((prevState) => !prevState);
	};

	const loginHandler = (event) => {
		event.preventDefault();
	};

	return (
		<Modal onClose={props.onClose}>
			{/* <div className={classes.login}> */}
			<div className={classes.welcome}>
				<div className={classes["img-div"]} />
				<h2>Welcome to EduTrack</h2>
			</div>
			<form onSubmit={loginHandler}>
				{/* <div className={classes["control-group"]}> */}
				{!isLogin && (
					<div className={classes["form-control"]}>
						<label htmlFor="name">Full Name</label>
						<input
							type="text"
							id="name"
							// value={firstNameValue}
							// onChange={firstNameChangeHandler}
							// onBlur={firstNameBlurHandler}
						/>
						{/* {firstNameHasError && (
							<p className="error-text">Please enter a first name.</p>
						)} */}
					</div>
				)}
				{/* </div> */}
				<div className={classes["form-control"]}>
					<label htmlFor="email">E-Mail Address</label>
					<input
						type="email"
						id="email"
						// value={emailValue}
						// onChange={emailChangeHandler}
						// onBlur={emailBlurHandler}
					/>
					{/* {emailHasError && (
						<p className="error-text">Please enter a valid email address.</p>
					)} */}
				</div>
				<div className={classes["form-control"]}>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						// value={emailValue}
						// onChange={emailChangeHandler}
						// onBlur={emailBlurHandler}
					/>
					{/* {emailHasError && (
						<p className="error-text">Please enter a valid email address.</p>
					)} */}
				</div>
				<div className={classes["form-actions"]}>
					<div>
						<button
							className={classes["btn-switch"]}
							onClick={loginStateHandler}
						>
							{isLogin ? "Existing User?" : "New User?"}
						</button>
					</div>
					<div>
						<button
							//  disabled={!formIsValid}
							type="submit"
						>
							{isLogin ? "Login" : "Sign Up"}
						</button>
					</div>
				</div>
			</form>
			{/* </div> */}
		</Modal>
	);
};

export default Login;
