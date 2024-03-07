import React , {useState} from "react";

export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log('UpperCase was Clicked')
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success");
    }
    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Clear text successfuly","success");
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copy text successfuly","success");
    }
    const handleExtraSpaces = ()=>{
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "))  
       props.showAlert("Removed extra spaces","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
   const [text, setText] = useState('');

    return (
    <>
    <div>
        <div className="container" style = {{color: props.mode === 'dark'? 'white': 'black'}}>
          <h2>{props.heading}</h2>
        </div>
        <div className="mb-3" style = {{color: props.mode === 'dark'? 'white': 'black'}}>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange = {handleOnChange}
            style = {{backgroundColor:props.mode==='dark'?'grey':'white',
            color: props.mode === 'dark'?'white':'black'}}
            
          ></textarea>
        </div>
      
        <button className="btn btn-primary mx-1" onClick = {handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick = {handleDownClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick = {handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick = {handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick = {handleExtraSpaces}>Remove Extra Space</button>
        
     
    </div>
      <div className="container my-3" style = {{color: props.mode === 'dark'? 'white': 'black'}}>
        <h1>Text Summary</h1>
        <p>{text.split("/\s+/").filter((element)=>{return element.length !== 0}).length} words {text.length} characters</p>
        <h1>Preview</h1>
        <p>{text.length>0 ? text:"Enter text to preview it here"}</p>
      </div>
    </>
  );
}
