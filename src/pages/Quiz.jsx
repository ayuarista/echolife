import React, { useState } from "react";
import { quizData } from "../data/QuizData";

const ErrorAlert = () => (
  <div role="alert" className="flex items-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span className="ml-3">Please select an option before proceeding.</span>
  </div>
);

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showError, setShowError] = useState(false);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
    setShowError(false); // Hide the error alert when an answer is selected
  };

  const handleNext = () => {
    if (!selectedAnswer) {
      setShowError(true);
      return;
    }

    const isCorrect = selectedAnswer === quizData[currentQuestion].correctAnswer;
    if (isCorrect) setCorrectAnswers(correctAnswers + 1);

    setAnswers([...answers, selectedAnswer]);

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setShowResults(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setShowResults(false);
    setCorrectAnswers(0);
    setAnswers([]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-300 p-4">
      <div className="w-full max-w-xl bg-base-100 p-6 rounded-lg shadow-lg text-left mb-10">
        {!showResults ? (
          <>
            <h2 className="text-2xl font-semibold mb-10 text-black dark:text-white">
              {quizData[currentQuestion].question}
            </h2>

            {showError && <ErrorAlert />} 

            <div className="space-y-4">
              {quizData[currentQuestion].options.map((option, index) => (
                <label key={index} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedAnswer === option}
                    onChange={handleAnswerChange}
                    className="hidden peer"
                  />
                  <div className="w-5 h-5 border border-gray-300 rounded-full flex justify-center items-center peer-checked:bg-green-700 peer-checked:border-green-700 dark:peer-checked:bg-hero dark:peer-checked:border-hero  animate">
                    <span className="w-3 h-3 bg-white dark:bg-base-100 rounded-full"></span>
                  </div>
                  <span className="font-semibold text-gray-800 dark:text-white peer-checked:text-green-700 dark:peer-checked:text-hero text-[13px] md:text-lg">
                    {option}
                  </span>
                </label>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="mt-6 bg-third dark:bg-primary text-white py-2 px-4 rounded-lg w-full"
            >
              {currentQuestion === quizData.length - 1 ? "Finish" : "Next"}
            </button>
          </>
        ) : (
          <div className="p-3">
            <p className="mb-6 text-xl mt-10 dark:text-white text-black">
              You got <b>{correctAnswers}</b> out of <b>{quizData.length}</b> correct!
            </p>

            <h3 className="text-xl font-semibold mb-2 dark:text-white text-black">Review Answers:</h3>
            <ul className="mb-6 space-y-4 dark:text-white text-black">
              {quizData.map((question, index) => (
                <li key={index} className="text-left">
                  <p>{question.question}</p>
                  <p>
                    Your answer:{" "}
                    <span
                      className={`font-semibold ${
                        answers[index] === question.correctAnswer
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {answers[index]}
                    </span>
                  </p>
                  {answers[index] !== question.correctAnswer && (
                    <p>Correct answer: {question.correctAnswer}</p>
                  )}
                </li>
              ))}
            </ul>
            <button
              onClick={handleRetry}
              className="bg-third dark:bg-hero text-white py-2 px-4 rounded-lg font-medium w-full"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
