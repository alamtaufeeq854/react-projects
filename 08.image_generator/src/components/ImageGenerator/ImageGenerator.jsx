import React, { useRef, useState } from "react";
import "./ImageGenerator.css";
import defaultImage from "../Assets/default.jpg";

const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState("/");
  let inputRef = useRef(null);
  let msgRef = useRef(null);

  const imageGenerator = () => {
    if (inputRef.current.value.trim() === "") return;

    const prompt = encodeURIComponent(inputRef.current.value);

    setImageUrl(`https://image.pollinations.ai/prompt/${prompt}`);

    msgRef.current.textContent = ` It may takes a minute. Please wait !`;

    setTimeout(() => {
      msgRef.current.textContent = ``;
    }, 5500);
  };

  return (
    <div className="ai-image-generator">
      <div className="header">
        AI Image <span>Generator</span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img
            src={imageUrl === "/" ? defaultImage : imageUrl}
            alt=""
            onError={() => {
              alert("Image generation failed. Please try again.");
              setImageUrl("/");
            }}
          />
        </div>
      </div>

      <p ref={msgRef} className="msg"></p>

      <div className="search-box">
        <input
          ref={inputRef}
          type="text"
          placeholder="Describe Your Image"
          className="search-input"
        />
        <div className="generate-btn" onClick={imageGenerator}>
          Generate
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
