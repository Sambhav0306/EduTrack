import { useState } from "react";
import Modal from "../components/UI/Modal";
import classes from "../styles/Login.module.css";
import Quiz from "./Quiz"; 

const Login = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const loginStateHandler = () => {
    event.preventDefault();
    setIsLogin((prevState) => !prevState);
    // Reset showQuiz when switching between login and sign-up
    setShowQuiz(false);
  };

  const signUpHandler = (event) => {
    event.preventDefault();
    // Perform sign-up logic here
    // After successful sign-up, show the quiz
    setShowQuiz(true);
  };
  const loginHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Modal onClose={props.onClose}>
      {showQuiz ? (
        <Quiz onQuizCompleted={() => setShowQuiz(false)} />
      ) : (
        <>
          <div className={classes.welcome}>
            <div className={classes["img-div"]} />
            <h2>Welcome to EduTrack</h2>
          </div>
          <form onSubmit={isLogin ? loginHandler : signUpHandler}>
            {!isLogin && (
              <div className={classes["form-control"]}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" />
              </div>
            )}
            <div className={classes["form-control"]}>
              <label htmlFor="email">E-Mail Address</label>
              <input type="email" id="email" />
            </div>
            <div className={classes["form-control"]}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className={classes["form-actions"]}>
              <div>
                <button
                  className={classes["btn-switch"]}
                  onClick={loginStateHandler}
                >
                  {isLogin ? "New User?" : "Existing User?"}
                </button>
              </div>
              <div>
                <button type="submit">
                  {isLogin ? "Login" : "Sign Up"}
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </Modal>
  );
};

export default Login;