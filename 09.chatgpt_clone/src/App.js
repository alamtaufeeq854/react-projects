import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import home from "./assets/home.svg";
import ReactMarkdown from "react-markdown";
import saved from "./assets/bookmark.svg";
import msg from "./assets/message.svg";
import addBtn from "./assets/add-30.png";
import sendBtn from "./assets/send.svg";
import rocket from "./assets/rocket.svg";
import user from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";
import { useEffect, useRef, useState } from "react";
import runChat from "./gemini.js";

function App() {
  const msgEnd = useRef(null);

  const [input, setInput] = useState("");
  const [message, setmessage] = useState([
    {
      text: "Hii, how are you ?",
      isBot: true,
    },
  ]);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [message]);

  const handlSend = async () => {
    const text = input;
    setInput("");

    setmessage([...message, { text, isBot: false }]);
    const res = await runChat(text);
    setmessage([
      ...message,
      { text, isBot: false },
      {
        text: res,
        isBot: true,
      },
    ]);
  };

  const handleEnter = async (e) => {
    if (e.key === "Enter") await handlSend();
  };

  const handleQuery = async (e) => {
    const text = e.target.value;
    setInput("");

    setmessage([...message, { text, isBot: false }]);
    const res = await runChat(text);
    setmessage([
      ...message,
      { text, isBot: false },
      {
        text: res,
        isBot: true,
      },
    ]);
  };

  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button
            className="midBtn"
            onClick={() => {
              window.location.reload();
            }}>
            <img src={addBtn} alt="new Chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSide-bottom">
            <button
              onClick={handleQuery}
              value={"what is programming ?"}
              className="query">
              <img src={msg} alt="Query" />
              what is programming ?
            </button>
            <button
              onClick={handleQuery}
              value={"How To Use API"}
              className="query">
              <img src={msg} alt="Query" />
              How To Use API
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="Home" className="listItemsImg" /> Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listItemsImg" /> Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="Upgrade" className="listItemsImg" /> Upgrade
            to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <button
            onClick={() => {
              window.location.href =
                "https://alamtaufeeq854.github.io/react-projects/";
            }}
            className="home-btn">
            Back
          </button>
          <div className="chat">
            <img className="chatimg" src={user} alt="" />
            <p className="txt"> </p>
          </div>

          {message.map((message, i) => (
            <div key={i} className={message.isBot ? "chat bot" : "chat"}>
              <img
                className="chatimg"
                src={message.isBot ? gptImgLogo : user}
                alt=""
              />
              <p className="txt">
                <ReactMarkdown>{message.text}</ReactMarkdown>
              </p>
            </div>
          ))}

          <div ref={msgEnd} />
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              type="text"
              placeholder="Send a message"
              onKeyDown={handleEnter}
            />

            <button
              className="send"
              onClick={() => {
                handlSend();
              }}>
              <img src={sendBtn} alt="send" />
            </button>
          </div>

          <p>ChatGPT can make mistakes.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
