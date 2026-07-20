import { useRef, useState } from "react";
import data from "../../assets/data";
import "./Quiz.css";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let optionArray = [option1, option2, option3, option4];

  const check = (e, ans) => {
    if (lock) {
      return;
    }

    if (question.ans === ans) {
      e.target.classList.add("correct");
      setScore(score + 1);
    } else {
      e.target.classList.add("wrong");
      optionArray[question.ans - 1].current.classList.add("correct");
    }

    setLock(true);
  };

  const next = () => {
    if (lock) {
      if (data.length - 1 === index) {
        setResult(true);
        return;
      }

      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);

      optionArray.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };

  const restart = () => {
    setScore(0);
    setLock(false);
    setResult(false);
    setIndex(0);
    setQuestion(data[0]);
  };

  return (
    <>
      <button
        onClick={() => {
          window.location.href =
            "https://alamtaufeeq854.github.io/react-projects/";
        }}
        className="home-btn">
        Back
      </button>
      <div className="container">
        {result ? <h1>Your Result</h1> : <h1>Quiz App</h1>}
        <hr />
        {result ? (
          <>
            <button onClick={restart}>Restart</button>
            <h2>
              You Scored {score} out of {data.length}
            </h2>
          </>
        ) : (
          <>
            <h2>
              {index + 1}. {question.question}
            </h2>
            <ul>
              <li
                ref={option1}
                onClick={(e) => {
                  check(e, 1);
                }}>
                {question.option1}
              </li>
              <li
                ref={option2}
                onClick={(e) => {
                  check(e, 2);
                }}>
                {question.option2}
              </li>
              <li
                ref={option3}
                onClick={(e) => {
                  check(e, 3);
                }}>
                {question.option3}
              </li>
              <li
                ref={option4}
                onClick={(e) => {
                  check(e, 4);
                }}>
                {question.option4}
              </li>
            </ul>
            <button onClick={next}>Next</button>
            <div className="index">
              {index + 1} Of {data.length} Questions
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Quiz;
