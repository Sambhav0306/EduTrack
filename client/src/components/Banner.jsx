import React, { useState, useEffect } from "react";
import classes from "./Banner.module.css";

const Banner = () => {
  const [state, setState] = useState({
    texts: ["For", "By"],
    text: "",
    step: 0,
    typed: true,
    delay: 100,
    nextText: "",
  });

  let TIMEOUT;

  useEffect(() => {
    const data = { ...state };
    defaultHandler(data);

    return () => {
      window.clearTimeout(TIMEOUT);
    };
  }, [state]);

  const defaultHandler = (data) => {
    let { texts, text, step, typed } = data;

    if (typed) {
      typedHandler(data);
    }
    if (!typed) {
      backspaceHandler(data);
    }
  };

  const typedHandler = (data) => {
    const { texts, step, typed, delay } = data;
    let { text, nextText } = data;

    text = text + texts[step].slice(text.length, text.length + 1);
    nextText = texts[step].slice(text.length + 1);

    const eachEndOfTyped = texts[step] === text;

    if (text) {
      TIMEOUT = setTimeout(() => {
        setState({
          ...state,
          text,
          nextText,
          delay: 32 + Math.round(Math.random() * (eachEndOfTyped ? 2500 : 100)),
          typed: eachEndOfTyped ? !typed : typed,
        });
      }, delay);
    } else {
      setState({
        ...state,
        typed: !typed,
        nextStep: step + 1,
      });
    }
  };

  const backspaceHandler = (data) => {
    const { delay, typed, step, texts } = data;
    let { text, nextText } = data;

    text = text.slice(0, -1);

    if (!text) {
      setState({
        ...state,
        typed: !typed,
        step: (step + 1) % texts.length,
        text: "",
      });
    }

    const switchMode = text ? typed : !typed;
    const noTextLeft = !text ? step + 1 : step;

    TIMEOUT = setTimeout(() => {
      setState({
        ...state,
        text,
        delay: 32 + Math.round(Math.random() * 40),
        typed: switchMode,
        step: noTextLeft % texts.length,
      });
    }, delay);
  };

  return (
    <div className={classes.banner}>
      <div className={classes['typed-text-container']}>
        <div className={classes['typed-text']}>
          {state.text} 
          <span className={classes["blinking-cursor"]}>|</span> <br></br>the Students
        </div>
      </div>
      <div className={classes["slogan"]}>
        Your Data-Driven Academic Companion<br></br> and Progress Tracker
      </div>
      <div className={classes["button-container"]}>
        <button type="about" className={classes["text-animation"]}>
          Start Tracking
        </button>
      </div>
    </div>
  );
};

export default Banner;
