import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/context";

const Main = () => {
  const {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  const handleEnter = async (e) => {
    if (e.key === "Enter") await onSent();
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <button
          onClick={() => {
            window.location.href =
              "https://alamtaufeeq854.github.io/react-projects/";
          }}
          className="home-btn">
          Back
        </button>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Buddy.</span>
              </p>
              <p>How can I help you today ?</p>
            </div>
            <div className="cards">
              <div
                onClick={() => {
                  const prompt =
                    "What's one place everyone should visit at least once ?";
                  setInput(prompt);
                  onSent(prompt);
                }}
                className="card">
                <p> What's one place everyone should visit at least once ? </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                onClick={() => {
                  const prompt =
                    "What's a skill you think everyone should learn ?";

                  setInput(prompt);
                  onSent(prompt);
                }}
                className="card">
                <p>What's a skill you think everyone should learn ?</p>
                <img src={assets.bulb_icon} alt="" />
              </div>

              <div
                onClick={() => {
                  const prompt =
                    "If you had to teach me one thing in five minutes, what would it be ?";
                  setInput(prompt);
                  onSent(prompt);
                }}
                className="card">
                <p>
                  {" "}
                  If you had to teach me one thing in five minutes, what would
                  it be ?
                </p>
                <img src={assets.message_icon} alt="" />
              </div>

              <div
                onClick={() => {
                  const prompt =
                    "Explain a programming concept in simple terms.";
                  setInput(prompt);
                  onSent(prompt);
                }}
                className="card">
                <p> Explain a programming concept in simple terms. </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
              placeholder="Enter a prompt"
              onKeyDown={handleEnter}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
