import React, { useEffect, useState } from "react";
import Question from "./Question";

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [results, setresults] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((res) => res.json())
      .then(({ results }) => {
        setQuestions(
          results.map((e, index) => {
            return {
              id: index + 1,
              question: e.question,
              answer: e.correct_answer,
              options: [...e.incorrect_answers, e.correct_answer].sort(),
            };
          })
        );
      });
  }, []);

  useEffect(() => {
    if (questions.length) {
      setAnswers(
        questions.map((e) => {
          return {
            id: e.id,
            answer: "",
          };
        })
      );
    }
  }, [questions]);

  const handleCheck = () => {
    const res = answers.map((e) => {
      const q = questions.find((p) => p.id === e.id);
      return {
        id: e.id,
        status: q.answer === e.answer ? "correct" : "incorrect",
      };
    });
    setresults(res);
  };

  return (
    <div className="flex justify-center items-center lg:h-screen relative overflow-x-hidden bg-[#F5F7FB]">
      <div className="max-w-4xl flex flex-col gap-3 ">
        {questions.map((q, index) => {
          return (
            <Question
              key={index}
              result={results.find((e) => e.id === q.id)}
              question={q}
              answer={answers.find((e) => e.id === q.id)?.answer}
              handleAnswer={(e) => {
                setAnswers(
                  answers.map((p) => (p.id === q.id ? { ...p, answer: e } : p))
                );
              }}
            />
          );
        })}
        {results.length ? (
          <div className="flex gap-4 items-center w-fit m-auto">
            <div className="text-lg">
              You Got {results?.filter((e) => e.status === "correct").length}
              /5 correct answers
            </div>
            <button
              onClick={() => {
                setresults([]);
                setAnswers(
                  questions.map((e) => {
                    return {
                      id: e.id,
                      answer: "",
                    };
                  })
                );
              }}
              className="bg-primary text-white px-8 pt-4 pb-5 text-2xl rounded-2xl mt-4 w-fit m-auto"
            >
              Play again
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              handleCheck();
            }}
            className="bg-primary text-xl w-full lg:w-1/5 text-white px-8 pt-4 pb-5 rounded-2xl "
          >
            Check answers
          </button>
        )}
      </div>
    </div>
  );
}
