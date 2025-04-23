import React, { useState } from 'react';

export default function Textform(props) {
  const [functionName, setFunctionName] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [text, setText] = useState("");
  const [RealEmail, setRealEmail] = useState("");

  const MsgAlert = (name) => {
    setFunctionName(name);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false); 
    }, 3000);
  };

  const toUpperCase = (event) => {
    event.preventDefault();
    let nEwText = text.toUpperCase();
    setText(nEwText);
    MsgAlert("To Upper Case");
  };

  const tolowerCase = (event) => {
    event.preventDefault();
    let nEwText = text.toLowerCase();
    setText(nEwText);
    MsgAlert("To Lower Case");
  };


  const TextReverser = (event) => {
    event.preventDefault();
    let nEwText = text.split('').reverse().join('');
    setText(nEwText);
    MsgAlert("Text Reversed");
  };


  const TextListner = (event) => {
    event.preventDefault();
    let newText = new SpeechSynthesisUtterance(text);
    newText.rate = 1;
    newText.pitch = 1;
    speechSynthesis.speak(newText);
    MsgAlert("Text Listened");
  };


  const clearText = (event) => {
    event.preventDefault();
    let nEwText = "";
    setText(nEwText);
    setRealEmail("");
    MsgAlert("Clear Text");
  };


  const copyText = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(text);
    MsgAlert("Copied to Clipboard");
  };
  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };


  const EmailExtractor = (event) => {
    event.preventDefault();
    let nEwtExt = text.trim();
    const emailRegex = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/g;
    const EmailFound = nEwtExt.match(emailRegex);
    MsgAlert("Email Extracted");

    if (EmailFound) {
      setRealEmail(EmailFound.join(', '));
    } else {
      setRealEmail("No Gmail address found");
    }
  };


  const handelOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      {showAlert && (
        <div className="alert alert-success" role="alert">
          {functionName}
        </div>
      )}

      <h1>{props.heading}</h1>
      <form>
        <div className="form-group">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handelOnChange}
          ></textarea>
        </div>
        <button className='btn btn-primary my-3 mx-1' onClick={toUpperCase}>Convert into UpperCase</button>
        <button className='btn btn-primary my-3 mx-1' onClick={tolowerCase}>Convert into lowerCase</button>
        <button id="clear" className='btn btn-primary my-3 mx-1' onClick={clearText}>Clear Text</button>
        <button className='btn btn-primary my-3 mx-1' onClick={EmailExtractor}>Email Extractor</button>
        <button className='btn btn-primary my-3 mx-1' onClick={TextReverser}>Text Reverser</button>
        <button className='btn btn-primary my-3 mx-1' onClick={TextListner}>Text Listener</button>
        <button className='btn btn-primary my-3 mx-1' onClick={copyText}>Copy to Clipboard</button>
      </form>

      <div className='container'>
        <h1>Your Para Summary</h1>
        <p>Words: {countWords(text)};and Characters: {text.length}</p>
        <p>{0.008 * text.split(/\s+/).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        <h2>All Emails in Para</h2>
        <p>{RealEmail}</p>
      </div>
    </>
  );
}
