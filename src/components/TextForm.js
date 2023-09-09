import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLowClick = ()=>{
    let lowText = text.toLowerCase();
    setText(lowText)
  }

  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
  }

  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleOnChange = (event)=>{
    console.log("On Change");
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#202020'}}>
    <h1>{props.heading}</h1>
    <div className="container">
    <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'#202020'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#202020'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text to preview"}</p>
    </div>
    </>
  )
}
