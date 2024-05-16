import React, { useState } from "react";

export default function TextForms(props) {
  const handleUpClick = () => {
    setText("This will update the form input !");
    setText(text.toUpperCase());
  };
  const handleLowerClick = () => {
    setText("This will update the form input !");
    setText(text.toLowerCase());
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1 className="mt-3">{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            id="
          text"
            rows="6"
            onChange={handleOnChange}
          ></textarea>
          <button
            onClick={handleUpClick}
            type="button"
            className="btn btn-info mt-3 mx-2"
          >
            Convert to Uppercase
          </button>
          <button
            onClick={handleLowerClick}
            type="button"
            className="btn btn-info mt-3 mx-2"
          >
            Convert to Lowercase
          </button>
        </div>
      </div>
      <div className="container">
        <h1>Your Text Summary </h1>
        <p>
          {
            text
              .trim()
              .split(/\s+/)
              .filter((word) => word !== "").length
          }{" "}
          Words - {text.length} characters
        </p>
        <h2>Time Take To Read The Above Text </h2>
        <p>{0.008 * text.trim().split(/\s+/).length}minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
