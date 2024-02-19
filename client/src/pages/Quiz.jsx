import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import Modal from 'react-modal';
import '../styles/Quiz.css';
const Quiz = ({ onQuizCompleted }) => {
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
  });
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  // const history = useHistory();
  const questions = [
    {
      question: "What data structure would you mostly likely see in non recursive implementation of a recursive algorithm?",
      options: ["a) Stack", "b) Linked List", "c) Tree", "d) Queue"],
      correctAnswer: "a",
    },
    {
      question: "Which of the following points is/are not true about Linked List data structure when it is compared with an array?",
      options: ["a) Random access is not allowed in a typical implementation of Linked Lists", "b) Access of elements in linked list takes less time than compared to arrays", "c) Arrays have better cache locality that can make them better in terms of performance", "d) It is easy to insert and delete elements in Linked List"],
      correctAnswer: "b",
    },
    {
      question: "How is a single channel shared by multiple signals in a computer network?",
      options: ["a) multiplexing", "b) phase modulation", "c) analog modulation", "d) digital modulation"],
      correctAnswer: "a",
    },
    {
      question: "Which layer does the data link layer take packets from and encapsulate them into frames for transmission?",
      options: ["a) transport layer", "b) application layer", "c) network layer", "d) physical layer"],
      correctAnswer: "c",
    },
    {
      question: "What is a database?",
      options: ["a) Organized collection of information that cannot be accessed, updated, and managed", "b) Collection of data or information without organizing", "c) Organized collection of data or information that can be accessed, updated, and managed", "d) Organized collection of data that cannot be updated"],
      correctAnswer: "c",
    },
    {
      question: "What does an RDBMS consist of?",
      options: ["a) Collection of Records", "b) Collection of Keys", "c) Collection of Tables", "d) Collection of Fields"],
      correctAnswer: "c",
    },
    {
      question: "What is Software Engineering?",
      options: ["a) Designing a software", "b) Testing a software", "c) Application of engineering principles to the design a software", "d) None of the above"],
      correctAnswer: "c",
    },
    {
      question: "Define Agile scrum methodology.",
      options: ["a) project management that emphasizes incremental progress", "b) project management that emphasizes decremental progress", "c) project management that emphasizes neutral progress", "d) project management that emphasizes no progress"],
      correctAnswer: "a",
    },
    {
      question: "Which one of the following is not true?",
      options: ["a) kernel remains in the memory during the entire computer session", "b) kernel is made of various modules which can not be loaded in running operating system", "c) kernel is the first part of the operating system to load into memory during booting", "d) kernel is the program that constitutes the central core of the operating system"],
      correctAnswer: "b",
    },
    {
      question: "In operating system, each process has its own __________",
      options: ["a) open files", "b) pending alarms, signals, and signal handlers", "c) address space and global variables", "d) all of the mentioned"],
      correctAnswer: "d",
    },
  ];

  const handleAnswerSelection = (questionNumber, selectedOption) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionNumber]: selectedOption,
    }));
  };

  const handleQuizSubmit = (event) => {
    event.preventDefault();
    // Calculate and set the score based on correct answers
    const newScore = questions.reduce((acc, question, index) => {
      if (selectedAnswers[`q${index + 1}`] === question.correctAnswer) {
        return acc + 1;
      }
      return acc;
    }, 0);
    setScore(newScore);

    // Show the score modal
    setShowScoreModal(true);
    setQuizSubmitted(true);
  };

  const handleScoreModalClose = () => {
    setShowScoreModal(false);
    // Trigger the callback to inform the parent component
    onQuizCompleted();
    // history.replace("/");
  };
  return (
    <div className="quiz-container">
      {quizSubmitted ? (
        <div className="quiz-score-modal">
          <h2>Quiz Completed</h2>
          <p>Your Score: {score}</p>
          {/* <button onClick={handleScoreModalClose}>Close</button> */}
          <p>Click anywhere to continue</p>
        </div>
      ) : (
        <div>
          <h2 className="quiz-header">Start your quiz</h2>
          <form className="quiz-form" onSubmit={handleQuizSubmit}>
            {questions.map((question, index) => (
              <div key={`q${index + 1}`} className="quiz-question">
                <p>{`${index + 1}. ${question.question}`}</p>
                <div className="quiz-options">
                  {question.options.map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        name={`q${index + 1}`}
                        value={option[0]}
                        checked={selectedAnswers[`q${index + 1}`] === option[0]}
                        onChange={() => handleAnswerSelection(`q${index + 1}`, option[0])}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button type="submit" className="quiz-submit-button">Submit Quiz</button>
          </form>
        </div>
      )}

      {/* Score Modal */}
    </div>
  );
};
export default Quiz;