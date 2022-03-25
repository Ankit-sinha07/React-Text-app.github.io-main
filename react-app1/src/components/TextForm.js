import React, {useState} from 'react'


export default function TextForm(props) {
    
    const handleUpClick =()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Changed to UpperCase", "success")
    }

    const handleLoClick =()=>{
      let newText = text.toLowerCase()
      setText(newText)
      props.showAlert("Changed to LowerCase", "success")
    }

    const handleClearClick =()=>{
      setText("")
      props.showAlert("Text-Box has been Cleared", "success")
  }

    const handleOnChange =(event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper case</button>
    <button className="btn btn-success mx-2" onClick={handleLoClick}>Convert to Lower case</button>
    <button className="btn btn-danger" onClick={handleClearClick}>Clear</button>
    </div>

    <div className="container my-2">
          <h1>Your Text Summary</h1>
          <p>{text.split(" ").length} words and {text.length} Charaters</p>
          <p>{0.008 *  text.split(" ").length} Minutes read</p>

          <h2>Preview</h2>
          <p>{text}</p>
    </div>
    </>
  )
}

