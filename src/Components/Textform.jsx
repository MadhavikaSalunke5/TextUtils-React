import React, { useState } from "react";

function Textform(props) {
  const [text, setText] = useState("Enter Text Here");

  const [myStyling, setmyStyling] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btn, setbtn] = useState("Enable Dark Mode");

  const toggleChange = () => {
    if (myStyling.color === "black") {
      setmyStyling({
        color: "white",
        backgroundColor: "black",
      });
      setbtn("Enable Light Mode");
    } else {
      setmyStyling({
        color: "black",
        backgroundColor: "white",
      });
      setbtn("Enable Dark Mode");
    }
  };

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleCapitalizeEachWord = () => {
    let newText = text
      .split(" ")
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");
    setText(newText);
  };

  const handleCapitalizeFirstLetter = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
  };

  const handleReverseText = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };

  const handleRemoveSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText.trim());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to Clipboard!");
  };

  const handleClear = () => {
    setText("");
  };

  const handleonChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={myStyling} className="min-vh-100">
      <div className="container py-4">
        {/* Heading with Dark Mode Button aligned right */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1>{props.heading}</h1>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={toggleChange}
          >
            {btn}
          </button>
        </div>

        {/* Textarea Section */}
        <div className="input-group">
          <span className="input-group-text">Enter the Text Inside here</span>
          <textarea
            className="form-control"
            rows="10"
            value={text}
            onChange={handleonChange}
          ></textarea>
        </div>

        {/* Buttons Section */}
        <div className="mt-3">
          <button
            type="button"
            className="btn btn-primary btn-sm mx-2 my-2"
            onClick={handleUpperCase}
          >
            Convert to UPPERCASE
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm mx-2 my-2"
            onClick={handleLowerCase}
          >
            Convert to lowercase
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm mx-2 my-2"
            onClick={handleCapitalizeEachWord}
          >
            Capitalize Each Word
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm mx-2 my-2"
            onClick={handleCapitalizeFirstLetter}
          >
            Capitalize First Letter
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm mx-2 my-2"
            onClick={handleReverseText}
          >
            Reverse Text
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm mx-2 my-2"
            onClick={handleRemoveSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            type="button"
            className="btn btn-success btn-sm mx-2 my-2"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm mx-2 my-2"
            onClick={handleClear}
          >
            Clear the Screen
          </button>
        </div>

        {/* Summary Section */}
        <div className="container my-4 p-3 border rounded shadow-sm" style={myStyling}>
          <h2>Your Text Summary</h2>
          <p>
            {text.split(/\s+/).filter((element) => element.length !== 0).length}{" "}
            words and {text.length} Characters
          </p>
          <p>
            {0.008 *
              text.split(/\s+/).filter((element) => element.length !== 0)
                .length}{" "}
            Minutes to Read
          </p>
          <h3>Preview</h3>
          <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
      </div>
    </div>
  );
}

export default Textform;

