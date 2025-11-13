import React, { useState } from "react";
import { quizData } from "../data/QuizData";

const ErrorAlert = ({ children }) => (
  <div
    role="alert"
    className="
      flex items-center gap-2 rounded-xl border px-3 py-2 mb-4
      border-red-300 bg-red-50 text-red-700
      dark:border-red-800 dark:bg-red-900/30 dark:text-red-200
    "
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M12 9v4m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z" />
    </svg>
    <span className="text-sm">{children}</span>
  </div>
);

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showError, setShowError] = useState(false);

  const total = quizData.length;
  const progress = Math.round(((current) / total) * 100);

  const handleAnswerChange = (value) => {
    setSelected(value);
    setShowError(false);
  };

  const handleNext = () => {
    if (!selected) {
      setShowError(true);
      return;
    }

    const isCorrect = selected === quizData[current].correctAnswer;
    if (isCorrect) setCorrectCount((c) => c + 1);

    setAnswers((prev) => [...prev, selected]);

    if (current < total - 1) {
      setCurrent((i) => i + 1);
      setSelected("");
      setShowError(false);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (current === 0) return;
    // roll back one step (including correctness & stored answer)
    const prevAnswers = [...answers];
    const last = prevAnswers.pop();
    const wasCorrect = last === quizData[current - 1].correctAnswer;

    setAnswers(prevAnswers);
    if (wasCorrect) setCorrectCount((c) => c - 1);
    setCurrent((i) => i - 1);
    setSelected(last);
    setShowError(false);
  };

  const handleRetry = () => {
    setCurrent(0);
    setSelected("");
    setShowResults(false);
    setCorrectCount(0);
    setAnswers([]);
    setShowError(false);
  };

  return (
    <div className="min-h-screen mt-16 flex items-center justify-center p-4">
      <div
        className="
          w-full max-w-4xl rounded-2xl border shadow-sm
          border-slate-200/70 bg-base-100
          dark:border-slate-800 dark:bg-slate-900
        "
      >
        {/* Header / Progress */}
        {!showResults && (
          <div className="p-5 md:p-6 border-b border-slate-200/70 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Question {current + 1} / {total}
              </div>
              <div className="text-xs font-medium text-primary dark:text-hero">{progress}%</div>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-primary/70 dark:bg-hero/70 transition-[width] duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="p-5 md:p-6">
          {!showResults ? (
            <>
              <h2 className="font-semibold text-xl md:text-2xl tracking-tight text-slate-900 dark:text-slate-100">
                {quizData[current].question}
              </h2>

              {showError && <ErrorAlert>Please select an option before proceeding.</ErrorAlert>}

              <div className="mt-5 grid gap-3">
                {quizData[current].options.map((option, idx) => {
                  const id = `q${current}-opt${idx}`;
                  const checked = selected === option;
                  return (
                    <label
                      key={id}
                      htmlFor={id}
                      className={[
                        "group/opt relative cursor-pointer rounded-xl border p-4",
                        "border-slate-300/70 bg-white hover:bg-slate-50",
                        "dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800",
                        checked
                          ? "ring-2 ring-primary/50 dark:ring-hero/50 border-transparent"
                          : "",
                        "transition-colors"
                      ].join(" ")}
                    >
                      <input
                        id={id}
                        type="radio"
                        name={`answer-${current}`}
                        value={option}
                        checked={checked}
                        onChange={() => handleAnswerChange(option)}
                        className="peer absolute opacity-0 pointer-events-none"
                      />
                      <div className="flex items-start gap-3">
                        <span
                          className={[
                            "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                            "border border-slate-300 dark:border-slate-600",
                            "peer-checked:border-transparent peer-checked:bg-primary peer-checked:dark:bg-hero",
                            "transition-colors"
                          ].join(" ")}
                          aria-hidden="true"
                        >
                          <span className="h-2.5 w-2.5 rounded-full bg-white dark:bg-slate-900" />
                        </span>
                        <span
                          className={[
                            "text-sm md:text-[0.95rem] leading-relaxed",
                            checked
                              ? "font-medium text-primary dark:text-hero"
                              : "text-slate-700 dark:text-slate-300"
                          ].join(" ")}
                        >
                          {option}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>

              {/* Controls */}
              <div className="mt-6 flex items-center justify-between gap-3">
                <button
                  onClick={handlePrev}
                  disabled={current === 0}
                  className={[
                    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium",
                    "border border-slate-300 dark:border-slate-700",
                    "text-slate-700 dark:text-slate-200",
                    "hover:bg-slate-50 dark:hover:bg-slate-800",
                    "disabled:opacity-50 disabled:cursor-not-allowed"
                  ].join(" ")}
                >
                  Previous
                </button>

                <button
                  onClick={handleNext}
                  className="
                    inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold
                    text-white bg-primary dark:bg-hero
                    hover:opacity-90 transition
                  "
                >
                  {current === total - 1 ? "Finish" : "Next"}
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Results */}
              <div className="text-center">
                <h3 className="font-semibold text-2xl text-slate-900 dark:text-slate-100">
                  Your Results
                </h3>
                <p className="mt-2 text-slate-700 dark:text-slate-300">
                  You got <b>{correctCount}</b> out of <b>{total}</b> correct
                  {" "}(
                  {Math.round((correctCount / total) * 100)}
                  %)
                </p>

                {/* simple progress ring replacement */}
                <div className="mx-auto mt-5 h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary/80 dark:bg-hero/80"
                    style={{ width: `${Math.round((correctCount / total) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Review */}
              <div className="mt-8 space-y-5">
                <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100">Review Answers</h4>
                <ul className="space-y-4">
                  {quizData.map((q, i) => {
                    const isCorrect = answers[i] === q.correctAnswer;
                    return (
                      <li
                        key={i}
                        className={[
                          "rounded-xl border p-4",
                          "border-slate-200 dark:border-slate-800",
                          "bg-white dark:bg-slate-900"
                        ].join(" ")}
                      >
                        <p className="font-medium text-slate-900 dark:text-slate-100">{q.question}</p>
                        <p className="mt-1 text-sm">
                          Your answer:{" "}
                          <span className={isCorrect ? "text-green-600 dark:text-green-400 font-medium" : "text-red-600 dark:text-red-400 font-medium"}>
                            {answers[i] ?? "—"}
                          </span>
                        </p>
                        {!isCorrect && (
                          <p className="mt-0.5 text-sm text-slate-700 dark:text-slate-300">
                            Correct answer: <span className="font-medium">{q.correctAnswer}</span>
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Actions */}
              <div className="mt-8 flex items-center justify-between gap-3">
                <button
                  onClick={handleRetry}
                  className="
                    inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold
                    text-white bg-primary dark:bg-hero hover:opacity-90 transition
                  "
                >
                  Try Again
                </button>
                <button
                  onClick={() => {
                    // back to first question to review interactively
                    setShowResults(false);
                    setCurrent(0);
                    setSelected("");
                    setAnswers([]);
                    setCorrectCount(0);
                  }}
                  className="
                    inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium
                    border border-slate-300 dark:border-slate-700
                    text-slate-700 dark:text-slate-200
                    hover:bg-slate-50 dark:hover:bg-slate-800
                  "
                >
                  Restart Quiz
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;