import React, { useState, useEffect } from "react";
import "./App.css"; // Import the custom CSS styles
import { questions } from "./Questions/questions";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Load answers from local storage on first render
  useEffect(() => {
    const savedAnswers = JSON.parse(localStorage.getItem("examAnswers"));
    if (savedAnswers) setAnswers(savedAnswers);
  }, []);

  // Save answers to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("examAnswers", JSON.stringify(answers));
  }, [answers]);

  const handleOptionChange = (optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestionIndex].id]: optionIndex,
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const calculateResults = () => {
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    questions.forEach((q) => {
      if (answers[q.id] === q.correct) {
        correctAnswers++;
      } else {
        incorrectAnswers++;
      }
    });

    return { correctAnswers, incorrectAnswers };
  };

  const { correctAnswers, incorrectAnswers } = submitted
    ? calculateResults()
    : { correctAnswers: 0, incorrectAnswers: 0 };

  return (
    <div className="app-container">
      <h1 className="header">Ascentia Java Exam</h1>

      {!submitted ? (
        <>
          <div className="card question-card">
            <h2 className="question">
              {questions[currentQuestionIndex].question}
            </h2>
            <div className="options">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div key={index} className="option">
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name={`question-${currentQuestionIndex}`}
                    checked={
                      answers[questions[currentQuestionIndex].id] === index
                    }
                    onChange={() => handleOptionChange(index)}
                  />
                  <label htmlFor={`option-${index}`} className="option-label">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="navigation-buttons">
            <button
              className="btn btn-secondary"
              onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            {currentQuestionIndex === questions.length - 1 ? (
              <button className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
              >
                Next
              </button>
            )}
          </div>
        </>
      ) : (
        <div className="results-card">
          <h2 className="results-header">Results</h2>
          <p className="results-text">
            Correct Answers: <span className="correct">{correctAnswers}</span>
          </p>
          <p className="results-text">
            Incorrect Answers:{" "}
            <span className="incorrect">{incorrectAnswers}</span>
          </p>

          {/* Show questions with user's answers */}
          <div className="review-section">
            {questions.map((q, index) => (
              <div key={q.id} className="review-card">
                <h3 className="review-question">{q.question}</h3>
                <p className="review-answer">
                  Your Answer:{" "}
                  <span
                    className={
                      answers[q.id] === q.correct
                        ? "review-correct"
                        : "review-incorrect"
                    }
                  >
                    {q.options[answers[q.id]] || "Not Answered"}
                  </span>
                </p>
                <p className="review-answer">
                  Correct Answer:{" "}
                  <span className="review-correct">{q.options[q.correct]}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
